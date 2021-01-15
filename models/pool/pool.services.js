const Pool = require("./pool.model");

const PoolServices = {};

PoolServices.createPool = async (createPoolModel) => {
  return await Pool.create(createPoolModel);
};

PoolServices.getPoolsByAreaIds = async (areaIds) => {
  return Pool.find({areaId: {$in: areaIds}});
};
module.exports = PoolServices;
