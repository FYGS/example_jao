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

const bond = x => '007';
james[bond] = 'licence to kill';
console.log('james', james);

const bond2 = x => '007';
console.log('bond === bond2', bond === bond2);
console.log('james[bond2]', james[bond2]);

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

