const jwt = require("./jwt");

module.exports = async (req, res, next) => {
  const token = req.header("x-access-token");
  if (!token) {
    return next();
  }
  let data;
  // Verify token
  try {
    data = await jwt.verify(token);
    if (!data || !data.userId) {
      return next();
    }
    req.userId = data.userId; // Set user to req
  } catch (e) {
    // Should handle token expired - Force user to reloggin
    console.log(e);
  }
};
