import { defineComponent, toRefs, computed, resolveComponent, openBlock, createBlock, mergeProps, withCtx, renderSlot } from 'vue';

function createNamespace(name) {
  return `EASI${name}`;
}

var script = defineComponent({
  name: createNamespace("Button"),
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  setup(props) {
    const { type } = toRefs(props);
    return {
      className: computed(() => type.value === "link" ? "px-0" : "")
    };
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = resolveComponent("a-button");
  return openBlock(), createBlock(_component_a_button, mergeProps(_ctx.$attrs, {
    type: _ctx.type,
    class: _ctx.className
  }), {
    icon: withCtx(() => [
      renderSlot(_ctx.$slots, "icon")
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16, ["type", "class"]);
}

script.render = render;
script.__file = "packages/button/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

export { script as default };
