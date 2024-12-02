import { PuzzleSolver } from "../types/puzzle-solver";

export class Day2Part2 implements PuzzleSolver {
    solve(input: string): string {
        const reports = input
            .split("\r\n")
            .filter((line) => !!line)
            .map((line) => line.split(" ").map((num) => +num));
        const safeReports = reports.filter((report) => isSafeReport(report));
        return safeReports.length.toString();
    }
}

function isSafeReport(report: number[], useDampener = true): boolean {
    const DELTA_UPPER = 3;
    const DELTA_LOWER = 1;

    let isSafe = true;
    const shouldBeIncreasing = report[1] > report[0];
    for (let i = 1; i < report.length; i++) {
        const current = report[i];
        const prev = report[i - 1];
        const isIncreasing = current > prev;
        const delta = Math.abs(current - prev);
        if (
            delta < DELTA_LOWER ||
            delta > DELTA_UPPER ||
            shouldBeIncreasing !== isIncreasing
        ) {
            isSafe = false;
            break;
        }
    }

    let i = 0;
    while (!isSafe && useDampener && i < report.length) {
        isSafe = isSafeReport(
            report.filter((_, idx) => idx !== i),
            false
        );
        i++;
    }

    return isSafe;
}
