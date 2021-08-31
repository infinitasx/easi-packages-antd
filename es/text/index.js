import { defineComponent, openBlock, createBlock, renderSlot, createTextVNode } from 'vue';
import { loadNow } from 'connect-google-maps';

function createNamespace(name) {
  return `EASI${name}`;
}

console.log(loadNow);
var script = defineComponent({
  name: createNamespace("Text"),
  props: {},
  setup(props) {
  }
});

const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u8FD9\u662F\u4E00\u4E2Atext\u7EC4\u4EF6");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      _hoisted_1
    ])
  ]);
}

script.render = render;
script.__file = "packages/text/Index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

export { script as default };
