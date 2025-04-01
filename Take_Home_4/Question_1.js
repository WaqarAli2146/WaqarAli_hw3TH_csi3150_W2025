const PI = 3.14159;
// PI = 3.15; // this would cause an error becuase you can't reassign a const variable
console.log(PI); // 3.14159

const obj = { name: "Alice" };
obj.name = "Bob";  // ths is allowed and would work because you can change properties of an object
console.log(obj);  // { name: "Bob" }
// obj = { age: 30 }; // this would cause an error becuase you can't reassign the entire object

















console.log(b); // b is hoisted and is returned as undefined but can still be called upon before it's been declared
var b = 2
console.log(b); // after being declared it retruns 2

if (true) {
  var a = 1;
}
console.log(a); // the output is 1 and the variable is still accessible, even outside the block












if (true) {
    let x = 10;  
    console.log(x);  // Works fine: 10
  }
  console.log(x); // This won't work because x only exists inside the curly braces `{}`.

let y = 5;
y = 7;  //This works
// let y = 8;  // if you try to declare y agin using a let it will cause an error since you can't redeclare the same variable in the same '{}' block
console.log(y); // this outputs 7


