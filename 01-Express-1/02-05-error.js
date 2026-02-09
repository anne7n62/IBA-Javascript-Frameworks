const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000,
  IP = "127.0.0.1";
const filmappe = __dirname + "/",
  filLager = filmappe + "filer/";
function checksum(tekst) {
  let sum = 0;
  for (let i = 0; i < tekst.length; i++) sum ^= tekst.codePointAt(i);
  return sum;
}
String.prototype.superStartsWith = function (...søgeStrenge) {
  for (let s of søgeStrenge.flat()) if (this.startsWith(s)) return true;
  return false;
};
function binærParser(req, res, next) {
  if (
    !req.headers["content-type"]?.superStartsWith(
      "audio",
      "image/",
      "video/",
      "application/octet",
    )
  )
    return next();
  let chunks = [];
  req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
  req.on("end", () => {
    req.body = Buffer.concat(chunks);
    next();
  });
  req.on("error", (err) => next(err));
}
app.use(binærParser);
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use((req, res, next) => {
  console.log(`${req.method}-anmodning til ${req.url} fra ${req.ip}`);
  next();
});
app.get("/:fil", (req, res, next) => {
  let fil = req.params.fil;
  if (fil.startsWith("opgave")) {
    if (!fil.endsWith(".html")) fil += ".html";
    res.sendFile(filmappe + fil);
  } else next();
});
app.get("/mult", (req, res) => {
  let x = parseFloat(req.query.x);
  let y = parseFloat(req.query.y);
  res.setHeader("Content-Type", "text/plain");
  res.send((x * y).toString());
});
app.post("/submit", (req, res) => {
  let s = "";
  for (let b1 of req.body.ord1) for (let b2 of req.body.ord2) s += b1 + b2;
  res.send(s);
});
app.post("/tekst", (req, res) => {
  let sum = checksum(req.body);
  res.setHeader("Content-Type", "text/plain");
  res.send(sum.toString());
});
app.post("/upload", (req, res, next) => {
  let filnavn = req.headers["filnavn"];
  try {
    fs.writeFile(filLager + filnavn, req.body, (err) => {
      if (err) return next(err);
      else res.sendStatus(200);
    });
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(`Der er sket en ${err} fejl`);
  res.sendStatus(404);
});

app.listen(port, IP, () => {
  console.log(`Serveren kører på ${IP}:${port}`);
});
