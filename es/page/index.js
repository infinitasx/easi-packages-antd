import { defineComponent, resolveComponent, openBlock, createBlock, createVNode, createSlots, renderList, renderSlot, withScopeId, inject, toRefs, getCurrentInstance, computed, Fragment, withCtx, createTextVNode, toDisplayString, createCommentVNode } from 'vue';
import { useRoute } from 'vue-router';

function createNamespace(name) {
  return `EASI${name}`;
}

var script$1 = defineComponent({
  name: createNamespace("Error"),
  props: {
    status: {
      type: String,
      default: ""
    }
  }
});

const _withId = /* @__PURE__ */ withScopeId("data-v-57502012");
const render$1 = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
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

script$1.render = render$1;
script$1.__scopeId = "data-v-57502012";
script$1.__file = "packages/error/index.vue";

script$1.install = (app) => {
  app.component(script$1.name, script$1);
};

function getEASIText(key, value) {
  const globalEASILocale = inject("globalEASILocale", { message: {} });
  let message = globalEASILocale?.message[key];
  if (message) {
    if (value) {
      const reg = /(?<=\{).*?(?=\})/g;
      const keyArray = message.match(reg);
      keyArray.forEach((key2) => {
        let realKey = key2.trim();
        const reg1 = new RegExp(`{${key2}}`, "g");
        message = message.replace(reg1, value[realKey]);
      });
    }
    return message;
  } else {
    console.warn("\u672A\u5339\u914D\u5230\u6587\u6848key");
    return key;
  }
}

var script = defineComponent({
  name: createNamespace("Page"),
  emits: ["initPage"],
  props: {
    showPageHeader: {
      type: Boolean,
      default: true
    },
    breadcrumb: {
      type: Array,
      default: void 0
    },
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    layoutType: {
      type: String,
      default: "customer"
    },
    hasPermission: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { breadcrumb, title, desc, hasPermission } = toRefs(props);
    const route = useRoute();
    const { appContext } = getCurrentInstance();
    const breadcrumbRoutes = computed(() => {
      return breadcrumb.value || route.meta.breadcrumb || route.matched.slice(1).map((_route) => {
        return {
          path: _route.path,
          breadcrumbName: _route.meta.title
        };
      });
    });
    const pageTitle = computed(() => {
      return title.value || route.meta.title && route.meta.title;
    });
    const pageDesc = computed(() => {
      return desc.value || route.meta.desc && route.meta.desc;
    });
    if (hasPermission.value || appContext.config.globalProperties.$usePermissions(route.meta.permission)) {
      emit("initPage");
    }
    return {
      breadcrumbRoutes,
      pageTitle,
      pageDesc,
      getEASIText
    };
  },
  components: {
    NoPermission: script$1
  }
});

const _hoisted_1 = {
  key: 0,
  class: "page-breadcrumb-wrap"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { class: "p-24" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" 403 ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_a_breadcrumb = resolveComponent("a-breadcrumb");
  const _component_a_page_header = resolveComponent("a-page-header");
  const _component_a_card = resolveComponent("a-card");
  const _component_NoPermission = resolveComponent("NoPermission");
  return openBlock(), createBlock("div", null, [
    _ctx.$usePermissions(_ctx.$route.meta.permission) || _ctx.hasPermission ? (openBlock(), createBlock(Fragment, { key: 0 }, [
      _ctx.showPageHeader ? (openBlock(), createBlock("div", _hoisted_1, [
        createVNode(_component_a_page_header, { title: _ctx.pageTitle }, {
          breadcrumb: withCtx(() => [
            _ctx.breadcrumbRoutes.length > 1 ? (openBlock(), createBlock(_component_a_breadcrumb, {
              key: 0,
              routes: _ctx.breadcrumbRoutes
            }, {
              itemRender: withCtx(({ route }) => [
                createVNode(_component_router_link, {
                  to: route.path
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(route.breadcrumbName), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 1
            }, 8, ["routes"])) : createCommentVNode("v-if", true)
          ]),
          default: withCtx(() => [
            _ctx.pageDesc ? (openBlock(), createBlock("p", _hoisted_2, toDisplayString(_ctx.pageDesc), 1)) : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "header")
          ]),
          _: 3
        }, 8, ["title"])
      ])) : createCommentVNode("v-if", true),
      createVNode("div", _hoisted_3, [
        _ctx.layoutType === "card" ? (openBlock(), createBlock(_component_a_card, { key: 0 }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        })) : renderSlot(_ctx.$slots, "default", { key: 1 })
      ])
    ], 64)) : (openBlock(), createBlock(_component_NoPermission, {
      key: 1,
      status: "403"
    }, {
      title: withCtx(() => [
        _hoisted_4
      ]),
      "sub-title": withCtx(() => [
        createTextVNode(toDisplayString(_ctx.getEASIText("noPermission")), 1)
      ]),
      _: 1
    }))
  ]);
}

script.render = render;
script.__file = "packages/page/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

export { script as default };
