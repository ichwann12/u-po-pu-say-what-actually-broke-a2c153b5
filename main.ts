// Say What Actually Broke — make.fun entry
// Reads the one-line error copy from entry.txt in the repo root and writes
// it, exactly and nothing else, to entry.txt in the output directory.
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line = readFileSync(join(botDir, "entry.txt"), "utf8").trimEnd();

if (line.length === 0 || [...line].length > 200 || /[\r\n]/.test(line)) {
  throw new Error("entry line must be a single line of 1-200 characters");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
