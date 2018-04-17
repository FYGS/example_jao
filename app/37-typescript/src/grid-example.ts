import { Grid } from "./grid";
import { Point } from "./Point";

export class GridExample {

    points: Set<Point>;

    constructor(public grid: Grid) { }

    set(str: string): void {
        console.log('str', str);
        this.grid.reset();
        switch (str) {
            case 'pentominoR':
                this.getPentominoR();
                break;
            case 'glider':
                this.getGlider();
                break;
            case 'LWSS':
                this.getLWSS();
                break;
            default:

        }
        this.grid.add(this.points);
    }

    getSet(array: number[][]) {
        const c: Point = this.grid.getCenter();
        this.points = array.reduce((acc, p) => {
            acc.add(new Point(c.x - p[1], c.y + p[0]));
            return acc;
        }, new Set());
    }


    getPentominoR() {
        this.getSet([[0, 0], [0, 1], [1, 0], [0, -1], [-1, -1]]);
    }

    getGlider() {
        this.getSet([[-1, -1], [0, -1], [1, -1], [1, 0], [0, 1]]);
    }

    getLWSS() {
        this.getSet([[-3, 3], [0, 3], [1, 2], [-3, 1], [1, 1], [-2, 0], [-1, 0], [0, 0], [1, 0]]);
    }

};
