'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function createNamespace(name) {
  return `EASI${name}`;
}

var ZH = {
  confirm: "\u786E \u8BA4",
  cancel: "\u53D6 \u6D88",
  loading: "\u52A0\u8F7D\u4E2D...",
  pageTotal: "\u5171 {total} \u6761\u6570\u636E",
  noPermission: "\u5BF9\u4E0D\u8D77\uFF0C\u60A8\u6CA1\u6709\u6743\u9650\u8BBF\u95EE\u6B64\u9875\u9762\uFF01",
  styleSetting: "\u98CE\u683C\u8BBE\u7F6E",
  darkSetting: "\u591C\u95F4\u6A21\u5F0F",
  showTabSetting: "\u663E\u793A\u6807\u7B7E\u680F",
  fixedTabSetting: "\u6807\u7B7E\u680F\u56FA\u5B9A\u5728\u9876\u90E8",
  more: "\u66F4\u591A\u64CD\u4F5C",
  logout: "\u9000\u51FA\u767B\u5F55",
  logoutTitle: "\u9000\u51FA\u786E\u8BA4",
  logoutMessage: "\u60A8\u786E\u5B9A\u8981\u9000\u51FA\u672C\u7CFB\u7EDF\u5417?",
  closeOther: "\u5173\u95ED\u5176\u4ED6",
  refreshPage: "\u5237\u65B0\u5F53\u524D\u9875",
  backToDashBoard: "\u56DE\u5230Dashboard",
  editPassword: "\u4FEE\u6539\u5BC6\u7801",
  deviceTitle: "\u767B\u5F55\u8BBE\u5907\u7BA1\u7406",
  deviceLoginTime: "\u767B\u5F55\u65F6\u95F4"
};

var EN = {
  confirm: "Confirm",
  cancel: "Cancel",
  loading: "Loading...",
  pageTotal: "Total {total} records",
  noPermission: "Sorry, you do not have permission to access this page!",
  styleSetting: "Style Setting",
  darkSetting: "Night Mode",
  showTabSetting: "Show tab bar",
  fixedTabSetting: "Tab bar fixed top",
  more: "More",
  logout: "Logout",
  logoutTitle: "Tips",
  logoutMessage: "Are you sure you want to log out of this system?",
  closeOther: "Close other tabs",
  refreshPage: "Refresh current page",
  backToDashBoard: "Back to Dashboard",
  editPassword: "Change Password",
  deviceTitle: "Login to device management",
  deviceLoginTime: "Login time"
};

var JA = {
  confirm: "\u78BA \u8A8D",
  cancel: "\u53D6 \u6D88",
  loading: "\u8AAD\u307F\u8FBC\u307F\u4E2D...",
  pageTotal: "\u5408\u8A08 {total} \u30EC\u30B3\u30FC\u30C9",
  noPermission: "\u7533\u3057\u8A33\u3042\u308A\u307E\u305B\u3093\u304C\u3001\u3053\u306E\u30DA\u30FC\u30B8\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002",
  styleSetting: "\u30B9\u30BF\u30A4\u30EB\u8A2D\u5B9A",
  darkSetting: "\u30CA\u30A4\u30C8\u30E2\u30FC\u30C9",
  showTabSetting: "\u30BF\u30D6\u30D0\u30FC\u3092\u8868\u793A",
  fixedTabSetting: "\u30BF\u30D6\u30D0\u30FC\u56FA\u5B9A\u30C8\u30C3\u30D7",
  more: "More",
  logout: "\u30ED\u30B0\u30A2\u30A6\u30C8",
  logoutTitle: "\u7D42\u4E86\u78BA\u8A8D",
  logoutMessage: "\u3053\u306E\u30B7\u30B9\u30C6\u30E0\u304B\u3089\u30ED\u30B0\u30A2\u30A6\u30C8\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B?",
  closeOther: "\u4ED6\u306E\u30BF\u30D6\u3092\u9589\u3058\u308B",
  refreshPage: "\u73FE\u5728\u306E\u30DA\u30FC\u30B8\u3092\u66F4\u65B0",
  backToDashBoard: "Dashboard \u306B\u623B\u308B",
  editPassword: "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5909\u66F4\u3059\u308B",
  deviceTitle: "\u30C7\u30D0\u30A4\u30B9\u7BA1\u7406\u306B\u30ED\u30B0\u30A4\u30F3\u3057\u307E\u3059",
  deviceLoginTime: "\u30ED\u30B0\u30A4\u30F3\u6642\u9593"
};

