import Joi from 'joi';

const phoneValidation = Joi.object({
  id: Joi.number().max(11).required(),
});
const phoneBrandValidation = Joi.object({
  brand: Joi.string().max(100).required(),
});
const phoneUpdateValidation = Joi.object({
  id: Joi.number().max(11).required(),
  name: Joi.string().max(100).optional(),
  price: Joi.string().max(100).optional(),
  link: Joi.string().max(100).optional(),
  image: Joi.string().max(100).optional(),
});
const phoneDeleteValidation = Joi.object({
  id: Joi.number().max(11).required(),
});
export {
  phoneValidation,
  phoneBrandValidation,
  phoneUpdateValidation,
  phoneDeleteValidation,
};
