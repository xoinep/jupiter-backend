const Pool = require("./pool.model");

const PoolServices = {};

PoolServices.createPool = async (createPoolModel) => {
  pool = await Pool.create(createPoolModel);
  return pool;
};

module.exports = PoolServices;
