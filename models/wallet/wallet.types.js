const walletTypes = {};

walletTypes.Fix = () => {
  return {
    FOOD: "kg",
    MEDICINE: "kg/l",
    EQUIPMENT: "unit",
    CLEANING: "vnd",
    LABOR: "vnd",
    SEED_UNIT: "con"
  };
};

module.exports = walletTypes;
