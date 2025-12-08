const errorHandler = (err, req, res, next) => {
  const errorCode = err.errorCode || 500;
  const message = err.message || "Internal Server Error";

  console.error(`[Error] ${errorCode} - ${message}`);

  res.status(errorCode).json({
    success: false,
    errorCode: errorCode,
    message: message,
  });
};

module.exports = errorHandler;
