'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vueRouter = require('vue-router');

function createNamespace(name) {
  return `EASI${name}`;
}

var script$1 = vue.defineComponent({
  name: createNamespace("Error"),
  props: {
    status: {
      type: String,
      default: ""
    }
  }
});

const _withId = /* @__PURE__ */ vue.withScopeId("data-v-57502012");
const render$1 = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_a_result = vue.resolveComponent("a-result");
  const _component_a_card = vue.resolveComponent("a-card");
  return vue.openBlock(), vue.createBlock(_component_a_card, {
    bordered: false,
    class: "error-full-page"
  }, {
    default: _withId(() => [
      vue.createVNode(_component_a_result, { status: _ctx.status }, vue.createSlots({ _: 2 }, [
        vue.renderList(_ctx.$slots, (index, name) => {
          return {
            name,
            fn: _withId((slotProps) => [
              vue.renderSlot(_ctx.$slots, name, slotProps)
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

var script = vue.defineComponent({
  name: createNamespace("Page"),
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
      default: "card"
    },
    hasPermission: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const { breadcrumb, title, desc, hasPermission } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const { appContext } = vue.getCurrentInstance();
    const breadcrumbRoutes = vue.computed(() => {
      return breadcrumb.value || route.meta.breadcrumb || route.matched.map((_route) => {
        return {
          path: _route.path,
          breadcrumbName: _route.meta.title
        };
      });
    });
    const pageTitle = vue.computed(() => {
      return title.value || route.meta.title && route.meta.title;
    });
    const pageDesc = vue.computed(() => {
      return desc.value || route.meta.desc && route.meta.desc;
    });
    if (hasPermission.value && appContext.config.globalProperties.$usePermissions(route.meta.permission)) {
      emit("initPage");
    }
    return {
      breadcrumbRoutes,
      pageTitle,
      pageDesc
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
const _hoisted_4 = /* @__PURE__ */ vue.createTextVNode(" 403 ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_a_breadcrumb = vue.resolveComponent("a-breadcrumb");
  const _component_a_page_header = vue.resolveComponent("a-page-header");
  const _component_a_card = vue.resolveComponent("a-card");
  const _component_NoPermission = vue.resolveComponent("NoPermission");
  return vue.openBlock(), vue.createBlock("div", null, [
    _ctx.$usePermissions(_ctx.$route.meta.permission) && _ctx.hasPermission ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
      _ctx.showPageHeader ? (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
        vue.createVNode(_component_a_page_header, { title: _ctx.pageTitle }, {
          breadcrumb: vue.withCtx(() => [
            vue.createVNode(_component_a_breadcrumb, { routes: _ctx.breadcrumbRoutes }, {
              itemRender: vue.withCtx(({ route }) => [
                vue.createVNode(_component_router_link, {
                  to: route.path
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(route.breadcrumbName), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 1
            }, 8, ["routes"])
          ]),
          default: vue.withCtx(() => [
            _ctx.pageDesc ? (vue.openBlock(), vue.createBlock("p", _hoisted_2, vue.toDisplayString(_ctx.pageDesc), 1)) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "header")
          ]),
          _: 3
        }, 8, ["title"])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createVNode("div", _hoisted_3, [
        _ctx.layoutType === "card" ? (vue.openBlock(), vue.createBlock(_component_a_card, { key: 0 }, {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        })) : vue.renderSlot(_ctx.$slots, "default", { key: 1 })
      ])
    ], 64)) : (vue.openBlock(), vue.createBlock(_component_NoPermission, {
      key: 1,
      status: "403"
    }, {
      title: vue.withCtx(() => [
        _hoisted_4
      ]),
      "sub-title": vue.withCtx(() => [
        vue.createTextVNode(vue.toDisplayString(_ctx.$t("noPermission")), 1)
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

exports.default = script;
