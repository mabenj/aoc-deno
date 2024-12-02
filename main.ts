import { parseArgs } from "jsr:@std/cli/parse-args";
import solve from "./lib/commands/solve.ts";
import init from "./lib/commands/init.ts";
import "jsr:@std/dotenv/load";

const flags = parseArgs(Deno.args, {
    string: ["d", "day", "p", "part", "y", "year"],
});

async function main() {
    const verb = flags._[0]?.toString()?.toLowerCase();
    const day = flags.d || flags.day;
    const part = flags.p || flags.part || "";
    const year = flags.y || flags.year || "24";

    switch (verb) {
        case "solve":
            if (!day || !["1", "2"].includes(part)) {
                printUsage();
                break;
            }
            await solve(`${year}D${day}`, part);
            break;
        case "init":
            if (!day) {
                printUsage();
                break;
            }
            await init(year, day);
            break;
        default: {
            printUsage();
        }
    }
}

function printUsage() {
    console.log("Usage:");
    console.log("    main.ts solve -d <day> -p <1 | 2> [-y <year>]");
    console.log("    main.ts init -d <day> [-y <year>]");
}

if (import.meta.main) {
    main()
        .then(() => Deno.exit(0))
        .catch((e) => {
            console.error(e);
            Deno.exit(1);
        });
}
