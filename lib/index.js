import * as e from "vue";
import {
  reactive as t,
  nextTick as a,
  toRaw as n,
  inject as o,
  defineComponent as r,
  toRefs as l,
  provide as i,
  watch as s,
  resolveComponent as c,
  openBlock as u,
  createBlock as d,
  mergeProps as f,
  renderSlot as g,
  withScopeId as h,
  createTextVNode as p,
  computed as b,
  pushScopeId as m,
  popScopeId as v,
  createCommentVNode as y,
  createVNode as w,
  createSlots as S,
  renderList as k,
  getCurrentInstance as x,
  Fragment as O,
  withCtx as P,
  toDisplayString as C,
  ref as T,
  Transition as A,
  onMounted as j,
  withDirectives as M,
  vShow as _,
  h as I,
  withModifiers as E,
  onBeforeUnmount as H,
  KeepAlive as L,
  resolveDynamicComponent as z,
  resolveDirective as B,
  createApp as N,
} from "vue";
import { getLocal as D, setLocal as $, isMobile as R, debounced as F } from "easi-web-utils";
import { useRoute as V, useRouter as W } from "vue-router";
import { Modal as K } from "ant-design-vue";
import U from "moment";
function q(e) {
  return `EASI${e}`;
}
const Y = document.querySelector("html"),
  J = { reloadPage: !0, mode: !1, showTab: !0, fixedTab: !0, cachedPage: [] };
const Q = {
  "zh-cn": {
    confirm: "确 认",
    cancel: "取 消",
    loading: "加载中...",
    pageTotal: "共 {total} 条数据",
    noPermission: "对不起，您没有权限访问此页面！",
    styleSetting: "风格设置",
    darkSetting: "夜间模式",
    showTabSetting: "显示标签栏",
    fixedTabSetting: "标签栏固定在顶部",
    more: "更多操作",
    logout: "退出登录",
    logoutTitle: "退出确认",
    logoutMessage: "您确定要退出本系统吗?",
    closeOther: "关闭其他",
    refreshPage: "刷新当前页",
    backToDashBoard: "回到Dashboard",
    editPassword: "修改密码",
    deviceTitle: "登录设备管理",
    deviceLoginTime: "登录时间",
  },
  en: {
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
    deviceLoginTime: "Login time",
  },
  ja: {
    confirm: "確 認",
    cancel: "取 消",
    loading: "読み込み中...",
    pageTotal: "合計 {total} レコード",
    noPermission: "申し訳ありませんが、このページにアクセスする権限がありません。",
    styleSetting: "スタイル設定",
    darkSetting: "ナイトモード",
    showTabSetting: "タブバーを表示",
    fixedTabSetting: "タブバー固定トップ",
    more: "More",
    logout: "ログアウト",
    logoutTitle: "終了確認",
    logoutMessage: "このシステムからログアウトしてもよろしいですか?",
    closeOther: "他のタブを閉じる",
    refreshPage: "現在のページを更新",
    backToDashBoard: "Dashboard に戻る",
    editPassword: "パスワードを変更する",
    deviceTitle: "デバイス管理にログインします",
    deviceLoginTime: "ログイン時間",
  },
};
function G(e) {
  return t({ message: Q[e] });
}
function X(e, t) {
  let a = o("globalEASILocale", { message: {} })?.message[e];
  if (a) {
    if (t) {
      const e = /(\{).*?(\})/g;
      a.match(e).forEach((e) => {
        let n = e.replace(/\{|\}|\s|\n|\t/g, "");
        const o = new RegExp(`${e}`, "g");
        a = a.replace(o, t[n]);
      });
    }
    return a;
  }
  return console.warn("未匹配到文案key"), e;
}
var Z = r({
  name: q("Provider"),
  props: { locale: { type: Object, default: () => ({ locale: "zh-cn" }) } },
  setup(e) {
    const { locale: a } = l(e),
      n = (function() {
        const e = D("setting") || { mode: !1, fixedTab: !0, showTab: !0 };
        return (!0 !== e.mode && "dark" !== e.mode) || (e.mode && Y.setAttribute("data-pro-theme", "antdv-pro-theme-dark")), t({ ...e, cachedPage: [], reloadPage: !0 });
      })(),
      o = G(e.locale ? e.locale.locale : "zh-cn");
    i("globalProvider", n),
      i("globalEASILocale", o),
      s(
        () => a.value,
        (e) => {
          o.message = e?.locale ? Q[e.locale] : Q["zh-cn"];
        }
      );
  },
});
const ee = h("data-v-71e84beb"),
  te = ee((e, t, a, n, o, r) => {
    const l = c("a-config-provider");
    return u(), d(l, f({ locale: e.locale }, e.$attrs), { default: ee(() => [g(e.$slots, "default")]), _: 3 }, 16, ["locale"]);
  });
(Z.render = te),
  (Z.__scopeId = "data-v-71e84beb"),
  (Z.__file = "packages/config-provider/Index.vue"),
  (Z.install = (e) => {
    e.component(Z.name, Z);
  });
var ae = r({ name: q("Text"), props: {}, setup(e) {} });
const ne = p("这是一个text组件");
(ae.render = function(e, t, a, n, o, r) {
  return u(), d("div", null, [g(e.$slots, "default", {}, () => [ne])]);
}),
  (ae.__file = "packages/text/Index.vue"),
  (ae.install = (e) => {
    e.component(ae.name, ae);
  });
var oe = r({
  name: q("Button"),
  props: { type: { type: String, default: "default" }, success: { type: Boolean, default: !1 }, warning: { type: Boolean, default: !1 }, info: { type: Boolean, default: !1 } },
  setup(e) {
    const { type: t, success: a, warning: n, info: o } = l(e);
    return {
      className: b(() => {
        let e = "link" === t.value ? "px-0 " : "";
        return a.value ? (e += "easi-btn-success") : n.value ? (e += "easi-btn-warning") : o.value && (e += "easi-btn-info"), e;
      }),
    };
  },
});
const re = h("data-v-0fe45159"),
  le = re((e, t, a, n, o, r) => {
    const l = c("a-button");
    return u(), d(l, f(e.$attrs, { type: e.type, class: e.className }), { icon: re(() => [g(e.$slots, "icon")]), default: re(() => [g(e.$slots, "default")]), _: 3 }, 16, ["type", "class"]);
  });
(oe.render = le),
  (oe.__scopeId = "data-v-0fe45159"),
  (oe.__file = "packages/button/Index.vue"),
  (oe.install = (e) => {
    e.component(oe.name, oe);
  });
var ie = r({
  name: q("Drawer"),
  emits: ["update:visible", "close", "show"],
  props: { visible: { default: !1, type: Boolean }, width: { default: "500px", type: String }, bodyStyle: { default: () => ({}), type: Object } },
  setup(e, { emit: t, slots: a }) {
    const { bodyStyle: o, visible: r } = l(e),
      i = b(() => (a.footer ? { ...o.value, paddingBottom: "55px" } : n(o.value)));
    return (
      s(
        () => r.value,
        (e) => {
          e && t("show");
        }
      ),
      {
        computedBodyStyle: i,
        handleClose() {
          t("update:visible", !1), t("close");
        },
      }
    );
  },
});
const se = h("data-v-57a97f50");
m("data-v-57a97f50");
const ce = { key: 0, class: "drawer-footer" };
v();
const ue = se((e, t, a, n, o, r) => {
  const l = c("a-drawer");
  return (
    u(),
    d(
      l,
      f(e.$attrs, { visible: e.visible, width: e.width, maskClosable: !1, "body-style": e.computedBodyStyle, onClose: e.handleClose }),
      { default: se(() => [g(e.$slots, "default"), e.$slots.footer ? (u(), d("div", ce, [g(e.$slots, "footer")])) : y("v-if", !0)]), _: 3 },
      16,
      ["visible", "width", "body-style", "onClose"]
    )
  );
});
(ie.render = ue),
  (ie.__scopeId = "data-v-57a97f50"),
  (ie.__file = "packages/drawer/Index.vue"),
  (ie.install = (e) => {
    e.component(ie.name, ie);
  });
var de = r({ name: q("Error"), props: { status: { type: String, default: "" } } });
const fe = h("data-v-4bca0fd7"),
  ge = fe((e, t, a, n, o, r) => {
    const l = c("a-result"),
      i = c("a-card");
    return (
      u(),
      d(
        i,
        { bordered: !1, class: "error-full-page" },
        { default: fe(() => [w(l, { status: e.status }, S({ _: 2 }, [k(e.$slots, (t, a) => ({ name: a, fn: fe((t) => [g(e.$slots, a, t)]) }))]), 1032, ["status"])]), _: 1 }
      )
    );
  });
(de.render = ge),
  (de.__scopeId = "data-v-4bca0fd7"),
  (de.__file = "packages/error/Index.vue"),
  (de.install = (e) => {
    e.component(de.name, de);
  });
var he = r({
  name: q("Page"),
  emits: ["initPage"],
  props: {
    showPageHeader: { type: Boolean, default: !0 },
    breadcrumb: { type: Array, default: void 0 },
    title: { type: String, default: "" },
    desc: { type: String, default: "" },
    layoutType: { type: String, default: "customer" },
    hasPermission: { type: Boolean, default: !1 },
  },
  setup(e, { emit: t }) {
    const { breadcrumb: a, title: n, desc: o, hasPermission: r } = l(e),
      i = V(),
      { appContext: s } = x(),
      c = b(() => a.value || i.meta.breadcrumb || i.matched.slice(1).map((e) => ({ path: e.path, breadcrumbName: e.meta.title }))),
      u = b(() => n.value || (i.meta.title && i.meta.title)),
      d = b(() => o.value || (i.meta.desc && i.meta.desc));
    return (r.value || s.config.globalProperties.$usePermissions(i.meta.permission)) && t("initPage"), { breadcrumbRoutes: c, pageTitle: u, pageDesc: d, getEASIText: X };
  },
  components: { NoPermission: de },
});
const pe = { key: 0, class: "page-breadcrumb-wrap" },
  be = { key: 0 },
  me = { class: "p-24" },
  ve = p(" 403 ");
