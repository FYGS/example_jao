'use strict';

class System {

    constructor() {
        if (System.instance !== null) {
            throw 'forbidden';
        }
        console.log('building the system.');
        this.name = 'Main system';
        System.instance = this;
    }

    // singleton design pattern
    static getInstance() {
        if (System.instance === null) {
            new System();
        }
        return System.instance;
    }
}
// static variable
System.instance = null;
new System();

const system = System.getInstance();
console.log('system', system);
const system2 = System.getInstance();
console.log('system2', system2);
console.log('system === system2', system === system2);


// exercice : rewrite this in ES5.