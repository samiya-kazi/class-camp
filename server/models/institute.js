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
  img_url: {
    type: String,
    required: true,
    default: ''
  }
});

const Institute = model('Institute', instituteSchema);

module.exports = { instituteSchema, Institute }