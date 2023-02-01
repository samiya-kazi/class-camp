const { model, Schema } = require('mongoose');
const { userSchema } = require('./user');

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  postedDate: {
    type: Date,
    required: true,
    default: new Date()
  },
  postedBy: {
    type: userSchema,
    required: true
  }
});

const Comment = model('Comment', commentSchema);

module.exports = { commentSchema, Comment }