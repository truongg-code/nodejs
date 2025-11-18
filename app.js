"use strict";

const fs = require("fs");
console.log("Hello world!!!");

try {
  const rawData = fs.readFileSync("./data.json", "utf-8");
  const data = JSON.parse(rawData);
  const newData = data.map((item) => ({
    ...item,
    age: item.age + 1,
  }));
  fs.writeFileSync("./updated_data.json", JSON.stringify(newData), "utf8");
} catch (error) {
  console.error("Error reading or parsing config file:", error);
}
