import { schema } from "../schema/users.js";

export const validate = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const msg = error.message;
    res.send(msg);
  } else {
    next();
  }
};
