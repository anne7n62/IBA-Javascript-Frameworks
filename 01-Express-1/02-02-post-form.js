const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  const data = req.body;
  console.log("Modtaget: ", data);
  res.send(`Serveren har modtaget: ${JSON.stringify(data)}`);
});

// Statisk mappe til HTML
app.use(express.static("public"));

// Start server
app.listen(port, () => {
  console.log(`Server kører på http://localhost:${port}`);
});
