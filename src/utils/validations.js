const Joi = require('joi');

exports.numberSchema = [
  Joi.number(),
  Joi.object()
  .keys({
    $gt: Joi.number(),
    $gte: Joi.number(),
    $lt: Joi.number(),
    $lte: Joi.number()
  })
  .or('$gt', '$gte', '$lt', '$lte')
];

exports.stringSchema = [
  Joi.string(),
  Joi.object().keys({
    $regex: Joi.string()
  })
];
