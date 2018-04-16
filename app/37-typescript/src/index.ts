import { Grid } from './grid';

const grid = new Grid(10, 20);

grid.render(document.querySelector('#root'));

grid.getCell(3, 2).classList.add('active');

// const conway = new Conway(grid);

// conway.set([[5, 10], [5, 11], [5, 12]]);

// conway.iterate(10);

