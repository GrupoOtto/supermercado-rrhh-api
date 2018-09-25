const Employee = require('../models/Employee');

exports.signIn = async (email, password) => {
  const employee = await Employee.findOne({ email });

  if(!await employee.validPassword(password))
    throw Error("Invalid Password");

  return employee
};
