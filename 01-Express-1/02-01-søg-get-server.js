const express = require("express");
const app = express();
const port = 3000;

// Statisk mappe
app.use(express.static("public"));

// GET route med query string
// fx: /mult?x=3&y=4
app.get("/mult", (req, res) => {
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);

  if (isNaN(x) || isNaN(y)) {
    res.status(400).send("x og y skal være tal");
    return;
  }

  const resultat = x * y;
  res.setHeader("Content-Type", "text/plain");
  res.send(resultat.toString());
});

// Start server
app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});
