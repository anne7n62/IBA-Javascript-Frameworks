const express = require("express");
const app = express();
const port = 3000;
const nav =
  '<a href="http://localhost:3000/forside">Velkomst</a><a href="http://localhost:3000/om">Til login</a><a href="http://localhost:3000/oversigt">Til oversigt</a>';

app.get("/forside", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send('<h1 style="color: blue;">Velkommen til denne side</h1>' + nav);
});
app.get("/om", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h2>Loginside</h2>" + nav);
});
app.get("/oversigt", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send("<h2>Oversigtsside<h2>" + nav);
});
app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});
