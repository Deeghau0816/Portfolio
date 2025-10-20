import fs from "fs"; import path from "path";
const out="dist", src=path.join(out,"index.html"), dst=path.join(out,"404.html");
if (fs.existsSync(src)) fs.copyFileSync(src, dst);
