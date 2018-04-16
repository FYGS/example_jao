import { Grid, Point } from "./grid";

const sleep = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

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
        return sleep(200).then(() => {
            const newPoints = this.compute();
            this.set(newPoints);
            this.points = newPoints;
        });
    }

    compute(): Point[] {
        let result = [];
        this.grid.getCellList().forEach(p => {
            const around = this.getAround(p);

            const n = around.reduce((acc, ap) => {
                let result = acc;
                if (this.isAlive(ap)) {
                    result++;
                }
                return result;
            }, 0);
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

    getAround(p: Point): Point[] {
        return [[p[0] - 1, p[1] - 1], [p[0] - 1, p[1]], [p[0] - 1, p[1] + 1],
        [p[0], p[1] - 1], [p[0], p[1] + 1],
        [p[0] + 1, p[1] - 1], [p[0] + 1, p[1]], [p[0] + 1, p[1] + 1]];
    }

    isAlive(ap: Point) {
        return this.points.find(p => p[0] === ap[0] && p[1] === ap[1]) !== undefined;
    }

    setBar(n: number) {
        const array = new Array(n).fill(0).map((n, i) => <Point>[Math.floor(this.grid.row / 2), Math.floor(this.grid.col / 3) + i]);
        this.set(array);
    }

    setDBar(n: number) {
        const array = new Array(n).fill(0).map((n, i) => <Point>[Math.floor(this.grid.row / 2), Math.floor(this.grid.col / 3) + i]);
        const array2 = new Array(n).fill(0).map((n, i) => <Point>[Math.floor(this.grid.row / 2) + 1, Math.floor(this.grid.col / 3) + i]);
        const a = array.concat(array2);
        this.set(a);
    }

}
