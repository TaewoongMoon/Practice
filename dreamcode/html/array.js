"use strict";
// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
// 2. Index Position
const fruits = ["🍎", "🌶"];

// 3. Looping over an array
// for (let fruit of fruits) {
//   console.log(fruit);
// }

fruits.forEach((fruit) => console.log(fruit));

// 4. Addition(push), deletion(pop), copy
// LIFO method (Last In First Out: push & pop)
fruits.push("🍅", "🍋");
console.log(fruits);

// FIFO method(First in First out) - unshift(추가), shift(삭제)
// note!! shift, unshift are slower than pop, push
// shift , unshift는 전체 데이터를 움직여야하기때문에 훨씬 느리다.

// splice: remove an item by index position
fruits.splice(1, 1, "🍠");
console.log(fruits);

// combine two arrays
const fruits2 = ["🥒", "🧅"];
const new_fruits = fruits.concat(fruits2);
console.log(new_fruits);

// 5. Search (indexOf, includes)
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍎"));

// lastIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits.lastIndexOf("🍎"));
