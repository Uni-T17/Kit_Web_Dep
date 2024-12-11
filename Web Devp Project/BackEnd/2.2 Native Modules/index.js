const fs = require("fs");

// fs.writeFile("message.txt", "Hello Node!!\nHello Kit!!", (err) => {
//     if (err) throw err;
//     console.log("Save")
// })

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data)
})