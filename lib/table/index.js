'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function createNamespace(name) {
  return `EASI${name}`;
}

var script = vue.defineComponent({
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
      default: () => ({
        x: 1620
      })
    }
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_space = vue.resolveComponent("a-space");

  const _component_a_col = vue.resolveComponent("a-col");

  const _component_a_row = vue.resolveComponent("a-row");

  const _component_a_table = vue.resolveComponent("a-table");

  const _directive_loading = vue.resolveDirective("loading");

  return vue.withDirectives((vue.openBlock(), vue.createBlock(_component_a_table, vue.mergeProps({
    scroll: _ctx.scroll
  }, _ctx.$attrs), vue.createSlots({
    _: 2
  }, [!!_ctx.$slots.headerLeft || !!_ctx.$slots.headerRight ? {
    name: "title",
    fn: vue.withCtx(() => [vue.createVNode(_component_a_row, {
      align: "middle",
      class: vue.normalizeClass(["flex-wrap", _ctx.styleClass])
    }, {
      default: vue.withCtx(() => [vue.createVNode(_component_a_col, {
        flex: 1,
        class: "md:min-w-0"
      }, {
        default: vue.withCtx(() => [_ctx.$slots.headerLeft ? (vue.openBlock(), vue.createBlock(_component_a_space, {
          key: 0,
          class: "flex-wrap"
        }, {
          default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "headerLeft")]),
          _: 3
        })) : vue.createCommentVNode("v-if", true)]),
        _: 3
      }), vue.createVNode(_component_a_col, null, {
        default: vue.withCtx(() => [_ctx.$slots.headerRight ? (vue.openBlock(), vue.createBlock(_component_a_space, {
          key: 0
        }, {
          default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "headerRight")]),
          _: 3
        })) : vue.createCommentVNode("v-if", true)]),
        _: 3
      })]),
      _: 3
    }, 8, ["class"])])
  } : void 0, vue.renderList(_ctx.$slots, (index, name) => {
    return {
      name,
      fn: vue.withCtx(slotProps => [_ctx.$slots.name !== "title" && _ctx.$slots.name !== "headerLeft" && _ctx.$slots.name !== "headerRight" ? vue.renderSlot(_ctx.$slots, name, vue.normalizeProps(vue.mergeProps({
        key: 0
      }, slotProps))) : vue.createCommentVNode("v-if", true)])
    };
  })]), 1040, ["scroll"])), [[_directive_loading, _ctx.loading]]);
}

script.render = render;
script.__file = "packages/table/Index.vue";

script.install = app => {
  app.component(script.name, script);
};

exports['default'] = script;