(he.render = function(e, t, a, n, o, r) {
  const l = c("router-link"),
    i = c("a-breadcrumb"),
    s = c("a-page-header"),
    f = c("a-card"),
    h = c("NoPermission");
  return (
    u(),
    d("div", null, [
      e.$usePermissions(e.$route.meta.permission) || e.hasPermission
        ? (u(),
          d(
            O,
            { key: 0 },
            [
              e.showPageHeader
                ? (u(),
                  d("div", pe, [
                    w(
                      s,
                      { title: e.pageTitle },
                      {
                        breadcrumb: P(() => [
                          e.breadcrumbRoutes.length > 1
                            ? (u(),
                              d(
                                i,
                                { key: 0, routes: e.breadcrumbRoutes },
                                { itemRender: P(({ route: e }) => [w(l, { to: e.path }, { default: P(() => [p(C(e.breadcrumbName), 1)]), _: 2 }, 1032, ["to"])]), _: 1 },
                                8,
                                ["routes"]
                              ))
                            : y("v-if", !0),
                        ]),
                        default: P(() => [e.pageDesc ? (u(), d("p", be, C(e.pageDesc), 1)) : y("v-if", !0), g(e.$slots, "header")]),
                        _: 3,
                      },
                      8,
                      ["title"]
                    ),
                  ]))
                : y("v-if", !0),
              w("div", me, ["card" === e.layoutType ? (u(), d(f, { key: 0 }, { default: P(() => [g(e.$slots, "default")]), _: 3 })) : g(e.$slots, "default", { key: 1 })]),
            ],
            64
          ))
        : (u(), d(h, { key: 1, status: "403" }, { title: P(() => [ve]), "sub-title": P(() => [p(C(e.getEASIText("noPermission")), 1)]), _: 1 })),
    ])
  );
}),
  (he.__file = "packages/page/Index.vue"),
  (he.install = (e) => {
    e.component(he.name, he);
  });
var ye = r({
  name: q("Loading"),
  emits: ["update:show"],
  props: { title: { type: String, default: void 0 }, show: { default: !1, type: Boolean }, size: { default: "normal", type: String } },
  setup(e, { emit: t }) {
    const { show: a, size: n } = l(e),
      o = x(),
      r = T(o?.root?.proxy || { localeMessage: { locale: "zh-cn" } }),
      i = G(o?.root?.proxy?.localeMessage?.locale || "zh-cn"),
      c = i?.message?.loading,
      u = T(e.show),
      d = T(c),
      f = T("normal");
    return (
      s(
        () => a.value,
        (e) => {
          u.value = e;
        }
      ),
      s(
        () => n.value,
        (e) => {
          f.value = e;
        }
      ),
      s(
        () => r.value?.localeMessage,
        (e) => {
          e && ((i.message = Q[e?.locale || "zh-cn"]), (d.value = i.message.loading));
        }
      ),
      s(
        () => u.value,
        (e) => {
          t("update:show", e);
        }
      ),
      { cShow: u, cTitle: d, cSize: f, root: r }
    );
  },
});
const we = h("data-v-7bbec90b");
m("data-v-7bbec90b");
const Se = { key: 0, class: "loading-container", id: "cus-loading" },
  ke = w("div", { class: "loading-wrap" }, [w("div", { class: "ball" }, [w("i", { class: "bg spoon" }), w("i", { class: "bg fork" })]), w("div", { class: "loading-shadow" }, [w("div")])], -1),
  xe = { key: 0, class: "tips" };
v();
const Oe = we(
  (e, t, a, n, o, r) => (
    u(),
    d(
      A,
      { name: "fade", mode: "out-in" },
      {
        default: we(() => [
          e.cShow ? (u(), d("div", Se, [w("div", { class: ["loading", e.cSize] }, [ke, e.title || e.cTitle ? (u(), d("p", xe, C(e.title || e.cTitle), 1)) : y("v-if", !0)], 2)])) : y("v-if", !0),
        ]),
        _: 1,
      }
    )
  )
);
(ye.render = Oe),
  (ye.__scopeId = "data-v-7bbec90b"),
  (ye.__file = "packages/loading/Index.vue"),
  (ye.install = (e) => {
    e.component(ye.name, ye);
  });
var Pe = r({
  name: q("Modal"),
  emits: ["ok", "cancel", "update:visible", "show"],
  props: {
    visible: { type: Boolean, default: void 0 },
    title: { type: String, default: "" },
    bodyStyle: Object,
    showCancel: { type: Boolean, default: !0 },
    showOk: { type: Boolean, default: !0 },
    cancelText: { type: String },
    okText: { type: String },
    okType: { type: String, default: "primary" },
    closable: { default: !0, type: Boolean },
    afterClose: Function,
    confirmLoading: { type: Boolean, default: !1 },
    destroyOnClose: { type: Boolean, default: !0 },
    keyboard: { type: Boolean, default: !1 },
    maskClosable: { type: Boolean, default: !1 },
    width: { type: [String, Number], default: 1e3 },
    getContainer: { type: Function, default: () => document.body },
    handleOk: { type: Function, default: null },
    autoHeight: { type: Boolean, default: !0 },
    footer: { type: Boolean, default: !0 },
  },
  setup(e, { emit: t }) {
    const { handleOk: a, visible: n } = l(e),
      o = T(!1);
    s(
      () => n.value,
      (e) => {
        e && (t("update:visible", !0), t("show"));
      }
    );
    const r = T(!1),
      i = () => {
        (o.value = !1), t("update:visible", !1), t("cancel");
      };
    return {
      symbolVisible: o,
      autoLoading: r,
      bodyScrollStyle: { maxHeight: "calc(100vh - 160px)", overflow: "auto" },
      onConfirm: async () => {
        if (a.value && "function" == typeof a.value)
          try {
            (r.value = !0), await a.value(), (r.value = !1), i();
          } catch (e) {
            console.log(e), (r.value = !1);
          }
        else t("ok"), i();
      },
      onCancel: i,
      showModal: () => {
        (o.value = !0), t("update:visible", !0), t("show");
      },
      getEASIText: X,
    };
  },
});
const Ce = { key: 0, class: "footer" };
(Pe.render = function(e, t, a, n, o, r) {
  const l = c("a-button"),
    i = c("a-modal");
  return (
    u(),
    d(
      O,
      null,
      [
        y('  <slot name="trigger" />'),
        w(
          i,
          {
            visible: void 0 === e.visible ? e.symbolVisible : e.visible,
            title: e.title,
            bodyStyle: e.autoHeight ? e.bodyStyle : { ...e.bodyScrollStyle, ...e.bodyStyle },
            closable: e.closable,
            confirmLoading: e.autoLoading || e.confirmLoading,
            destroyOnClose: e.destroyOnClose,
            keyboard: e.keyboard,
            maskClosable: e.maskClosable,
            width: e.width,
            getContainer: e.getContainer,
            afterClose: e.afterClose,
            class: ["modal-top", { "no-footer": !e.footer }],
            onCancel: e.onCancel,
          },
          {
            footer: P(() => [
              g(e.$slots, "footer"),
              !e.$slots.footer && e.footer
                ? (u(),
                  d("div", Ce, [
                    e.showCancel ? (u(), d(l, { key: 0, onClick: e.onCancel }, { default: P(() => [p(C(e.cancelText || e.getEASIText("cancel")), 1)]), _: 1 }, 8, ["onClick"])) : y("v-if", !0),
                    e.showOk
                      ? (u(),
                        d(
                          l,
                          { key: 1, type: e.okType, loading: e.autoLoading || e.confirmLoading, onClick: e.onConfirm },
                          { default: P(() => [p(C(e.okText || e.getEASIText("confirm")), 1)]), _: 1 },
                          8,
                          ["type", "loading", "onClick"]
                        ))
                      : y("v-if", !0),
                  ]))
                : y("v-if", !0),
            ]),
            default: P(() => [g(e.$slots, "default")]),
            _: 3,
          },
          8,
          ["visible", "title", "bodyStyle", "closable", "confirmLoading", "destroyOnClose", "keyboard", "maskClosable", "width", "getContainer", "afterClose", "class", "onCancel"]
        ),
      ],
      2112
    )
  );
}),
  (Pe.__file = "packages/modal/Index.vue"),
  (Pe.install = (e) => {
    e.component(Pe.name, Pe);
  });
var Te = r({
  name: q("menu"),
  props: {
    collapsed: { type: Boolean, default: !1 },
    logo: { type: String, default: null },
    title: { type: String, default: null },
    subTitle: { type: String, default: null },
    nav: { type: Array, default: () => [] },
  },
  setup(e) {
    const { collapsed: t } = l(e),
      a = V(),
      o = W(),
      r = T([]),
      i = T([]),
      c = () => {
        const e = [...n(a.meta.breadcrumb || [])];
        t.value || (r.value = e.map((e) => e.name)), (i.value = [a.meta.selected || a.name]);
      };
    j(() => {
      c();
    }),
      s(() => a.name, c),
      s(
        () => t.value,
        (e) => {
          if (e) r.value = [];
          else {
            const e = [...n(a.meta.breadcrumb || [])];
            r.value = e.map((e) => e.name);
          }
        }
      );
    return {
      openKeys: r,
      selectedKeys: i,
      toPage: (e) => {
        a.name !== e && o.push({ name: e });
      },
    };
  },
});
const Ae = h("data-v-a3884aa0");
m("data-v-a3884aa0");
const je = { key: 0, class: "admin-title text-white ml-16 truncate" },
  Me = { key: 1, class: "text-12 truncate text-gray-400" },
  _e = { class: "flex-1 overflow-y-auto overflow-x-hidden" },
  Ie = { class: "flex items-center" };
