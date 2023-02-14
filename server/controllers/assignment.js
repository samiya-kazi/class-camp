const { Assignment } = require("../models/assignment");
const { AssignmentMark } = require("../models/assignmentMarks");
const { User } = require("../models/user");

async function getAssignment (req, res) {
  try {
   const { id } = req.params;
   const assignment = await Assignment.findById(id);
   res.status(200).send(assignment);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function getAssignmentsInClass (req, res) {
  try {
    const { id } = req.params;
    const assignments = await Assignment.find({classId: id});
    res.status(200).send(assignments);
   } catch (error) {
     res.status(500).send(error);
     console.log(error);
   }
}


async function postAssignment (req, res) {
  try {
   const { classId, name, description, totalMarks, dueDate } = req.body;
   const postedBy = req.user;
   const postedDate = new Date();
   const assignment = await Assignment.create({ classId, name, description, totalMarks, postedBy, dueDate, postedDate });
   res.status(201).send(assignment);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function postAssignmentMark (req, res) {
  try {
   const { assignment, student, marksObtained } = req.body;
   const postedDate = new Date();

   const checkAssignment = new Assignment(assignment);
   const validateAssignment = checkAssignment.validateSync();

   const checkStudent = new User(student);
   const validateStudent = checkStudent.validateSync();

   if (!validateStudent && !validateAssignment && marksObtained) {
    const { dueDate } = assignment;
    const status = 'pass';
    if (dueDate < postedDate) status = 'late';
    const mark = await AssignmentMark.create({assignment, student, marksObtained, postedDate, status});
    res.status(201).send(mark);
   } else {
    res.status(400).send('Incorrect information.');
   }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}

module.exports = {
  getAssignment,
  getAssignmentsInClass,
  postAssignment,
  postAssignmentMark
}