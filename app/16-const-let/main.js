'use strict';

// would make an error...
// console.log('alice', alice);
const alice = {
    name: 'Alice'
};
console.log('alice', alice);

{
    const alice = {
        name: 'Alice hacked'
    };
    console.log('alice', alice);
    // would make an error...
    // console.log('bob', bob); 
    const bob = 'Bob';
    console.log('bob', bob);
}

console.log('alice', alice);

// would make an error...
// console.log('i', i);
for (let i = 0; i < 3; i++) {
    console.log('i', i);
}
// would make an error...
// console.log('i', i);