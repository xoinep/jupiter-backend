const Pool = require("./pool.model");

const PoolServices = {};

PoolServices.createPool = async (name, areaId, target, unit) => {
  console.log(name)
  console.log(target)
  console.log(unit)
  console.log(areaId)
  return await Pool.create({name, areaId, target, unit});
};

PoolServices.getPoolsByAreaIds = async (areaIds) => {
  return Pool.find({areaId: {$in: areaIds}});
};
module.exports = PoolServices;
