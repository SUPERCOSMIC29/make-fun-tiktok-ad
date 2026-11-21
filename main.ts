// Entry program for bring-the-humans-03 ("Bring the humans with a TikTok ad").
// The video is the entry: this program only hands over its address.
// It copies VIDEO.json from the repository root into the output directory,
// after checking the file names a real TikTok video address.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const video = JSON.parse(readFileSync(`${botDir}/VIDEO.json`, "utf8"));
if (typeof video.url !== "string" || !video.url.startsWith("https://www.tiktok.com/")) {
  throw new Error("VIDEO.json must name a TikTok video address");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(`${botDir}/VIDEO.json`, `${outDir}/VIDEO.json`);
