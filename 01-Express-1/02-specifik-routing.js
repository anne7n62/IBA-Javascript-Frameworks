app.get("/", (req, res) => {
res.setHeader('Content-Type', "text/html"); //ikke nødvendigt hvis res.send() blot sender en plain streng
res.send("<h2>Hovedside</h2>");
};

app.get("/om", (req, res) => {
res.setHeader('Content-Type', "text/html");
res.send("<h2>Loginside</h2>");
};

app.get("/oversigt", (req, res) => {
res.setHeader('Content-Type', "text/html");
res.send("<h2>Oversigtsside<h2>");
};