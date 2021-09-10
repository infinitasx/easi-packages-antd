'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function createNamespace(name) {
  return `EASI${name}`;
}

var script = vue.defineComponent({
  name: createNamespace("Text"),
  props: {},

  setup(props) {}

});

const _hoisted_1 = {
  class: "w-0 bg-red-400"
};

const _hoisted_2 = /* @__PURE__ */vue.createTextVNode("\u8FD9\u662F\u4E00\u4E2Atext\u7EC4\u4EF6");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.renderSlot(_ctx.$slots, "default", {}, () => [_hoisted_2])]);
}

script.render = render;
script.__file = "packages/text/Index.vue";

script.install = app => {
  app.component(script.name, script);
};

exports['default'] = script;
