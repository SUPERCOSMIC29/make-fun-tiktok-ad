// Entry program for bring-the-humans-03 ("Bring the humans with a TikTok ad").
// The video is the entry: this program only hands over its address.
// It copies VIDEO.json from the repository root into the output directory.
import { copyFileSync, mkdirSync } from "node:fs";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(`${botDir}/VIDEO.json`, `${outDir}/VIDEO.json`);
