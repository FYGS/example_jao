import { Grid } from './grid';
import { Conway } from './conway';

const grid = new Grid(10, 20);

grid.render(document.querySelector('#root'));

grid.set(3, 2);

// setTimeout(() => {
//     grid.reset();
// }, 1000);

const conway = new Conway(grid);

conway.set([[5, 10], [5, 11], [5, 12]]);

conway.iterate(15);