v();
const Ee = Ae((e, t, a, n, o, r) => {
  const l = c("a-menu-item"),
    i = c("a-sub-menu"),
    s = c("a-menu");
  return (
    u(),
    d(
      O,
      null,
      [
        w(
          "div",
          { class: ["py-6 flex items-center", [e.collapsed ? "px-24" : "px-16"]] },
          [
            w("img", { src: e.logo, alt: "", class: "logo" }, null, 8, ["src"]),
            e.title || e.subTitle
              ? M(
                  (u(),
                  d(
                    "div",
                    je,
                    [
                      e.title ? (u(), d("p", { key: 0, class: ["truncate", [e.subTitle ? "text-14" : "text-16"]] }, C(e.title), 3)) : y("v-if", !0),
                      e.subTitle ? (u(), d("p", Me, C(e.subTitle), 1)) : y("v-if", !0),
                    ],
                    512
                  )),
                  [[_, !e.collapsed]]
                )
              : y("v-if", !0),
          ],
          2
        ),
        w("div", _e, [
          w(
            s,
            {
              class: "layout-menu",
              mode: "inline",
              inlineCollapsed: !1,
              openKeys: e.openKeys,
              "onUpdate:openKeys": t[1] || (t[1] = (t) => (e.openKeys = t)),
              selectedKeys: e.selectedKeys,
              "onUpdate:selectedKeys": t[2] || (t[2] = (t) => (e.selectedKeys = t)),
              theme: "dark",
            },
            {
              default: Ae(() => [
                (u(!0),
                d(
                  O,
                  null,
                  k(
                    e.nav,
                    (t) => (
                      u(),
                      d(
                        O,
                        { key: t.name },
                        [
                          t.children && t.children.length > 0 && !t.meta.hideMenu
                            ? (u(),
                              d(
                                i,
                                { key: t.name },
                                {
                                  title: Ae(() => [
                                    w("span", Ie, [t.meta.icon ? (u(), d("i", { key: 0, class: [t.meta.icon, "anticon"] }, null, 2)) : y("v-if", !0), w("span", null, C(t.meta.title), 1)]),
                                  ]),
                                  default: Ae(() => [
                                    (u(!0),
                                    d(
                                      O,
                                      null,
                                      k(
                                        t.children,
                                        (t) => (
                                          u(),
                                          d(
                                            O,
                                            { key: t.name },
                                            [
                                              t.meta.hideMenu
                                                ? y("v-if", !0)
                                                : (u(),
                                                  d(
                                                    l,
                                                    { key: t.name, class: "flex items-center", onClick: (a) => e.toPage(t.name) },
                                                    {
                                                      default: Ae(() => [
                                                        t.meta.icon ? (u(), d("i", { key: 0, class: [t.meta.icon, "anticon"] }, null, 2)) : y("v-if", !0),
                                                        w("span", null, C(t.meta.title), 1),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1032,
                                                    ["onClick"]
                                                  )),
                                            ],
                                            64
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ))
                            : t.children || t.meta.hideMenu
                            ? y("v-if", !0)
                            : (u(),
                              d(
                                l,
                                { key: t.name, class: "flex items-center", onClick: (a) => e.toPage(t.name) },
                                { default: Ae(() => [t.meta.icon ? (u(), d("i", { key: 0, class: [t.meta.icon, "anticon"] }, null, 2)) : y("v-if", !0), w("span", null, C(t.meta.title), 1)]), _: 2 },
                                1032,
                                ["onClick"]
                              )),
                        ],
                        64
                      )
                    )
                  ),
                  128
                )),
              ]),
              _: 1,
            },
            8,
            ["openKeys", "selectedKeys"]
          ),
        ]),
      ],
      64
    )
  );
});
(Te.render = Ee), (Te.__scopeId = "data-v-a3884aa0"), (Te.__file = "packages/layout/Menu.vue");
var He = r({
  name: q("Nav"),
  emits: ["hideMenu"],
  props: {
    collapsed: { type: Boolean, default: !0 },
    collWidth: { type: String, default: "" },
    isH5: { type: Boolean, default: !1 },
    logo: { type: String, default: null },
    title: { type: String, default: null },
    subTitle: { type: String, default: null },
    nav: { type: Array, default: () => [] },
  },
  components: { NavMenu: Te },
});
function Le(e, t) {
  (function(e) {
    return "string" == typeof e && -1 !== e.indexOf(".") && 1 === parseFloat(e);
  })(e) && (e = "100%");
  var a = (function(e) {
    return "string" == typeof e && -1 !== e.indexOf("%");
  })(e);
  return (
    (e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    a && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6 ? 1 : (e = 360 === t ? (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)) : (e % t) / parseFloat(String(t)))
  );
}
function ze(e) {
  return Math.min(1, Math.max(0, e));
}
function Be(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ne(e) {
  return e <= 1 ? 100 * Number(e) + "%" : e;
}
function De(e) {
  return 1 === e.length ? "0" + e : String(e);
}
function $e(e, t, a) {
  (e = Le(e, 255)), (t = Le(t, 255)), (a = Le(a, 255));
  var n = Math.max(e, t, a),
    o = Math.min(e, t, a),
    r = 0,
    l = 0,
    i = (n + o) / 2;
  if (n === o) (l = 0), (r = 0);
  else {
    var s = n - o;
    switch (((l = i > 0.5 ? s / (2 - n - o) : s / (n + o)), n)) {
      case e:
        r = (t - a) / s + (t < a ? 6 : 0);
        break;
      case t:
        r = (a - e) / s + 2;
        break;
      case a:
        r = (e - t) / s + 4;
    }
    r /= 6;
  }
  return { h: r, s: l, l: i };
}
function Re(e, t, a) {
  return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? e + 6 * a * (t - e) : a < 0.5 ? t : a < 2 / 3 ? e + (t - e) * (2 / 3 - a) * 6 : e;
}
function Fe(e, t, a) {
  (e = Le(e, 255)), (t = Le(t, 255)), (a = Le(a, 255));
  var n = Math.max(e, t, a),
    o = Math.min(e, t, a),
    r = 0,
    l = n,
    i = n - o,
    s = 0 === n ? 0 : i / n;
  if (n === o) r = 0;
  else {
    switch (n) {
      case e:
        r = (t - a) / i + (t < a ? 6 : 0);
        break;
      case t:
        r = (a - e) / i + 2;
        break;
      case a:
        r = (e - t) / i + 4;
    }
    r /= 6;
  }
  return { h: r, s: s, v: l };
}
function Ve(e, t, a, n) {
  var o = [De(Math.round(e).toString(16)), De(Math.round(t).toString(16)), De(Math.round(a).toString(16))];
  return n && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("");
}
function We(e) {
  return Ke(e) / 255;
}
function Ke(e) {
  return parseInt(e, 16);
}
(He.render = function(e, t, a, n, o, r) {
  const l = c("NavMenu"),
    i = c("a-layout-sider"),
    s = c("a-drawer");
  return (
    u(),
    d(
      O,
      null,
      [
        M(w("div", { class: ["side-placeholder", { "transition-width": !e.isH5 }], style: { width: e.collWidth } }, null, 6), [[_, !e.isH5]]),
        M(
          w(
            i,
            { class: "flex fixed top-0 left-0 flex-col h-screen overflow-hidden z-10", collapsible: "", collapsed: e.collapsed, trigger: null },
            {
              default: P(() => [w(l, { logo: e.logo, title: e.title, "sub-title": e.subTitle, nav: e.nav, collapsed: e.collapsed }, null, 8, ["logo", "title", "sub-title", "nav", "collapsed"])]),
              _: 1,
            },
            8,
            ["collapsed"]
          ),
          [[_, !e.isH5]]
        ),
        w(
          s,
          { placement: "left", width: "200px", closable: !1, visible: !e.collapsed && e.isH5, bodyStyle: { padding: 0, height: "100%" }, onClose: t[1] || (t[1] = (t) => e.$emit("hideMenu")) },
          {
            default: P(() => [
              w(
                i,
                { class: "flex flex-col h-screen overflow-hidden", collapsible: "", collapsed: !1, trigger: null },
                { default: P(() => [w(l, { logo: e.logo, title: e.title, "sub-title": e.subTitle, nav: e.nav, collapsed: !1 }, null, 8, ["logo", "title", "sub-title", "nav"])]), _: 1 }
              ),
            ]),
            _: 1,
          },
          8,
          ["visible"]
        ),
      ],
      64
    )
  );
}),
  (He.__file = "packages/layout/Nav.vue");
var Ue = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
};
function qe(e) {
  var t,
    a,
    n,
    o = { r: 0, g: 0, b: 0 },
    r = 1,
    l = null,
    i = null,
    s = null,
    c = !1,
    u = !1;
  return (
    "string" == typeof e &&
      (e = (function(e) {
        if (0 === (e = e.trim().toLowerCase()).length) return !1;
        var t = !1;
        if (Ue[e]) (e = Ue[e]), (t = !0);
        else if ("transparent" === e) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        var a = Ge.rgb.exec(e);
        if (a) return { r: a[1], g: a[2], b: a[3] };
        if ((a = Ge.rgba.exec(e))) return { r: a[1], g: a[2], b: a[3], a: a[4] };
        if ((a = Ge.hsl.exec(e))) return { h: a[1], s: a[2], l: a[3] };
        if ((a = Ge.hsla.exec(e))) return { h: a[1], s: a[2], l: a[3], a: a[4] };
        if ((a = Ge.hsv.exec(e))) return { h: a[1], s: a[2], v: a[3] };
        if ((a = Ge.hsva.exec(e))) return { h: a[1], s: a[2], v: a[3], a: a[4] };
        if ((a = Ge.hex8.exec(e))) return { r: Ke(a[1]), g: Ke(a[2]), b: Ke(a[3]), a: We(a[4]), format: t ? "name" : "hex8" };
        if ((a = Ge.hex6.exec(e))) return { r: Ke(a[1]), g: Ke(a[2]), b: Ke(a[3]), format: t ? "name" : "hex" };
        if ((a = Ge.hex4.exec(e))) return { r: Ke(a[1] + a[1]), g: Ke(a[2] + a[2]), b: Ke(a[3] + a[3]), a: We(a[4] + a[4]), format: t ? "name" : "hex8" };
        if ((a = Ge.hex3.exec(e))) return { r: Ke(a[1] + a[1]), g: Ke(a[2] + a[2]), b: Ke(a[3] + a[3]), format: t ? "name" : "hex" };
        return !1;
      })(e)),
    "object" == typeof e &&
      (Xe(e.r) && Xe(e.g) && Xe(e.b)
        ? ((t = e.r), (a = e.g), (n = e.b), (o = { r: 255 * Le(t, 255), g: 255 * Le(a, 255), b: 255 * Le(n, 255) }), (c = !0), (u = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
        : Xe(e.h) && Xe(e.s) && Xe(e.v)
        ? ((l = Ne(e.s)),
          (i = Ne(e.v)),
          (o = (function(e, t, a) {
            (e = 6 * Le(e, 360)), (t = Le(t, 100)), (a = Le(a, 100));
            var n = Math.floor(e),
              o = e - n,
              r = a * (1 - t),
              l = a * (1 - o * t),
              i = a * (1 - (1 - o) * t),
              s = n % 6;
            return { r: 255 * [a, l, r, r, i, a][s], g: 255 * [i, a, a, l, r, r][s], b: 255 * [r, r, i, a, a, l][s] };
          })(e.h, l, i)),
          (c = !0),
          (u = "hsv"))
        : Xe(e.h) &&
          Xe(e.s) &&
          Xe(e.l) &&
          ((l = Ne(e.s)),
          (s = Ne(e.l)),
          (o = (function(e, t, a) {
            var n, o, r;
            if (((e = Le(e, 360)), (t = Le(t, 100)), (a = Le(a, 100)), 0 === t)) (o = a), (r = a), (n = a);
            else {
              var l = a < 0.5 ? a * (1 + t) : a + t - a * t,
                i = 2 * a - l;
              (n = Re(i, l, e + 1 / 3)), (o = Re(i, l, e)), (r = Re(i, l, e - 1 / 3));
            }
            return { r: 255 * n, g: 255 * o, b: 255 * r };
          })(e.h, l, s)),
          (c = !0),
          (u = "hsl")),
      Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)),
    (r = Be(r)),
    { ok: c, format: e.format || u, r: Math.min(255, Math.max(o.r, 0)), g: Math.min(255, Math.max(o.g, 0)), b: Math.min(255, Math.max(o.b, 0)), a: r }
  );
}
var Ye = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
  Je = "[\\s|\\(]+(" + Ye + ")[,|\\s]+(" + Ye + ")[,|\\s]+(" + Ye + ")\\s*\\)?",
  Qe = "[\\s|\\(]+(" + Ye + ")[,|\\s]+(" + Ye + ")[,|\\s]+(" + Ye + ")[,|\\s]+(" + Ye + ")\\s*\\)?",
  Ge = {
    CSS_UNIT: new RegExp(Ye),
    rgb: new RegExp("rgb" + Je),
    rgba: new RegExp("rgba" + Qe),
    hsl: new RegExp("hsl" + Je),
    hsla: new RegExp("hsla" + Qe),
    hsv: new RegExp("hsv" + Je),
    hsva: new RegExp("hsva" + Qe),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function Xe(e) {
  return Boolean(Ge.CSS_UNIT.exec(String(e)));
}
var Ze = (function() {
    function e(t, a) {
      var n;
      if ((void 0 === t && (t = ""), void 0 === a && (a = {}), t instanceof e)) return t;
      "number" == typeof t &&
        (t = (function(e) {
          return { r: e >> 16, g: (65280 & e) >> 8, b: 255 & e };
        })(t)),
        (this.originalInput = t);
      var o = qe(t);
      (this.originalInput = t),
        (this.r = o.r),
        (this.g = o.g),
        (this.b = o.b),
        (this.a = o.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = null !== (n = a.format) && void 0 !== n ? n : o.format),
        (this.gradientType = a.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = o.ok);
    }
    return (
      (e.prototype.isDark = function() {
        return this.getBrightness() < 128;
      }),
      (e.prototype.isLight = function() {
        return !this.isDark();
      }),
      (e.prototype.getBrightness = function() {
        var e = this.toRgb();
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
      }),
      (e.prototype.getLuminance = function() {
        var e = this.toRgb(),
          t = e.r / 255,
          a = e.g / 255,
          n = e.b / 255;
        return (
          0.2126 * (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
          0.7152 * (a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4)) +
          0.0722 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4))
        );
      }),
      (e.prototype.getAlpha = function() {
        return this.a;
      }),
      (e.prototype.setAlpha = function(e) {
        return (this.a = Be(e)), (this.roundA = Math.round(100 * this.a) / 100), this;
      }),
      (e.prototype.toHsv = function() {
        var e = Fe(this.r, this.g, this.b);
        return { h: 360 * e.h, s: e.s, v: e.v, a: this.a };
      }),
      (e.prototype.toHsvString = function() {
        var e = Fe(this.r, this.g, this.b),
          t = Math.round(360 * e.h),
          a = Math.round(100 * e.s),
          n = Math.round(100 * e.v);
        return 1 === this.a ? "hsv(" + t + ", " + a + "%, " + n + "%)" : "hsva(" + t + ", " + a + "%, " + n + "%, " + this.roundA + ")";
      }),
      (e.prototype.toHsl = function() {
        var e = $e(this.r, this.g, this.b);
        return { h: 360 * e.h, s: e.s, l: e.l, a: this.a };
      }),
      (e.prototype.toHslString = function() {
        var e = $e(this.r, this.g, this.b),
          t = Math.round(360 * e.h),
          a = Math.round(100 * e.s),
          n = Math.round(100 * e.l);
        return 1 === this.a ? "hsl(" + t + ", " + a + "%, " + n + "%)" : "hsla(" + t + ", " + a + "%, " + n + "%, " + this.roundA + ")";
      }),
      (e.prototype.toHex = function(e) {
        return void 0 === e && (e = !1), Ve(this.r, this.g, this.b, e);
      }),
      (e.prototype.toHexString = function(e) {
        return void 0 === e && (e = !1), "#" + this.toHex(e);
      }),
      (e.prototype.toHex8 = function(e) {
        return (
          void 0 === e && (e = !1),
          (function(e, t, a, n, o) {
            var r,
              l = [De(Math.round(e).toString(16)), De(Math.round(t).toString(16)), De(Math.round(a).toString(16)), De(((r = n), Math.round(255 * parseFloat(r)).toString(16)))];
            return o && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1))
              ? l[0].charAt(0) + l[1].charAt(0) + l[2].charAt(0) + l[3].charAt(0)
              : l.join("");
          })(this.r, this.g, this.b, this.a, e)
        );
      }),
      (e.prototype.toHex8String = function(e) {
        return void 0 === e && (e = !1), "#" + this.toHex8(e);
      }),
      (e.prototype.toRgb = function() {
        return { r: Math.round(this.r), g: Math.round(this.g), b: Math.round(this.b), a: this.a };
      }),
      (e.prototype.toRgbString = function() {
        var e = Math.round(this.r),
          t = Math.round(this.g),
          a = Math.round(this.b);
        return 1 === this.a ? "rgb(" + e + ", " + t + ", " + a + ")" : "rgba(" + e + ", " + t + ", " + a + ", " + this.roundA + ")";
      }),
      (e.prototype.toPercentageRgb = function() {
        var e = function(e) {
          return Math.round(100 * Le(e, 255)) + "%";
        };
        return { r: e(this.r), g: e(this.g), b: e(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function() {
        var e = function(e) {
          return Math.round(100 * Le(e, 255));
        };
        return 1 === this.a ? "rgb(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%)" : "rgba(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%, " + this.roundA + ")";
      }),
      (e.prototype.toName = function() {
        if (0 === this.a) return "transparent";
        if (this.a < 1) return !1;
        for (var e = "#" + Ve(this.r, this.g, this.b, !1), t = 0, a = Object.entries(Ue); t < a.length; t++) {
          var n = a[t],
            o = n[0];
          if (e === n[1]) return o;
        }
        return !1;
      }),
      (e.prototype.toString = function(e) {
        var t = Boolean(e);
        e = null != e ? e : this.format;
        var a = !1,
          n = this.a < 1 && this.a >= 0;
        return t || !n || (!e.startsWith("hex") && "name" !== e)
          ? ("rgb" === e && (a = this.toRgbString()),
            "prgb" === e && (a = this.toPercentageRgbString()),
            ("hex" !== e && "hex6" !== e) || (a = this.toHexString()),
            "hex3" === e && (a = this.toHexString(!0)),
            "hex4" === e && (a = this.toHex8String(!0)),
            "hex8" === e && (a = this.toHex8String()),
            "name" === e && (a = this.toName()),
            "hsl" === e && (a = this.toHslString()),
            "hsv" === e && (a = this.toHsvString()),
            a || this.toHexString())
          : "name" === e && 0 === this.a
          ? this.toName()
          : this.toRgbString();
      }),
      (e.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      }),
      (e.prototype.clone = function() {
        return new e(this.toString());
      }),
      (e.prototype.lighten = function(t) {
        void 0 === t && (t = 10);
        var a = this.toHsl();
        return (a.l += t / 100), (a.l = ze(a.l)), new e(a);
      }),
      (e.prototype.brighten = function(t) {
        void 0 === t && (t = 10);
        var a = this.toRgb();
        return (
          (a.r = Math.max(0, Math.min(255, a.r - Math.round((-t / 100) * 255)))),
          (a.g = Math.max(0, Math.min(255, a.g - Math.round((-t / 100) * 255)))),
          (a.b = Math.max(0, Math.min(255, a.b - Math.round((-t / 100) * 255)))),
          new e(a)
        );
      }),
      (e.prototype.darken = function(t) {
        void 0 === t && (t = 10);
        var a = this.toHsl();
        return (a.l -= t / 100), (a.l = ze(a.l)), new e(a);
      }),
      (e.prototype.tint = function(e) {
        return void 0 === e && (e = 10), this.mix("white", e);
      }),
      (e.prototype.shade = function(e) {
        return void 0 === e && (e = 10), this.mix("black", e);
      }),
      (e.prototype.desaturate = function(t) {
        void 0 === t && (t = 10);
        var a = this.toHsl();
        return (a.s -= t / 100), (a.s = ze(a.s)), new e(a);
      }),
      (e.prototype.saturate = function(t) {
        void 0 === t && (t = 10);
        var a = this.toHsl();
        return (a.s += t / 100), (a.s = ze(a.s)), new e(a);
      }),
      (e.prototype.greyscale = function() {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function(t) {
        var a = this.toHsl(),
          n = (a.h + t) % 360;
        return (a.h = n < 0 ? 360 + n : n), new e(a);
      }),
      (e.prototype.mix = function(t, a) {
        void 0 === a && (a = 50);
        var n = this.toRgb(),
          o = new e(t).toRgb(),
          r = a / 100;
        return new e({ r: (o.r - n.r) * r + n.r, g: (o.g - n.g) * r + n.g, b: (o.b - n.b) * r + n.b, a: (o.a - n.a) * r + n.a });
      }),
      (e.prototype.analogous = function(t, a) {
        void 0 === t && (t = 6), void 0 === a && (a = 30);
        var n = this.toHsl(),
          o = 360 / a,
          r = [this];
        for (n.h = (n.h - ((o * t) >> 1) + 720) % 360; --t; ) (n.h = (n.h + o) % 360), r.push(new e(n));
        return r;
      }),
      (e.prototype.complement = function() {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function(t) {
        void 0 === t && (t = 6);
        for (var a = this.toHsv(), n = a.h, o = a.s, r = a.v, l = [], i = 1 / t; t--; ) l.push(new e({ h: n, s: o, v: r })), (r = (r + i) % 1);
        return l;
      }),
      (e.prototype.splitcomplement = function() {
        var t = this.toHsl(),
          a = t.h;
        return [this, new e({ h: (a + 72) % 360, s: t.s, l: t.l }), new e({ h: (a + 216) % 360, s: t.s, l: t.l })];
      }),
      (e.prototype.onBackground = function(t) {
        var a = this.toRgb(),
          n = new e(t).toRgb();
        return new e({ r: n.r + (a.r - n.r) * a.a, g: n.g + (a.g - n.g) * a.a, b: n.b + (a.b - n.b) * a.a });
      }),
      (e.prototype.triad = function() {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function() {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function(t) {
        for (var a = this.toHsl(), n = a.h, o = [this], r = 360 / t, l = 1; l < t; l++) o.push(new e({ h: (n + l * r) % 360, s: a.s, l: a.l }));
        return o;
      }),
      (e.prototype.equals = function(t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  et = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ];
function tt(e, t, a) {
  var n;
  return (
    (n = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? (a ? Math.round(e.h) - 2 * t : Math.round(e.h) + 2 * t) : a ? Math.round(e.h) + 2 * t : Math.round(e.h) - 2 * t) < 0
      ? (n += 360)
      : n >= 360 && (n -= 360),
    n
  );
}
function at(e, t, a) {
  return 0 === e.h && 0 === e.s
    ? e.s
    : ((n = a ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t) > 1 && (n = 1), a && 5 === t && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2)));
  var n;
}
function nt(e, t, a) {
  var n;
  return (n = a ? e.v + 0.05 * t : e.v - 0.15 * t) > 1 && (n = 1), Number(n.toFixed(2));
}
function ot(e) {
  for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = [], n = new Ze(e), o = 5; o > 0; o -= 1) {
    var r = n.toHsv(),
      l = new Ze({ h: tt(r, o, !0), s: at(r, o, !0), v: nt(r, o, !0) }).toHexString();
    a.push(l);
  }
  a.push(n.toHexString());
  for (var i = 1; i <= 4; i += 1) {
    var s = n.toHsv(),
      c = new Ze({ h: tt(s, i), s: at(s, i), v: nt(s, i) }).toHexString();
    a.push(c);
  }
  return "dark" === t.theme
    ? et.map(function(e) {
        var n = e.index,
          o = e.opacity;
        return new Ze(t.backgroundColor || "#141414").mix(a[n], 100 * o).toHexString();
      })
    : a;
}
var rt = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1890FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666",
  },
  lt = {},
  it = {};
Object.keys(rt).forEach(function(e) {
  (lt[e] = ot(rt[e])), (lt[e].primary = lt[e][5]), (it[e] = ot(rt[e], { theme: "dark", backgroundColor: "#141414" })), (it[e].primary = it[e][5]);
}),
  lt.red,
  lt.volcano,
  lt.gold,
  lt.orange,
  lt.yellow,
  lt.lime,
  lt.green,
  lt.cyan,
  lt.blue,
  lt.geekblue,
  lt.purple,
  lt.magenta,
  lt.grey;
var st = [],
  ct = [];
function ut(e, t) {
  if (((t = t || {}), void 0 === e)) throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");
  var a,
    n = !0 === t.prepend ? "prepend" : "append",
    o = void 0 !== t.container ? t.container : document.querySelector("head"),
    r = st.indexOf(o);
  return (
    -1 === r && ((r = st.push(o) - 1), (ct[r] = {})),
    void 0 !== ct[r] && void 0 !== ct[r][n]
      ? (a = ct[r][n])
      : ((a = ct[r][n] = (function() {
          var e = document.createElement("style");
          return e.setAttribute("type", "text/css"), e;
        })()),
        "prepend" === n ? o.insertBefore(a, o.childNodes[0]) : o.appendChild(a)),
    65279 === e.charCodeAt(0) && (e = e.substr(1, e.length)),
    a.styleSheet ? (a.styleSheet.cssText += e) : (a.textContent += e),
    a
  );
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable;
        })
      )),
      n.forEach(function(t) {
        ft(e, t, a[t]);
      });
  }
  return e;
}
function ft(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
function gt(e, t) {
  !(function(e, t) {
    "production" === process.env.NODE_ENV || e || void 0 === console || console.error("Warning: ".concat(t));
  })(e, "[@ant-design/icons-vue] ".concat(t));
}
function ht(e) {
  return "object" == typeof e && "string" == typeof e.name && "string" == typeof e.theme && ("object" == typeof e.icon || "function" == typeof e.icon);
}
function pt(e, t, a) {
  return I(
    e.tag,
    a ? dt({ key: t }, a, e.attrs) : dt({ key: t }, e.attrs),
    (e.children || []).map(function(a, n) {
      return pt(
        a,
        ""
          .concat(t, "-")
          .concat(e.tag, "-")
          .concat(n)
      );
    })
  );
}
function bt(e) {
  return ot(e)[0];
}
function mt(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var vt =
    "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",
  yt = !1;
function wt(e, t) {
  if (null == e) return {};
  var a,
    n,
    o = (function(e, t) {
      if (null == e) return {};
      var a,
        n,
        o = {},
        r = Object.keys(e);
      for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (o[a] = e[a]);
      return o;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (o[a] = e[a]));
  }
  return o;
}
function St(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable;
        })
      )),
      n.forEach(function(t) {
        kt(e, t, a[t]);
      });
  }
  return e;
}
function kt(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var xt = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
var Ot = function(e, t) {
  var n = St({}, e, t.attrs),
    o = n.icon,
    r = n.primaryColor,
    l = n.secondaryColor,
    i = wt(n, ["icon", "primaryColor", "secondaryColor"]),
    s = xt;
  if (
    (r && (s = { primaryColor: r, secondaryColor: l || bt(r) }),
    (function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vt;
      a(function() {
        yt || ("undefined" != typeof window && window.document && window.document.documentElement && ut(e, { prepend: !0 }), (yt = !0));
      });
    })(),
    gt(ht(o), "icon should be icon definiton, but got ".concat(o)),
    !ht(o))
  )
    return null;
  var c = o;
  return (
    c && "function" == typeof c.icon && (c = St({}, c, { icon: c.icon(s.primaryColor, s.secondaryColor) })),
    pt(c.icon, "svg-".concat(c.name), St({}, i, { "data-icon": c.name, width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }))
  );
};
(Ot.props = { icon: Object, primaryColor: String, secondaryColor: String, focusable: String }),
  (Ot.inheritAttrs = !1),
  (Ot.displayName = "IconBase"),
  (Ot.getTwoToneColors = function() {
    return St({}, xt);
  }),
  (Ot.setTwoToneColors = function(e) {
    var t = e.primaryColor,
      a = e.secondaryColor;
    (xt.primaryColor = t), (xt.secondaryColor = a || bt(t)), (xt.calculated = !!a);
  });
var Pt = Ot;
function Ct(e, t) {
  return (
    (function(e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function(e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var a = [],
        n = !0,
        o = !1,
        r = void 0;
      try {
        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (a.push(l.value), !t || a.length !== t); n = !0);
      } catch (e) {
        (o = !0), (r = e);
      } finally {
        try {
          n || null == i.return || i.return();
        } finally {
          if (o) throw r;
        }
      }
      return a;
    })(e, t) ||
    (function(e, t) {
      if (!e) return;
      if ("string" == typeof e) return Tt(e, t);
      var a = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === a && e.constructor && (a = e.constructor.name);
      if ("Map" === a || "Set" === a) return Array.from(e);
      if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Tt(e, t);
    })(e, t) ||
    (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })()
  );
}
function Tt(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
  return n;
}
function At(e) {
  var t = Ct(mt(e), 2),
    a = t[0],
    n = t[1];
  return Pt.setTwoToneColors({ primaryColor: a, secondaryColor: n });
}
function jt(e, t) {
  return (
    (function(e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function(e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var a = [],
        n = !0,
        o = !1,
        r = void 0;
      try {
        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (a.push(l.value), !t || a.length !== t); n = !0);
      } catch (e) {
        (o = !0), (r = e);
      } finally {
        try {
          n || null == i.return || i.return();
        } finally {
          if (o) throw r;
        }
      }
      return a;
    })(e, t) ||
    (function(e, t) {
      if (!e) return;
      if ("string" == typeof e) return Mt(e, t);
      var a = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === a && e.constructor && (a = e.constructor.name);
      if ("Map" === a || "Set" === a) return Array.from(e);
      if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Mt(e, t);
    })(e, t) ||
    (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })()
  );
}
function Mt(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
  return n;
}
function _t(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
function It(e, t) {
  if (null == e) return {};
  var a,
    n,
    o = (function(e, t) {
      if (null == e) return {};
      var a,
        n,
        o = {},
        r = Object.keys(e);
      for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (o[a] = e[a]);
      return o;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (n = 0; n < r.length; n++) (a = r[n]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (o[a] = e[a]));
  }
  return o;
}
At("#1890ff");
var Et = function(t, a) {
  var n,
    o = (function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? Object(arguments[t]) : {},
          n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
          (n = n.concat(
            Object.getOwnPropertySymbols(a).filter(function(e) {
              return Object.getOwnPropertyDescriptor(a, e).enumerable;
            })
          )),
          n.forEach(function(t) {
            _t(e, t, a[t]);
          });
      }
      return e;
    })({}, t, a.attrs),
    r = o.class,
    l = o.icon,
    i = o.spin,
    s = o.rotate,
    c = o.tabindex,
    u = o.twoToneColor,
    d = o.onClick,
    f = It(o, ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"]),
    g = (_t((n = { anticon: !0 }), "anticon-".concat(l.name), Boolean(l.name)), _t(n, r, r), n),
    h = "" === i || i || "loading" === l.name ? "anticon-spin" : "",
    p = c;
  void 0 === p && d && ((p = -1), (f.tabindex = p));
  var b = s ? { msTransform: "rotate(".concat(s, "deg)"), transform: "rotate(".concat(s, "deg)") } : void 0,
    m = jt(mt(u), 2),
    v = m[0],
    y = m[1];
  return e.createVNode("span", e.mergeProps(f, { role: "img", "aria-label": l.name, onClick: d, class: g }), [
    e.createVNode(Pt, { class: h, icon: l, primaryColor: v, secondaryColor: y, style: b }, null),
  ]);
};
(Et.props = { spin: Boolean, rotate: Number, icon: Object, twoToneColor: String }),
  (Et.displayName = "AntdIcon"),
  (Et.inheritAttrs = !1),
  (Et.getTwoToneColor = function() {
    var e = Pt.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }),
  (Et.setTwoToneColor = At);
var Ht = Et,
  Lt = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d:
              "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
          },
        },
      ],
    },
    name: "close",
    theme: "outlined",
  };
function zt(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var Bt = function(t, a) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          zt(e, t, a[t]);
        });
    }
    return e;
  })({}, t, a.attrs);
  return e.createVNode(Ht, e.mergeProps(n, { icon: Lt }), null);
};
(Bt.displayName = "CloseOutlined"), (Bt.inheritAttrs = !1);
var Nt = Bt,
  Dt = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d:
              "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 00-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 00-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z",
          },
        },
      ],
    },
    name: "compass",
    theme: "outlined",
  };
