const { User } = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { InstituteUser } = require("../models/instituteUser");
const { Class } = require("../models/class");
require('dotenv').config();
const secret = process.env.JWT_SECRET;

async function register (req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const checkUser = await User.find({email});
    if (checkUser.length) {
      res.status(401).send('An account with this email already exists.');
    } else {
      const salt = bcrypt.genSaltSync();
      const encryptedPass = bcrypt.hashSync(password, salt);
      const newUser = await User.create({ firstName, lastName, email, password: encryptedPass });

      const projection = {firstName: 1, lastName: 1, email: 1};
      const user = await User.findById(newUser._id, projection);

      const token = jwt.sign({ _id: user._id}, secret);
      
      res.setHeader('Authorization', 'Bearer ' + token);
      res.status(201).send(user); 
    }
  } catch (error) {
    res.status(500).send(error)
    console.log(error);
  }
}


async function login (req, res) {
  try {
    const { email, password } = req.body;
    const checkUser = await User.find({ email });
    if (!checkUser.length) {
      res.status(401).send('There is no account with this email.');
    } else {
      const user = checkUser[0];
      if (bcrypt.compareSync(password, user.password)) {

        const projection = {firstName: 1, lastName: 1, email: 1};
        const userToSend = await User.findById(user._id, projection);

        const token = jwt.sign({ _id: user._id }, secret);
        res.setHeader('Authorization', 'Bearer ' + token);
        res.status(201).send(userToSend); 
      } else {
        res.status(401).send('Invalid password.');
      }
    }
  } catch (error) {
    res.status(500).send(error)
    console.log(error);
  }
}


async function editProfile (req, res) {
  try {
    const { _id } = req.user;
    const { firstName, lastName, email, profile_pic_url } = req.body;
    const result = await User.findByIdAndUpdate(_id, { firstName, lastName, email, profile_pic_url }, {new: true});
    await InstituteUser.updateMany({'user._id': _id}, {$set: {user: result}});
    await Class.updateMany({"teacher.user._id": _id}, {$set: {"teacher.$[user]" : result}}, {arrayFilters: [{"user._id": _id}], "multi": true});
    await Class.updateMany({"students.user._id": _id}, {$set: {"students.$[user]" : result}}, {arrayFilters: [{"user._id": _id}], "multi": true});
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error)
    console.log(error);
  }
}


module.exports = { register, login, editProfile }