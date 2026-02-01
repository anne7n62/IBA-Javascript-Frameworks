const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/forside", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/forside.html"));
});
app.get("/om", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/om.html"));
});
app.get("/oversigt", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "/oversigt.html"));
});

app.listen(port, () => {
  console.log(`server kører på http://localhost:${port}`);
});
