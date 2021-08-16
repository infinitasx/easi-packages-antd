import marked from "marked";
import camelCase from "lodash/camelCase";
import fse from "fs-extra";
import { resolve } from "path";
import mdRenderer from "./mdRenderer";
import { genScript } from "./mdToVue";

const resolveDemoTitle = (fileName, filePath) => {
  if (!fse.pathExistsSync(resolve(filePath, "..", fileName))) throw Error(`${fileName}文件不存在`);
  const ctx = fse.readFileSync(resolve(filePath, "..", fileName), "utf-8");
  return ctx;
};

const genDemosTemplate = (demoInfos) => {
  const ctx = `<div class="container">${demoInfos.map(({ tag }) => tag).join("\n")}</div>`;
  return ctx;
};

export default (context, path) => {
  const tokens = marked.lexer(context);
  let infos = [];
  tokens.forEach((item, index) => {
    if (item.type === "code" && item.lang === "demo") {
      const flies = item.text
        .split("\n")
        .map((line) => line.trim())
        .filter((id) => id);
      for (const id of flies) {
        const fileName = `${id}.demo.md`;
        const component = `${camelCase(id)}Demo`;
        infos.push({
          id,
          fileName,
          component,
          tag: `<${component} />`,
          ctx: resolveDemoTitle(fileName, path),
        });
      }
      tokens[index] = {
        type: "html",
        pre: false,
        text: genDemosTemplate(infos),
      };
    }
  });

  const docMainTemplate = marked.parser(tokens, {
    gfm: true,
    renderer: mdRenderer(),
  });

  const docTmp = `<template><div class="markdown">${docMainTemplate}</div></template>`;

  const scrptTmp = genScript(infos, []);
  return `${docTmp}${scrptTmp}`;
};
