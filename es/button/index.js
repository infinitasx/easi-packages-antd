import { defineComponent, toRefs, computed, resolveComponent, openBlock, createBlock, renderSlot, withScopeId } from 'vue';

function createNamespace(name) {
  return `EASI${name}`;
}

var script = defineComponent({
  name: createNamespace("Button"),
  props: {
    disabled: Boolean,
    ghost: Boolean,
    htmlType: {
      type: String,
      default: "button"
    },
    icon: Function,
    loading: Boolean,
    shape: String,
    size: {
      default: "default",
      type: String
    },
    type: {
      default: "default",
      type: String
    },
    link: {
      type: Boolean,
      default: false
    },
    block: Boolean
  },
  setup(props) {
    const { type, link } = toRefs(props);
    const customType = computed(() => {
      const typeValue = type.value;
      if (!link.value) {
        if (["default", "primary", "danger", "dashed", "ghost"].indexOf(typeValue) >= 0) {
          return typeValue;
        } else {
          return "default";
        }
      } else {
        return "link";
      }
    });
    const className = computed(() => {
      const typeValue = type.value;
      if (!link.value) {
        if (["default", "primary", "danger", "dashed", "ghost"].indexOf(typeValue) >= 0) {
          return null;
        } else {
          if (typeValue === "success") {
            return "easi-btn-success";
          } else if (typeValue === "info") {
            return "easi-btn-info";
          } else if (typeValue === "warn") {
            return "easi-btn-warning";
          }
        }
      } else {
        if (typeValue === "success") {
          return "easi-btn-link-success px-0";
        } else if (typeValue === "info") {
          return "easi-btn-link-info px-0";
        } else if (typeValue === "warn") {
          return "easi-btn-link-warning px-0";
        } else if (typeValue === "danger") {
          return "easi-btn-link-danger px-0";
        } else {
          return "px-0";
        }
      }
      return "";
    });
    return {
      className,
      customType
    };
  }
});

const _withId = /* @__PURE__ */ withScopeId("data-v-cf1b9d0e");
const render = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_a_button = resolveComponent("a-button");
  return openBlock(), createBlock(_component_a_button, {
    disabled: _ctx.disabled,
    ghost: _ctx.ghost,
    htmlType: _ctx.htmlType,
    icon: _ctx.icon,
    loading: _ctx.loading,
    shape: _ctx.shape,
    size: _ctx.size,
    type: _ctx.customType,
    block: _ctx.block,
    class: _ctx.className
  }, {
    icon: _withId(() => [
      renderSlot(_ctx.$slots, "icon")
    ]),
    default: _withId(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["disabled", "ghost", "htmlType", "icon", "loading", "shape", "size", "type", "block", "class"]);
});

script.render = render;
script.__scopeId = "data-v-cf1b9d0e";
script.__file = "packages/button/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

export default script;
