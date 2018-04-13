'use strict';

const james = {
    name: 'Bond',
    age: 47
};
james.size = 1.85;
// not allowed in strict mode
// james[007] = 'licence to kill';
james[7] = 'where is my 00?'
james.$$$ = 'casino';
james.___ = 'invisible';
james['#$%^&'] = 'don\'t be so rude please!';
Object.defineProperty(james, 'code', {
    value: '007',
    writable: false,
});

console.log('james.code', james.code);

try {
    // will throw an error only in strict mode.
    james.code = '009';
} catch (e) {
    console.log('error', e.message);
}
console.log('james.code', james.code);