function $t(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var Rt = function(t, a) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          $t(e, t, a[t]);
        });
    }
    return e;
  })({}, t, a.attrs);
  return e.createVNode(Ht, e.mergeProps(n, { icon: Dt }), null);
};
(Rt.displayName = "CompassOutlined"), (Rt.inheritAttrs = !1);
var Ft = Rt,
  Vt = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d:
              "M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z",
          },
        },
      ],
    },
    name: "desktop",
    theme: "outlined",
  };
function Wt(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var Kt = function(t, a) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          Wt(e, t, a[t]);
        });
    }
    return e;
  })({}, t, a.attrs);
  return e.createVNode(Ht, e.mergeProps(n, { icon: Vt }), null);
};
(Kt.displayName = "DesktopOutlined"), (Kt.inheritAttrs = !1);
var Ut = Kt,
  qt = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" },
        },
        { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } },
      ],
    },
    name: "exclamation-circle",
    theme: "outlined",
  };
function Yt(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var Jt = function(t, a) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          Yt(e, t, a[t]);
        });
    }
    return e;
  })({}, t, a.attrs);
  return e.createVNode(Ht, e.mergeProps(n, { icon: qt }), null);
};
(Jt.displayName = "ExclamationCircleOutlined"), (Jt.inheritAttrs = !1);
var Qt = Jt,
  Gt = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d:
              "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z",
          },
        },
      ],
    },
    name: "logout",
    theme: "outlined",
  };
