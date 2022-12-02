declare abstract class BaseDay {
    abstract partOne(): number;
    abstract partTwo(): number;
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

//# sourceMappingURL=types.d.ts.map
