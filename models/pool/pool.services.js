const Pool = require("./pool.model");

const PoolServices = {};

PoolServices.createPool = async (createPoolModel) => {
  pool = await Pool.create(createPoolModel);
  return pool;
};

PoolServices.getPoolsByAreaIds = async (areaIds) => {
  return await Pool.find({ areaId: { $in: areaIds } });
};
module.exports = PoolServices;
