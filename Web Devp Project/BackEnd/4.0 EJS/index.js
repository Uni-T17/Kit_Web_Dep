import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`This is running on ${port}`);
});



app.get("/", (req, res) => {

    // const day = new Date();
    const day = new Date("June 24, 2023 11:30:00");
    const today = day.getDay();
    var message = "";
    if (today === 0 || today === 6) {
        message = "the weekend, it's time to have fun!";
    }
    else {
        message = "a weekday, it's time to work hard!";
    }
    res.render(__dirname + "/public/view.ejs", {
        mes: message
    })

});