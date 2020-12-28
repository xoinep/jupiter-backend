const User = require("./user.model");

const UserServices = {};

UserServices.createUser = async (username, password) => {
  let user = await User.findOne({ username });
  if (user) {
    return false;
  }
  user = await User.create({ username, password });
  return user;
};

UserServices.checkCredentials = async (username, password) => {
  let user = await User.findOne({ username, password });
  if (!user) {
    throw new Error("Invalid username/password");
  }
  return user;
};

UserServices.checkPassword = async (id, password) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error("User does not exist!");
  }
  if (md5(user.password) !== password) {
    throw new Error("Password is not valid!");
  }
  return user;
};

module.exports = UserServices;
