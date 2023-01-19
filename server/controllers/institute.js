const { Institute } = require("../models/institute");
const { User } = require("../models/user");
const bcrypt = require('bcryptjs');
const { InstituteUser } = require("../models/instituteUser");

async function getInstitute (req, res) {
  try {
    const institutes = await Institute.find({ user: req.user });
    res.status(200).send(institutes);
  } catch (error) {
    console.log(error);
  }
}


async function postInstitute (req, res) {
  try {
    const { name, type } = req.body;
    const newInstitute = await Institute.create({name, type});
    const newAdmin = await InstituteUser.create({user: req.user, type: 'admin', institute: newInstitute});

    res.status(201).send(newInstitute);
  } catch (error) {
    console.log(error);
  }
}


module.exports = { getInstitute, postInstitute }