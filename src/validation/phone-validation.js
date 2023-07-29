import Joi from 'joi';

const phoneValidation = Joi.object({
  id: Joi.number().max(11).required(),
});
const phoneBrandValidation = Joi.object({
  brand: Joi.string().max(100).required(),
});

export { phoneValidation, phoneBrandValidation };
