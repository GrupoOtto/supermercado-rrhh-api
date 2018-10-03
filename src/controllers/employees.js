const Employee = require('../models/Employee');

exports.all = async (args) => Employee.find(args, '-password').populate('type');

exports.get = async _id => Employee.findById({ _id }, '-password').populate('type');

exports.update = async (_id, args) => {
  const employee = await Employee.findOne({ _id });
  employee.set(args);
  await employee.save();
  employee.password = undefined;
  return employee
}

exports.delete = async _id => Employee.deleteOne({ _id });

exports.create = async args => Employee.create(args);
