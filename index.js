//index.js

const express = require('express');
const path = require('path');

//App Variables

const app = express();
const port = process.env.PORT || '8000';

//Config
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, "public")))

//Routes

app.get('/', (req, res) => {
  res.render("index", { title: "Holy"})
})

app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});

//Run

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})