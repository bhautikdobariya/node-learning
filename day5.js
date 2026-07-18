const users = [
    {
        name: "John",
        hobbies: ["Cricket", "Reading"]
    },
    {
        name: "Alice",
        hobbies: ["Coding", "Music"]
    },
    {
        name: "David",
        hobbies: ["Travel"]
    }
];

const hobbies = users.flatMap(user => user.hobbies);

console.log(hobbies);