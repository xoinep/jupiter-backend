const Area = require("./area.model");

const AreaServices = {};

AreaServices.createArea = async (createAreaModel) => {
  const { name, ownerIds, location } = createAreaModel;
  let area = await Area.create({ name, ownerIds, location });
  return area;
};

AreaServices.getAreasByOwnerId = async (ownerId) => {
  return await Area.find({ ownerIds: ownerId });
};

module.exports = AreaServices;
