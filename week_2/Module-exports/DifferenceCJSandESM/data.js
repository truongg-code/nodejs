//(CommonJS)
const fs = require("fs");

const data = fs.readFileSync("sample.txt", "utf8"); //sync read
console.log("Data loaded in CommonJS.");

module.exports = data;
