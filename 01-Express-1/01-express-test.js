const express = require("express");
const app = express();

const port = 3000,
  IP = "127.0.0.1";
app.get("/", (req, res) => {
  //dette er reelt en hændelseslytter, req er objektet for anmodningen, res er objektet for responsen
  res.setHeader("Content-Type", "text/plain");
  res.send("Tekst til klienten");
});
app.listen(port, IP, () => {
  console.log(`Serveren kører på http://${IP}:${port}`); //det er selvfølgelig ikke obligatorisk at have dette console-statement
});
