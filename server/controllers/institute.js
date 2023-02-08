const { Institute } = require("../models/institute");
const { User } = require("../models/user");
const { InstituteUser } = require("../models/instituteUser");
const ObjectId = require('mongoose').Types.ObjectId;


async function getInstitute (req, res) {
  try {
    const institutes = await InstituteUser.find({ user: req.user });
    res.status(200).send(institutes);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function getInstituteById (req, res) {
  try {
    const { id } = req.params;
    const institute = await Institute.findById(id);
    res.status(200).send(institute);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function postInstitute (req, res) {
  try {
    const { name, type, description, img_url } = req.body;
    const newInstitute = await Institute.create({name, type, description, img_url});
    const newAdmin = await InstituteUser.create({user: req.user, type: 'admin', institute: newInstitute});

    res.status(201).send(newInstitute);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function editInstitute (req, res) {
  try {
    const { id } = req.params;
    const { name, type, description, img_url } = req.body;
    const newInstitute = await Institute.findByIdAndUpdate(id, {$set: {name, type, description, img_url}}, {new: true});
    await InstituteUser.updateMany({'institute._id': newInstitute._id}, {$set: {institute: newInstitute}})

    res.status(200).send(newInstitute);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}



async function addUser (req, res) {

  try {
    const { email, institute } = req.body;
    const { type } = req.params;
    const checkUser = await User.find({ email });
    if (!checkUser.length) {
      // A user with this email does not exist
      res.status(401).send('A user with this email does not exist.');
    } else {
      const user = checkUser[0];
      const checkPosition = await InstituteUser.find({'user.email': user.email, 'institute._id': institute._id});
      if (checkPosition.length) {
        // User is already in the institution
        res.status(401).send(`User is already in this institute as a ${checkPosition[0].type}.`);
      } else {
        const newPosition = await InstituteUser.create({ user: user, institute, type });
        res.status(201).send(newPosition);
      }
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }

}


async function getAllUsers (req, res) {
  try {
    const { id } = req.params;
    const checkAdmin = await InstituteUser.find({'user._id': req.user._id, 'institute._id': id});
    if (!checkAdmin.length) {
      res.status(401).send(`You are not authorized to view the users in this institute.`);
    } else {
      const users = await InstituteUser.find({'institute._id': id}, {user: 1, type: 1});
      res.status(200).send(users);
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function getUsersByType (req, res) {
  try {
    const { institute } = req.body;
    const { type } = req.params;
    const checkAdmin = await InstituteUser.find({'user._id': req.user._id, 'institute._id': institute._id});
    if (!checkAdmin.length) {
      res.status(401).send(`You are not authorized to view the users in this institute.`);
    } else {
      const users = await InstituteUser.find({'institute._id': institute._id, type}, {user: 1, type: 1});
      res.status(200).send(users);
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


module.exports = {  
  getInstitute,
  getInstituteById,   
  postInstitute,
  editInstitute,
  addUser,
  getAllUsers,
  getUsersByType
}