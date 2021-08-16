import { defineComponent, resolveComponent, openBlock, createBlock, createVNode, createSlots, renderList, renderSlot, withScopeId } from 'vue';

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

const _withId = /* @__PURE__ */ withScopeId("data-v-4bca0fd7");
const render = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_a_result = resolveComponent("a-result");
  const _component_a_card = resolveComponent("a-card");
  return openBlock(), createBlock(_component_a_card, {
    bordered: false,
    class: "error-full-page"
  }, {
    default: _withId(() => [
      createVNode(_component_a_result, { status: _ctx.status }, createSlots({ _: 2 }, [
        renderList(_ctx.$slots, (index, name) => {
          return {
            name,
            fn: _withId((slotProps) => [
              renderSlot(_ctx.$slots, name, slotProps)
            ])
          };
        })
      ]), 1032, ["status"])
    ]),
    _: 1
  });
});

script.render = render;
script.__scopeId = "data-v-4bca0fd7";
script.__file = "packages/error/Index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

export default script;
