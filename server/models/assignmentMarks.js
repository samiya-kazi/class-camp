const { model, Schema } = require('mongoose');
const { assignmentSchema } = require('./assignment');
const { userSchema } = require('./user');

const assignmentMarkSchema = new Schema({
  assignment : {
    type: assignmentSchema,
    required: true
  },
  student: {
    type: userSchema,
    required: true
  },
  marksObtained: {
    type: Number,
    required: true 
  },
  postedDate: {
    type: Date,
    required: true,
    default: new Date()
  },
  status: {
    type: String,
    required: true,
    default: 'pass'
  },
  note: String
});

const AssignmentMark = model('AssignmentMark', assignmentMarkSchema);

module.exports = { assignmentMarkSchema, AssignmentMark }