import { defineComponent, resolveComponent, resolveDirective, withDirectives, openBlock, createBlock, mergeProps, createSlots, withCtx, createVNode, renderSlot, createCommentVNode, renderList } from 'vue';

function createNamespace(name) {
  return `EASI${name}`;
}

var script = defineComponent({
  name: createNamespace("Table"),
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    styleClass: {
      type: String
    },
    scroll: {
      type: Object,
      default: () => ({ x: 1620 })
    }
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_space = resolveComponent("a-space");
  const _component_a_col = resolveComponent("a-col");
  const _component_a_row = resolveComponent("a-row");
  const _component_a_table = resolveComponent("a-table");
  const _directive_loading = resolveDirective("loading");
  return withDirectives((openBlock(), createBlock(_component_a_table, mergeProps({ scroll: _ctx.scroll }, _ctx.$attrs), createSlots({ _: 2 }, [
    !!_ctx.$slots.headerLeft || !!_ctx.$slots.headerRight ? {
      name: "title",
      fn: withCtx(() => [
        createVNode(_component_a_row, {
          align: "middle",
          class: ["flex-wrap", _ctx.styleClass]
        }, {
          default: withCtx(() => [
            createVNode(_component_a_col, {
              flex: 1,
              class: "md:min-w-0"
            }, {
              default: withCtx(() => [
                _ctx.$slots.headerLeft ? (openBlock(), createBlock(_component_a_space, {
                  key: 0,
                  class: "flex-wrap"
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "headerLeft")
                  ]),
                  _: 3
                })) : createCommentVNode("v-if", true)
              ]),
              _: 1
            }),
            createVNode(_component_a_col, null, {
              default: withCtx(() => [
                _ctx.$slots.headerRight ? (openBlock(), createBlock(_component_a_space, { key: 0 }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "headerRight")
                  ]),
                  _: 3
                })) : createCommentVNode("v-if", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"])
      ])
    } : void 0,
    renderList(_ctx.$slots, (index, name) => {
      return {
        name,
        fn: withCtx((slotProps) => [
          _ctx.$slots.name !== "title" && _ctx.$slots.name !== "headerLeft" && _ctx.$slots.name !== "headerRight" ? renderSlot(_ctx.$slots, name, mergeProps({ key: 0 }, slotProps)) : createCommentVNode("v-if", true)
        ])
      };
    })
  ]), 1040, ["scroll"])), [
    [_directive_loading, _ctx.loading]
  ]);
}

script.render = render;
script.__file = "packages/table/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

export default script;
