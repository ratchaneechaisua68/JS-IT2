// โหลด express
const express = require('express');
const app = express();
const port = 3000;

// กำหนด route หลัก
app.get('/', (req, res) => {
  res.send('สวัสดี node.js yui');
});

// เริ่มต้น server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});