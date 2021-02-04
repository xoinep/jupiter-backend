const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    location: {
      address: String,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
