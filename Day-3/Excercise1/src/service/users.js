import { userModel } from "../model/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
export const registerUser = async (userData) => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: hashedPassword,
    };
    await userModel.create(newUser);
    return "User Created";
  } catch (error) {
    return error.message;
  }
};
export const loginUser = async (data) => {
  try {
    const isUserExist = await userModel.findOne({ email: data.email });
    if (isUserExist && bcrypt.compare(isUserExist.password, data.password)) {
      const token = jwt.sign(data.email, process.env.ACCESS_TOKEN);
      return token;
    } else {
      throw new Error("Wrong Credentials");
    }
  } catch (error) {
    return error.message;
  }
};
