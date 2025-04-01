



const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]








const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]



let sum = 0;
numbers.forEach(num => {
  sum += num;
  console.log("Visited:", num);
});
console.log("Total sum:", sum);





const numbers = [1, 2, 3, 4, 5];



