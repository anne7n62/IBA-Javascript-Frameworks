const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const filmappe = path.join(__dirname, "filer");

app.get("/:side?", (req, res) => {
  let fil = req.params.side || "index";
  res.sendFile(path.join(filmappe, fil + ".html"));
});
app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});
