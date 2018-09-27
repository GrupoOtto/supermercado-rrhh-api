const Joi = require('joi');

exports.signIn = {
  body: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  }).unknown(false)
};
