import { reactive, defineComponent, toRefs, getCurrentInstance, ref, watch, pushScopeId, popScopeId, openBlock, createBlock, Transition, createVNode, toDisplayString, createCommentVNode, withScopeId } from 'vue';

function createNamespace(name) {
  return `EASI${name}`;
}

var ZH = {
  confirm: "\u786E \u8BA4",
  cancel: "\u53D6 \u6D88",
  loading: "\u52A0\u8F7D\u4E2D...",
  search: "\u641C \u7D22",
  searchPlaceholder: "\u8BF7\u8F93\u5165\u8981\u641C\u7D22\u7684\u5173\u952E\u5B57",
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
  uploaderTitle: "\u4E0A\u4F20\u56FE\u7247",
  uploaderTab0: "\u672C\u5730\u4E0A\u4F20",
  uploaderTab1: "\u56FE\u7247\u5E93",
  uploaderPrimary: "\u4E0A \u4F20",
  uploaderEmptyTitle: "\u70B9\u51FB\u6216\u5C06\u56FE\u7247\u62D6\u62FD\u5230\u8FD9\u91CC\u4E0A\u4F20",
  uploaderEmptySubTitle: "\u652F\u6301\u6269\u5C55\u540D\uFF1A.jpg\u3001.jpeg\u3001.png\u3001.webp\u3001.gif\u7B49",
  uploaderError0: "\u9009\u62E9\u7684\u6587\u4EF6\u7C7B\u578B\u4E0D\u53EF\u4E0A\u4F20",
  uploaderError1: "\u9009\u62E9\u7684\u6587\u4EF6\u6570\u91CF\u8D85\u8FC7\u6700\u5927\u9650\u5236",
  uploaderError2: "\u5355\u4E2A\u6587\u4EF6\u5185\u5B58\u4E0D\u80FD\u8D85\u8FC7\uFF1A{max}M",
  uploaderError3: "\u56FE\u7247\u5C3A\u5BF8\u4E0D\u80FD\u4F4E\u4E8E\uFF1A{size}"
};

var EN = {
  confirm: "Confirm",
  cancel: "Cancel",
  loading: "Loading...",
  search: "Search",
  searchPlaceholder: "Please enter the keywords to search",
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
  uploaderTitle: "Upload Image",
  uploaderTab0: "Upload From Local",
  uploaderTab1: "Picture Library",
  uploaderPrimary: "Upload",
  uploaderEmptyTitle: "Click or drag file to this area to upload",
  uploaderEmptySubTitle: "Support file extensions: .jpg, .jpeg, .png, .webp, .gif, etc.",
  uploaderError0: "The selected file type cannot be uploaded",
  uploaderError1: "The number of selected files exceeds the maximum limit",
  uploaderError2: "The memory of a single file cannot exceed: {max}M",
  uploaderError3: "Image size cannot be less than: {size}"
};

var JA = {
  confirm: "\u78BA \u8A8D",
  cancel: "\u53D6 \u6D88",
  loading: "\u8AAD\u307F\u8FBC\u307F\u4E2D...",
  search: "\u63A2\u3059",
  searchPlaceholder: "\u691C\u7D22\u3059\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",
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
  uploaderTitle: "\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",
  uploaderTab0: "\u30ED\u30FC\u30AB\u30EB\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",
  uploaderTab1: "\u753B\u50CF\u30E9\u30A4\u30D6\u30E9\u30EA",
  uploaderPrimary: "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",
  uploaderEmptyTitle: "\u3053\u3061\u3089\u306E\u753B\u50CF\u3092\u30AF\u30EA\u30C3\u30AF\u307E\u305F\u306F\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u3066\u304F\u3060\u3055\u3044",
  uploaderEmptySubTitle: "\u30B5\u30DD\u30FC\u30C8\u30D5\u30A1\u30A4\u30EB\u62E1\u5F35\u5B50\uFF1A.jpg\u3001.jpeg\u3001.png\u3001.webp\u3001.gif\u306A\u3069",
  uploaderError0: "\u9078\u629E\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u30BF\u30A4\u30D7\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3067\u304D\u307E\u305B\u3093",
  uploaderError1: "\u9078\u629E\u3057\u305F\u30D5\u30A1\u30A4\u30EB\u306E\u6570\u304C\u4E0A\u9650\u3092\u8D85\u3048\u3066\u3044\u307E\u3059",
  uploaderError2: "1\u3064\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u30E1\u30E2\u30EA\u306F\u6B21\u3092\u8D85\u3048\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\uFF1A{max}M",
  uploaderError3: "\u753B\u50CF\u30B5\u30A4\u30BA\u306F\u6B21\u306E\u5024\u3088\u308A\u5C0F\u3055\u304F\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\uFF1A{size}"
};

const langMap = {
  "zh-cn": ZH,
  en: EN,
  ja: JA
};
function initI18n(lang) {
  return reactive({
    message: langMap[lang]
  });
}

var script = defineComponent({
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
    const { show, size } = toRefs(props);
    const app = getCurrentInstance();
    const defaultProxy = app?.root?.proxy || { localeMessage: { locale: "zh-cn" } };
    const root = ref(defaultProxy);
    const locale = initI18n(app?.root?.proxy?.localeMessage?.locale || "zh-cn");
    const defaultTitle = locale?.message?.loading;
    const cShow = ref(props.show);
    const cTitle = ref(defaultTitle);
    const cSize = ref("normal");
    watch(() => show.value, (newVal) => {
      cShow.value = newVal;
    });
    watch(() => size.value, (newVal) => {
      cSize.value = newVal;
    });
    watch(() => root.value?.localeMessage, (newVal) => {
      if (newVal) {
        locale.message = langMap[newVal?.locale || "zh-cn"];
        cTitle.value = locale.message.loading;
      }
    });
    watch(() => cShow.value, (newVal) => {
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

const _withId = /* @__PURE__ */ withScopeId("data-v-7bbec90b");
pushScopeId("data-v-7bbec90b");
const _hoisted_1 = {
  key: 0,
  class: "loading-container",
  id: "cus-loading"
};
const _hoisted_2 = /* @__PURE__ */ createVNode("div", { class: "loading-wrap" }, [
  /* @__PURE__ */ createVNode("div", { class: "ball" }, [
    /* @__PURE__ */ createVNode("i", { class: "bg spoon" }),
    /* @__PURE__ */ createVNode("i", { class: "bg fork" })
  ]),
  /* @__PURE__ */ createVNode("div", { class: "loading-shadow" }, [
    /* @__PURE__ */ createVNode("div")
  ])
], -1);
const _hoisted_3 = {
  key: 0,
  class: "tips"
};
popScopeId();
const render = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock(Transition, {
    name: "fade",
    mode: "out-in"
  }, {
    default: _withId(() => [
      _ctx.cShow ? (openBlock(), createBlock("div", _hoisted_1, [
        createVNode("div", {
          class: ["loading", _ctx.cSize]
        }, [
          _hoisted_2,
          _ctx.title || _ctx.cTitle ? (openBlock(), createBlock("p", _hoisted_3, toDisplayString(_ctx.title || _ctx.cTitle), 1)) : createCommentVNode("v-if", true)
        ], 2)
      ])) : createCommentVNode("v-if", true)
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

export { script as default };
