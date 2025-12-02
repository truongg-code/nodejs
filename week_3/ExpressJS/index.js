const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

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
  const newUser = req.body;
  console.log("new user: ", newUser);

  if (!newUser.name) {
    res.status(400).json({
      message: "Name is required",
    });
  }

  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
});

app.put("api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  if (!updatedUser.name) {
    res.status(400).json({
      message: "Name is required",
    });
  }

  res.status(200).json({
    message: "User updated successfully",
    user: { ...updatedUser, id: userId },
  });
});

app.delete("api/users/:id", (req, res) => {
  const userId = req.params.id;
  res.status(200).json({
    message: "User deleted successfully",
    user: { ...updatedUser, id: userId },
  });
});

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
