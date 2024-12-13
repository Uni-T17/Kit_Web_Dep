import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;
var total = 0;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs", {
    totalLetter: total
  })
});

app.post("/submit", (req, res) => {
  var first = req.body["fName"];
  var last = req.body["lName"];
  var total = first.length + last.length;
  res.render(__dirname + "/views/index.ejs", {
    totalLetter: total
  })

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