function Xt(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var Zt = function(t, a) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          Xt(e, t, a[t]);
        });
    }
    return e;
  })({}, t, a.attrs);
  return e.createVNode(Ht, e.mergeProps(n, { icon: Gt }), null);
};
(Zt.displayName = "LogoutOutlined"), (Zt.inheritAttrs = !1);
var ea = Zt,
  ta = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d:
              "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z",
          },
        },
      ],
    },
    name: "menu-fold",
    theme: "outlined",
  };
function aa(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var na = function(t, a) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          aa(e, t, a[t]);
        });
    }
    return e;
  })({}, t, a.attrs);
  return e.createVNode(Ht, e.mergeProps(n, { icon: ta }), null);
};
(na.displayName = "MenuFoldOutlined"), (na.inheritAttrs = !1);
var oa = na,
  ra = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d:
              "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z",
          },
        },
      ],
    },
    name: "menu-unfold",
    theme: "outlined",
  };
function la(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var ia = function(t, a) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          la(e, t, a[t]);
        });
    }
    return e;
  })({}, t, a.attrs);
  return e.createVNode(Ht, e.mergeProps(n, { icon: ra }), null);
};
(ia.displayName = "MenuUnfoldOutlined"), (ia.inheritAttrs = !1);
var sa = ia,
  ca = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: { d: "M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z" },
        },
      ],
    },
    name: "mobile",
    theme: "outlined",
  };
