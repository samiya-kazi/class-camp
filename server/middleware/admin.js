const { InstituteUser } = require("../models/instituteUser");

async function adminMiddleware (req, res, next) {
  try {
    if (req.user) {
      const { institute } = req.body;
      const checkUserType = await InstituteUser.find({'user._id': req.user._id, 'institute._id': institute._id, type: 'admin'});
      if (checkUserType.length) {
        next();
      } else {
        res.status(403).send('You are not an admin for this institution.');
      }
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


module.exports = adminMiddleware;