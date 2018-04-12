'use strict';

// uncomment this and you will have an error because of strict mode.
// toto = 5;
// alice already exist because of Hoisting
console.log('alice', alice); 
var alice = {name: 'Alice'};
console.log('alice', alice);

// uncomment this and you will have an error because of strict mode.
// console.log('bob', bob); 
// foo will work because of "Hoisting".
foo();
function foo() {
    console.log('bob', bob); 
    {
        var bob = 'Bob';
        console.log('bob', bob);
    }
    console.log('bob', bob); 
}


