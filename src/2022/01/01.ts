import { BaseDay } from '../base/base-day';
import { input } from './input';

export class Day01 implements BaseDay {

    partOne(): number {
        const data = this.getInput();

        // find max
        return Math.max(...data.map(row => row.reduce((a, b) => a + b, 0)));
    }

    partTwo(): number {
        const data = this.getInput();

        // find max
        return data.map(row =>
            row.reduce((a, b) => a + b, 0))
                .sort((a, b) => a - b)
                .splice(-3).reduce((a, b) => a + b, 0);
    }

    private getInput(): number[][] {
        return input.split('\n\n')
            .map(row =>
                row.replace(/\n/gmi, ' ')
                    .trim()
                    .split(' ')
                    .map(v => +v)
            )
    }
}
