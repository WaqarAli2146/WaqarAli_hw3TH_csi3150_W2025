






const student = { fullName: "Charlie", grade: 12 };
const { fullName: studentName, grade } = student;

console.log(studentName); // "Charlie"
console.log(grade);       // 12





// Valid JSON have the double-quoted keys and values
const jsonString = '{"name": "Alice", "age": 25}';

// Valid JavaScript object don't need quotes for keys
const jsObject = { name: "Alice", age: 25 };














const person = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "hiking"],
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  console.log(person.name); // "Alice"
  person.greet(); // "Hello, my name is Alice."