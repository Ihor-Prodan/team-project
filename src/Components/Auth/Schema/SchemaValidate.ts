import Joi from 'joi';

export const schemaSignUp = Joi.object({
  fullName: Joi.string().required().messages({
    'string.empty': 'Enter your first name and last name',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Enter your email',
      'string.email': 'Enter your email',
    }),
  password: Joi.string()
    .min(8)
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .messages({
      'string.empty': 'Password must be at least 8 characters long',
      'string.min': 'Password must be at least 8 characters long',
      'string.pattern.base':
        'Password must include latin letters and/or numbers',
    }),
});

export const schemaLogin = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Enter your email',
      'string.email': 'Enter your email',
    }),
  password: Joi.string().required().messages({
    'string.empty': 'Password must be at least 8 characters long',
    'string.pattern.base': 'Password must include latin letters and/or numbers',
  }),
});
