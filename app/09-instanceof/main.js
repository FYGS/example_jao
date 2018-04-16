console.log('3 instanceof Object', 3 instanceof Object);
console.log('"hello" instanceof Object', 'hello' instanceof String);
console.log('new String("hello") instanceof Object', new String('hello') instanceof String);
console.log('undefined instanceof Object', undefined instanceof Object);
console.log('null instanceof Object', null instanceof Object);

console.log('{} instanceof Object', {} instanceof Object);
console.log('function() {} instanceof Object', function() {} instanceof Object);
console.log('() => {} instanceof Object', (() => {}) instanceof Object);
console.log('class {} instanceof Object', class {} instanceof Object);

// a little bit deeper...
console.log('Object instanceof Function', Object instanceof Function);
console.log('Function instanceof Object', Function instanceof Object);
