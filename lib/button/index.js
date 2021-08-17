'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function createNamespace(name) {
  return `EASI${name}`;
}

var script = vue.defineComponent({
  name: createNamespace("Button"),
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(props) {
    const { type } = vue.toRefs(props);
    return {
      className: vue.computed(() => type.value === "link" ? "px-0" : "")
    };
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = vue.resolveComponent("a-button");
  return vue.openBlock(), vue.createBlock(_component_a_button, vue.mergeProps(_ctx.$attrs, {
    type: _ctx.type,
    class: _ctx.className
  }), {
    icon: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "icon")
    ]),
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["type", "class"]);
}

script.render = render;
script.__file = "packages/button/Index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

exports['default'] = script;
