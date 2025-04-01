const Person = (name) => {
    this.name = name;
  };
  
  // new Person("Alice"); // this would cause an Error, Arrow functions can't be constructors
  



















const person = {
    name: "Lily",
    
    // Regular function
    sayHi: function() { 
      console.log("Hi, I'm " + this.name); 
    },
    
    // Arrow function
    sayHiArrow: () => { 
      console.log("Hi, I'm " + this.name); 
    }
  };
  
  person.sayHi();      // "Hi, I'm Lily"
  person.sayHiArrow(); // "Hi, I'm undefined" doesn't work
  

















// a normal function
function add(a, b) {
    return a + b;
  }
  
  // Arrow function version
  const addArrow = (a, b) => a + b;
  
  console.log(add(2, 3));      // 5
  console.log(addArrow(2, 3)); // 5
  