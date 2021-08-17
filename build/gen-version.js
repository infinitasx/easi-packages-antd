const fs = require("fs");
const path = require("path");
const tagVer = process.env.TAG_VERSION;
if (tagVer) {
  version = tagVer.startsWith("v") ? tagVer.slice(1) : tagVer;
} else {
  version = require("../package.json").version;
}

function readCtx(filePath) {
  return fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
}

function writeCtx(filePath, ctx) {
  if (!filePath) return;
  fs.writeFileSync(path.resolve(__dirname, filePath), ctx);
}

function editReadme(filePath) {
  const fileCtx = readCtx(filePath);
  writeCtx(
    filePath,
    fileCtx.replace(/(https:\/\/static\.easiglobal\.com\/easi-packages-antd).*(website\/index\.html)/g, `https://static.easiglobal.com/easi-packages-antd/${version}/website/index.html`)
  );
}

function editPackage(filePath) {
  const fileCtx = readCtx(filePath);
  if (fileCtx) {
    const ctx = JSON.parse(fileCtx);
    ctx.homepage = `https://static.easiglobal.com/easi-packages-antd/${version}/website/index.html`;
    writeCtx(filePath, JSON.stringify(ctx, null, 2));
  }
}

writeCtx("../packages/easi-packages-antd/version.ts", `export const version = '${version}'`);
editReadme("../README.md");
editPackage("../package.json");
