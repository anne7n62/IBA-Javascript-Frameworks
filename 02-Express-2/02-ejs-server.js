const express = require("express");
const app = express();
const port = 3000;

// fortæl Express at vi bruger EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // generér to tilfældige tal mellem 1 og 10.
  // Math.floor afrunder ned.
  const x = Math.floor(Math.random() * 10) + 1;
  const y = Math.floor(Math.random() * 10) + 1;
  const z = x * y;

  // render template + send til klient
  res.render("02-ejs-template", { x, y, z });
});

app.listen(port, () => console.log(`http://localhost:${port}`));
