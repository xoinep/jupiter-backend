const Area = require("./area.model");

const AreaServices = {};

AreaServices.createArea = async (name, location, ownerIds, phone, target) => {
  return  await Area.create({
    name: name,
    location: location,
    ownerIds: ownerIds,
    phone: phone,
    target: target,
  });
};

AreaServices.getAreasByOwnerId = async (ownerId) => {
  return Area.find({ownerIds: ownerId});
};

module.exports = AreaServices;
