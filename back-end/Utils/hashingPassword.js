const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports.hashPassword = async (password) =>
  await bcrypt.hash(password, 10);

module.exports.comparePassword = async (password, hashedPassword) =>
  await bcrypt.compare(password, hashedPassword);

module.exports.getJwtToken = (data) =>
  jwt.sign(data, 'abc123', {
    expiresIn: 100000000,
  });

module.exports.verifyToken = (token) => jwt.verify(token, 'abc123');