function ua(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var da = function(t, a) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          ua(e, t, a[t]);
        });
    }
    return e;
  })({}, t, a.attrs);
  return e.createVNode(Ht, e.mergeProps(n, { icon: ca }), null);
};
(da.displayName = "MobileOutlined"), (da.inheritAttrs = !1);
var fa = da,
  ga = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [{ tag: "path", attrs: { d: "M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z" } }],
    },
    name: "more",
    theme: "outlined",
  };
function ha(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var pa = function(t, a) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          ha(e, t, a[t]);
        });
    }
    return e;
  })({}, t, a.attrs);
  return e.createVNode(Ht, e.mergeProps(n, { icon: ga }), null);
};
(pa.displayName = "MoreOutlined"), (pa.inheritAttrs = !1);
var ba = pa,
  ma = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d:
              "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z",
          },
        },
      ],
    },
    name: "reload",
    theme: "outlined",
  };
function va(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var ya = function(t, a) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          va(e, t, a[t]);
        });
    }
    return e;
  })({}, t, a.attrs);
  return e.createVNode(Ht, e.mergeProps(n, { icon: ma }), null);
};
(ya.displayName = "ReloadOutlined"), (ya.inheritAttrs = !1);
var wa = ya,
  Sa = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: { d: "M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H232V136h560v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z" },
        },
      ],
    },
    name: "tablet",
    theme: "outlined",
  };
function ka(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var xa = function(t, a) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          ka(e, t, a[t]);
        });
    }
    return e;
  })({}, t, a.attrs);
  return e.createVNode(Ht, e.mergeProps(n, { icon: Sa }), null);
};
(xa.displayName = "TabletOutlined"), (xa.inheritAttrs = !1);
var Oa = xa,
  Pa = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d:
              "M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z",
          },
        },
      ],
    },
    name: "unlock",
    theme: "outlined",
  };
function Ca(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
}
var Ta = function(t, a) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          Ca(e, t, a[t]);
        });
    }
    return e;
  })({}, t, a.attrs);
  return e.createVNode(Ht, e.mergeProps(n, { icon: Pa }), null);
};
(Ta.displayName = "UnlockOutlined"), (Ta.inheritAttrs = !1);
var Aa = Ta,
  ja = r({
    name: q("Header"),
    emits: ["colToggle", "handleShowSetting"],
    props: { collapsed: { type: Boolean, default: !1 }, userInfo: { type: Object, default: () => ({}) } },
    setup: (e, { emit: t }) => ({
      colToggle() {
        t("colToggle");
      },
      handleShowSetting() {
        t("handleShowSetting");
      },
    }),
    components: { MenuFoldOutlined: oa, MenuUnfoldOutlined: sa },
  });
const Ma = h("data-v-45ec92c4");
m("data-v-45ec92c4");
const _a = w("div", { class: "flex-1" }, null, -1);
v();
const Ia = Ma((e, t, a, n, o, r) => {
  const l = c("MenuFoldOutlined"),
    i = c("MenuUnfoldOutlined"),
    s = c("a-avatar");
  return (
    u(),
    d(
      O,
      null,
      [
        M(w(l, { class: "text-18", onClick: e.colToggle }, null, 8, ["onClick"]), [[_, !e.collapsed]]),
        M(w(i, { class: "text-18", onClick: e.colToggle }, null, 8, ["onClick"]), [[_, e.collapsed]]),
        _a,
        w("span", { class: "dropdown-trigger px-8 cursor-pointer easi-hover-block", onClick: t[1] || (t[1] = (...t) => e.handleShowSetting && e.handleShowSetting(...t)) }, [
          e.userInfo?.avatar
            ? (u(), d(s, { key: 0, class: "mr-8", shape: "circle", size: "default", src: e.userInfo.avatar, style: { backgroundColor: "#ffbf00", verticalAlign: "middle" } }, null, 8, ["src"]))
            : y("v-if", !0),
          w("span", null, C(e.userInfo?.name || "用户名"), 1),
        ]),
      ],
      64
    )
  );
});
(ja.render = Ia), (ja.__scopeId = "data-v-45ec92c4"), (ja.__file = "packages/layout/Header.vue");
var Ea = r({
  name: q("Setting"),
  emits: ["update:visible"],
  props: {
    userInfo: { type: Object, default: () => ({}) },
    showTabSetting: { type: Boolean, default: !0 },
    onLogout: { type: Function, default: void 0 },
    toDashboard: { type: Function, default: void 0 },
    editPassword: { type: Function, default: void 0 },
  },
  setup(e) {
    const t = o("globalProvider", { ...J }),
      a = o("globalEASILocale", { message: {} });
    return {
      globalProvider: t,
      setSetting: (e, a) => {
        (t[e] = a),
          (function(e) {
            const { cachedPage: t, reloadPage: a, ...o } = n(e);
            !0 === o.mode || "dark" === o.mode ? Y.setAttribute("data-pro-theme", "antdv-pro-theme-dark") : Y.removeAttribute("data-pro-theme"), $("setting", o);
          })(t);
      },
      handleLogout() {
        K.confirm({
          title: a.message.logoutTitle,
          icon: w(Qt),
          content: a.message.logoutMessage,
          centered: !0,
          okText: a.message.confirm,
          cancelText: a.message.cancel,
          onOk: async () => !e?.onLogout || e.onLogout(),
        });
      },
      handleToDashBoard() {
        e?.toDashboard && e.toDashboard();
      },
      handleEditPassword() {
        e?.editPassword && e.editPassword();
      },
      transformTime: (e) => U(e).format("YYYY-MM-DD HH:mm:ss"),
      globalEASILocale: a,
    };
  },
  components: { LogoutOutlined: ea, ExclamationCircleOutlined: Qt, CompassOutlined: Ft, UnlockOutlined: Aa, MobileOutlined: fa, DesktopOutlined: Ut, TabletOutlined: Oa },
});
const Ha = h("data-v-ac52a5c2");
m("data-v-ac52a5c2");
const La = { class: "flex items-center" },
  za = { class: "flex items-center" },
  Ba = { class: "m-0" },
  Na = { class: "flex items-center mb-24" },
  Da = { class: "flex-1" },
  $a = { key: 1, class: "flex items-center mb-24" },
  Ra = { class: "flex-1" },
  Fa = { key: 2, class: "flex items-center mb-24" },
  Va = { class: "flex-1" };
