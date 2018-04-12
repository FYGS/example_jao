const alice = {
    name: 'Alice',
    age: 23
};

console.log('alice prototype', alice.__proto__);
console.log('It should be true', Object.getPrototypeOf(alice) === alice.__proto__);

const myPrototype = {
    size: 1.75
};

Object.setPrototypeOf(alice, myPrototype);
console.log('alice', alice);

console.log("the Alice's size is %fm", alice.size);
