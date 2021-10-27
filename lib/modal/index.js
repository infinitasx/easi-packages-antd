'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var vue = require('vue');

function createNamespace(name) {
  return `EASI${name}`;
}

function getEASIText(globalEASILocale, key, value) {
  let message = globalEASILocale === null || globalEASILocale === void 0 ? void 0 : globalEASILocale.message[key];

  if (message) {
    if (value) {
      const reg = /(\{).*?(\})/g;
      const keyArray = message.match(reg);
      keyArray.forEach(key2 => {
        let realKey = key2.replace(/\{|\}|\s|\n|\t/g, "");
        const reg1 = new RegExp(`${key2}`, "g");
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
  name: createNamespace("Modal"),
  emits: ["ok", "cancel", "update:visible", "show"],
  props: {
    visible: {
      type: Boolean,
      default: void 0
    },
    title: {
      type: String,
      default: ""
    },
    bodyStyle: Object,
    showCancel: {
      type: Boolean,
      default: true
    },
    showOk: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String
    },
    okText: {
      type: String
    },
    okType: {
      type: String,
      default: "primary"
    },
    closable: {
      default: true,
      type: Boolean
    },
    afterClose: Function,
    confirmLoading: {
      type: Boolean,
      default: false
    },
    destroyOnClose: {
      type: Boolean,
      default: true
    },
    keyboard: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: 1e3
    },
    getContainer: {
      type: Function,
      default: () => document.body
    },
    handleOk: {
      type: Function,
      default: null
    },
    autoHeight: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    }
  },

  setup(props, {
    emit
  }) {
    const {
      handleOk,
      visible
    } = vue.toRefs(props);
    const symbolVisible = vue.ref(false);
    const globalEASILocale = vue.inject("globalEASILocale", {
      message: {}
    });
    const bodyScrollStyle = {
      maxHeight: "calc(100vh - 160px)",
      overflow: "auto"
    };

    const showModal = () => {
      symbolVisible.value = true;
      emit("update:visible", true);
      emit("show");
    };

    vue.watch(() => visible.value, newVal => {
      if (newVal) {
        emit("update:visible", true);
        emit("show");
      }
    });
    const autoLoading = vue.ref(false);

    const onCancel = () => {
      symbolVisible.value = false;
      emit("update:visible", false);
      emit("cancel");
    };

    const onConfirm = async () => {
      if (handleOk.value && typeof handleOk.value === "function") {
        try {
          autoLoading.value = true;
          await handleOk.value();
          autoLoading.value = false;
          onCancel();
        } catch (e) {
          console.log(e);
          autoLoading.value = false;
        }
      } else {
        emit("ok");
        onCancel();
      }
    };

    return {
      symbolVisible,
      autoLoading,
      bodyScrollStyle,
      onConfirm,
      onCancel,
      showModal,

      getText(key, value) {
        return getEASIText(globalEASILocale, key, value);
      }

    };
  }

});
const _hoisted_1 = {
  key: 0,
  class: "footer"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_button = vue.resolveComponent("a-button");

  const _component_a_modal = vue.resolveComponent("a-modal");

  return vue.openBlock(), vue.createBlock(vue.Fragment, null, [vue.createCommentVNode('  <slot name="trigger" />'), vue.createVNode(_component_a_modal, vue.mergeProps({
    visible: _ctx.visible === void 0 ? _ctx.symbolVisible : _ctx.visible,
    title: _ctx.title,
    bodyStyle: _ctx.autoHeight ? _ctx.bodyStyle : { ..._ctx.bodyScrollStyle,
      ..._ctx.bodyStyle
    },
    closable: _ctx.closable,
    confirmLoading: _ctx.autoLoading || _ctx.confirmLoading,
    destroyOnClose: _ctx.destroyOnClose,
    keyboard: _ctx.keyboard,
    maskClosable: _ctx.maskClosable,
    width: _ctx.width,
    getContainer: _ctx.getContainer,
    afterClose: _ctx.afterClose,
    class: ["modal-top", {
      "no-footer": !_ctx.footer
    }]
  }, _ctx.$attrs, {
    onCancel: _ctx.onCancel
  }), {
    footer: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "footer"), !_ctx.$slots.footer && _ctx.footer ? (vue.openBlock(), vue.createBlock("div", _hoisted_1, [_ctx.showCancel ? (vue.openBlock(), vue.createBlock(_component_a_button, {
      key: 0,
      onClick: _ctx.onCancel
    }, {
      default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.cancelText || _ctx.getText("cancel")), 1)]),
      _: 1
    }, 8, ["onClick"])) : vue.createCommentVNode("v-if", true), _ctx.showOk ? (vue.openBlock(), vue.createBlock(_component_a_button, {
      key: 1,
      type: _ctx.okType,
      loading: _ctx.autoLoading || _ctx.confirmLoading,
      onClick: _ctx.onConfirm
    }, {
      default: vue.withCtx(() => [vue.createTextVNode(vue.toDisplayString(_ctx.okText || _ctx.getText("confirm")), 1)]),
      _: 1
    }, 8, ["type", "loading", "onClick"])) : vue.createCommentVNode("v-if", true)])) : vue.createCommentVNode("v-if", true)]),
    default: vue.withCtx(() => [vue.renderSlot(_ctx.$slots, "default")]),
    _: 3
  }, 16, ["visible", "title", "bodyStyle", "closable", "confirmLoading", "destroyOnClose", "keyboard", "maskClosable", "width", "getContainer", "afterClose", "class", "onCancel"])], 2112);
}

script.render = render;
script.__file = "packages/modal/Index.vue";

script.install = app => {
  app.component(script.name, script);
};

exports['default'] = script;
