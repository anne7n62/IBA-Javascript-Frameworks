const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/index", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "public", "om.html"));
});

app.get("/kontakt", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "public", "kontakt.html"));
});

app.listen(port, () => {
  console.log(`server kører på http://localhost:${port}`);
});
