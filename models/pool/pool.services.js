const Pool = require("./pool.model");

const PoolServices = {};

PoolServices.createPool = async (name, ownerId) => {
  let pool = await Pool.findOne({ name });
  if (pool) {
    return false;
  }
  pool = await Pool.create({ name, ownerId });
  return pool;
};

module.exports = PoolServices;
