const fs = require("fs");
const os = require("os");
const path = require("path");
const http = require("http");




// fs.writeFileSync("test.txt", "Hello Node");

const data = fs.readFileSync("test.txt", "utf8");

console.log(data);

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());

console.log(path.basename(__filename));

console.log(path.join("users", "admin", "profile"));


const server = http.createServer((req, res) => {
    res.end("Hello Node");
});

server.listen(3000);