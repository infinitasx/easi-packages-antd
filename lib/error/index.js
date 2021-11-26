'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var vue = require('vue');

function createNamespace(name) {
  return `EASI${name}`;
}

var script = vue.defineComponent({
  name: createNamespace("Error"),
  props: {
    status: {
      type: String,
      default: ""
    }
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_result = vue.resolveComponent("a-result");

  const _component_a_card = vue.resolveComponent("a-card");

  return vue.openBlock(), vue.createBlock(_component_a_card, {
    bordered: false,
    class: "easi-packages-error-full-page"
  }, {
    default: vue.withCtx(() => [vue.createVNode(_component_a_result, {
      status: _ctx.status
    }, vue.createSlots({
      _: 2
    }, [vue.renderList(_ctx.$slots, (index, name) => {
      return {
        name,
        fn: vue.withCtx(slotProps => [vue.renderSlot(_ctx.$slots, name, slotProps)])
      };
    })]), 1032, ["status"])]),
    _: 1
  });
}

script.render = render;
script.__file = "packages/error/Index.vue";

script.install = app => {
  app.component(script.name, script);
};

exports['default'] = script;
