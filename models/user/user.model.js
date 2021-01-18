const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    password: String,
    email: String,
    phone: String,
    location: {
      city: String,
      district: String,
      province: String,
      ward: String,
    },
    avatar: String,
    detailInformation: {
      isRoot: Boolean,
      subAccounts: Array,
    },
    googleToken: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
