const fs = require("fs");
const { resolve } = require("path");
const shelljs = require("shelljs");

let files = fs.readdirSync("./lib");

for (const file of files) {
  if (file === "easi-packages-antd") {
    let indexContent = fs.readFileSync(resolve(__dirname, `../lib/${file}/index.d.ts`), "utf-8");
    let versionContent = fs.readFileSync(resolve(__dirname, `../lib/${file}/version.d.ts`), "utf-8");
    indexContent = indexContent.replace(/\.\.\//g, "./");
    if (fs.existsSync(resolve(__dirname, `../lib/index.d.ts`))) {
      shelljs.rm("-r", resolve(__dirname, `../lib/index.d.ts`));
    }
    if (fs.existsSync(resolve(__dirname, `../lib/version.d.ts`))) {
      shelljs.rm("-r", resolve(__dirname, `../lib/version.d.ts`));
    }
    shelljs.rm("-rf", resolve(__dirname, `../lib/${file}`));
    fs.writeFileSync(resolve(__dirname, `../lib/index.d.ts`), indexContent);
    fs.writeFileSync(resolve(__dirname, `../lib/version.d.ts`), versionContent);
  }
}
