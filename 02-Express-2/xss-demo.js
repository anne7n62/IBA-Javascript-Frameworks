const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000, IP = "127.0.0.1";
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
  res.sendFile("D:\\undervisning\\IBA\\2. sem\\JF\\03 Rendering\\løsningsforslag\\xss-demo.html");
});
app.get('/submit', (req, res) => {
  const data = { username: req.query.bruger, gentagelser: 7 };
  res.render('xss-demo', data);
});
app.listen(port, IP, () => {
  console.log(`Serveren kører på ${IP}:${port}`);
});