const { Class } = require("../models/class");

function checkIfUserExists (array, user) {
  const filteredArray = array.filter(u => u.email === user.email);
  return filteredArray.length ? true : false;
}


async function checkIfStudentInClass (classId, student) {
  try {
    const clss = await Class.findById(classId);
    return checkIfUserExists(clss.students, student);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { checkIfUserExists, checkIfStudentInClass }