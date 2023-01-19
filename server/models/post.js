const { model, Schema } = require('mongoose');
const { userSchema } = require('./user');

const postSchema = new Schema({
  classId: {
    type: String,
    required: true
  },
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

const Post = model('Post', postSchema);

module.exports = { postSchema, Post }