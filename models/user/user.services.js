const User = require('./user.model');
const error = require('../../utils/error');
const hasher = require('../../utils/encrypt');
const jwt = require('../../utils/jwt');

const UserServices = {};

UserServices.createUser = async (password, email, phone, location, avatar, detailInformation, googleToken) => {
  let user = await User.findOne({ googleToken });
  if (user) {
    throw error(400, 'User already exists');
  }
  let hashedPass = await hasher.hash(password);
  user = await User.create({ password: hashedPass, email, phone, location, avatar, detailInformation, googleToken });
  return await jwt.sign({ userId: user._id });
};

UserServices.createSubUser = async (createSubUserRequest) => {
  const { username, password } = createSubUserRequest;
  let user = await User.findOne({ username });
  if (user) {
    throw error(400, 'Username already exists');
  }
  createSubUserRequest.password = await hasher.hash(password);
  user = await User.create(createSubUserRequest);
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

UserServices.loginWithGoogle = async (googleToken) => {
  let user = await User.findOne({ googleToken });
  if (!user) {
    throw error(404, 'User not found!');
  }
  return await jwt.sign({ userId: user._id });
};

module.exports = UserServices;
