const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  location: String,
  username: String,
  // googleId: String,
  password: String,
  // imageUrl: String,
  // roles: { type: String, enum: ['ADMIN', 'USER'], default: 'USER' }
});

module.exports = model("User", userSchema);
