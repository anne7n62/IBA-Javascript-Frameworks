const express = require("express");
const app = express();
const port = 3000;
// const path = require("path");

app.use(
  express.static(path.join(__dirname, "public"), { extensions: ["html"] }),
);

app.listen(port, () => {
  console.log(`server kører på http://localhost:${port}`);
});
