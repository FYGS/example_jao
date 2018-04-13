let o = {
    a: 3,
    b: {
        c: 4,
        d: {
            e: 'hello'
        }
    }
};

function clone(obj) {
    const result = {};
    for (let p in obj) {
        if (obj[p] instanceof Object) {
            result[p] = clone(obj[p]);
        } else {
            result[p] = obj[p];
        }
    }
    return result;
}

const p = clone(o);
console.log('p', p);
console.log('p === o', p === o);
console.log('p.b.d === o.b.d', p.b.d === o.b.d);
console.log('p.b.d.e === o.b.d.e', p.b.d.e === o.b.d.e);

