const student = {
  id: 1,
  name: "Rahul",
  age: 22,
  city: "Ahmedabad"
};
console.log('initial',student);
console.log(student.name);
console.log(student["city"]);

student.age = 23;

student.email = "rahul@gmail.com";

console.log('after add',student);
delete student.city;
console.log('after delete',student);

const employee = {
  name: "John",
  address: {
    city: "Ahmedabad",
    state: "Gujarat"
  }
};

console.log(employee.address.city);

console.log('Keys in student:', Object.keys(student));
console.log('Values in student:', Object.values(student));
console.log('Entries in student:', Object.entries(student));

const copyOfStudent = Object.assign({}, student);
console.log('copyOfStudent: ', copyOfStudent);

console.log('Is student frozen?', Object.hasOwn(student, 'surname'));

const user = {
  name: "Rahul"
};

Object.freeze(user);
// Object.seal(user);

user.name = "Amit";
// user.age = 20;


console.log(user);

