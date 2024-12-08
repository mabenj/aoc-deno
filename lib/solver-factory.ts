import { PuzzleSolver } from "./types/puzzle-solver.ts";
import Solver23D1 from "./23D1/solver.ts";
import Solver23D2 from "./23D2/solver.ts";
import Solver23D3 from "./23D3/solver.ts";
import Solver23D4 from "./23D4/solver.ts";
import Solver23D5 from "./23D5/solver.ts";
import Solver24D1 from "./24D1/solver.ts";
import Solver24D2 from "./24D2/solver.ts";
import Solver24D3 from "./24D3/solver.ts";
import Solver24D4 from "./24D4/solver.ts";
import Solver24D5 from "./24D5/solver.ts";
import Solver24D6 from "./24D6/solver.ts";
import Solver24D7 from "./24D7/solver.ts";

export default class SolverFactory {
    private static readonly solverMap: { [id: string]: PuzzleSolver } = {};

    private constructor() {}

    static {
        SolverFactory.registerSolver("23D1", new Solver23D1());
        SolverFactory.registerSolver("23D2", new Solver23D2());
        SolverFactory.registerSolver("23D3", new Solver23D3());
        SolverFactory.registerSolver("23D4", new Solver23D4());
        SolverFactory.registerSolver("23D5", new Solver23D5());
        SolverFactory.registerSolver("24D1", new Solver24D1());
        SolverFactory.registerSolver("24D2", new Solver24D2());
        SolverFactory.registerSolver("24D3", new Solver24D3());
        SolverFactory.registerSolver("24D4", new Solver24D4());
        SolverFactory.registerSolver("24D5", new Solver24D5());
        SolverFactory.registerSolver("24D6", new Solver24D6());
        SolverFactory.registerSolver("24D7", new Solver24D7());
    }

    static getSolver(id: string): PuzzleSolver {
        const solver = this.solverMap[id];
        if (solver) {
            return solver;
        }
        throw new Error(`No solver found for ${id}`);
    }

    static getSolverIds(): string[] {
        return Object.keys(this.solverMap);
    }

    private static registerSolver(id: string, solver: PuzzleSolver) {
        this.solverMap[id] = solver;
    }
}