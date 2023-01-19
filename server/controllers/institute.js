const { Institute } = require("../models/institute");
const { User } = require("../models/user");
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


async function addUser (req, res) {
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
}


module.exports = {  
  getInstitute,   
  postInstitute,
  addUser
}