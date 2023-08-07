const mongoose = require("mongoose");

const { Schema } = mongoose;

const usersSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  email: String,
  about: String,
  image: String,
  username: {
    type: String,
    unique: true,
  },
  password: String,
  date: { type: Date, default: Date.now },
});
const userModel = mongoose.model("user", usersSchema);
module.exports = userModel;
