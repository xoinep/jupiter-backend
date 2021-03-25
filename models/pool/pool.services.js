const Pool = require('./pool.model');

const PoolServices = {};

PoolServices.createPool = async (name, areaId, target, unit, area, depth) => {
  return await Pool.create({ name, areaId, target, unit, area, depth });
};

PoolServices.getPoolsByAreaIds = async (areaIds) => {
  return Pool.find({ areaId: { $in: areaIds }, disable: false });
};

PoolServices.disablePoolById = async (poolId) => {
  return Pool.findByIdAndUpdate(poolId, { disable: true });
};
module.exports = PoolServices;
