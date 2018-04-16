import { Grid } from "./grid";

type Point = [number, number];

export class Conway {
    points: Point[] = [];
    constructor(public grid: Grid) { }

    set(array: Point[]) {
        this.points = array;
        this.render();
    }

    render() {
        this.grid.reset();
        this.points.forEach(p => {
            this.grid.set(p[0], p[1]);
        });
    }

    iterate() {

    }
}
