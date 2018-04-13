let a = 3;
let b = a;

a = 5;
console.log('a', a);
console.log('b', b);

a = {x: 2};
b = a;
a.x = 7;
console.log('a', a);
console.log('b', b);
