const User = require('./user.model');
const error = require('../../utils/error');
const hasher = require('../../utils/encrypt');
const jwt = require('../../utils/jwt');

const UserServices = {};

UserServices.createUser = async (name, email, phone, location, avatar, detailInformation) => {
    let user = await User.findOne({email});
    if (user) {
        throw error(400, 'User already exists');
    }
    user = await User.create({name, email, phone, location, avatar, detailInformation});
    return await jwt.sign({userId: user._id});
};

UserServices.createSubUser = async (name, email, phone, location, avatar) => {
    return await UserServices.createUser(name, email, phone, location, avatar, {isRoot: false});
};

UserServices.updateSubUsers = async (userId, updatedData) => {
  return User.findByIdAndUpdate(userId, updatedData, {new: true});
}

UserServices.findUserById = async (userId) => {
  let user = await User.findById(userId);
  if (!user) {
    throw error(404, 'User not found!');
  }
  return user;
}
UserServices.loginWithUserId = async (userId) => {
    let user = await User.findById(userId);
    if (!user) {
        throw error(404, 'User not found!');
    }

    return await jwt.sign({userId: user._id});
};

UserServices.loginWithGoogle = async (email) => {
    let user = await User.findOne({email});
    if (!user) {
        throw error(404, 'User not found!');
    }
    return await jwt.sign({userId: user._id});
};

module.exports = UserServices;
