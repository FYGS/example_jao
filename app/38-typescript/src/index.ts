import { Grid } from './grid';
import { Conway } from './conway';

const grid = new Grid(50, 150, 4);

grid.render(document.querySelector('#root'));
const conway = new Conway();
grid.setRuler(conway);

