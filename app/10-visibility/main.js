function Person(name, age) {
    this.name = name;
    let privateAge = age;

    function privateTalk(p) {
        console.log('Hello! My name is %s and I am %d years old.', p.name, privateAge);
    }

    this.talk = function () {
        privateTalk(this);
    };
}

const alice = new Person('Alice', 23);
alice.talk();
const bob = new Person('Bob', 31);
bob.talk();

class PersonES6  {
    constructor(name, age) {
        this.name = name;
        let privateAge = age;

        function privateTalk(p) {
            console.log('Hi! My name is %s and I am %d years old.', p.name, privateAge);
        }
    
        this.talk = function () {
            privateTalk(this);
        };
    }
}

const charly = new PersonES6('Charly', 21);
charly.talk();
const dany = new PersonES6('Bob', 34);
dany.talk();
