const { Users } = require('../models/Users');
const { hashPassword } = require('./hashingPassword');
module.exports.sendData = async () => {
  try {
    const user = await Users.findOne();
    if (!user) {
      await Users.create(
        {
          name: 'John Doe',
          email: '1@gmail.com',
          hashedPassword: await hashPassword('123456789'),
          // password: '123456789',
        },
        {
          name: 'Jan Doe',
          email: '2@gmail.com',
          // password: '123456789abcd',
          hashedPassword: await hashPassword('12345678910'),
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
};
