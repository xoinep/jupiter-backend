const Area = require("./area.model");

const AreaServices = {};

AreaServices.createArea = async (name, ownerId) => {
  let area = await Area.findOne({ name });
  if (area) {
    return false;
  }
  area = await Area.create({ name, ownerId });
  return area;
};

module.exports = AreaServices;
