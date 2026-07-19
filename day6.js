const fs = require("fs");

// console.log("Start");

// fs.readFile("README.md", "utf8", (err, data) => {
//     console.log(data);
// });

// console.log("End");

function fetchData(callback) {

    setTimeout(() => {

        callback("Data Received");

    }, 2000);

}

fetchData((data) => {

    console.log(data);

});

const promise = new Promise((resolve, reject) => {

    const success = false;

    if (success) {

        resolve("Success!");

    } else {

        reject("Something went wrong");

    }

});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data Loaded");
    }, 3000);
});

promise1.then(data => {
    console.log(data);
});

async function hello() {

    return "Hello";

}

hello().then(console.log);

function getData() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve("Node.js");

        }, 2000);

    });

}

async function display() {

    const result = await getData();

    console.log(result);

}

display();

function getData() {

    return Promise.resolve("Node");

}

async function show() {

    const result = getData();

    console.log(result);

}

show();


async function getUsers() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users);

}

// getUsers();

console.log('process', process.env);