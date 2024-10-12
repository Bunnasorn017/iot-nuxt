// backend/server.js
const http = require("http");
const cors = require("cors");
const express = require("express"); // เปลี่ยนมาใช้ Express.js เพื่อความสะดวก

const app = express();
app.use(cors()); // ใช้งาน middleware CORS

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from Node.js!" });
});

const PORT = 5000; // ตั้งค่าพอร์ตที่คุณต้องการ
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
