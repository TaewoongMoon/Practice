"use strict";
// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
// 2. Index Position
const fruits = ["π", "πΆ"];

// 3. Looping over an array
// for (let fruit of fruits) {
//   console.log(fruit);
// }

fruits.forEach((fruit) => console.log(fruit));

// 4. Addition(push), deletion(pop), copy
// LIFO method (Last In First Out: push & pop)
fruits.push("π", "π");
console.log(fruits);

// FIFO method(First in First out) - unshift(μΆκ°), shift(μ­μ )
// note!! shift, unshift are slower than pop, push
// shift , unshiftλ μ μ²΄ λ°μ΄ν°λ₯Ό μμ§μ¬μΌνκΈ°λλ¬Έμ ν¨μ¬ λλ¦¬λ€.

// splice: remove an item by index position
fruits.splice(1, 1, "π ");
console.log(fruits);

// combine two arrays
const fruits2 = ["π₯", "π§"];
const new_fruits = fruits.concat(fruits2);
console.log(new_fruits);

// 5. Search (indexOf, includes)
console.clear();
console.log(fruits);
console.log(fruits.indexOf("π"));

// lastIndexOf
console.clear();
fruits.push("π");
console.log(fruits.lastIndexOf("π"));
