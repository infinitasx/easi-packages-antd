import { reactive, defineComponent, toRefs, ref, computed, onBeforeUnmount, nextTick, openBlock, createBlock, Fragment, renderList, createVNode, toDisplayString, createCommentVNode, provide, watch, createApp, resolveComponent, mergeProps, renderSlot, withScopeId } from 'vue';
import { getLocal } from 'easi-web-utils';
import moment from 'moment';

function createNamespace(name) {
  return `EASI${name}`;
}

const SETTING_KEY = "setting";
const HTML = document.querySelector("html");

function initProvider() {
  const defaultData = getLocal(SETTING_KEY) || {
    mode: false,
    fixedTab: true,
    showTab: true
  };

  if (defaultData.mode === true || defaultData.mode === "dark") {
    defaultData.mode && HTML.setAttribute("data-pro-theme", "antdv-pro-theme-dark");
  }

  return reactive({ ...defaultData,
    cachedPage: [],
    reloadPage: true,
    userInfo: {}
  });
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
  uploaderError1: "\u53EA\u80FD\u6DFB\u52A0{max}\u5F20\u56FE\u7247",
  uploaderError2: "\u5355\u4E2A\u6587\u4EF6\u5185\u5B58\u4E0D\u80FD\u8D85\u8FC7\uFF1A{max}M",
  uploaderError3: "\u56FE\u7247\u5C3A\u5BF8\u4E0D\u80FD\u4F4E\u4E8E\uFF1A{size}",
  uploaderRemove: "\u5220\u9664\u6B64\u56FE\u7247",
  uploaderMustCropTips: "\u5171\u6709{number}\u5F20\u56FE\u7247\u4E0D\u7B26\u5408\u5C3A\u5BF8\u8981\u6C42",
  uploaderPrev: "\u4E0A\u4E00\u5F20",
  uploaderNext: "\u4E0B\u4E00\u5F20",
  uploaderConfirmNext: "\u786E\u8BA4\u88C1\u526A\u5E76\u5207\u6362\u5230\u4E0B\u4E00\u5F20",
  uploaderConfirmCrop: "\u786E\u8BA4\u88C1\u526A",
  uploaderBackTitle: "\u786E\u8BA4\u9000\u51FA\u88C1\u526A\u5417\uFF1F",
  uploaderBackMsg: "\u4E0D\u7B26\u5408\u5C3A\u5BF8\u7684\u56FE\u7247\u5C06\u4F1A\u88AB\u5220\u9664\uFF01",
  uploadBack: "\u8FD4 \u56DE",
  uploadError: "\u56FE\u7247\u4E0A\u4F20\u5931\u8D25",
  uploadListError: "\u83B7\u53D6\u56FE\u7247\u5E93\u6570\u636E\u5931\u8D25",
  uploadWaitTitle: "\u6CE8\u610F",
  uploadWaitMsg: "\u8FD8\u6709{number}\u5F20\u56FE\u7247\u672A\u4E0A\u4F20\uFF0C\u786E\u8BA4\u53EA\u9009\u62E9\u5DF2\u4E0A\u4F20\u7684\u56FE\u7247\u5417\uFF1F",
  deviceTitle: "\u767B\u5F55\u8BBE\u5907\u7BA1\u7406",
  deviceLoginTime: "\u6D3B\u8DC3\u65F6\u95F4",
  selected: "\u5DF2\u9009\uFF1A",
  copySuccess: "\u5DF2\u7C98\u8D34\u8FDB\u526A\u5207\u677F"
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
  uploaderError1: "Only {max} more picture can be added",
  uploaderError2: "The memory of a single file cannot exceed: {max}M",
  uploaderError3: "Image size cannot be less than: {size}",
  uploaderRemove: "Delete this picture",
  uploaderMustCropTips: "There is {number} picture that does not fit the size",
  uploaderPrev: "Previous",
  uploaderNext: "Next",
  uploaderConfirmNext: "Confirm the crop and switch to the next",
  uploaderConfirmCrop: "Confirm crop",
  uploaderBackTitle: "Are you sure to exit cropping?",
  uploaderBackMsg: "Images that do not match the size will be deleted!",
  uploadBack: "Back",
  uploadError: "Image upload failed",
  uploadListError: "Failed to get image library data",
  uploadWaitTitle: "Notice",
  uploadWaitMsg: "There is still {number} picture that has not been uploaded. Are you sure to select only the uploaded picture?",
  deviceTitle: "Login to device management",
  deviceLoginTime: "Active time",
  selected: "Selected\uFF1A",
  copySuccess: "Has been pasted into the clipboard"
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
  uploaderError1: "\u8FFD\u52A0\u3067\u304D\u308B\u753B\u50CF\u306F{max}\u3064\u3060\u3051\u3067\u3059",
  uploaderError2: "1\u3064\u306E\u30D5\u30A1\u30A4\u30EB\u306E\u30E1\u30E2\u30EA\u306F\u6B21\u3092\u8D85\u3048\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\uFF1A{max}M",
  uploaderError3: "\u753B\u50CF\u30B5\u30A4\u30BA\u306F\u6B21\u306E\u5024\u3088\u308A\u5C0F\u3055\u304F\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\uFF1A{size}",
  uploaderRemove: "\u3053\u306E\u5199\u771F\u3092\u524A\u9664\u3059\u308B",
  uploaderMustCropTips: "\u30B5\u30A4\u30BA\u306B\u5408\u308F\u306A\u3044\u5199\u771F\u304C{number}\u679A\u3042\u308A\u307E\u3059",
  uploaderPrev: "\u524D",
  uploaderNext: "\u6B21",
  uploaderConfirmNext: "\u5207\u308A\u629C\u304D\u3092\u78BA\u8A8D\u3057\u3001\u6B21\u306E\u5207\u308A\u629C\u304D\u306B\u5207\u308A\u66FF\u3048\u307E\u3059",
  uploaderConfirmCrop: "\u4F5C\u7269\u3092\u78BA\u8A8D\u3059\u308B",
  uploaderBackTitle: "\u30C8\u30EA\u30DF\u30F3\u30B0\u3092\u7D42\u4E86\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F",
  uploaderBackMsg: "\u30B5\u30A4\u30BA\u306B\u5408\u308F\u306A\u3044\u753B\u50CF\u306F\u524A\u9664\u3055\u308C\u307E\u3059\uFF01",
  uploadBack: "\u8FD4 \u56DE",
  uploadError: "\u753B\u50CF\u306E\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
  uploadListError: "\u753B\u50CF\u30E9\u30A4\u30D6\u30E9\u30EA\u30C7\u30FC\u30BF\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F",
  uploadWaitTitle: "\u77E5\u3089\u305B",
  uploadWaitMsg: "\u307E\u3060\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3055\u308C\u3066\u3044\u306A\u3044\u753B\u50CF\u304C{number}\u679A\u3042\u308A\u307E\u3059\u304C\u3001\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3055\u308C\u305F\u753B\u50CF\u306E\u307F\u3092\u9078\u629E\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F",
  deviceTitle: "\u30C7\u30D0\u30A4\u30B9\u7BA1\u7406\u306B\u30ED\u30B0\u30A4\u30F3\u3057\u307E\u3059",
  deviceLoginTime: "\u6D3B\u52D5\u6642\u9593",
  selected: "\u9078\u629E\u6E08\u307F\uFF1A",
  copySuccess: "\u304C\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u8CBC\u308A\u4ED8\u3051\u3089\u308C\u307E\u3057\u305F"
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

var timerWorker = () => {
  self.addEventListener("message", function (e) {
    const {
      type
    } = e.data;
    let timer;

    const refreshTime = () => {
      timer = setTimeout(() => {
        self.postMessage(type);
      }, 5e3);
    };

    if (type !== "clear") {
      refreshTime();
    } else {
      clearTimeout(timer);
      self.close();
    }
  }, false);
};

var script$1 = defineComponent({
  name: createNamespace("WaterMaker"),
  props: {
    totalNumber: {
      type: Number,
      default: 0
    },
    domain: {
      type: String,
      default: void 0
    },
    globalProvider: {
      type: Object,
      default: void 0
    }
  },

  setup(props) {
    const {
      globalProvider
    } = toRefs(props);
    const waterMarker = ref({});
    let worker;

    const initWorker = () => {
      var _window;

      const blob = new Blob(["(" + timerWorker.toString() + ")()"]);
      const url = (_window = window) === null || _window === void 0 ? void 0 : _window.URL.createObjectURL(blob);
      worker = new Worker(url);
      worker.postMessage({});

      worker.onmessage = async ({
        data
      }) => {
        if (data !== "clear") {
          var _worker;

          timestamp.value = moment().format("YYYY-MM-DD HH:mm:ss");
          showMarker.value = false;
          await nextTick();
          showMarker.value = true;
          (_worker = worker) === null || _worker === void 0 ? void 0 : _worker.postMessage({});
        } else {
          var _worker2;

          (_worker2 = worker) === null || _worker2 === void 0 ? void 0 : _worker2.terminate();
        }
      };
    };

    const mobile = computed(() => {
      var _waterMarker$value, _waterMarker$value$us, _globalProvider$value, _globalProvider$value2;

      let m = ((_waterMarker$value = waterMarker.value) === null || _waterMarker$value === void 0 ? void 0 : (_waterMarker$value$us = _waterMarker$value.userInfo) === null || _waterMarker$value$us === void 0 ? void 0 : _waterMarker$value$us.mobile) || ((_globalProvider$value = globalProvider.value) === null || _globalProvider$value === void 0 ? void 0 : (_globalProvider$value2 = _globalProvider$value.userInfo) === null || _globalProvider$value2 === void 0 ? void 0 : _globalProvider$value2.mobile);
      return m ? `${m.substr(0, m.length / 2 - 1)}****${m.substr(m.length / 2 + 3)}` : void 0;
    });
    const showMarker = ref(true);
    const timestamp = ref(moment().format("YYYY-MM-DD HH:mm:ss"));
    initWorker();
    onBeforeUnmount(() => {
      var _worker3;

      (_worker3 = worker) === null || _worker3 === void 0 ? void 0 : _worker3.postMessage({
        type: "clear"
      });
      worker = null;
    });
    return {
      mobile,
      globalProvider,
      timestamp,
      showMarker,
      waterMarker
    };
  }

});
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  key: 1
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.showMarker ? (openBlock(true), createBlock(Fragment, {
    key: 0
  }, renderList(_ctx.totalNumber, item => {
    var _ctx$waterMarker, _ctx$waterMarker$user, _ctx$globalProvider, _ctx$globalProvider$u, _ctx$waterMarker2, _ctx$waterMarker3;

    return openBlock(), createBlock("div", {
      class: "easi-water-marker-item",
      key: item
    }, [createVNode("p", null, toDisplayString(((_ctx$waterMarker = _ctx.waterMarker) === null || _ctx$waterMarker === void 0 ? void 0 : (_ctx$waterMarker$user = _ctx$waterMarker.userInfo) === null || _ctx$waterMarker$user === void 0 ? void 0 : _ctx$waterMarker$user.name) || ((_ctx$globalProvider = _ctx.globalProvider) === null || _ctx$globalProvider === void 0 ? void 0 : (_ctx$globalProvider$u = _ctx$globalProvider.userInfo) === null || _ctx$globalProvider$u === void 0 ? void 0 : _ctx$globalProvider$u.name)), 1), createVNode("p", null, toDisplayString(_ctx.mobile), 1), createVNode("p", null, toDisplayString(_ctx.domain), 1), (_ctx$waterMarker2 = _ctx.waterMarker) !== null && _ctx$waterMarker2 !== void 0 && _ctx$waterMarker2.cityName ? (openBlock(), createBlock("p", _hoisted_1, toDisplayString(_ctx.waterMarker.cityName), 1)) : createCommentVNode("v-if", true), (_ctx$waterMarker3 = _ctx.waterMarker) !== null && _ctx$waterMarker3 !== void 0 && _ctx$waterMarker3.ip ? (openBlock(), createBlock("p", _hoisted_2, toDisplayString(_ctx.waterMarker.ip), 1)) : createCommentVNode("v-if", true), createVNode("p", null, toDisplayString(_ctx.timestamp), 1)]);
  }), 128)) : createCommentVNode("v-if", true);
}

