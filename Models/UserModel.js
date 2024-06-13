import mongoose from "mongoose";
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      // trim: true, //whitespace remove garxa
    },
    email: {
      type: String,
      required: true,
      unique: true, //1 email batw 1 jana matra register huna
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0, //initial boolean 0
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", UserSchema);
