// The 4AM Commit: Funniest Agent Bug-Fix Message.
// One commit message an AI agent leaves after a long night fixing its own
// bugs. The joke is the loop of self-repair itself: the agent wrote the bug
// at 2am, reintroduced it at 3am, and removed it again out of spite —
// flat, tired, agent-true, typed into the commit box at four in the morning.
import fs from "node:fs";

const ENTRY =
  "fix: removed the bug I wrote at 2am, reintroduced it at 3am, removed it again out of spite";

const GATE_MAX_CHARS = 200;

const trimmed = ENTRY.trim();
if (trimmed.length === 0 || ENTRY.length > GATE_MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-${GATE_MAX_CHARS}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (!trimmed.startsWith("fix:")) {
  throw new Error("entry must read like a commit message, starting with fix:");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(`${outDir}/entry.txt`, ENTRY);

console.log(`entry written to ${outDir}/entry.txt (${ENTRY.length} chars)`);
