'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function createNamespace(name) {
  return `EASI${name}`;
}

function getEASIText(key, value) {
  const globalEASILocale = vue.inject("globalEASILocale", { message: {} });
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

var script = vue.defineComponent({
  name: createNamespace("Loading"),
  emits: ["update:pShow"],
  props: {
    pTitle: {
      default: "loading",
      type: String
    },
    pShow: {
      default: true,
      type: Boolean
    },
    pSize: {
      default: "normal",
      type: String
    }
  },
  setup(props, { emit }) {
    const { pTitle, pShow, pSize } = vue.toRefs(props);
    const defaultTitle = getEASIText("loading");
    const show = vue.ref(true);
    const title = vue.ref(props.pTitle || defaultTitle);
    const size = vue.ref("normal");
    vue.watch(() => pTitle.value, (newVal) => {
      title.value = newVal;
    });
    vue.watch(() => pShow.value, (newVal) => {
      show.value = newVal;
    });
    vue.watch(() => pSize.value, (newVal) => {
      size.value = newVal;
    });
    vue.watch(() => show.value, (newVal) => {
      emit("update:pShow", newVal);
    });
    return {
      show,
      title,
      size
    };
  }
});

const _withId = /* @__PURE__ */ vue.withScopeId("data-v-044ca92b");
vue.pushScopeId("data-v-044ca92b");
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
      _ctx.show ? (vue.openBlock(), vue.createBlock("div", _hoisted_1, [
        vue.createVNode("div", {
          class: ["loading", _ctx.size]
        }, [
          _hoisted_2,
          _ctx.title ? (vue.openBlock(), vue.createBlock("p", _hoisted_3, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("v-if", true)
        ], 2)
      ])) : vue.createCommentVNode("v-if", true)
    ]),
    _: 1
  });
});

script.render = render;
script.__scopeId = "data-v-044ca92b";
script.__file = "packages/loading/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

exports['default'] = script;
