//Lav en side der kun giver adgang til registrerede brugere.
//Listen over sådanne brugere gemmes i en tekstfil på serveren,
// der udover brugerinfo også indeholder logdata, fx sidste logintid.
// Når en bruger godkendes, skal vedkommende serveres en personaliseret
// side vha. EJS eller Pug med oplysninger om brugeren fra tekstfilen.
// Denne fil skal opdateres og gemmes efter hver login.
// For enkelthedens skyld kan I her bare bruge en simpel tekstfil til brugerdata,
// men det er selvfølgelig ikke noget man må gøre i produktionskode.

const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000,
  IP = "127.0.0.1";

//filstier og brugerdata
const filMappe = __dirname + "/";
let brugerFil = "brugere.json",
  ikkeFundetFil = "ikkeFundet.html";
// indlæs brugere fra fil som JS-objekt, så vi kan arbejde med det i JavaScript
let brugere = JSON.parse(fs.readFileSync(filMappe + brugerFil));

//Middleware (parser form data) og view engine
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//vis login side
app.get("/", (req, res) => {
  res.sendFile(filMappe + "05-brugerinfo.html");
});

//kører når formulatenet på login-siden submittes
app.post("/submit", (req, res, next) => {
  for (b of brugere) {
    if (
      b.brugernavn === req.body.brugernavn &&
      b.password === req.body.password
    ) {
      //hvis login ok
      res.render("05-brugerinfo", {
        fuldeNavn: b.fuldeNavn,
        dato: b.sidsteLogin,
      });
      b.sidsteLogin = new Date().toString();
      //Gem opdateret brugerdata i fil
      fs.writeFileSync(brugerFil, JSON.stringify(brugere));
      return next();
    }
  }
  res.sendFile(filMappe + ikkeFundetFil);
});

app.listen(port, IP, () => {
  console.log(`Serveren kører på ${IP}:${port}`);
});
