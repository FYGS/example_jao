import { Grid } from './grid';
import { Conway } from './conway';

const grid = new Grid(5, 8);

grid.render(document.querySelector('#root'));

grid.set(3, 2);

// setTimeout(() => {
//     grid.reset();
// }, 1000);

const conway = new Conway(grid);

conway.set([[2, 4], [2, 5], [2, 6]]);

conway.iterate(10);

