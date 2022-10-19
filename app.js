const express = require("express");
const app = express();
const port = process.env.PORT || 3003;

// app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {

 res.render("index.html", { root: __dirname });
});


