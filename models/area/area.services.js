const Area = require("./area.model");

const AreaServices = {};

AreaServices.createArea = async (createAreaModel) => {
  const { name, ownerId, location } = createAreaModel;
  let area = await Area.create({ name, ownerId, location });
  return area;
};

module.exports = AreaServices;
