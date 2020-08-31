const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "hbs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { message: "Hello World" });
});

app.listen(port, () => {
  console.log(`The server is listening on ${port}`);
});
