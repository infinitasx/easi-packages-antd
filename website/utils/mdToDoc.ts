import marked from "marked";
import vue from "@vitejs/plugin-vue";
import mdToDoc from "./demoMdToDoc";

import { getPartsOfDemo, mergeParts, genVueComponent } from "./mdToVue";

const vuePlugin = vue({
  include: [/\.vue$/, /\.md$/],
});

export default () => {
  const naiveDemoVitePlugin = {
    name: "mdToDemo",
    transform(context, id) {
      if (id.endsWith(".demo.md")) {
        const tokens = marked.lexer(context);
        const parts = getPartsOfDemo(tokens);
        const mergedParts = mergeParts(parts);
        const result = genVueComponent(mergedParts);
        return result;
      } else if (id.endsWith(".md")) {
        const result = mdToDoc(context, id);
        return result;
      }
    },
  };
  return [naiveDemoVitePlugin, vuePlugin];
};
