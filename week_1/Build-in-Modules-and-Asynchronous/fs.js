const fs = require("fs").promises;
const path = require("path");

async function docFile() {
  try {
    const filePath = path.join(__dirname, "note.txt");
    const data = await fs.readFile(filePath, "utf-8");
    console.log("Nội dung file:", data);
  } catch (error) {
    console.error("Lỗi đọc file:", error);
  }
}

docFile();
