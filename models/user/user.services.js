const User = require('./user.model');
const error = require('../../utils/error');
const hasher = require('../../utils/encrypt');
const jwt = require('../../utils/jwt');

const UserServices = {};

UserServices.createUser = async (name, email, phone, location, avatar, detailInformation, googleToken) => {
  let user = await User.findOne({ googleToken });
  if (user) {
    throw error(400, 'User already exists');
  }
  user = await User.create({ name, email, phone, location, avatar, detailInformation, googleToken });
  return await jwt.sign({ userId: user._id });
};

UserServices.createSubUser = async (name, email, phone, location, avatar, googleToken) => {
  return await UserServices.createUser(name, email, phone, location, avatar, {isRoot: false}, googleToken)
};

UserServices.loginWithUserId = async (userId) => {
  let user = await User.findById(userId);
  if (!user) {
    throw error(404, 'User not found!');
  }

  return await jwt.sign({ userId: user._id });
};

UserServices.loginWithGoogle = async (googleToken) => {
  let user = await User.findOne({ googleToken });
  if (!user) {
    throw error(404, 'User not found!');
  }
  return await jwt.sign({ userId: user._id });
};

module.exports = UserServices;