v();
const Wa = Ha((e, t, a, n, o, r) => {
  const l = c("a-avatar"),
    i = c("a-typography-text"),
    s = c("DesktopOutlined"),
    h = c("MobileOutlined"),
    b = c("TabletOutlined"),
    m = c("a-divider"),
    v = c("a-switch"),
    S = c("CompassOutlined"),
    x = c("UnlockOutlined"),
    P = c("LogoutOutlined"),
    T = c("a-drawer");
  return (
    u(),
    d(
      T,
      f({ placement: "right", width: "320px" }, e.$attrs, { onClose: t[7] || (t[7] = (t) => e.$emit("update:visible", !1)) }),
      {
        title: Ha(() => [
          w("header", La, [
            e.userInfo?.avatar
              ? (u(), d(l, { key: 0, shape: "circle", size: "default", src: e.userInfo.avatar, style: { backgroundColor: "#ffbf00", verticalAlign: "middle", marginRight: "8px" } }, null, 8, ["src"]))
              : y("v-if", !0),
            p(" " + C(e.userInfo?.name || "用户名"), 1),
          ]),
        ]),
        default: Ha(() => [
          g(e.$slots, "action-render"),
          e.userInfo?.devices?.length > 0
            ? (u(),
              d(
                O,
                { key: 0 },
                [
                  w(i, { strong: "", class: "block mb-32" }, { default: Ha(() => [p(C(e.globalEASILocale.message.deviceTitle), 1)]), _: 1 }),
                  (u(!0),
                  d(
                    O,
                    null,
                    k(
                      e.userInfo.devices,
                      (t) => (
                        u(),
                        d("div", { class: "mb-32", key: t.id }, [
                          w("p", za, [
                            w(
                              i,
                              { type: "secondary" },
                              {
                                default: Ha(() => [
                                  "Desktop" === t.device_type
                                    ? (u(), d(s, { key: 0 }))
                                    : "Mobile" === t.device_type
                                    ? (u(), d(h, { key: 1 }))
                                    : "Tablet" === t.device_type
                                    ? (u(), d(b, { key: 2 }))
                                    : y("v-if", !0),
                                ]),
                                _: 2,
                              },
                              1024
                            ),
                            w(i, { class: "flex-1 px-8" }, { default: Ha(() => [p(" IP: " + C(t.ip), 1)]), _: 2 }, 1024),
                          ]),
                          w("p", Ba, [w(i, { type: "secondary" }, { default: Ha(() => [p(C(e.globalEASILocale.message.deviceLoginTime) + " " + C(e.transformTime(t.active_at)), 1)]), _: 2 }, 1024)]),
                        ])
                      )
                    ),
                    128
                  )),
                  w(m),
                ],
                64
              ))
            : y("v-if", !0),
          w(i, { strong: "", class: "block mb-32" }, { default: Ha(() => [p(C(e.globalEASILocale.message.styleSetting), 1)]), _: 1 }),
          w("div", Na, [
            w("span", Da, [w(i, null, { default: Ha(() => [p(C(e.globalEASILocale.message.darkSetting), 1)]), _: 1 })]),
            w("div", null, [w(v, { checked: e.globalProvider.mode, onChange: t[1] || (t[1] = (t) => e.setSetting("mode", t)) }, null, 8, ["checked"])]),
          ]),
          e.showTabSetting
            ? (u(),
              d("div", $a, [
                w("span", Ra, [w(i, null, { default: Ha(() => [p(C(e.globalEASILocale.message.showTabSetting), 1)]), _: 1 })]),
                w("div", null, [w(v, { checked: e.globalProvider.showTab, onChange: t[2] || (t[2] = (t) => e.setSetting("showTab", t)) }, null, 8, ["checked"])]),
              ]))
            : y("v-if", !0),
          e.showTabSetting
            ? (u(),
              d("div", Fa, [
                w("span", Va, [w(i, null, { default: Ha(() => [p(C(e.globalEASILocale.message.fixedTabSetting), 1)]), _: 1 })]),
                w("div", null, [w(v, { checked: e.globalProvider.fixedTab, onChange: t[3] || (t[3] = (t) => e.setSetting("fixedTab", t)) }, null, 8, ["checked"])]),
              ]))
            : y("v-if", !0),
          w(m),
          e.onLogout || e.toDashboard || e.editPassword
            ? (u(), d(i, { key: 3, strong: "", class: "block margin-bottom" }, { default: Ha(() => [p(C(e.globalEASILocale.message.more), 1)]), _: 1 }))
            : y("v-if", !0),
          e.toDashboard
            ? (u(),
              d("div", { key: 4, class: "more-item flex items-center cursor-pointer easi-hover-block", onClick: t[4] || (t[4] = (...t) => e.handleToDashBoard && e.handleToDashBoard(...t)) }, [
                w(S, { class: "mr-8 text-14" }),
                w(i, null, { default: Ha(() => [p(C(e.globalEASILocale.message.backToDashBoard), 1)]), _: 1 }),
              ]))
            : y("v-if", !0),
          e.editPassword
            ? (u(),
              d("div", { key: 5, class: "more-item flex items-center cursor-pointer easi-hover-block", onClick: t[5] || (t[5] = (...t) => e.handleEditPassword && e.handleEditPassword(...t)) }, [
                w(x, { class: "mr-8 text-14" }),
                w(i, null, { default: Ha(() => [p(C(e.globalEASILocale.message.editPassword), 1)]), _: 1 }),
              ]))
            : y("v-if", !0),
          e.onLogout
            ? (u(),
              d("div", { key: 6, class: "more-item flex items-center cursor-pointer text-red-400 easi-hover-block", onClick: t[6] || (t[6] = (...t) => e.handleLogout && e.handleLogout(...t)) }, [
                w(P, { class: "mr-8 text-14" }),
                w(i, { type: "danger" }, { default: Ha(() => [p(C(e.globalEASILocale.message.logout), 1)]), _: 1 }),
              ]))
            : y("v-if", !0),
        ]),
        _: 3,
      },
      16
    )
  );
});
(Ea.render = Wa), (Ea.__scopeId = "data-v-ac52a5c2"), (Ea.__file = "packages/setting/Index.vue");
var Ka = r({
  name: q("Tab"),
  emits: ["reloadPage"],
  setup(e, { emit: t }) {
    const a = V(),
      n = W(),
      r = o("globalProvider", { ...J }),
      l = T(""),
      i = T([]),
      c = () => {
        if (((l.value = a.fullPath), "Index" !== a.name && (0 === i.value.length || !i.value.some((e) => e.fullPath === a.fullPath)))) {
          const e = a.meta;
          i.value.push({ title: a.query.title || a.meta.title, fullPath: a.fullPath, name: a.name, cached: !0 === e.cached || void 0 === e.cached });
        }
      };
    c(),
      s(
        () => a.fullPath,
        () => {
          c();
        }
      );
    const u = () => {
      t("reloadPage");
    };
    return {
      activeKey: l,
      panes: i,
      toPage: (e) => {
        e !== l.value && n.push(e);
      },
      reloadPage: u,
      removeTab: (e) => {
        const { fullPath: t, name: a, cached: o } = i.value[e];
        i.value.splice(e, 1), o && (r.cachedPage = r.cachedPage.filter((e) => e !== a)), t === l.value && ((l.value = i.value[i.value.length - 1].fullPath), n.push(l.value));
      },
      action({ key: e }) {
        switch (e) {
          case "closeAll":
            (i.value = i.value.filter((e) => e.fullPath === l.value)), (r.cachedPage = i.value[0].cached ? [i.value[0].name] : []);
            break;
          case "refresh":
            u();
        }
      },
      getEASIText: X,
    };
  },
  components: { MoreOutlined: ba, ReloadOutlined: wa, CloseOutlined: Nt },
});
const Ua = h("data-v-1dba1a54");
m("data-v-1dba1a54");
const qa = { class: "flex items-center" };
v();
const Ya = Ua((e, t, a, n, o, r) => {
  const l = c("ReloadOutlined"),
    i = c("CloseOutlined"),
    s = c("a-tab-pane"),
    f = c("MoreOutlined"),
    g = c("a-menu-item"),
    h = c("a-menu"),
    b = c("a-dropdown"),
    m = c("a-tabs");
  return (
    u(),
    d(
      m,
      { activeKey: e.activeKey, tabBarStyle: { paddingLeft: "16px" }, "hide-add": "", onTabClick: e.toPage, type: "editable-card", class: "page-tab" },
      {
        tabBarExtraContent: Ua(() => [
          w(
            b,
            { onClick: e.action },
            {
              overlay: Ua(() => [
                w(
                  h,
                  { onClick: e.action },
                  {
                    default: Ua(() => [
                      w(g, { key: "closeAll" }, { default: Ua(() => [p(C(e.getEASIText("closeOther")), 1)]), _: 1 }),
                      w(g, { key: "refresh" }, { default: Ua(() => [p(C(e.getEASIText("refreshPage")), 1)]), _: 1 }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["onClick"]
                ),
              ]),
              default: Ua(() => [w("a", { class: "ant-dropdown-link p-12 mr-8", onClick: t[1] || (t[1] = E(() => {}, ["prevent"])) }, [w(f, { class: "text-16 leading-0" })])]),
              _: 1,
            },
            8,
            ["onClick"]
          ),
        ]),
        default: Ua(() => [
          (u(!0),
          d(
            O,
            null,
            k(
              e.panes,
              (t, a) => (
                u(),
                d(
                  s,
                  { key: t.fullPath, closable: !1 },
                  {
                    tab: Ua(() => [
                      w("span", qa, [
                        p(C(t.title) + " ", 1),
                        M(w(l, { class: "icon-action text-12 leading-0 ml-8", onClick: E(e.reloadPage, ["stop"]) }, null, 8, ["onClick"]), [[_, t.fullPath === e.activeKey]]),
                        M(w(i, { class: "icon-action text-12 leading-0 ml-8", onClick: E((t) => e.removeTab(a), ["stop"]) }, null, 8, ["onClick"]), [[_, 1 !== e.panes.length]]),
                      ]),
                    ]),
                    _: 2,
                  },
                  1024
                )
              )
            ),
            128
          )),
        ]),
        _: 1,
      },
      8,
      ["activeKey", "onTabClick"]
    )
  );
});
(Ka.render = Ya), (Ka.__scopeId = "data-v-1dba1a54"), (Ka.__file = "packages/layout/Tab.vue");
var Ja = r({
  name: q("Layout"),
  props: {
    logo: { type: String, default: null },
    title: { type: String, default: null },
    subTitle: { type: String, default: null },
    nav: { type: Array, default: () => [] },
    userInfo: { type: Object, default: () => ({}) },
    showTabSetting: { type: Boolean, default: !0 },
    onLogout: { type: Function, default: void 0 },
    toDashboard: { type: Function, default: void 0 },
    editPassword: { type: Function, default: void 0 },
    startYear: { type: [String, Number], default: 2021 },
  },
  setup(e) {
    const { nav: t } = l(e),
      n = V(),
      r = W(),
      i = T(R()),
      c = T(!0),
      u = T(i.value),
      d = T(!1),
      f = o("globalProvider", { ...J });
    let g;
    s(
      () => f.fixedTab,
      () => {
        clearTimeout(g),
          (c.value = !1),
          (g = setTimeout(() => {
            c.value = !0;
          }, 200));
      }
    );
    const h = () => {
      n.meta.cached && !f.cachedPage.includes(n.name) && (f.cachedPage = [...f.cachedPage, n.name]);
    };
    h(),
      s(
        () => n.name,
        (e) => {
          h();
        }
      );
    const p = () => {
      F(() => {
        u.value && window.innerWidth > 1200 ? (u.value = !1) : !u.value && window.innerWidth <= 1200 && (u.value = !0),
          i.value && window.innerWidth > 750 ? (i.value = !1) : !i.value && window.innerWidth <= 750 && (i.value = !0);
      }, 250)();
    };
    return (
      p(),
      window.addEventListener("resize", p, !1),
      j(() => {
        "Index" === n.name && t.value.length > 0 && r.replace(t.value[0].path);
      }),
      H(() => {
        window.removeEventListener("resize", p, !1);
      }),
      {
        isH5: i,
        showSetting: d,
        collapsed: u,
        addTransition: c,
        setCollapsed() {
          u.value = !u.value;
        },
        collWidth: b(() => (u.value ? "80px" : "200px")),
        globalProvider: f,
        cachedPage: b(() => (f.showTab ? f.cachedPage : [])),
        onReloadPage: async (e = !1) => (
          await (async function(e, t, n = !1) {
            n ? (e.cachedPage = []) : !1 !== t.meta.cached && (e.cachedPage = e.cachedPage.filter((e) => t.name !== e)),
              (e.reloadPage = !1),
              await a(),
              !1 !== t.meta.cached && (e.cachedPage = [...e.cachedPage, t.name]),
              (e.reloadPage = !0);
          })(f, n, e),
          !0
        ),
        handleShowSetting() {
          d.value = !0;
        },
        copyRightYear() {
          let t = new Date().getFullYear();
          return e.startYear ? (e.startYear.toString() === t.toString() ? e.startYear : `${e.startYear}-${t}`) : "";
        },
      }
    );
  },
  components: { PageNav: He, PageHeader: ja, PageSetting: Ea, PageTab: Ka },
});
const Qa = h("data-v-46be8f51");
m("data-v-46be8f51");
const Ga = w("div", { class: "h-48" }, null, -1),
  Xa = { key: 1, class: "h-64" };
v();
const Za = Qa((e, t, a, n, o, r) => {
  const l = c("PageNav"),
    i = c("PageHeader"),
    s = c("a-layout-header"),
    f = c("PageTab"),
    h = c("router-view"),
    b = c("a-layout-content"),
    m = c("a-layout-footer"),
    v = c("a-layout"),
    S = c("PageSetting");
  return (
    u(),
    d(
      v,
      { class: "min-h-screen" },
      {
        default: Qa(() => [
          y(" 侧边栏导航  "),
          w(
            l,
            {
              collapsed: e.collapsed,
              "coll-width": e.collWidth,
              isH5: e.isH5,
              logo: e.logo,
              "sub-title": e.subTitle,
              title: e.title,
              nav: e.nav,
              onHideMenu: t[1] || (t[1] = (t) => (e.collapsed = !0)),
            },
            null,
            8,
            ["collapsed", "coll-width", "isH5", "logo", "sub-title", "title", "nav"]
          ),
          y(" 内容布局 "),
          w(v, null, {
            default: Qa(() => [
              Ga,
              w(
                s,
                {
                  class: ["page-header fixed top-0 right-0 bg-white flex items-center h-48 leading-48 pl-16 pr-16 z-10", { "transition-width": !e.isH5 }],
                  style: { width: e.isH5 ? "100%" : `calc(100% - ${e.collWidth})` },
                },
                {
                  default: Qa(() => [
                    w(i, { collapsed: e.collapsed, userInfo: e.userInfo, onColToggle: e.setCollapsed, onHandleShowSetting: e.handleShowSetting }, null, 8, [
                      "collapsed",
                      "userInfo",
                      "onColToggle",
                      "onHandleShowSetting",
                    ]),
                  ]),
                  _: 1,
                },
                8,
                ["class", "style"]
              ),
              e.globalProvider.showTab
                ? (u(),
                  d(
                    f,
                    {
                      key: 0,
                      class: ["page-tab pt-6 bg-white", [e.globalProvider.fixedTab ? "fixed top-48 right-0 z-10" : "", !e.isH5 && e.addTransition ? "transition-width" : ""]],
                      style: { width: e.globalProvider.fixedTab && !e.isH5 ? `calc(100% - ${e.collWidth})` : "100%" },
                      onReloadPage: e.onReloadPage,
                    },
                    null,
                    8,
                    ["class", "style", "onReloadPage"]
                  ))
                : y("v-if", !0),
              e.globalProvider.showTab && e.globalProvider.fixedTab ? (u(), d("div", Xa)) : y("v-if", !0),
              w(b, null, {
                default: Qa(() => [
                  w(h, null, {
                    default: Qa(({ Component: t }) => [
                      w(
                        A,
                        { name: "slid-up", mode: "out-in" },
                        {
                          default: Qa(() => [
                            (u(), d(L, { include: e.globalProvider.cachedPage }, [e.globalProvider.reloadPage ? (u(), d(z(t), { key: (t || {}).name })) : y("v-if", !0)], 1032, ["include"])),
                          ]),
                          _: 2,
                        },
                        1024
                      ),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }),
              w(m, { class: "px-16 py-12 text-center" }, { default: Qa(() => [p(" © " + C(e.copyRightYear()) + " EASI, Make Life Easier. ", 1)]), _: 1 }),
            ]),
            _: 1,
          }),
          w(
            S,
            {
              visible: e.showSetting,
              "onUpdate:visible": t[2] || (t[2] = (t) => (e.showSetting = t)),
              userInfo: e.userInfo,
              showTabSetting: e.showTabSetting,
              onLogout: e.onLogout,
              toDashboard: e.toDashboard,
              editPassword: e.editPassword,
            },
            { "action-render": Qa(() => [g(e.$slots, "action-render")]), _: 3 },
            8,
            ["visible", "userInfo", "showTabSetting", "onLogout", "toDashboard", "editPassword"]
          ),
        ]),
        _: 1,
      }
    )
  );
});
(Ja.render = Za),
  (Ja.__scopeId = "data-v-46be8f51"),
  (Ja.__file = "packages/layout/Index.vue"),
  (Ja.install = (e) => {
    e.component(Ja.name, Ja);
  });
var en = r({ name: q("Table"), props: { loading: { type: Boolean, default: !1 }, styleClass: { type: String }, scroll: { type: Object, default: () => ({ x: 1620 }) } } });
(en.render = function(e, t, a, n, o, r) {
  const l = c("a-space"),
    i = c("a-col"),
    s = c("a-row"),
    h = c("a-table"),
    p = B("loading");
  return M(
    (u(),
    d(
      h,
      f({ scroll: e.scroll }, e.$attrs),
      S({ _: 2 }, [
        e.$slots.headerLeft || e.$slots.headerRight
          ? {
              name: "title",
              fn: P(() => [
                w(
                  s,
                  { align: "middle", class: ["flex-wrap", e.styleClass] },
                  {
                    default: P(() => [
                      w(
                        i,
                        { flex: 1, class: "md:min-w-0" },
                        { default: P(() => [e.$slots.headerLeft ? (u(), d(l, { key: 0, class: "flex-wrap" }, { default: P(() => [g(e.$slots, "headerLeft")]), _: 3 })) : y("v-if", !0)]), _: 1 }
                      ),
                      w(i, null, { default: P(() => [e.$slots.headerRight ? (u(), d(l, { key: 0 }, { default: P(() => [g(e.$slots, "headerRight")]), _: 3 })) : y("v-if", !0)]), _: 1 }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class"]
                ),
              ]),
            }
          : void 0,
        k(e.$slots, (t, a) => ({
          name: a,
          fn: P((t) => ["title" !== e.$slots.name && "headerLeft" !== e.$slots.name && "headerRight" !== e.$slots.name ? g(e.$slots, a, f({ key: 0 }, t)) : y("v-if", !0)]),
        })),
      ]),
      1040,
      ["scroll"]
    )),
    [[p, e.loading]]
  );
}),
  (en.__file = "packages/table/Index.vue"),
  (en.install = (e) => {
    e.component(en.name, en);
  }),
  (Ea.install = (e) => {
    e.component(Ea.name, Ea);
  });
var tn = {
    install: (e) => {
      (e.config.globalProperties.$usePermissions = (t, a = "in") => {
        let n = !1;
        const o = e.config.globalProperties.$store.state?.permission?.permissionMap || {};
        return Array.isArray(t) ? ("in" === a ? (n = t.some((e) => !!o[e])) : "all" === a && (n = t.every((e) => !!o[e]))) : "string" == typeof t && (n = !!o[t]), n;
      }),
        e.directive("permission", {
          mounted(t, a) {
            const { value: n, arg: o = "in" } = a;
            e.config.globalProperties.$usePermissions(n, o) || t?.parentNode?.removeChild(t);
          },
        });
    },
  },
  an = {
    install: (e) => {
      const t = (e) => {
          e &&
            setTimeout(() => {
              (e.domInserted = !1), e?.loadingRoot?.parentElement?.removeChild(e?.loadingRoot);
            }, 300);
        },
        n = async (n, o) => {
          let r = "",
            l = !0,
            i = "normal";
          if ("object" == typeof o.value) {
            const { title: e, show: t, size: a = "normal" } = o.value;
            (r = e), (l = t), (i = a);
          } else l = o.value;
          l
            ? (await a(() => {
                (n.originalPosition = getComputedStyle(n, null).position),
                  ((t, a, n) => {
                    "none" !== getComputedStyle(t, null).display &&
                      "hidden" !== getComputedStyle(t, null).visibility &&
                      ("absolute" !== t.originalPosition && "fixed" !== t.originalPosition && (t.style.position = "relative"),
                      (t.comp.cShow = !0),
                      a && (t.comp.cTitle = a),
                      n && (t.comp.cSize = n),
                      (t.comp.root = e._instance?.root?.proxy),
                      t?.appendChild(t?.loadingRoot));
                  })(n, r, i);
              }),
              (n.domInserted = !0))
            : ((n.comp.cShow = !1), n.domInserted && t(n));
        };
      e.directive("loading", {
        async beforeMount(e, t) {
          const a = N(ye);
          (e.loading = e), (e.loadingRoot = document.createElement("div")), (e.comp = a.mount(e.loadingRoot)), await n(e, t);
        },
        async updated(e, t) {
          t.oldValue !== t.value && (await n(e, t));
        },
        async beforeUnmount(e) {
          e.domInserted && ((e.loading = e), t(e)), (e.comp = null);
        },
      });
    },
  };
function nn(e, a) {
  const n = t(e);
  return [
    n,
    (e, t, ...o) => {
      a?.(...o), (n[e] = t);
    },
  ];
}
function on(e) {
  return t({ showQuickJumper: !0, showSizeChanger: !0, showTotal: (e) => X("pageTotal", { total: e || 0 }), showSizeChange: () => null, onShowSizeChange: () => null, ...e });
}
const rn = [Z, ae, oe, ie, de, Ja, ye, Pe, he, en, Ea],
  ln = [tn],
  sn = (e) => {
    ln.forEach((t) => {
      e.use(t);
    }),
      e.use(an),
      rn.forEach((t) => {
        e.component(t.name, t);
      });
  };
var cn = { version: "0.0.23", install: sn };
export {
  oe as EASIButton,
  ie as EASIDrawer,
  de as EASIError,
  Ja as EASILayout,
  ye as EASILoading,
  Pe as EASIModal,
  he as EASIPage,
  Z as EASIProvider,
  Ea as EASISetting,
  en as EASITable,
  ae as EASIText,
  cn as default,
  sn as install,
  nn as useModalVisible,
  on as usePagination,
  an as vLoading,
  tn as vPermission,
};
