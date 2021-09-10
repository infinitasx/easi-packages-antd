import { defineComponent, resolveComponent, openBlock, createBlock, withCtx, createVNode, createSlots, renderList, renderSlot, normalizeProps, guardReactiveProps } from 'vue';

function createNamespace(name) {
  return `EASI${name}`;
}

var script = defineComponent({
  name: createNamespace("Error"),
  props: {
    status: {
      type: String,
      default: ""
    }
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_result = resolveComponent("a-result");

  const _component_a_card = resolveComponent("a-card");

  return openBlock(), createBlock(_component_a_card, {
    bordered: false,
    class: "error-full-page"
  }, {
    default: withCtx(() => [createVNode(_component_a_result, {
      status: _ctx.status
    }, createSlots({
      _: 2
    }, [renderList(_ctx.$slots, (index, name) => {
      return {
        name,
        fn: withCtx(slotProps => [renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotProps)))])
      };
    })]), 1032, ["status"])]),
    _: 3
  });
}

script.render = render;
script.__scopeId = "data-v-4bca0fd7";
script.__file = "packages/error/Index.vue";

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
