const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { sendData } = require('./Utils/data');
const { Users, AppRole } = require('./models/Users');
const {
  comparePassword,
  getJwtToken,
  hashPassword,
} = require('./Utils/hashingPassword');
// const jwt = require('jsonwebtoken');
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/My-Web').then(async () => {
  console.log('Connected to MongoDB');
  await sendData();
});
app.get('/getUser', async (req, res) => {
  const result = await Users.find();
  if (result) {
    res.send(result);
  }
});
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  var role = AppRole.USER;

  if (String(name).includes('admin')) {
    role = AppRole.ADMIN;
  }

  const user = await Users.create({
    name,
    email,
    hashedPassword: await hashPassword(password),
    role,
  });
  res.send(user);
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email });
  if (user === null) {
    res.sendStatus(404);
    return;
  }

  const validPassword = await comparePassword(password, user.hashedPassword);
  if (!validPassword) {
    res.sendStatus(404);
    return;
  }

  // user `A` logged in: A | 9:35:00 19/07/2023 | new-refresh-token
  // const refreshToken = 'new-refresh-token';

  const token = getJwtToken({
    sub: user._id,
    email: user.email,
    name: user.name,
    role: user.role,
  });

  res.send(token);

  // res.send({ token /*, refreshToken*/ });
});

// ! kiem tra token het han hay chua va gia han token moi
app.post('/verify', async (req, res) => {
  const { token } = req.body;
  try {
    const data = jwt.verify(token, 'abc123');
    res.send({ data });
  } catch (error) {
    res.send({ message: 'token expired' });
  }
});

// app.post('/refresh-token', async (req, res) => {
//   const { refreshToken } = req.body;

//   // db verify refresh token
//   // A | 9:35:00 19/07/2023 | new-refresh-token
//   // A | 9:40:00 19/07/2023 | new-refresh-token2

//   const result = true;
//   const newRefreshToken = 'new-refresh-token2';

//   const token = getJwtToken({
//     sub: user._id,
//     email: user.email,
//     name: user.name,
//   });

//   res.send({ token, newRefreshToken });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/**
 * User story
 * User A want to create new product, but his token expired
 *
 * - In case token valid:
 * 1. create product (token) -> 200
 *
 * - In case token expired:
 * 1. create product (token) -> 403
 * 2. refresh token -> token
 * 3. create product (token) -> 200
 */
