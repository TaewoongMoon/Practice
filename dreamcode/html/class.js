"use strict";
// Object-oriented programming
// class: template
// object: instance of a class
// Javascript classes
//     - introduced in ES6
//     - syntactical sugar over prototype-based inheritance

class Person {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name} : hello!`);
  }
}
const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setter
class User {
  constructor(firstName, SecondName, age) {
    this.firstName = firstName;
    this.SecondName = SecondName;
    this.age = age;
  }
}

const user1 = new User("Steve", "Jobs", -1);
console.log(user1);
