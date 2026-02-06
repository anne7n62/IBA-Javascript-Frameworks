const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000,
  IP = "127.0.0.1";

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.sendFile(
    "/undervisning/IBA/2. sem/JF/03 Rendering/løsningsforslag/opgave3.html",
  );
});

app.post("/submit", (req, res, next) => {
  let d = req.body;
  let data = { x: parseInt(d.x) };
  res.render("opgave3", data);
});

app.listen(port, IP, () => {
  console.log(`Serveren kører på ${IP}:${port}`);
});
