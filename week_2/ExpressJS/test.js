function myMiddleware(req, res, next) {
  // do something
  next(); // next to middleware
}

const checkAdmin = (req, res, next) => {
  const isAdmin = req.query.admin === "true"; // Simulate permission check
  if (isAdmin) {
    next();
  } else {
    res.status(403).json({ message: "Not permission" });
  }
};
