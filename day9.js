const fs = require("fs");

const data = fs.readFileSync("test.txt", "utf8");

console.log(data);

console.log("Program Finished");

fs.readFile("test.txt", "utf8", (err, data) => {
    console.log(data);
});

console.log("Program Finished");

fs.appendFile(
    "data.txt",
    "\nNode.js Learning",
    (err) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log("Content Added");
    }
);

fs.appendFileSync("data.txt", "\nMore Text");


fs.rename(
    "data.txt",
    "new.txt",
    (err) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log("Renamed");
    }
);

// fs.unlinkSync("new.txt");

const files = fs.readdirSync(".");

console.log(files);