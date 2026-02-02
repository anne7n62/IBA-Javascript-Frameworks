const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('<h1 style="color: blue;">Velkommen til denne side</h1>');
});
app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});