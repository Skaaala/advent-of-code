import { BaseDay } from '../base/base-day';
import { input } from './input';
import {
    HowTurnShouldEnd,
    MyTurn,
    OpponentTurn,
    RoundPoints,
} from './02-enums';

const TurnScore = {
    [MyTurn.ROCK]: 1,
    [MyTurn.PAPER]: 2,
    [MyTurn.SCISSORS]: 3,
}

const WINNING_COMBINATIONS: string[] = [
    `${OpponentTurn.ROCK}${MyTurn.PAPER}`,
    `${OpponentTurn.PAPER}${MyTurn.SCISSORS}`,
    `${OpponentTurn.SCISSORS}${MyTurn.ROCK}`,
];

const DRAW_COMBINATIONS: string[] = [
    `${OpponentTurn.ROCK}${MyTurn.ROCK}`,
    `${OpponentTurn.PAPER}${MyTurn.PAPER}`,
    `${OpponentTurn.SCISSORS}${MyTurn.SCISSORS}`,
];

const LOST_COMBINATIONS: string[] = [
    `${OpponentTurn.PAPER}${MyTurn.ROCK}`,
    `${OpponentTurn.SCISSORS}${MyTurn.PAPER}`,
    `${OpponentTurn.ROCK}${MyTurn.SCISSORS}`,
];

export class Day02 implements BaseDay {

    partOne(): number {
        const data = this.getInput2DArray();

        return data.reduce((total, round) => total + this.gameRoundResult(round[0] as OpponentTurn, round[1] as MyTurn), 0);
    }

    partTwo(): number {
        const data = this.getInput2DArray();
        let newRound;
        return data.reduce((total, round) => {
            newRound = this.chooseCorrectCombination(round[0] as OpponentTurn, round[1] as HowTurnShouldEnd);
            return round && round.length ? total + this.gameRoundResult(round[0] as OpponentTurn, round[1] as MyTurn) : 0;
        }, 0);
    }

    private gameRoundResult(opponent: OpponentTurn, me: MyTurn): number {
        let result = 0;
        let round = `${opponent}${me}`;

        if (WINNING_COMBINATIONS.indexOf(round) > -1) {
            result += RoundPoints.WIN;
        } else if (DRAW_COMBINATIONS.indexOf(round) > -1) {
            result += RoundPoints.DRAW;
        }

        return result + TurnScore[me];
    }

    private chooseCorrectCombination(opponent: OpponentTurn, shouldEnd: HowTurnShouldEnd): [OpponentTurn, MyTurn] | undefined {
        let combinationsArray: string[] = WINNING_COMBINATIONS;
        switch (shouldEnd) {
            case HowTurnShouldEnd.WIN:
                combinationsArray = WINNING_COMBINATIONS;
                break;
            case HowTurnShouldEnd.DRAW:
                combinationsArray = DRAW_COMBINATIONS;
                break;
            case HowTurnShouldEnd.LOST:
                combinationsArray = LOST_COMBINATIONS;
                break;
        }

        const newTurn = combinationsArray.find((combination: string) => combination[0] === opponent);

        return newTurn?.split('') as [OpponentTurn, MyTurn] || undefined;
    }

    private getInput2DArray(): string[][] {
        return input.split('\n')
            .filter(Boolean)
            .map(item => item.split(' '));
    }
}
