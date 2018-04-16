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

        return sleep(1000).then(() => {
            console.log('set');
            this.set(newPoints);
            this.points = newPoints;
        });
    }

    compute(): Point[] {
        let result = [];
        console.log('this.grid.getCellList()', this.grid.getCellList());
        this.grid.getCellList().forEach(p => {
            const around = this.getAround(p);
            const n = around.reduce((acc, ap) => {
                let result = acc;
                if (this.isAlive(ap)) {
                    result++;
                }
                return result;
            }, 0);
            console.log('n', n);
            if (n > 3 || n < 2) {

                // do not add this cell
            } else if (n === 3) {
                result.push(p);
            } else if (n === 2) {
                if (this.isAlive(p)) {
                    result.push(p);
                }
            }
        });
        return result;
    }

    getAround(p): Point[] {
        return [[p[0] - 1, p[1] - 1], [p[0] - 1, p[1]], [p[0] - 1, p[1] + 1],
        [p[0], p[1] - 1], [p[0], p[1] + 1],
        [p[0] + 1, p[1] - 1], [p[0] + 1, p[1]], [p[0] + 1], p[1] + 1];
    }

    isAlive(ap) {
        return this.points.find(p => p[0] === ap[0] && p[1] === ap[1]) !== undefined;
    }

}
