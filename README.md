# Node.js Learning Project

This repository contains small JavaScript and Node.js practice files. The code
starts with JavaScript basics and then moves into Node.js concepts such as
runtime globals, core modules, file handling, HTTP servers, and custom modules.

## Requirements

- Node.js installed on your system
- A terminal or command prompt
- A code editor such as Visual Studio Code

## Project Structure

| File or Folder | Description |
| --- | --- |
| `day1.js` | Array practice and common array methods |
| `day3.js` | Object practice and object utility methods |
| `day4.js` | Functions, arrow functions, and callbacks |
| `day5.js` | Nested arrays and `flatMap()` |
| `day6.js` | Asynchronous JavaScript, callbacks, promises, async/await, and environment variables |
| `day7.js` | Basic Node.js runtime information and global values |
| `day8.js` | Node.js core modules: `fs`, `os`, `path`, and `http` |
| `custom modules/` | Custom CommonJS module examples |
| `test.txt` | Sample text file used by `day8.js` |

## Topics Covered

### Arrays

`day1.js` covers:

- Creating arrays
- Adding and removing array items
- Looping through arrays
- Checking if an item exists
- Finding item indexes
- Slicing and splicing arrays
- Sorting arrays
- Finding the maximum number
- Using `reduce()`
- Using `map()`

### Objects

`day3.js` covers:

- Creating objects
- Accessing object properties
- Updating object values
- Adding and deleting properties
- Working with nested objects
- Using `Object.keys()`
- Using `Object.values()`
- Using `Object.entries()`
- Copying objects with `Object.assign()`
- Checking object properties with `Object.hasOwn()`
- Freezing objects with `Object.freeze()`

### Functions

`day4.js` covers:

- Function declarations
- Returning values from functions
- Arrow functions
- Callback functions

### Nested Arrays

`day5.js` covers:

- Arrays of objects
- Nested arrays
- Combining nested arrays with `flatMap()`

### Asynchronous JavaScript

`day6.js` covers:

- Callback-based asynchronous code
- `setTimeout()`
- Creating promises
- Handling promise success with `.then()`
- Handling promise errors with `.catch()`
- `async` and `await`
- Reading environment variables with `process.env`
- Fetching data with `fetch()` as a commented example

### Node.js Runtime Basics

`day7.js` covers:

- Printing output with `console.log()`
- Getting the current date
- Using `__dirname`
- Using `__filename`
- Checking `process.version`
- Checking `process.platform`

### Node.js Core Modules

`day8.js` covers:

- Reading files with `fs`
- Getting system information with `os`
- Working with paths using `path`
- Creating a basic HTTP server with `http`
- Listening on port `3000`

### Custom Modules

The `custom modules` folder covers CommonJS exports and imports:

- `math.js` exports `add()` and `subtract()` functions.
- `config.js` exports an app name.
- `user.js` exports a user object.
- `person.js` exports a `Person` class.
- `app.js` imports and runs all custom module examples.

## How to Run

Open a terminal in this project folder:

```bash
cd "D:\Bhautik Learning\Node"
```

Run any practice file:

```bash
node day1.js
node day3.js
node day4.js
node day5.js
node day6.js
node day7.js
node day8.js
```

Run the custom module example:

```bash
node "custom modules/app.js"
```

## HTTP Server

`day8.js` creates a simple HTTP server.

Start it with:

```bash
node day8.js
```

Open this URL in a browser:

```text
http://localhost:3000
```

Expected response:

```text
Hello Node
```

Press `Ctrl + C` in the terminal to stop the server.

## Notes

- Some examples are commented out so they can be tested later.
- `day6.js` has asynchronous code, so some output appears after a delay.
- `day8.js` reads from `test.txt`, so keep that file in the project folder.
- This project does not currently use `package.json` or external npm packages.

## Purpose

The purpose of this repository is to practice JavaScript fundamentals and learn
how to run JavaScript code with Node.js step by step.
