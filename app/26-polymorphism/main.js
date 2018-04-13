class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log('Hello! My name is %s and I am %d years old.', this.name, this.age);
    }
}

const alice = new Person('Alice', 21);
alice.talk = function() {
    console.log('Hello! My name is %s and I go to the Country of Hearts', this.name);
}

alice.talk();
// Hey Alice, do like everybody please...
delete alice.talk;
alice.talk();
