import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hi I am Kit!!!</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>This is my email ....!!!</h1>");
});


app.get("/about", (req, res) => {
    res.send("<h1>I am a student!!!</h1>");
});


app.listen(3000, () => {
    console.log("It is running on 3000.");
});