const express = require("express");
const app = express();
const port = 3000;

// Statisk mappe
app.use(express.static("public"));

// GET route med query string
// fx: /mult?x=3&y=4
app.get("/mult", (req, res) => {
  let x = parseFloat(req.query.x);
  let y = parseFloat(req.query.y);
  res.setHeader("Content-Type", "text/plain");
  res.send((x * y).toString());
});

// Start server
app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});

//kør server og åben i browser http://localhost:3000/02-01-omregn.html
