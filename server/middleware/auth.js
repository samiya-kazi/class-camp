const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
require('dotenv').config();
const secret = process.env.JWT_SECRET;

async function authMiddleware (req, res, next) {
  try {
    const token = req.headers.get('Authorization');
    if (token) {
      const { _id } = jwt.verify(token, secret);
      const user = await User.findById(_id);
      if (user) {
        req.user = user;
        next(req, res);
      } else {
        res.status(401).send('Invalid token');
      }
    } else {
      res.status(401).send('You are not logged in.');
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


module.exports = authMiddleware;