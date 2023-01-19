function checkIfUserExists (array, user) {
  const filteredArray = array.filter(u => u.email === user.email);
  return filteredArray.length ? true : false;
}


module.exports = { checkIfUserExists }