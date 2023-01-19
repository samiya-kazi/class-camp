const { Class } = require("../models/class");

async function postClass (req, res) {
  try {
    const { name, section, description, institute } = req.body;
    if (!name || !institute) {
      res.status(401).send('Invalid inputs.');
    } else {
      const clss = await Class.create({name, section, description, institute, teacher: [], students: []});
      res.status(201).send(clss);
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


module.exports = {
  postClass
}