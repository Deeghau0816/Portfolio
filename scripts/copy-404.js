// scripts/copy-404.js
import fs from "fs";
import path from "path";

const out = "dist";
const src = path.join(out, "index.html");
const dst = path.join(out, "404.html");

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dst);
  console.log("Created dist/404.html for SPA routing.");
} else {
  console.warn("index.html not found in dist. Did the build succeed?");
}
