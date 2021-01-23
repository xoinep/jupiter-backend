const jwt = require("./jwt");

module.exports = async (req, res, next) => {
  const token = req.header("x-access-token");
  if (!token) {
    console.log('x-access-token is not found!' )
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
    next();
  } catch (e) {
    // Should handle token expired - Force user to reloggin
    console.log(e);
  }
};
