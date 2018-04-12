// here is a empty object with object prototype.
console.log('emptyWithProto', {});

// here is a empty object without prototype.
const empty = Object.create(null);
console.log('empty', empty);

Smartphone = {
    start: function() {
        console.log('%s start', this.name)
    },
    stop: function() {
        console.log('%s stop', this.name)
    }
};

const iPhone = Object.create(Smartphone);
iPhone.name = 'iPhone';
iPhone.start();
iPhone.stop();
console.log('iPhone', iPhone);
