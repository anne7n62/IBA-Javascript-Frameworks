const express = require('express');
const path = require("path");
const app = express();
const port = 3000;
const filmappe = path.join(__dirname, "filer");
app.use("/",express.static(filmappe));
app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});