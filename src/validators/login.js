const Joi = require('joi');

exports.signIn = {
  body: {
    email: Joi.string().required(),
    password: Joi.string().required()
  }
};
