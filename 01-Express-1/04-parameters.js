const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/:side", (req, res) => {
  const filePath = path.join(__dirname, "public", req.params.side);
  res.sendFile(filePath);
});
app.listen(port, () => {
  console.log(`server kører på http://localhost:${port}`);
});
