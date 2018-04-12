const someone = {
    name: 'Alice',
    age: 23,
    talk: function() {
        console.log('Hello! My name is %s and I am %d years old.', this.name, this.age);
    }
}

someone.talk();
someone.name = 'Bob';
someone.talk();
someone.age = 31;
someone.talk();
