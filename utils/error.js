class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const { statusCode, message } = err;
  res.status(500).json({
    statusCode,
    message,
  });
};

const ErrorCodes = {
  VerifyGoogleFailed: 100,
  UserNotFound: 101,
  UserAlreadyExisted: 102,
};

module.exports = { ErrorHandler, ErrorCodes, handleError };
