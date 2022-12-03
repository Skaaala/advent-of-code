import { BaseDay } from './2022/base/base-day';
import { Day01 } from './2022/01/01';
import { Day02 } from './2022/02/02';
import { Day03 } from './2022/03/03';

const resultOfDay = (day: BaseDay) => {
    console.log('First part')
    console.log(day.partOne());
    console.log('\nSecond part');
    console.log(day.partTwo());
}

export function main() {
    //resultOfDay(new Day01());
    //resultOfDay(new Day02());
    resultOfDay(new Day03());
}

main();

export * from './2022/index'
