import { dbService } from "../db.js";

const getAllUsers = async () => {
  const users = dbService.getUsers();
  return users;
};

export const userService = {
  getAllUsers,
};
