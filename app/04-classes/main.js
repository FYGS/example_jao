function Person(name, age) {
    this.name = name;
    this.age = age;
    this.talk = function() {
        console.log('Hello! My name is %s and I am %d years old.', this.name, this.age);
    }
}


const alice = new Person('Alice', 23);
alice.talk();
const bob = new Person('Bob', 23);
bob.talk();
