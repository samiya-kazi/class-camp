const { model, Schema } = require('mongoose');

const instituteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    default: ''
  },
  img_url: {
    type: String,
    default: ''
  }
});

const Institute = model('Institute', instituteSchema);

module.exports = { instituteSchema, Institute }