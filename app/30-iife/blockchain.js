(function () {
    'use strict';

    function hash(str) {
        var acc = 634563452;
        for (var i = 0; i < str.length; i++) {
            acc = acc * str.charCodeAt(i) % 3241234;
        }
        return acc;
    }

    var data = 'this is the initial block';
    var genesisBlock = {
        data: data,
        previous: undefined,
        hash: hash(data),
    };

    var blockchain = {
        lastBlock: genesisBlock,
        add: function (data) {
            this.lastBlock = {
                data: data,
                previous: this.lastBlock,
                hash: hash(data + this.lastBlock.hash),
            };
        },
        log: function() {
            var block = this.lastBlock;
            while (true) {
                console.log('block:[' + block.data + '], hash=' + block.hash);
                block = block.previous;
                if (block === undefined) {
                    break;
                }
            }
        }
    }

    // export
    window.blockchain = blockchain;

})();
