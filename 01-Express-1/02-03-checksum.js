const express = require("express");
const app = express();
const port = 3000;

//finder hver tegns unicode-værdi og laver en XOR-sum
function checksum(tekst) {
  let sum = 0;
  for (let i = 0; i < tekst.length; i++) sum ^= tekst.codePointAt(i);
  return sum;
}

app.post("/checksum", (req, res) => {
  let sum = checksum(req.body);
  res.setHeader("Content-Type", "text/plain");
  res.send(sum.toString());
});

// Start server
app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});
