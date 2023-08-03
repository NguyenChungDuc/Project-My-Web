const { default: mongoose, Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hashedPassword: String,
  role: { type: String, required: true },
  // password: String,
});

const AppRole = {
  ADMIN: 'admin',
  USER: 'user',
};

// userSchema.pre('save', async function (next) {
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password, salt);
//     this.password = hashedPassword;
//   } catch (error) {
//     next(error);
//   }
// });

module.exports.Users = mongoose.model('Users', userSchema);
module.exports.AppRole = AppRole;
