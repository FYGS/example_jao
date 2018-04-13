const james = {
    name: 'Bond',
    age: 47
};
james.size = 1.85;
james[007] = 'licence to kill';
james.$$$ = 'casino';
james.___ = 'invisible';
james['#$%^&'] = 'don\'t be so rude please!';
Object.defineProperty(james, 'code', {
    value: '007',
    writable: false,
    configurable: false,
    enumerable: true,
});

console.log('james.code', james.code);

try {
    james.code = '009';
} catch (e) {
    console.log('error', e.message);
}
console.log('james.code', james.code);
