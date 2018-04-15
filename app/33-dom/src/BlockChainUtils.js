export class BlockChainUtils {
    static render(blockchain, element) {
        let block = blockchain.lastBlock;
        const array = [];
        while (true) {
            array.push(block);
            block = block.previous;
            if (block === undefined) break;
        }

        const accumulator = array.reduce((acc, block) => acc + `
<li>
    <button id="blockchain-${block.id}">block ${block.id}</button>
    <span id="span-${block.id}"></span>
    <br><br></li>`, '');
        element.innerHTML = `<ul>${accumulator}</ul>`;

        array.forEach(block => {
            const button = element.querySelector(`#blockchain-${block.id}`);
            button.addEventListener('click', () => {
                element.querySelector(`#span-${block.id}`).innerHTML =
                    `data: ${block.data}, hash: ${block.hash}`
            });
        });
    }
}
