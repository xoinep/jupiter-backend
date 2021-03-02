const Pool = require('./pool.model');

const PoolServices = {};

PoolServices.createPool = async (name, areaId, target, unit) => {
  return await Pool.create({ name, areaId, target, unit, area });
};

PoolServices.getPoolsByAreaIds = async (areaIds) => {
  return Pool.find({ areaId: { $in: areaIds } });
};
module.exports = PoolServices;
