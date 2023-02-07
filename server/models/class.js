const { model, Schema } = require('mongoose');
const { instituteSchema } = require('./institute');
const { userSchema } = require('./user');

const classSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  section: {
    type: String,
  },
  description: {
    type: String,
  },
  institute: {
    type: instituteSchema,
    required: true
  },
  teacher: {
    type: [userSchema],
    required: true
  },
  students: {
    type: [userSchema],
    required: true
  },
  img_url: {
    type: String,
    default: ''
  }
});

const Class = model('Class', classSchema);

module.exports = { classSchema, Class }