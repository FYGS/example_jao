import { Grid } from './grid';
import { Conway } from './conway';

const grid = new Grid(30, 30);

grid.render(document.querySelector('#root'));
const conway = new Conway();
grid.setRuler(conway);

