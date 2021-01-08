const walletTypes = {};

walletTypes.Fix = () => {
  return {
    FOOD: "kg",
    MEDICINE: "kg",
    EQUIPMENT: "unit",
    CLEANING: "vnd",
    LABOR: "vnd",
  };
};

module.exports = walletTypes;
