'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function createNamespace(name) {
  return `EASI${name}`;
}

var script = vue.defineComponent({
  name: createNamespace("Drawer"),
  emits: ["update:visible", "close", "show"],
  props: {
    visible: {
      default: false,
      type: Boolean
    },
    width: {
      default: "500px",
      type: String
    },
    bodyStyle: {
      default: () => ({}),
      type: Object
    }
  },

  setup(props, {
    emit,
    slots
  }) {
    const {
      bodyStyle,
      visible
    } = vue.toRefs(props);
    const computedBodyStyle = vue.computed(() => {
      return slots.footer ? { ...bodyStyle.value,
        paddingBottom: "55px"
      } : vue.toRaw(bodyStyle.value);
    });
    vue.watch(() => visible.value, newVal => {
      if (newVal) {
        emit("show");
      }
    });
    return {
      computedBodyStyle,

      handleClose() {
        emit("update:visible", false);
        emit("close");
      }

    };
  }

});

vue.pushScopeId("data-v-57a97f50");

const _hoisted_1 = {
  key: 0,
  class: "drawer-footer"
};

vue.popScopeId();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_drawer = vue.resolveComponent("a-drawer");

  return vue.openBlock(), vue.createBlock(_component_a_drawer, vue.mergeProps(_ctx.$attrs, {
    visible: _ctx.visible,
    width: _ctx.width,
    maskClosable: false,
    "body-style": _ctx.computedBodyStyle,
    onClose: _ctx.handleClose
  }), {
    default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "default"), _ctx.$slots.footer ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.renderSlot(_ctx.$slots, "footer")])) : vue.createCommentVNode("v-if", true)]),
    _: 3
  }, 16, ["visible", "width", "body-style", "onClose"]);
}

script.render = render;
script.__scopeId = "data-v-57a97f50";
script.__file = "packages/drawer/Index.vue";

script.install = app => {
  app.component(script.name, script);
};

exports['default'] = script;
