import { Grid } from "./grid";

const sleep = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

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

    iterate(n: number) {
        let p = Promise.resolve();

        for (let i = 0; i < n; i++) {
            p = p.then(() => {
                return this.iterateOnce();
            });
        }
    }

    iterateOnce() {

        const newPoints = this.compute();

        return sleep(200).then(() => {
            console.log('set');
            this.set(newPoints);
            this.points = newPoints;
        });
    }

    compute(): Point[] {
        return this.points.map(p => {
            const x = p[0];
            return [p[0], p[1] + 1] as Point;
        });
    }
}
