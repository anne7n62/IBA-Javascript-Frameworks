const express = require('express');
const app = express();
const port = 3000;
const nav = '<a href="http://localhost:3000/">Velkomst</a><a href="http://localhost:3000/login">Til login</a><a href="http://localhost:3000/oversigt">Til oversigt</a>';
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('<h1 style="color: blue;">Velkommen til denne side</h1>' + nav);
});
app.get('/login', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('<h1 style="color: green;">Her kan du logge på</h1>' + nav);
});
app.get('/oversigt', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('<h1 style="color: orange;">Dette er oversigten</h1>' + nav);
});
app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});