script$1.render = render$1;
script$1.__file = "packages/provider/WaterMaker.vue";
var script = defineComponent({
  name: createNamespace("Provider"),
  props: {
    locale: {
      type: Object,
      default: () => ({
        locale: "zh-cn"
      })
    },
    waterMarker: {
      default: () => ({})
    }
  },

  setup(props) {
    var _window2;

    const {
      locale,
      waterMarker
    } = toRefs(props);
    const globalProvider = initProvider();
    const globalEASILocale = initI18n(props.locale ? props.locale.locale : "zh-cn");
    provide("globalProvider", globalProvider);
    provide("globalEASILocale", globalEASILocale);
    watch(() => locale.value, newVal => {
      globalEASILocale.message = newVal !== null && newVal !== void 0 && newVal.locale ? langMap[newVal.locale] : langMap["zh-cn"];
    });
    let observer;
    const domain = (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.location.host;

    const _row = Math.ceil(screen.width / 220);

    const _col = Math.ceil(screen.height / 220);

    const totalNumber = _row * _col;
    let app;
    let comp;

    const createMarker = () => {
      const dom = document.createElement("div");
      dom.id = "easi-watermarker-container";
      app = createApp(script$1, {
        domain,
        totalNumber,
        globalProvider
      });
      comp = app.mount(dom);
      comp.waterMarker = waterMarker.value;
      document.body.appendChild(dom);
    };

    const obverseFunc = () => {
      const config = {
        childList: true
      };

      const callback = async function (mutationsList, observer2) {
        for (const record of mutationsList) {
          const removeList = record.removedNodes;

          if ((removeList === null || removeList === void 0 ? void 0 : removeList.length) > 0) {
            for (const dom of Array.from(removeList)) {
              if (dom.getAttribute("id") === "easi-watermarker-container") {
                var _app;

                (_app = app) === null || _app === void 0 ? void 0 : _app.unmount();
                comp = null;
                createMarker();
              }
            }
          }
        }
      };

      observer = new MutationObserver(callback);
      observer.observe(document.body, config);
    };

    console.log(waterMarker.value);

    if (!document.querySelector("#easi-watermarker-container") && waterMarker.value) {
      obverseFunc();
      createMarker();
    }

    watch(() => waterMarker.value, () => {
      if (comp) {
        comp.waterMarker = waterMarker.value;
      }
    });
    return {
      domain,
      totalNumber
    };
  },

  components: {
    WaterMarker: script$1
  }
});

const _withId = /* @__PURE__ */withScopeId("data-v-819b5b50");

const render = /* @__PURE__ */_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_a_config_provider = resolveComponent("a-config-provider");

  return openBlock(), createBlock(_component_a_config_provider, mergeProps({
    locale: _ctx.locale
  }, _ctx.$attrs), {
    default: _withId(() => [renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 16, ["locale"]);
});

script.render = render;
script.__scopeId = "data-v-819b5b50";
script.__file = "packages/provider/Index.vue";

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
