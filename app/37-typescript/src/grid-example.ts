import { Grid } from "./grid";
import { Point } from "./Point";

export class GridExample {

    points: Set<Point>;

    constructor(public grid: Grid) { }

    getMakeMethodNames() {
        return Object.getOwnPropertyNames(GridExample.prototype).filter(m => m.startsWith('make'));
    }

    set(str: string): void {
        console.log('str', str);
        this.grid.reset();
        const methodNames = this.getMakeMethodNames().filter(m => m.substr('make'.length) === str);

        if (methodNames.length === 0) {
            throw new Error('Make method not found.');
        }

        this[methodNames[0]]();
        this.grid.add(this.points);
    }

    buildSet(array: number[][]) {
        const c: Point = this.grid.getCenter();
        this.points = array.reduce((acc, p) => {
            acc.add(new Point(c.x - p[1], c.y + p[0]));
            return acc;
        }, new Set());
    }

    makeEmpty() {
        this.buildSet([]);
    }

    makePentominoR() {
        this.buildSet([[0, 0], [0, 1], [1, 0], [0, -1], [-1, -1]]);
    }

    makeGlider() {
        this.buildSet([[-1, -1], [0, -1], [1, -1], [1, 0], [0, 1]]);
    }

    makeLWSS() {
        this.buildSet([[-3, 3], [0, 3], [1, 2], [-3, 1], [1, 1], [-2, 0], [-1, 0], [0, 0], [1, 0]]);
    }

    makeF() {
        this.buildSet([[-2, 6], [-1, 6], [0, 6], [-2, 5], [-2, 4], [-1, 4], [-2, 3], [-2, 2], [-2, 1]]);
    }

};
