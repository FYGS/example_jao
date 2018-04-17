import { Grid } from './grid';
import { Conway } from './conway';

const grid = new Grid(60, 60, 15);

grid.render(document.querySelector('#root'));
const conway = new Conway();
grid.setRuler(conway);

