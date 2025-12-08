const logger = (req, res, next) => {
  const now = new Date().toISOString();
  const method = req.method;
  const url = req.originalURL;
  const ip = req.ip;

  console.log(`[${now}] ${method} ${url} - ${ip}`);
  next();
};

module.exports = logger;
