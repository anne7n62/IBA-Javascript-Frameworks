//forestil jer, at en klient sender noget med en POST og vi skal gemme det
//Lav et middleware til at tage imod binære filer.
//Lav en side der sender en eller flere filer til serveren hvor de bliver gemt.
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000,
  IP = "127.0.0.1";

//__dirname = mappen hvor server.js ligger
//filmappe = projektets rodmappe
//filLager = mappe hvor uploads gemmes
const filmappe = __dirname + "/",
  filLager = filmappe + "filer/";

//hjælpefunktion - tjekker om streng starter med en af flere muligsheder
String.prototype.superStartsWith = function (...søgeStrenge) {
  for (let s of søgeStrenge.flat()) if (this.startsWith(s)) return true;
  return false;
};

//Middleware til at parse binære filer (vi laver vores egen parser)
function binærParser(req, res, next) {
  if (
    //tjek content-type headeren for at se om det er en binær fil, hvis ikke så spring videre til næste middleware
    !req.headers["content-type"]?.superStartsWith(
      "audio/",
      "image/",
      "video/",
      "application/octet-stream",
    )
  )
    return next();
  //http request body kommer ind som en stream, så vi skal lytte til data eventet og gemme det i et array, når streamen er færdig (gemmes i små bidder = chunks)
  let chunks = [];

  //Hver gang serveren modtager bites -> gem det i chunks arrayet
  req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
  //Når stream er færdig / hele fil modtage, saml alle chunks til en stor buffer og gem i req.body
  req.on("end", () => {
    req.body = Buffer.concat(chunks);
    next();
  });
  req.on("error", (err) => next(err));
}

//registrer middleware
app.use(binærParser);
//andre parsere til formdata og tekst
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
//serverer html filer
app.get("/:fil", (req, res, next) => {
  let fil = req.params.fil;
  if (fil.startsWith("opgave")) {
    if (!fil.endsWith(".html")) fil += ".html";
    res.sendFile(filmappe + fil);
  } else next();
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

app.listen(port, IP, () => {
  console.log(`Serveren kører på ${IP}:${port}`);
});

//middleware: samler byter og lægger dem i req.body, hvis det er en binær fil, ellers spring videre til næste middleware
//mulige content-type header værdier for binære filer: audio/*, image/*, video/*, application/octet-stream
//route: gemmer req.body som fil
