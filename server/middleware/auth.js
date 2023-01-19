const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

async function authMiddleware (req, res, next) {
  try {
    const check = req.get('Authorization');
    if (check) {
      const token = check.split(' ')[1];
      const { _id } = jwt.verify(token, secret);
      const user = await User.findById(_id);
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).send('Invalid token');
      }
    } else {
      res.status(401).send('You are not logged in.');
    }
  } catch (error) {
    res.status(500).send(error.error.message);
    console.log(error);
  }
}


module.exports = authMiddleware;