const Joi = require('joi');
const {
  numberSchema,
  stringSchema
} = require('../utils/validations');

exports.all = {
  query: Joi.object({
    firstname: stringSchema,
    lastname: stringSchema,
    email: numberSchema,
    type: Joi.string()
      .hex()
  }).unknown(false)
};

exports.create = {
  body: Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    type: Joi.string()
      .hex()
      .required()
  }).unknown(false)
};

exports.get = {
  params: {
    id: Joi.string().hex()
  }
};

exports.update = {
  params: {
    id: Joi.string().hex()
  },
  body: Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    type: Joi.string()
      .hex()
      .required()
  }).unknown(false)
};

exports.patch = {
  params: {
    id: Joi.string().hex()
  },
  body: Joi.object({
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
    type: Joi.string().hex()
  }).unknown(false)
};

exports.delete = {
  params: {
    id: Joi.string().hex()
  }
};
