function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log('Hello! My name is %s and I am %d years old.', this.name, this.age);
}

function Employee(name, age, company, salary) {
    Person.bind(this)(name, age);
    this.company = company;
    this.salary = salary;
}

Employee.prototype.__proto__ = Person.prototype;
Employee.prototype.reward = function (percentage) {
    this.salary *= 1 + (percentage / 100);
    console.log(`Congratulations ${this.name}!!!
You have been rewarded!
Salary increased by ${percentage}%: new salary: ${this.salary}`);
};

const alice = new Employee('Alice', 21, 'JLG Consulting', 2500);
alice.talk();
alice.reward(3);
alice.reward(2);
