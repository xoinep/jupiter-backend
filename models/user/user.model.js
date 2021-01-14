const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phone: String,
  location: {
    city: String,
    district: String,
    province: String,
    block: String
  },
  verifyEmail: Boolean,
  avatar: String,
  detailInformation: {
    isRoot: Boolean,
    subAccounts: Array
  },
  createdAt: Date
});

module.exports = mongoose.model("User", userSchema);
