const Joi = require('joi');
const {
  stringSchema
} = require('../utils/validations');

exports.all = {
  query: Joi.object({
    initials: stringSchema,
    description: stringSchema,
  }).unknown(false)
};

exports.create = {
  body: Joi.object({
    initials: Joi.string().required(),
    description: Joi.string().required()
  }).unknown(false)
};

exports.get = {};

exports.update = {
  body: Joi.object({
    initials: Joi.string().required(),
    description: Joi.string().required()
  }).unknown(false)
};

exports.patch = {
  body: Joi.object({
    initials: Joi.string(),
    description: Joi.string()
  }).unknown(false)
};

exports.delete = {};
