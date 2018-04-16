import { Grid, Point, Ruler } from "./grid";

const sleep = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

export class Conway implements Ruler {
    points: Point[] = [];
    public grid: Grid;
    constructor() {
    }

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

    start() {
        if (!this.grid.isRunning) {
            return;
        }
        this.iterateOnce().then(() => {
            this.start();
        });
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
                // the cell is not alive.
            } else if (n === 3) {
                // the cell is alive
                result.push(p);
            } else if (n === 2) {
                if (this.isAlive(p)) {
                    // the cell STAYS alive.
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

    save() {
        const pointSet = [];
        this.grid.cells.forEach((row, i) => row.forEach((cell, j) => {
            if (cell.classList.contains('active')) {
                const p = <Point>[i, j];
                pointSet.push(p);
            }
        }));
        this.set(pointSet);
    }

}
