import fs from "fs";
import { resolve } from "path";
import marked from "marked";
import mdRenderer from "./mdRenderer";

const demoBlock = fs.readFileSync(resolve(__dirname, "demo.vue")).toString();

export const getPartsOfDemo = (tokens) => {
  let template = null;
  let script = null;
  let style = null;
  let title = null;
  const contentTokens = [];
  for (const token of tokens) {
    if (token.type === "heading" && token.depth === 1) {
      title = token.text;
    } else if (token.type === "code" && (token.lang === "template" || token.lang === "html")) {
      template = token.text;
    } else if (token.type === "code" && (token.lang === "script" || token.lang === "js")) {
      script = token.text;
    } else if (token.type === "code" && (token.lang === "style" || token.lang === "css")) {
      style = token.text;
    } else {
      contentTokens.push(token);
    }
  }
  return {
    template: template,
    script: script,
    style: style,
    title: title,
    content: marked.parser(contentTokens, {
      renderer: mdRenderer(),
    }),
  };
};

export const mergeParts = (parts) => {
  const mergedParts = {
    ...parts,
  };
  mergedParts.title = parts.title;
  mergedParts.content = parts.content;
  mergedParts.code = "";
  if (parts.template) {
    mergedParts.code += `<template>\n${parts.template
      .split("\n")
      .map((line) => (line.length ? "  " + line : line))
      .join("\n")}\n</template>`;
  }
  if (parts.script) {
    mergedParts.code += `\n\n<script>\n${parts.script}\n</script>`;
  }
  if (parts.style) {
    if (parts.template || parts.script) mergedParts.code += "\n\n";
    mergedParts.code += `<style>\n${parts.style}\n</style>`;
  }
  mergedParts.code = encodeURIComponent(mergedParts.code);
  return mergedParts;
};

export const genVueComponent = (parts) => {
  const titleReg = /<!--TITLE_SLOT-->/g;
  const contentReg = /<!--CONTENT_SLOT-->/;
  const codeReg = /<!--CODE_SLOT-->/g;
  const scriptReg = /<!--SCRIPT_SLOT-->/;
  const styleReg = /<!--STYLE_SLOT-->/;
  const demoReg = /<!--DEMO_SLOT-->/;
  let src = demoBlock;
  if (parts.content) {
    src = src.replace(contentReg, parts.content);
  }
  if (parts.title) {
    src = src.replace(titleReg, parts.title);
  }
  if (parts.code) {
    src = src.replace(codeReg, parts.code);
  }
  if (parts.script) {
    src = src.replace(scriptReg, parts.script);
  }
  if (parts.style) {
    // const style = genStyle(parts.style);
    // if (style !== null) {
    //   src = src.replace(styleReg, style);
    // }
  }
  if (parts.template) {
    src = src.replace(demoReg, parts.template);
  }
  return src.trim();
};

export const genScript = (demoInfos, components = []) => {
  const importStmts = demoInfos
    .map(({ component, fileName }) => `import ${component} from './${fileName}'`)
    .concat(components.map(({ importStmt }) => importStmt))
    .join("\n");
  const componentStmts = demoInfos
    .map(({ component }) => component)
    .concat(components.map(({ ids }) => ids).flat())
    .join(",\n");
  const script = `<script>
${importStmts}
export default {
  components: {
    ${componentStmts}
  },
  setup () {
    return {
    }
  }
}
</script>`;
  return script;
};
