import Joi from 'joi';

const REQUIRED_FIELD = '400|{#label} is required';
const STRING_BASE = '422|{#label} must be a string';
const STRING_MIN = '422|{#label} length must be at least {#limit} characters long';

export const userLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': REQUIRED_FIELD,
});

export const productSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.base': STRING_BASE,
    'string.min': STRING_MIN,
  }),
  amount: Joi.string().min(3).required().messages({
    'string.base': STRING_BASE,
    'string.min': STRING_MIN,
  }),
}).messages({
  'any.required': REQUIRED_FIELD,
});

export const userSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.base': STRING_BASE,
    'string.min': STRING_MIN,
  }),
  password: Joi.string().min(8).required().messages({
    'string.base': STRING_BASE,
    'string.min': STRING_MIN,
  }),
  classe: Joi.string().min(3).required().messages({
    'string.base': STRING_BASE,
    'string.min': STRING_MIN,
  }),
  level: Joi.number().min(1).required().messages({
    'number.base': '422|{#label} must be a number',
    'number.min': '422|{#label} must be greater than or equal to 1',
  }),
}).messages({
  'any.required': REQUIRED_FIELD,
});

export const orderSchema = Joi.object({
  productsIds: Joi.array().min(1).items(Joi.number()).required()
    .messages({
      'array.base': '422|{#label} must be an array',
      'array.items': '422|{#label} test',
      'array.min': '422|{#label} must include only numbers',
    }),
}).messages({
  'any.required': REQUIRED_FIELD,
});