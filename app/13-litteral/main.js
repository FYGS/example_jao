var country = {
    name: 'France',
    population: 65000000,
    monarchy: false,
};

// equivalent with Object.create:

var country2 = Object.create(Object.prototype);
country2.name = 'France';
country2.population = 65000000;
country2.monarchy = false;

// and equivalent to:
var country2 = new Object();
country2.name = 'France';
country2.population = 65000000;
country2.monarchy = false;

console.log('Object %O', Object);