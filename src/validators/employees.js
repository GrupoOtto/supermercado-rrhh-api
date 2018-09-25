const Joi = require('joi');
const {
  numberSchema,
  stringSchema
} = require('../utils/validations');

exports.all = {
  query: {
    firstname: stringSchema,
    lastname: stringSchema,
    email: numberSchema,
    type: Joi.string()
      .hex()
  }
};

exports.create = {
  body: {
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    type: Joi.string()
      .hex()
      .required()
  }
};

exports.get = {};

exports.update = {
  body: {
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    type: Joi.string()
      .hex()
      .required()
  }
};

exports.patch = {
  body: {
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    type: Joi.string().hex()
  }
};

exports.delete = {};
