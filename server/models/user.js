const { model, Schema } = require('mongoose');
const { instituteSchema } = require('./institute');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  institute: {
    type: instituteSchema,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = model('User', userSchema);

module.exports = { userSchema, User }