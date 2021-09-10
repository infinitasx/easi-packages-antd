import { defineComponent, toRefs, computed, toRaw, watch, pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, mergeProps, withCtx, renderSlot, createElementBlock, createCommentVNode } from 'vue';

function createNamespace(name) {
  return `EASI${name}`;
}

var script = defineComponent({
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
    } = toRefs(props);
    const computedBodyStyle = computed(() => {
      return slots.footer ? { ...bodyStyle.value,
        paddingBottom: "55px"
      } : toRaw(bodyStyle.value);
    });
    watch(() => visible.value, newVal => {
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

pushScopeId("data-v-57a97f50");

const _hoisted_1 = {
  key: 0,
  class: "drawer-footer"
};

popScopeId();

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_drawer = resolveComponent("a-drawer");

  return openBlock(), createBlock(_component_a_drawer, mergeProps(_ctx.$attrs, {
    visible: _ctx.visible,
    width: _ctx.width,
    maskClosable: false,
    "body-style": _ctx.computedBodyStyle,
    onClose: _ctx.handleClose
  }), {
    default: withCtx(() => [renderSlot(_ctx.$slots, "default"), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_1, [renderSlot(_ctx.$slots, "footer")])) : createCommentVNode("v-if", true)]),
    _: 3
  }, 16, ["visible", "width", "body-style", "onClose"]);
}

script.render = render;
script.__scopeId = "data-v-57a97f50";
script.__file = "packages/drawer/Index.vue";

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
