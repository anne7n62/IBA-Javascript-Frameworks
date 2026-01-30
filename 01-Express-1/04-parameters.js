const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/bruger/:fornavn", (req, res) => {
  const navn = req.params.fornavn;

  res.send(`<h1>Hej ${navn}!</h1>`);
});
