//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;
var check = false;


function checkPassword(req, res, next) {
    const pass = req.body["password"];
    check = pass === "ILoveProgramming";
    next();
}


app.use(bodyParser.urlencoded({ extended: true }))
app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.post("/check", (req, res) => {
    if (check) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.redirect("/");
    }


});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});