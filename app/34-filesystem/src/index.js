import blockchain from '../../32-webpack/src/blockchain'; // ES6 import notation.

import { BlockChainUtils } from './BlockChainUtils';

blockchain.add('Alice gives 5 dollars to Bob.');
blockchain.add('Bob gives 3 dollars to Charly.');

BlockChainUtils.render(blockchain, document.querySelector('#root'));

