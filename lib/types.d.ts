interface BaseDay {
    partOne(): number;
    partTwo(): number;
}
export class Day01 implements BaseDay {
    partOne(): number;
    partTwo(): number;
}
export enum OpponentTurn {
    ROCK = "A",
    PAPER = "B",
    SCISSORS = "C"
}
export enum MyTurn {
    ROCK = "X",
    PAPER = "Y",
    SCISSORS = "Z"
}
export enum HowTurnShouldEnd {
    LOST = "X",
    DRAW = "Y",
    WIN = "Z"
}
export enum RoundPoints {
    LOST = 0,
    DRAW = 3,
    WIN = 6
}
export class Day02 implements BaseDay {
    partOne(): number;
    partTwo(): number;
}
export enum ASCII {
    a = 97,
    z = 122,
    A = 65,
    Z = 90
}
export class Day03 implements BaseDay {
    partOne(): number;
    partTwo(): number;
}
export function main(): void;

//# sourceMappingURL=types.d.ts.map
