const Type = require('../models/Type');

exports.all = async (args) => Type.find(args);

exports.create = async args => Type.create(args);

exports.get = async _id => Type.findById({ _id }).populate('type');

exports.update = async (_id, args) => Type.findOneAndUpdate({ _id }, args);

exports.delete = async _id => Type.deleteOne({ _id });