const langMap = {
  "zh-cn": ZH,
  en: EN,
  ja: JA
};
function initI18n(lang) {
  return vue.reactive({
    message: langMap[lang]
  });
}

var script = vue.defineComponent({
  name: createNamespace("Loading"),
  emits: ["update:show"],
  props: {
    title: {
      type: String,
      default: void 0
    },
    show: {
      default: false,
      type: Boolean
    },
    size: {
      default: "normal",
      type: String
    }
  },
  setup(props, { emit }) {
    const { show, size } = vue.toRefs(props);
    const app = vue.getCurrentInstance();
    const defaultProxy = app?.root?.proxy || { localeMessage: { locale: "zh-cn" } };
    const root = vue.ref(defaultProxy);
    const locale = initI18n(app?.root?.proxy?.localeMessage?.locale || "zh-cn");
    const defaultTitle = locale?.message?.loading;
    const cShow = vue.ref(props.show);
    const cTitle = vue.ref(defaultTitle);
    const cSize = vue.ref("normal");
    vue.watch(() => show.value, (newVal) => {
      cShow.value = newVal;
    });
    vue.watch(() => size.value, (newVal) => {
      cSize.value = newVal;
    });
    vue.watch(() => root.value?.localeMessage, (newVal) => {
      if (newVal) {
        locale.message = langMap[newVal?.locale || "zh-cn"];
        cTitle.value = locale.message.loading;
      }
    });
    vue.watch(() => cShow.value, (newVal) => {
      emit("update:show", newVal);
    });
    return {
      cShow,
      cTitle,
      cSize,
      root
    };
  }
});

const _withId = /* @__PURE__ */ vue.withScopeId("data-v-7bbec90b");
vue.pushScopeId("data-v-7bbec90b");
const _hoisted_1 = {
  key: 0,
  class: "loading-container",
  id: "cus-loading"
};
const _hoisted_2 = /* @__PURE__ */ vue.createVNode("div", { class: "loading-wrap" }, [
  /* @__PURE__ */ vue.createVNode("div", { class: "ball" }, [
    /* @__PURE__ */ vue.createVNode("i", { class: "bg spoon" }),
    /* @__PURE__ */ vue.createVNode("i", { class: "bg fork" })
  ]),
  /* @__PURE__ */ vue.createVNode("div", { class: "loading-shadow" }, [
    /* @__PURE__ */ vue.createVNode("div")
  ])
], -1);
const _hoisted_3 = {
  key: 0,
  class: "tips"
};
vue.popScopeId();
const render = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return vue.openBlock(), vue.createBlock(vue.Transition, {
    name: "fade",
    mode: "out-in"
  }, {
    default: _withId(() => [
      _ctx.cShow ? (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
        vue.createVNode("div", {
          class: ["loading", _ctx.cSize]
        }, [
          _hoisted_2,
          _ctx.title || _ctx.cTitle ? (vue.openBlock(), vue.createBlock("p", _hoisted_3, vue.toDisplayString(_ctx.title || _ctx.cTitle), 1)) : vue.createCommentVNode("v-if", true)
        ], 2)
      ])) : vue.createCommentVNode("v-if", true)
    ]),
    _: 1
  });
});

script.render = render;
script.__scopeId = "data-v-7bbec90b";
script.__file = "packages/loading/Index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

exports['default'] = script;
