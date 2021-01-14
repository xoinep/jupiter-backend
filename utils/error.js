module.exports = (status, message, json) => {
  const error = new Error(message);
  error.status = status;
  error.json = json;
  return error;
};
