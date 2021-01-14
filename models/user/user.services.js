const User = require('./user.model');
const error = require('../../utils/error');
const hasher = require('../../utils/encrypt');
const jwt = require('../../utils/jwt');

const UserServices = {};

UserServices.createUser = async (username, password) => {
  let user = await User.findOne({ username });
  if (user) {
    throw error(400, 'Username already exists');
  }
  let hashedPass = await hasher.hash(password);
  user = await User.create({ username, password: hashedPass });
  return await jwt.sign({ userId: user._id });
};

UserServices.login = async (userId, password) => {
  let user = await User.findById(userId);
  if (!user) {
    throw error(404, 'User not found!');
  }
  let isMatched = await hasher.compare(password, user.password);
  if (!isMatched) {
    throw error(400, 'Incorrect password');
  }
  return user;
};

module.exports = UserServices;
