const express = require("express");
const Joi = require("joi");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(logger);

class AppError extends Error {
  constructor(errorCode, message) {
    super(message);
    this.errorCode = errorCode;
  }
}

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
});

app.get("/", (req, res) => {
  res.send("Hello from ExpressJS!");
});

app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Trainnee A",
    },
    {
      id: 2,
      name: "Expert B",
    },
  ];
  res.status(200).json({
    status: "success",
    data: users,
  });
});

app.post("api/users", (req, res) => {
  try {
    const { error, value } = userSchema.validate(req.body);

    if (error) {
      const errorMessage = error.details?.[0]?.message;
      throw new AppError(400, errorMessage);
    }

    const newUser = value;
    console.log("new user: ", newUser);

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (err) {
    next(err);
  }
});

app.put("api/users/:id", (req, res) => {
  try {
    const userId = req.params.id;

    const { error, value } = userSchema.validate(req.body);

    if (error) {
      const errorMessage = error.details?.[0]?.message;
      throw new AppError(400, errorMessage);
    }
    const updatedUser = value;

    res.status(200).json({
      message: "User updated successfully",
      user: { ...updatedUser, id: userId },
    });
  } catch (err) {
    next(err);
  }
});

app.delete("api/users/:id", (req, res) => {
  const userId = req.params.id;
  res.status(200).json({
    message: "User deleted successfully",
    userId: userId,
  });
});

app.all("*", (err, req, res, next) => {
  const err = new AppError(
    404,
    `Cannot find ${req.originalUrl} on this server`
  );
});
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
