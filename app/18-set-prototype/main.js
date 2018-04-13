const alice = {
    name: 'Alice',
    age: 23
};
alice.__proto__ = {
    talk: function() {
        console.log('Hello! My name is %s and I am %d years old.', this.name, this.age);
    }
};
alice.talk();

const bob = {
    name: 'Alice',
    age: 23
};
Object.setPrototypeOf(bob, {
    talk: function() {
        console.log('Hi! My name is %s and I am %d years old.', this.name, this.age);
    }
});
bob.talk();

const charly = Object.create({
    talk: function() {
        console.log('Hey! My name is %s and I am %d years old.', this.name, this.age);
    }
});
charly.name = 'Charly';
charly['age'] = 25;

// why 2 ways for defining a property ?
// answer: try to have a property with name: 12$%^&...
// the dot notation only allows name starting with a-zA-Z_$ and followed by a-zA-Z0-9_$.

charly.talk();