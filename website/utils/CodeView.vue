<template>
  <div class="code-view" ref="codes">
    <code class="json" lang="html" v-html="sfcCode"></code>
  </div>
</template>

<script>
import hljs from "highlight.js";
import("highlight.js/styles/atom-one-light.css");

export default {
  props: {
    contents: {
      default: null,
    },
  },
  setup(props) {
    const code = decodeURIComponent(props.contents);
    const createCodeHtml = (language, code, trim) => {
      if (!hljs) {
        return null;
      }
      if (!(language && hljs.getLanguage(language))) {
        return null;
      }
      return hljs.highlight(trim ? code.trim() : code, {
        language,
      });
    };

    const codes = createCodeHtml("html", code);
    return {
      sfcCode: codes.value,
    };
  },
};
</script>
<style lang="scss">
.code-view {
  padding: 12px;
  border-radius: 6px;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 12px;
  line-height: 20px;
  overflow: hidden;
  position: relative;
  min-height: 100px;
  text-align: left;
  background: #f0f0f0;
}
</style>
