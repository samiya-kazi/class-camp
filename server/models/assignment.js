const { model, Schema } = require('mongoose');
const { userSchema } = require('./user');

const assignmentSchema = new Schema({
  classId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  totalMarks: {
    type: Number,
    required: true 
  },
  postedDate: {
    type: Date,
    required: true,
    default: new Date()
  },
  dueDate: Date,
  postedBy: {
    type: userSchema,
    required: true
  },
});

const Assignment = model('Assignment', assignmentSchema);

module.exports = { assignmentSchema, Assignment }