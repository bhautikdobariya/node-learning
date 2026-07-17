const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];


console.log('Fruits:', fruits);

fruits.push('fig');
console.log('After adding fig:', fruits);

fruits.pop();
console.log('After removing last fruit:', fruits);

for(const fruit of fruits) {
    console.log('Fruit:', fruit);
}

const shiftedFruit = fruits.shift();
console.log('Removed first fruit:', shiftedFruit);
console.log('Fruits after shift:', fruits);

const unshiftedFruit = fruits.unshift('grape');
console.log('After adding grape at the beginning:', fruits);

const isMangoPresent = fruits.includes('elderberry');
console.log('Is mango present?', isMangoPresent);

const bananaIndex = fruits.indexOf('banana');
console.log('Index of banana:', bananaIndex);

const firstThreeFruits = fruits.slice(0, 3);
console.log('First three fruits:', firstThreeFruits);

const removedFruits = fruits.splice(1, 2);
console.log('Removed fruits:', removedFruits);
console.log('Fruits after removal:', fruits);

const sortedFruits = fruits.sort();
console.log('Sorted fruits:', sortedFruits);

const numbers = [5, 3, 8, 1, 2];
const findMax = numbers.sort((a, b) => b - a)[0];
console.log('Maximum number:', findMax);

const sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sumOfNumbers);

const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers);