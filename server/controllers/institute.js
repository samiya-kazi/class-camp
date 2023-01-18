const { Institute } = require("../models/institute");
const { User } = require("../models/user");
const bcrypt = require('bcryptjs');

async function getInstitute (req, res) {
  try {
    const { id } = req.params;
    const institute = await Institute.findById(id);
    res.status(200).send(institute);
  } catch (error) {
    console.log(error);
  }
}


async function postInstitute (req, res) {
  try {
    const { name, type, firstName, lastName, email, password } = req.body;
    const checkUser = await User.find({email});
    if (checkUser.length) {
      res.status(401).send('An account with this email already exists.');
    } else {
      const newInstitute = await Institute.create({name, type});

      const salt = bcrypt.genSaltSync();
      const encryptedPass = bcrypt.hashSync(password, salt);
      const newAdmin = await User.create({firstName, lastName, email, password: encryptedPass, type: 'admin', institute: newInstitute});

      const projection = {firstName: 1, lastName: 1, email: 1, type: 1, institute: 1};
      const admin = await User.findById(newAdmin._id, projection);
      
      res.status(201).send({institute: newInstitute, admin: admin});
    }
  } catch (error) {
    console.log(error);
  }
}


module.exports = { getInstitute, postInstitute }