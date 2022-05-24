const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: [3, "name is too short"],
      max: 28,
    },
    password: { type: String, required: true, min: [8, "to short"], max: 18 },
  },
  { timestamp: true }
);
const registerModal = mongoose.model("Users", userSchema);
module.exports = registerModal;