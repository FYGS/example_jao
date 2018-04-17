import { Grid } from './grid';
import { Conway } from './conway';

const grid = new Grid(800, 800, 1);

grid.render(document.querySelector('#root'));
const conway = new Conway();
grid.setRuler(conway);

