import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const userModel = mongoose.model("user", userSchema);
