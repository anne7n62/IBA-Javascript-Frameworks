const express = require('express');
const path = require("path");
const app = express();
const port = 3000;
const filmappe = path.join(__dirname, "filer");
app.get('/', (req, res) => {
  res.sendFile(filmappe + "index.html");
});
app.get('/login', (req, res) => {
  res.sendFile(filmappe + "login.html");
});
app.get('/oversigt', (req, res) => {
  res.sendFile(filmappe + "oversigt.html");
});
app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});