function Person(name, age) {
    function talk() {
        console.log('Hello! My name is %s and I am %d years old.', this.name, this.age);
    }
    return {name, age, talk};
}

const alice = new Person('Alice', 21);
alice.talk();

// what does 'new' ?
// 1) const __a__ = Object.create(Person.prototype});
// 2) const __b__ = Person.bind(__a__)(name, age)
// 3) return (__b__ === undefined) ?  __a__ : __b__;
