const { Class } = require("../models/class");
const { InstituteUser } = require("../models/instituteUser");
const { checkIfUserExists } = require('../util/helper')
const ObjectId = require('mongoose').Types.ObjectId;

async function postClass (req, res) {
  try {
    const { name, section, description, institute, img_url } = req.body;
    if (!name || !institute) {
      res.status(401).send('Invalid inputs.');
    } else {
      const clss = await Class.create({name, section, description, institute, img_url, teacher: [], students: []});
      res.status(201).send(clss);
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}

async function getInstituteClasses (req, res) {
  try {
    const { id } = req.params;
    const clss = await Class.find({'institute._id': id});
    res.status(200).send(clss);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function getUserClasses (req, res) {
  try {
    const { instituteId } = req.params;
    const clss = await Class.find({'institute._id': instituteId, 'students._id': {$in: req.user._id}});
    res.status(200).send(clss);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function deleteClass (req, res) {
  try {
    const { id } = req.params;
    const clss = await Class.findByIdAndDelete(id);
    res.status(200).send(clss);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function addUserToClass (req, res) {
  try {
    const { id } = req.params;
    const { user } = req.body;
    if (user) {
      const clss = await Class.findById(id);
      const userTypeCheck = await InstituteUser.find({'user._id': user._id, 'institute._id': clss.institute._id});

      if (userTypeCheck[0].type === 'teacher') {

        if (!checkIfUserExists(clss.teacher, user))
          await Class.findByIdAndUpdate(id, {$push: {teacher: user}});
        else res.send('Teacher is already in this class.');

      } else if (userTypeCheck[0].type === 'student') {

        if (!checkIfUserExists(clss.students, user)) {
          await Class.findByIdAndUpdate(id, {$push: {students: user}});
        }
        else res.send('Student is already in this class.');
        
      }

      const result = await Class.findById(id);
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function editClass () {
  try {
    const { id } = req.params;
    const { name, type, description, img_url } = req.body;
    const newClass = await Class.findByIdAndUpdate(id, {$set: {name, type, description, img_url}}, {new: true});
    res.status(200).send(newClass);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}

module.exports = {
  postClass,
  getInstituteClasses,
  getUserClasses,
  deleteClass,
  editClass,
  addUserToClass
}