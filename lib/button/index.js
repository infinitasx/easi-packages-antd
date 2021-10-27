'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

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
    },
    success: {
      type: Boolean,
      default: false
    },
    warning: {
      type: Boolean,
      default: false
    },
    info: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const {
      type,
      success,
      warning,
      info
    } = vue.toRefs(props);
    return {
      className: vue.computed(() => {
        let className = type.value === "link" ? "px-0 " : "";

        if (success.value) {
          className += "easi-btn-success";
        } else if (warning.value) {
          className += "easi-btn-warning";
        } else if (info.value) {
          className += "easi-btn-info";
        }

        return className;
      })
    };
  }

});

const _withId = /* @__PURE__ */vue.withScopeId("data-v-0fe45159");

const render = /* @__PURE__ */_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_a_button = vue.resolveComponent("a-button");

  return vue.openBlock(), vue.createBlock(_component_a_button, vue.mergeProps(_ctx.$attrs, {
    type: _ctx.type,
    class: _ctx.className
  }), {
    icon: _withId(() => [vue.renderSlot(_ctx.$slots, "icon")]),
    default: _withId(() => [vue.renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 16, ["type", "class"]);
});

script.render = render;
script.__scopeId = "data-v-0fe45159";
script.__file = "packages/button/Index.vue";

script.install = app => {
  app.component(script.name, script);
};

exports['default'] = script;
