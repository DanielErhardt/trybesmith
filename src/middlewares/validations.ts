import Joi from 'joi';

export const userLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': '400|{#label} is required',
});

export const productSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.base': '422|{#label} must be a string',
    'string.min': '422|{#label} length must be at least 3 characters long',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.base': '422|{#label} must be a string',
    'string.min': '422|{#label} length must be at least 3 characters long',
  }),
}).messages({
  'any.required': '400|{#label} is required',
});
