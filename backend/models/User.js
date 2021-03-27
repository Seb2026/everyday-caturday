const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  location: String,
  username: { type: String, unique: true },
  password: String,
});

module.exports = model("User", userSchema);
