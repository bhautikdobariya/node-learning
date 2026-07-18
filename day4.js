function greet() {
  console.log("Hello");
}

greet();

function add(a, b) {
  return a + b;
}

const totalamount = add(10, 20);
console.log(totalamount);


const addAmount = (a, b) => a + b;
console.log(addAmount(5, 15));

function add(a, b) {
    return a + b;
}

function calculate(callback) {
    console.log(callback(10, 20));
}

calculate(add);