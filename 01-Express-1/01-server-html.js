const express = require("express");
const app = express();

const port = 3000,
  IP = "127.0.0.1";
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h1 style='color: blue;'>Velkommen til denne side!</h1>");
});
app.listen(port, IP, () => {
  console.log(`Serveren kører altså på http://${IP}:${port}`);
});
