const errors = require('http-errors');
const Employee = require('../models/Employee');


exports.signIn = async (email, password) => {
  const employee = await Employee.findOne({ email });

  if(!await employee.validPassword(password))
    throw errors(401, "Invalid Password");

  return employee
};
