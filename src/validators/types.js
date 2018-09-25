const Joi = require('joi');
const {
  stringSchema
} = require('../utils/validations');

exports.all = {
  query: {
    initials: stringSchema,
    description: stringSchema,
  }
};

exports.create = {
  body: {
    initials: Joi.string().required(),
    description: Joi.string().required()
  }
};

exports.get = {};

exports.update = {
  body: {
    initials: Joi.string().required(),
    description: Joi.string().required()
  }
};

exports.patch = {
  body: {
    initials: Joi.string(),
    description: Joi.string()
  }
};

exports.delete = {};
