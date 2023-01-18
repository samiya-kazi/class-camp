const { Institute } = require("../models/institute");

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
    const { name, type } = req.body;
    const result = await Institute.create({name, type})
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
  }
}


module.exports = { getInstitute, postInstitute }