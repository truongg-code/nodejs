const express = require("express");
const Joi = require("joi");
const app = express();
const PORT = 3000;

app.use(express.json());

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
  const { error, value } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "error",
      message: error.details?.[0]?.message,
    });
  }

  const newUser = value;
  console.log("new user: ", newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
});

app.put("api/users/:id", (req, res) => {
  const userId = req.params.id;

  const { error, value } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: "error",
      message: error.details?.[0]?.messsage,
    });
  }
  const updatedUser = value;

  res.status(200).json({
    message: "User updated successfully",
    user: { ...updatedUser, id: userId },
  });
});

app.delete("api/users/:id", (req, res) => {
  const userId = req.params.id;
  res.status(200).json({
    message: "User deleted successfully",
    userId: userId,
  });
});

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
