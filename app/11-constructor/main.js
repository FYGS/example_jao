// here is a constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function() {
    console.log('Hello! My name is %s and I am %d years old.', this.name, this.age);
}

// A constructor is a function.
console.log('Person instanceof Function', Person instanceof Function);
console.log('Function instanceof Object', Function instanceof Object);

// A constructor cannot be called just like a function. 
// We need to tell him that the 'this' keyword is the object that it has to build.
// This is what the 'new' method is doing.
const alice = new Person('Alice', 23);
alice.talk();

// The new operator does exactly the following:
const bob = {};
bob.__proto__ = Person.prototype;
Person.bind(bob)('Bob', 31); // run the Person function with 'this' replaced by 'bob'.
bob.talk();

// The Object.create can be also used.
const charly = Object.create(Person.prototype);
Person.bind(charly)('Charly', 24);
charly.talk();