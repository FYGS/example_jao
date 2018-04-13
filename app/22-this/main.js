'use strict';

this.foo = 'bar';
if (typeof global !== 'undefined') {
    // nodeJS case
    console.log('global.foo', global.foo)
} else {
    // navigator case
    console.log('window.foo', window.foo)
}

function hello(name) {
    console.log(`${name}: hello`, this);
}

hello();

const hello2 = hello.bind('Alice');
hello2('Dany');

hello.call('Bob', 'Dany');
hello.apply('Charly', ['Dany']);

const emily = {
    name: 'Emily',
    age: 39,
    hello
};
emily.hello('Fanny');
