import Joi from "joi";
export const schema = Joi.object({
  author: Joi.string().required(),
  title: Joi.string().required(),
  country: Joi.string(),
  imageLink: Joi.string(),
  language: Joi.string(),
  link: Joi.string(),
  pages: Joi.number(),
  year: Joi.number(),
});
