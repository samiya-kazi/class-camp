const { Assignment } = require("../models/assignment");

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


module.exports = {
  getAssignment,
  getAssignmentsInClass,
  postAssignment
}