import { BaseDay } from '../base/base-day';
import { input } from './input';
import { ASCII } from './03-enums';

export class Day03 implements BaseDay {
    private priorities = this.getPriorities();

    partOne(): number {
        const data = this.getInputPart1();

        return data.reduce((total, row) =>
            total + this.unionStrings(row[0], row[1])
                        .reduce((totalInRow, currentInRow) => this.priorities[currentInRow], 0), 0);
    }

    partTwo(): number {
        const data = this.getInputPart2();

        return data.reduce((total, row) =>
                total + this.unionStrings(row[0], row[1], row[2])
                            .reduce((totalInRow, currentInRow) => this.priorities[currentInRow], 0)
            , 0)
    }

    private rangeArray = (from, to) => [...Array((to - from) + 1).keys()].map(i => String.fromCharCode(i + from));

    private getPriorities(): Record<string, number> {
        return [
            ...this.rangeArray(ASCII.a, ASCII.z),
            ...this.rangeArray(ASCII.A, ASCII.Z)]
            .reduce((result, current, currentIndex) => {
                return {...result, [current]: currentIndex + 1}
            }, {});
    }

    private unionStrings(first, ...rest): string[] {
        const firstArr = first.split('');
        const patterns = (rest || []).map(item => item.split(''));

        return firstArr.reduce((resultArr, currentItem) => {
            if (resultArr.includes(currentItem)) {
                return resultArr;
            }
            for (let i = 0; i < patterns.length; i++) {
                if (!patterns[i].includes(currentItem)) {
                    return resultArr;
                }
            }
            return [...resultArr, currentItem];
        }, []);
    }

    private getInputPart1(): string[][] {
        let halfLength;
        return input.trim().split('\n').map(row => {
            halfLength = (row.length / 2);
            return [row.slice(0, halfLength), row.slice(halfLength, row.length)];
        });
    }

    private getInputPart2(): string[][] {
        const inputAsArr = input.trim().split('\n');
        const parsedArr = [];

        for (let i = 0; i < inputAsArr.length - 2; i += 3) {
            parsedArr.push([
                inputAsArr[i],
                inputAsArr[i + 1],
                inputAsArr[i + 2]
            ]);
        }

        return parsedArr;
    }
}
