const { model, Schema } = require('mongoose');
const { instituteSchema } = require('./institute');
const { userSchema } = require('./user');

const instituteUserSchema = new Schema({
  institute: {
    type: instituteSchema,
    required: true
  },
  user: {
    type: userSchema,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

const InstituteUser = model('InstituteUser', instituteUserSchema);

module.exports = { instituteUserSchema, InstituteUser }