import Joi from 'joi';

export const userLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': '400|{#label} is required',
});

export default {
  userLoginSchema,
};
