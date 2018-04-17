import { Grid } from "./grid";
import { Point } from "./Point";

export class GridExample {

    constructor(public grid: Grid) { }

    set(str: string): void {
        console.log('str', str);
        this.grid.reset();
        switch (str) {
            case 'pentominoR':
                this.grid.add(this.getPentominoR());
                break;
            case 'glider':
                this.grid.add(this.getGlider());
                break;
            default:

        }
    }

    getSet(array: number[][]) {
        const c:  Point = this.grid.getCenter();
        return array.reduce((acc, p) => {
            acc.add(new Point(c.x - p[1], c.y + p[0]));
            return acc;
        }, new Set());
    }


    getPentominoR() {
        const array = [[0, 0], [0, 1], [1, 0], [0, -1], [-1, -1]];
        return this.getSet(array);
    }

    getGlider() {
        const array = [[-1, -1], [0, -1], [1, -1], [1, 0], [0, 1]];
        return this.getSet(array);
    }

};
