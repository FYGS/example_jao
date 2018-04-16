import { Grid } from './grid';
import { Conway } from './conway';

const grid = new Grid(30, 30);

grid.render(document.querySelector('#root'));
const conway = new Conway();
grid.setRuler(conway);

// conway.setDBar(20);

// conway.set([[10, 14], [10, 15], [10, 16], [10, 17], [10, 18], [10, 19], [10, 20]]);


