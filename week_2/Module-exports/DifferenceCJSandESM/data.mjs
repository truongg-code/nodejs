//(ES Modules)
import { promises as fs } from "fs";

const data = fs.readFile("sample.txt", "utf8"); // async read
console.log("Data loaded in ES Modules.");

export default data;
