import { loginUser, registerUser } from "../service/users.js";

export const registerUserController = async (req, res) => {
  const userData = req.body;
  const newUserResponse = await registerUser(userData);
  res.send(newUserResponse);
};
export const loginUserController = async (req, res) => {
  const data = req.body;
  const loginResponse = await loginUser(data);
  res.send(loginResponse);
};
