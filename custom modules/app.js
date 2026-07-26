// const math = require("./math");
const { add, subtract } = require("./math");
const appName = require("./config");
const user = require("./user");
const Person = require("./person");


console.log(add(10, 20));

console.log(subtract(10, 5));

console.log(appName);

console.log(user.name);

const p = new Person("Alice");

p.greet();