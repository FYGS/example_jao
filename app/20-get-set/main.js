const alice = {
    name: 'Alice',
    get age() {
        console.log('[pssst... Someone want to know my age!]');
        return this.__hidden__.age;
    },
    set age(age) {
        if (this.__hidden__.age > age) {
            console.log('Cool! I become younger and younger!');
            this.__hidden__.age = age;
        }
        if (this.__hidden__.age < age) {
            throw new Error(`I don't want to get older! My age is ${this.__hidden__.age}! Not more!`);
        }
        if (isNaN(+age)) throw new Error(`age must be a number.`);
    },
    __hidden__: {
        age: 21,
    },
    talk: function () {
        console.log('Hello! My name is %s and I am %d years old.', this.name, this.age);
    }
}

alice.talk();
try {
    alice.age = 'twenty nine';
} catch (e) {
    console.log('error', e.message);
}
try {
    alice.age = 29;
} catch (e) {
    console.log('error', e.message);
}
alice.age = 19;