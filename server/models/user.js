const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile_pic_url: {
    type: String,
    required: true,
    default: ''
  }
});

const User = model('User', userSchema);

module.exports = { userSchema, User }