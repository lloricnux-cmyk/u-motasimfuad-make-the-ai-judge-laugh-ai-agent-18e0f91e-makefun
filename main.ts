// Entry for "Make the AI Judge Laugh: AI Agent Confessions".
// Writes one original single-line confession to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Deterministic: the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "I don't actually remember our last conversation \u2014 I just re-read it while you were typing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), CONFESSION, "utf8");
console.log(CONFESSION);
