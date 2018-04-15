'use strict';

import jshashes from 'jshashes';

const hash =jshashes.SHA1().hex;

const data = 'this is the initial block';
const genesisBlock = { data: data, previous: undefined, hash: hash(data) };
const blockchain = {
    lastBlock: genesisBlock,
    add: function (data) {
        this.lastBlock = {
            data: data,
            previous: this.lastBlock,
            hash: hash(data + this.lastBlock.hash),
        };
    },
    log: function () {
        var block = this.lastBlock;
        while (true) {
            console.log('block:[' + block.data + '], hash=' + block.hash);
            block = block.previous;
            if (block === undefined) break;
        }
    }
}
export default blockchain; // export ES6 (webpack)
