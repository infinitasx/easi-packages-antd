var e = Object.defineProperty,
  t = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  i = (t, n, o) => (n in t ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (t[n] = o)),
  l = (e, t) => {
    for (var n in t || (t = {})) r.call(t, n) && i(e, n, t[n]);
    if (o) for (var n of o(t)) a.call(t, n) && i(e, n, t[n]);
    return e;
  },
  s = (e, o) => t(e, n(o));
import * as c from "vue";
import u, {
  reactive as d,
  nextTick as f,
  toRaw as h,
  inject as g,
  defineComponent as p,
  toRefs as m,
  provide as b,
  watch as v,
  resolveComponent as y,
  openBlock as w,
  createBlock as S,
  mergeProps as x,
  renderSlot as O,
  withScopeId as k,
  createTextVNode as P,
  computed as C,
  pushScopeId as j,
  popScopeId as T,
  createCommentVNode as A,
  createVNode as M,
  createSlots as I,
  renderList as E,
  getCurrentInstance as _,
  Fragment as L,
  withCtx as H,
  toDisplayString as B,
  ref as N,
  Transition as D,
  onMounted as z,
  withDirectives as $,
  vShow as R,
  h as F,
  withModifiers as V,
  onBeforeUnmount as U,
  KeepAlive as W,
  resolveDynamicComponent as K,
  resolveDirective as q,
  createApp as Y,
} from "vue";
import { useRoute as J, useRouter as Q } from "vue-router";
import { Modal as Z } from "ant-design-vue";
import G from "moment";
function X(e) {
  return `EASI${e}`;
}
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
var ee = { exports: {} },
  te = { exports: {} };
(te.exports = (function() {
  function e() {
    for (var e = 0, t = {}; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n) t[o] = n[o];
    }
    return t;
  }
  function t(e) {
    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }
  return (function n(o) {
    function r() {}
    function a(t, n, a) {
      if ("undefined" != typeof document) {
        "number" == typeof (a = e({ path: "/" }, r.defaults, a)).expires && (a.expires = new Date(1 * new Date() + 864e5 * a.expires)), (a.expires = a.expires ? a.expires.toUTCString() : "");
        try {
          var i = JSON.stringify(n);
          /^[\{\[]/.test(i) && (n = i);
        } catch (c) {}
        (n = o.write ? o.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)),
          (t = encodeURIComponent(String(t))
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/[\(\)]/g, escape));
        var l = "";
        for (var s in a) a[s] && ((l += "; " + s), !0 !== a[s] && (l += "=" + a[s].split(";")[0]));
        return (document.cookie = t + "=" + n + l);
      }
    }
    function i(e, n) {
      if ("undefined" != typeof document) {
        for (var r = {}, a = document.cookie ? document.cookie.split("; ") : [], i = 0; i < a.length; i++) {
          var l = a[i].split("="),
            s = l.slice(1).join("=");
          n || '"' !== s.charAt(0) || (s = s.slice(1, -1));
          try {
            var c = t(l[0]);
            if (((s = (o.read || o)(s, c) || t(s)), n))
              try {
                s = JSON.parse(s);
              } catch (u) {}
            if (((r[c] = s), e === c)) break;
          } catch (u) {}
        }
        return e ? r[e] : r;
      }
    }
    return (
      (r.set = a),
      (r.get = function(e) {
        return i(e, !1);
      }),
      (r.getJSON = function(e) {
        return i(e, !0);
      }),
      (r.remove = function(t, n) {
        a(t, "", e(n, { expires: -1 }));
      }),
      (r.defaults = {}),
      (r.withConverter = n),
      r
    );
  })(function() {});
})()),
  (function(e, t, n) {
    function o(e) {
      if (e && e.__esModule) return e;
      var t = { __proto__: null, [Symbol.toStringTag]: "Module" };
      return (
        e &&
          Object.keys(e).forEach(function(n) {
            if ("default" !== n) {
              var o = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                o.get
                  ? o
                  : {
                      enumerable: !0,
                      get: function() {
                        return e[n];
                      },
                    }
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    }
    var r = o(n);
    const a = class {
      constructor(e, t) {
        (this.options = Object.assign({}, a.defaultOptions, t)),
          (this.name = e),
          (this.version = this.options.version),
          (this.db = void 0),
          (this.initComplete = !1),
          (this.versionChanged = null),
          (this.initPromise = this.init());
        for (const n of this.options.store) {
          const { storeName: e } = n;
          this[`$${e}`] = {
            add: (t, n) => this.add(e, t, n),
            put: (t, n) => this.put(e, t, n),
            getAll: (t, n, o) => this.getAll(e, t, n, o),
            get: (t, n) => this.get(e, t, n),
            getAllKeys: (t, n) => this.getAllKeys(e, t, n),
            count: (t) => this.count(e, t),
            delete: (t) => this.delete(e, t),
            deleteIndex: (t) => this.deleteIndex(e, t),
            elasticSearch: (t, n) => this.elasticSearch(e, t, n),
            index: (t) => this.index(e, t),
            clear: () => this.clear(e),
          };
        }
      }
      async init() {
        return new Promise((e, t) => {
          if (this.initComplete) return e(this.db);
          const n = window.indexedDB.open(this.name, this.version);
          (n.onerror = (e) => {
            t(e);
          }),
            (n.onsuccess = async () => {
              (this.db = n.result),
                (this.initComplete = !0),
                (this.db.onversionchange = () => {
                  window.location.reload();
                }),
                this.versionChanged && this.options.upgradeCallBack && (await this.options.upgradeCallBack(this, this.versionChanged)),
                e(this.db);
            }),
            (n.onupgradeneeded = async (e) => {
              (this.versionChanged = e), await this._upgrade(e, n);
            });
        });
      }
      async _upgrade(e, t) {
        this.db = e.target.result;
        for (const n of this.options.store) await this.createStore(n, t);
        return this.db;
      }
      async createStore(e, t) {
        const { storeName: n, options: o, indexOptions: r } = e;
        let i;
        return this.db.objectStoreNames.contains(n)
          ? t.transaction.objectStore(n)
          : ((i = this.db.createObjectStore(n, Object.assign({}, a.defaultStoreOptions, o))),
            console.log(i),
            r &&
              r.forEach((e) => {
                i.createIndex(e.name, e.key, { unique: e.unique, multiEntry: !!e.multiEntry });
              }),
            i);
      }
      async add(e, t, n) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((o, r) => {
            const a = this.db
              .transaction([e], "readwrite")
              .objectStore(e)
              .add(t, n);
            (a.onsuccess = function(e) {
              o(e);
            }),
              (a.onerror = function(e) {
                r(e);
              });
          })
        );
      }
      async delete(e, t) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((n, o) => {
            const r = this.db
              .transaction([e], "readwrite")
              .objectStore(e)
              .delete(t);
            (r.onsuccess = function(e) {
              n(e);
            }),
              (r.onerror = function(e) {
                o(e);
              });
          })
        );
      }
      async deleteIndex(e, t) {
        return (
          this.initComplete || (await this.initPromise),
          this.db
            .transaction([e], "readwrite")
            .objectStore(e)
            .deleteIndex(t),
          "delete success"
        );
      }
      async clear(e) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((t, n) => {
            const o = this.db
              .transaction([e], "readwrite")
              .objectStore(e)
              .clear();
            (o.onsuccess = (e) => {
              t(e);
            }),
              (o.onerror = (e) => {
                n(e);
              });
          })
        );
      }
      async put(e, t, n) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((o, r) => {
            const a = this.db
              .transaction([e], "readwrite")
              .objectStore(e)
              .put(t, n);
            (a.onsuccess = function() {
              o(t);
            }),
              (a.onerror = function(e) {
                r(e);
              });
          })
        );
      }
      async get(e, t, n) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((o, r) => {
            const a = this.db.transaction([e], "readonly").objectStore(e);
            let i;
            if (n) {
              const e = a.index(n);
              i = e.get(t);
            } else i = a.get(t);
            (i.onerror = function(e) {
              r(e);
            }),
              (i.onsuccess = function() {
                i.result ? o(i.result) : o(null);
              });
          })
        );
      }
      async getAllKeys(e, t, n) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((o, r) => {
            const a = this.db
              .transaction([e], "readonly")
              .objectStore(e)
              .getAllKeys(t, n);
            (a.onsuccess = function() {
              o(a.result);
            }),
              (a.onerror = function(e) {
                r(e);
              });
          })
        );
      }
      async getAll(e, t, n, o) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((r, a) => {
            let i = this.db.transaction(e).objectStore(e);
            const l = t ? i.index(t) : i,
              s = null != o ? l.getAll(n, o) : l.getAll(n);
            (s.onsuccess = function() {
              r(s.result);
            }),
              (s.onerror = function(e) {
                a(e);
              });
          })
        );
      }
      async elasticSearch(e, t, n) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((o, r) => {
            const a = this.db.transaction(e).objectStore(e),
              i = [],
              l = a.openCursor();
            (l.onsuccess = (e) => {
              const r = e.target.result;
              r ? (Array.isArray(n) ? n.some((e) => this._compareType(r.value, t, e)) && i.push(r.value) : this._compareType(r.value, t, n) && i.push(r.value), r.continue()) : o(i);
            }),
              (l.onerror = (e) => {
                r(e);
              });
          })
        );
      }
      _compareType(e, t, n) {
        const o = n ? e[n] : e;
        let r = !1;
        switch (typeof o) {
          case "boolean":
            r = "boolean" == typeof t && o === t;
            break;
          case "number":
          case "bigint":
            r = "number" == typeof t && o === t;
            break;
          case "string":
            r = ("string" == typeof t && o.indexOf(t) > -1) || (t instanceof RegExp && t.test(o));
            break;
          default:
            Array.isArray(o) && (r = t instanceof RegExp ? o.some((e) => t.test(e)) : o.includes(t));
        }
        return r;
      }
      async index(e, t) {
        return (
          this.initComplete || (await this.initPromise),
          this.db
            .transaction(e)
            .objectStore(e)
            .index(t)
        );
      }
      async count(e, t) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((n, o) => {
            const r = this.db
              .transaction(e)
              .objectStore(e)
              .count(t);
            (r.onsuccess = function() {
              n(r.result);
            }),
              (r.onerror = function(e) {
                o(e);
              });
          })
        );
      }
    };
    let i = a;
    (i.defaultOptions = { version: 1, store: [] }), (i.defaultStoreOptions = { autoIncrement: !0 });
    const l = Symbol();
    var s = {
      install: (e, t) => {
        if (!t) throw new Error("请设置indexDB参数");
        const { databaseName: n, options: o } = t,
          r = new i(n, o);
        (e.config.globalProperties.$db = r), e.provide(l, r);
      },
    };
    function c(e, t, n = 0) {
      n && (n = Date.now() + n);
      const o = JSON.stringify({ value: t, expires: n });
      this.setItem(e, o);
    }
    function u(e) {
      const t = this.getItem(e);
      if (!t) return null;
      const { value: n, expires: o } = JSON.parse(t);
      return o && Date.now() >= o ? (this.removeItem(e), null) : n;
    }
    (e.EASIIndexDB = i),
      (e.clearLocal = function() {
        localStorage.clear();
      }),
      (e.clearSession = function() {
        sessionStorage.clear();
      }),
      (e.compareUserAgent = function(e = [], t = navigator.userAgent.toLowerCase()) {
        return e.some((e) => t.indexOf(e) > -1);
      }),
      (e.compareVersion = function(e, t = navigator.userAgent.toLowerCase()) {
        try {
          let n = t
              .match(/^(easicustomer|easimalaysia)(.+?)(\s|\()/)[2]
              .replace(/\s|\//g, "")
              .split("."),
            o = e.split("."),
            r = n.length > o.length ? n.length : o.length;
          for (let e = 0; e < r; e++) {
            if (Number(o[e] || 0) < Number(n[e] || 0)) return !0;
            if (Number(o[e] || 0) > Number(n[e] || 0)) return !1;
          }
          return !0;
        } catch (n) {
          return !1;
        }
      }),
      (e.copy = function(e, t = document.querySelector("body")) {
        if (!document.queryCommandSupported("copy")) return !1;
        const n = document.createElement("textarea");
        (n.value = e), t.appendChild(n), n.select(), n.setSelectionRange(0, e.length);
        const o = document.execCommand("copy");
        return n.remove(), o;
      }),
      (e.createWorker = function(e, t, n) {
        return new Promise((o, r) => {
          if (!window.Worker) return n && n(t);
          {
            const n = new Blob(["(" + e.toString() + ")()"]),
              a = window.URL.createObjectURL(n),
              i = new Worker(a);
            i.postMessage(t),
              (i.onmessage = ({ data: e }) => {
                i.terminate(), o(e);
              }),
              (i.onerror = (e) => {
                i.terminate(), r(e.message);
              }),
              (i.onmessageerror = (e) => {
                i.terminate(), r(e);
              });
          }
        });
      }),
      (e.debounced = function(e, t = 200, n = !1) {
        let o;
        return (...r) => {
          if (n) return e.apply(this, r), void (n = !1);
          clearTimeout(o),
            (o = setTimeout(() => {
              e.apply(this, r);
            }, t));
        };
      }),
      (e.getCookie = function(e) {
        return r.get(e);
      }),
      (e.getLocal = function(e) {
        return u.call(localStorage, e);
      }),
      (e.getSession = function(e) {
        return u.call(sessionStorage, e);
      }),
      (e.indexDBPlugin = s),
      (e.isMobile = function() {
        return !!window.navigator.userAgent.match(/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i);
      }),
      (e.loadScript = function(e, t) {
        return new Promise((n, o) => {
          if (document.querySelector(`#${t}`)) return n("");
          const r = document.createElement("script");
          (r.type = "text/javascript"),
            (r.src = e),
            t && (r.id = t),
            document.getElementsByTagName("head")[0].appendChild(r),
            (r.onload = function() {
              n("");
            }),
            (r.onerror = function() {
              o("引入失败");
            });
        });
      }),
      (e.openAppView = function(e, t = "au.com.easi.customer") {
        window.location.href = `${t}://${e}`;
      }),
      (e.openAppWeb = function({ scheme: e = "au.com.easi.courier", title: t, url: n, show: o }) {
        window.location.href = `${e}://web/help?text=${t}&url=${encodeURIComponent(n)}&show=${o}`;
      }),
      (e.removeCookie = function(e) {
        return r.remove(e);
      }),
      (e.removeLocal = function(e) {
        localStorage.removeItem(e);
      }),
      (e.removeSession = function(e) {
        sessionStorage.removeItem(e);
      }),
      (e.setCookie = function(e, t, n) {
        n && (n /= 864e5), n ? r.set(e, t, { expires: n }) : r.set(e, t);
      }),
      (e.setLocal = function(e, t, n = 0) {
        c.call(localStorage, e, t, n);
      }),
      (e.setSession = function(e, t, n = 0) {
        c.call(sessionStorage, e, t, n);
      }),
      (e.useDB = function() {
        const e = t.inject(l);
        if (!e) throw new Error("未发现indexdb实例");
        return e;
      }),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e[Symbol.toStringTag] = "Module");
  })(ee.exports, u, te.exports);
const ne = document.querySelector("html"),
  oe = { reloadPage: !0, mode: !1, showTab: !0, fixedTab: !0, cachedPage: [] };
function re(e) {
  const t = h(e),
    { cachedPage: n, reloadPage: i } = t,
    l = ((e, t) => {
      var n = {};
      for (var i in e) r.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
      if (null != e && o) for (var i of o(e)) t.indexOf(i) < 0 && a.call(e, i) && (n[i] = e[i]);
      return n;
    })(t, ["cachedPage", "reloadPage"]);
  !0 === l.mode || "dark" === l.mode ? ne.setAttribute("data-pro-theme", "antdv-pro-theme-dark") : ne.removeAttribute("data-pro-theme"), ee.exports.setLocal("setting", l);
}
const ae = {
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
function ie(e) {
  return d({ message: ae[e] });
}
function le(e, t) {
  const n = g("globalEASILocale", { message: {} });
  let o = null == n ? void 0 : n.message[e];
  if (o) {
    if (t) {
      const e = /(\{).*?(\})/g;
      o.match(e).forEach((e) => {
        let n = e.replace(/\{|\}|\s|\n|\t/g, "");
        const r = new RegExp(`${e}`, "g");
        o = o.replace(r, t[n]);
      });
    }
    return o;
  }
  return console.warn("未匹配到文案key"), e;
}
var se = p({
  name: X("Provider"),
  props: { locale: { type: Object, default: () => ({ locale: "zh-cn" }) } },
  setup(e) {
    const { locale: t } = m(e),
      n = (function() {
        const e = ee.exports.getLocal("setting") || { mode: !1, fixedTab: !0, showTab: !0 };
        return (!0 !== e.mode && "dark" !== e.mode) || (e.mode && ne.setAttribute("data-pro-theme", "antdv-pro-theme-dark")), d(s(l({}, e), { cachedPage: [], reloadPage: !0 }));
      })(),
      o = ie(e.locale ? e.locale.locale : "zh-cn");
    b("globalProvider", n),
      b("globalEASILocale", o),
      v(
        () => t.value,
        (e) => {
          o.message = (null == e ? void 0 : e.locale) ? ae[e.locale] : ae["zh-cn"];
        }
      );
  },
});
const ce = k("data-v-c6b13f8e"),
  ue = ce((e, t, n, o, r, a) => {
    const i = y("a-config-provider");
    return w(), S(i, x({ locale: e.locale }, e.$attrs), { default: ce(() => [O(e.$slots, "default", {}, void 0, !0)]), _: 3 }, 16, ["locale"]);
  });
(se.render = ue), (se.__scopeId = "data-v-c6b13f8e");
se.install = (e) => {
  e.component(se.name, se);
};
var de = p({ name: X("Text"), props: {}, setup(e) {} });
const fe = P("这是一个text组件");
(de.render = function(e, t, n, o, r, a) {
  return w(), S("div", null, [O(e.$slots, "default", {}, () => [fe])]);
}),
  (de.install = (e) => {
    e.component(de.name, de);
  });
var he = p({
  name: X("Button"),
  props: { type: { type: String, default: "default" }, success: { type: Boolean, default: !1 }, warning: { type: Boolean, default: !1 }, info: { type: Boolean, default: !1 } },
  setup(e) {
    const { type: t, success: n, warning: o, info: r } = m(e);
    return {
      className: C(() => {
        let e = "link" === t.value ? "px-0 " : "";
        return n.value ? (e += "easi-btn-success") : o.value ? (e += "easi-btn-warning") : r.value && (e += "easi-btn-info"), e;
      }),
    };
  },
});
const ge = k("data-v-1fd440a2"),
  pe = ge((e, t, n, o, r, a) => {
    const i = y("a-button");
    return (
      w(),
      S(i, x(e.$attrs, { type: e.type, class: e.className }), { icon: ge(() => [O(e.$slots, "icon", {}, void 0, !0)]), default: ge(() => [O(e.$slots, "default", {}, void 0, !0)]), _: 3 }, 16, [
        "type",
        "class",
      ])
    );
  });
(he.render = pe),
  (he.__scopeId = "data-v-1fd440a2"),
  (he.install = (e) => {
    e.component(he.name, he);
  });
var me = p({
  name: X("Drawer"),
  emits: ["update:visible", "close", "show"],
  props: { visible: { default: !1, type: Boolean }, width: { default: "500px", type: String }, bodyStyle: { default: () => ({}), type: Object } },
  setup(e, { emit: t, slots: n }) {
    const { bodyStyle: o, visible: r } = m(e),
      a = C(() => (n.footer ? s(l({}, o.value), { paddingBottom: "55px" }) : h(o.value)));
    return (
      v(
        () => r.value,
        (e) => {
          e && t("show");
        }
      ),
      {
        computedBodyStyle: a,
        handleClose() {
          t("update:visible", !1), t("close");
        },
      }
    );
  },
});
const be = k("data-v-18c84441");
j("data-v-18c84441");
const ve = { key: 0, class: "drawer-footer" };
T();
const ye = be((e, t, n, o, r, a) => {
  const i = y("a-drawer");
  return (
    w(),
    S(
      i,
      x(e.$attrs, { visible: e.visible, width: e.width, maskClosable: !1, "body-style": e.computedBodyStyle, onClose: e.handleClose }),
      { default: be(() => [O(e.$slots, "default", {}, void 0, !0), e.$slots.footer ? (w(), S("div", ve, [O(e.$slots, "footer", {}, void 0, !0)])) : A("", !0)]), _: 3 },
      16,
      ["visible", "width", "body-style", "onClose"]
    )
  );
});
(me.render = ye),
  (me.__scopeId = "data-v-18c84441"),
  (me.install = (e) => {
    e.component(me.name, me);
  });
var we = p({ name: X("Error"), props: { status: { type: String, default: "" } } });
const Se = k("data-v-cd4c8848"),
  xe = Se((e, t, n, o, r, a) => {
    const i = y("a-result"),
      l = y("a-card");
    return (
      w(),
      S(
        l,
        { bordered: !1, class: "error-full-page" },
        { default: Se(() => [M(i, { status: e.status }, I({ _: 2 }, [E(e.$slots, (t, n) => ({ name: n, fn: Se((t) => [O(e.$slots, n, t, void 0, !0)]) }))]), 1032, ["status"])]), _: 1 }
      )
    );
  });
(we.render = xe),
  (we.__scopeId = "data-v-cd4c8848"),
  (we.install = (e) => {
    e.component(we.name, we);
  });
var Oe = p({
  name: X("Page"),
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
    const { breadcrumb: n, title: o, desc: r, hasPermission: a } = m(e),
      i = J(),
      { appContext: l } = _(),
      s = C(() => n.value || i.meta.breadcrumb || i.matched.slice(1).map((e) => ({ path: e.path, breadcrumbName: e.meta.title }))),
      c = C(() => o.value || (i.meta.title && i.meta.title)),
      u = C(() => r.value || (i.meta.desc && i.meta.desc));
    return (a.value || l.config.globalProperties.$usePermissions(i.meta.permission)) && t("initPage"), { breadcrumbRoutes: s, pageTitle: c, pageDesc: u, getEASIText: le };
  },
  components: { NoPermission: we },
});
const ke = { key: 0, class: "page-breadcrumb-wrap" },
  Pe = { key: 0 },
  Ce = { class: "p-24" },
  je = P(" 403 ");
(Oe.render = function(e, t, n, o, r, a) {
  const i = y("router-link"),
    l = y("a-breadcrumb"),
    s = y("a-page-header"),
    c = y("a-card"),
    u = y("NoPermission");
  return (
    w(),
    S("div", null, [
      e.$usePermissions(e.$route.meta.permission) || e.hasPermission
        ? (w(),
          S(
            L,
            { key: 0 },
            [
              e.showPageHeader
                ? (w(),
                  S("div", ke, [
                    M(
                      s,
                      { title: e.pageTitle },
                      {
                        breadcrumb: H(() => [
                          e.breadcrumbRoutes.length > 1
                            ? (w(),
                              S(
                                l,
                                { key: 0, routes: e.breadcrumbRoutes },
                                { itemRender: H(({ route: e }) => [M(i, { to: e.path }, { default: H(() => [P(B(e.breadcrumbName), 1)]), _: 2 }, 1032, ["to"])]), _: 1 },
                                8,
                                ["routes"]
                              ))
                            : A("", !0),
                        ]),
                        default: H(() => [e.pageDesc ? (w(), S("p", Pe, B(e.pageDesc), 1)) : A("", !0), O(e.$slots, "header")]),
                        _: 3,
                      },
                      8,
                      ["title"]
                    ),
                  ]))
                : A("", !0),
              M("div", Ce, ["card" === e.layoutType ? (w(), S(c, { key: 0 }, { default: H(() => [O(e.$slots, "default")]), _: 3 })) : O(e.$slots, "default", { key: 1 })]),
            ],
            64
          ))
        : (w(), S(u, { key: 1, status: "403" }, { title: H(() => [je]), "sub-title": H(() => [P(B(e.getEASIText("noPermission")), 1)]), _: 1 })),
    ])
  );
}),
  (Oe.install = (e) => {
    e.component(Oe.name, Oe);
  });
var Te = p({
  name: X("Loading"),
  emits: ["update:show"],
  props: { title: { type: String, default: void 0 }, show: { default: !1, type: Boolean }, size: { default: "normal", type: String } },
  setup(e, { emit: t }) {
    var n, o, r, a, i;
    const { show: l, size: s } = m(e),
      c = _(),
      u = (null == (n = null == c ? void 0 : c.root) ? void 0 : n.proxy) || { localeMessage: { locale: "zh-cn" } },
      d = N(u),
      f = ie((null == (a = null == (r = null == (o = null == c ? void 0 : c.root) ? void 0 : o.proxy) ? void 0 : r.localeMessage) ? void 0 : a.locale) || "zh-cn"),
      h = null == (i = null == f ? void 0 : f.message) ? void 0 : i.loading,
      g = N(e.show),
      p = N(h),
      b = N("normal");
    return (
      v(
        () => l.value,
        (e) => {
          g.value = e;
        }
      ),
      v(
        () => s.value,
        (e) => {
          b.value = e;
        }
      ),
      v(
        () => {
          var e;
          return null == (e = d.value) ? void 0 : e.localeMessage;
        },
        (e) => {
          e && ((f.message = ae[(null == e ? void 0 : e.locale) || "zh-cn"]), (p.value = f.message.loading));
        }
      ),
      v(
        () => g.value,
        (e) => {
          t("update:show", e);
        }
      ),
      { cShow: g, cTitle: p, cSize: b, root: d }
    );
  },
});
const Ae = k("data-v-4a04b4b8");
j("data-v-4a04b4b8");
const Me = { key: 0, class: "loading-container", id: "cus-loading" },
  Ie = M("div", { class: "loading-wrap" }, [M("div", { class: "ball" }, [M("i", { class: "bg spoon" }), M("i", { class: "bg fork" })]), M("div", { class: "loading-shadow" }, [M("div")])], -1),
  Ee = { key: 0, class: "tips" };
T();
const _e = Ae(
  (e, t, n, o, r, a) => (
    w(),
    S(
      D,
      { name: "fade", mode: "out-in" },
      {
        default: Ae(() => [
          e.cShow ? (w(), S("div", Me, [M("div", { class: ["loading", e.cSize] }, [Ie, e.title || e.cTitle ? (w(), S("p", Ee, B(e.title || e.cTitle), 1)) : A("", !0)], 2)])) : A("", !0),
        ]),
        _: 1,
      }
    )
  )
);
(Te.render = _e),
  (Te.__scopeId = "data-v-4a04b4b8"),
  (Te.install = (e) => {
    e.component(Te.name, Te);
  });
var Le = p({
  name: X("Modal"),
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
    const { handleOk: n, visible: o } = m(e),
      r = N(!1);
    v(
      () => o.value,
      (e) => {
        e && (t("update:visible", !0), t("show"));
      }
    );
    const a = N(!1),
      i = () => {
        (r.value = !1), t("update:visible", !1), t("cancel");
      };
    return {
      symbolVisible: r,
      autoLoading: a,
      bodyScrollStyle: { maxHeight: "calc(100vh - 160px)", overflow: "auto" },
      onConfirm: async () => {
        if (n.value && "function" == typeof n.value)
          try {
            (a.value = !0), await n.value(), (a.value = !1), i();
          } catch (e) {
            console.log(e), (a.value = !1);
          }
        else t("ok"), i();
      },
      onCancel: i,
      showModal: () => {
        (r.value = !0), t("update:visible", !0), t("show");
      },
      getEASIText: le,
    };
  },
});
const He = { key: 0, class: "footer" };
(Le.render = function(e, t, n, o, r, a) {
  const i = y("a-button"),
    s = y("a-modal");
  return (
    w(),
    S(
      s,
      {
        visible: void 0 === e.visible ? e.symbolVisible : e.visible,
        title: e.title,
        bodyStyle: e.autoHeight ? e.bodyStyle : l(l({}, e.bodyScrollStyle), e.bodyStyle),
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
        footer: H(() => [
          O(e.$slots, "footer"),
          !e.$slots.footer && e.footer
            ? (w(),
              S("div", He, [
                e.showCancel ? (w(), S(i, { key: 0, onClick: e.onCancel }, { default: H(() => [P(B(e.cancelText || e.getEASIText("cancel")), 1)]), _: 1 }, 8, ["onClick"])) : A("", !0),
                e.showOk
                  ? (w(),
                    S(i, { key: 1, type: e.okType, loading: e.autoLoading || e.confirmLoading, onClick: e.onConfirm }, { default: H(() => [P(B(e.okText || e.getEASIText("confirm")), 1)]), _: 1 }, 8, [
                      "type",
                      "loading",
                      "onClick",
                    ]))
                  : A("", !0),
              ]))
            : A("", !0),
        ]),
        default: H(() => [O(e.$slots, "default")]),
        _: 3,
      },
      8,
      ["visible", "title", "bodyStyle", "closable", "confirmLoading", "destroyOnClose", "keyboard", "maskClosable", "width", "getContainer", "afterClose", "class", "onCancel"]
    )
  );
}),
  (Le.install = (e) => {
    e.component(Le.name, Le);
  });
var Be = p({
  name: X("menu"),
  props: {
    collapsed: { type: Boolean, default: !1 },
    logo: { type: String, default: null },
    title: { type: String, default: null },
    subTitle: { type: String, default: null },
    nav: { type: Array, default: () => [] },
  },
  setup(e) {
    const { collapsed: t } = m(e),
      n = J(),
      o = Q(),
      r = N([]),
      a = N([]),
      i = () => {
        const e = [...h(n.meta.breadcrumb || [])];
        t.value || (r.value = e.map((e) => e.name)), (a.value = [n.meta.selected || n.name]);
      };
    z(() => {
      i();
    }),
      v(() => n.name, i),
      v(
        () => t.value,
        (e) => {
          if (e) r.value = [];
          else {
            const e = [...h(n.meta.breadcrumb || [])];
            r.value = e.map((e) => e.name);
          }
        }
      );
    return {
      openKeys: r,
      selectedKeys: a,
      toPage: (e) => {
        n.name !== e && o.push({ name: e });
      },
    };
  },
});
const Ne = k("data-v-1659a694");
j("data-v-1659a694");
const De = { key: 0, class: "admin-title text-white ml-16 truncate" },
  ze = { key: 1, class: "text-12 truncate text-gray-400" },
  $e = { class: "flex-1 overflow-y-auto overflow-x-hidden" },
  Re = { class: "flex items-center" };
T();
const Fe = Ne((e, t, n, o, r, a) => {
  const i = y("a-menu-item"),
    l = y("a-sub-menu"),
    s = y("a-menu");
  return (
    w(),
    S(
      L,
      null,
      [
        M(
          "div",
          { class: ["py-6 flex items-center", [e.collapsed ? "px-24" : "px-16"]] },
          [
            M("img", { src: e.logo, alt: "", class: "logo" }, null, 8, ["src"]),
            e.title || e.subTitle
              ? $(
                  (w(),
                  S(
                    "div",
                    De,
                    [
                      e.title ? (w(), S("p", { key: 0, class: ["truncate", [e.subTitle ? "text-14" : "text-16"]] }, B(e.title), 3)) : A("", !0),
                      e.subTitle ? (w(), S("p", ze, B(e.subTitle), 1)) : A("", !0),
                    ],
                    512
                  )),
                  [[R, !e.collapsed]]
                )
              : A("", !0),
          ],
          2
        ),
        M("div", $e, [
          M(
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
              default: Ne(() => [
                (w(!0),
                S(
                  L,
                  null,
                  E(
                    e.nav,
                    (t) => (
                      w(),
                      S(
                        L,
                        { key: t.name },
                        [
                          t.children && t.children.length > 0 && !t.meta.hideMenu
                            ? (w(),
                              S(
                                l,
                                { key: t.name },
                                {
                                  title: Ne(() => [
                                    M("span", Re, [t.meta.icon ? (w(), S("i", { key: 0, class: [t.meta.icon, "anticon"] }, null, 2)) : A("", !0), M("span", null, B(t.meta.title), 1)]),
                                  ]),
                                  default: Ne(() => [
                                    (w(!0),
                                    S(
                                      L,
                                      null,
                                      E(
                                        t.children,
                                        (t) => (
                                          w(),
                                          S(
                                            L,
                                            { key: t.name },
                                            [
                                              t.meta.hideMenu
                                                ? A("", !0)
                                                : (w(),
                                                  S(
                                                    i,
                                                    { key: t.name, class: "flex items-center", onClick: (n) => e.toPage(t.name) },
                                                    {
                                                      default: Ne(() => [
                                                        t.meta.icon ? (w(), S("i", { key: 0, class: [t.meta.icon, "anticon"] }, null, 2)) : A("", !0),
                                                        M("span", null, B(t.meta.title), 1),
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
                            ? A("", !0)
                            : (w(),
                              S(
                                i,
                                { key: t.name, class: "flex items-center", onClick: (n) => e.toPage(t.name) },
                                { default: Ne(() => [t.meta.icon ? (w(), S("i", { key: 0, class: [t.meta.icon, "anticon"] }, null, 2)) : A("", !0), M("span", null, B(t.meta.title), 1)]), _: 2 },
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
(Be.render = Fe), (Be.__scopeId = "data-v-1659a694");
var Ve = p({
  name: X("Nav"),
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
  components: { NavMenu: Be },
});
function Ue(e, t) {
  (function(e) {
    return "string" == typeof e && -1 !== e.indexOf(".") && 1 === parseFloat(e);
  })(e) && (e = "100%");
  var n = (function(e) {
    return "string" == typeof e && -1 !== e.indexOf("%");
  })(e);
  return (
    (e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6 ? 1 : (e = 360 === t ? (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)) : (e % t) / parseFloat(String(t)))
  );
}
function We(e) {
  return Math.min(1, Math.max(0, e));
}
function Ke(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function qe(e) {
  return e <= 1 ? 100 * Number(e) + "%" : e;
}
function Ye(e) {
  return 1 === e.length ? "0" + e : String(e);
}
function Je(e, t, n) {
  (e = Ue(e, 255)), (t = Ue(t, 255)), (n = Ue(n, 255));
  var o = Math.max(e, t, n),
    r = Math.min(e, t, n),
    a = 0,
    i = 0,
    l = (o + r) / 2;
  if (o === r) (i = 0), (a = 0);
  else {
    var s = o - r;
    switch (((i = l > 0.5 ? s / (2 - o - r) : s / (o + r)), o)) {
      case e:
        a = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / s + 2;
        break;
      case n:
        a = (e - t) / s + 4;
    }
    a /= 6;
  }
  return { h: a, s: i, l: l };
}
function Qe(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * n * (t - e) : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Ze(e, t, n) {
  (e = Ue(e, 255)), (t = Ue(t, 255)), (n = Ue(n, 255));
  var o = Math.max(e, t, n),
    r = Math.min(e, t, n),
    a = 0,
    i = o,
    l = o - r,
    s = 0 === o ? 0 : l / o;
  if (o === r) a = 0;
  else {
    switch (o) {
      case e:
        a = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / l + 2;
        break;
      case n:
        a = (e - t) / l + 4;
    }
    a /= 6;
  }
  return { h: a, s: s, v: i };
}
function Ge(e, t, n, o) {
  var r = [Ye(Math.round(e).toString(16)), Ye(Math.round(t).toString(16)), Ye(Math.round(n).toString(16))];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function Xe(e) {
  return et(e) / 255;
}
function et(e) {
  return parseInt(e, 16);
}
Ve.render = function(e, t, n, o, r, a) {
  const i = y("NavMenu"),
    l = y("a-layout-sider"),
    s = y("a-drawer");
  return (
    w(),
    S(
      L,
      null,
      [
        $(M("div", { class: ["side-placeholder", { "transition-width": !e.isH5 }], style: { width: e.collWidth } }, null, 6), [[R, !e.isH5]]),
        $(
          M(
            l,
            { class: "flex fixed top-0 left-0 flex-col h-screen overflow-hidden z-10", collapsible: "", collapsed: e.collapsed, trigger: null },
            {
              default: H(() => [M(i, { logo: e.logo, title: e.title, "sub-title": e.subTitle, nav: e.nav, collapsed: e.collapsed }, null, 8, ["logo", "title", "sub-title", "nav", "collapsed"])]),
              _: 1,
            },
            8,
            ["collapsed"]
          ),
          [[R, !e.isH5]]
        ),
        M(
          s,
          { placement: "left", width: "200px", closable: !1, visible: !e.collapsed && e.isH5, bodyStyle: { padding: 0, height: "100%" }, onClose: t[1] || (t[1] = (t) => e.$emit("hideMenu")) },
          {
            default: H(() => [
              M(
                l,
                { class: "flex flex-col h-screen overflow-hidden", collapsible: "", collapsed: !1, trigger: null },
                { default: H(() => [M(i, { logo: e.logo, title: e.title, "sub-title": e.subTitle, nav: e.nav, collapsed: !1 }, null, 8, ["logo", "title", "sub-title", "nav"])]), _: 1 }
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
};
var tt = {
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
function nt(e) {
  var t,
    n,
    o,
    r = { r: 0, g: 0, b: 0 },
    a = 1,
    i = null,
    l = null,
    s = null,
    c = !1,
    u = !1;
  return (
    "string" == typeof e &&
      (e = (function(e) {
        if (0 === (e = e.trim().toLowerCase()).length) return !1;
        var t = !1;
        if (tt[e]) (e = tt[e]), (t = !0);
        else if ("transparent" === e) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        var n = it.rgb.exec(e);
        if (n) return { r: n[1], g: n[2], b: n[3] };
        if ((n = it.rgba.exec(e))) return { r: n[1], g: n[2], b: n[3], a: n[4] };
        if ((n = it.hsl.exec(e))) return { h: n[1], s: n[2], l: n[3] };
        if ((n = it.hsla.exec(e))) return { h: n[1], s: n[2], l: n[3], a: n[4] };
        if ((n = it.hsv.exec(e))) return { h: n[1], s: n[2], v: n[3] };
        if ((n = it.hsva.exec(e))) return { h: n[1], s: n[2], v: n[3], a: n[4] };
        if ((n = it.hex8.exec(e))) return { r: et(n[1]), g: et(n[2]), b: et(n[3]), a: Xe(n[4]), format: t ? "name" : "hex8" };
        if ((n = it.hex6.exec(e))) return { r: et(n[1]), g: et(n[2]), b: et(n[3]), format: t ? "name" : "hex" };
        if ((n = it.hex4.exec(e))) return { r: et(n[1] + n[1]), g: et(n[2] + n[2]), b: et(n[3] + n[3]), a: Xe(n[4] + n[4]), format: t ? "name" : "hex8" };
        if ((n = it.hex3.exec(e))) return { r: et(n[1] + n[1]), g: et(n[2] + n[2]), b: et(n[3] + n[3]), format: t ? "name" : "hex" };
        return !1;
      })(e)),
    "object" == typeof e &&
      (lt(e.r) && lt(e.g) && lt(e.b)
        ? ((t = e.r), (n = e.g), (o = e.b), (r = { r: 255 * Ue(t, 255), g: 255 * Ue(n, 255), b: 255 * Ue(o, 255) }), (c = !0), (u = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
        : lt(e.h) && lt(e.s) && lt(e.v)
        ? ((i = qe(e.s)),
          (l = qe(e.v)),
          (r = (function(e, t, n) {
            (e = 6 * Ue(e, 360)), (t = Ue(t, 100)), (n = Ue(n, 100));
            var o = Math.floor(e),
              r = e - o,
              a = n * (1 - t),
              i = n * (1 - r * t),
              l = n * (1 - (1 - r) * t),
              s = o % 6;
            return { r: 255 * [n, i, a, a, l, n][s], g: 255 * [l, n, n, i, a, a][s], b: 255 * [a, a, l, n, n, i][s] };
          })(e.h, i, l)),
          (c = !0),
          (u = "hsv"))
        : lt(e.h) &&
          lt(e.s) &&
          lt(e.l) &&
          ((i = qe(e.s)),
          (s = qe(e.l)),
          (r = (function(e, t, n) {
            var o, r, a;
            if (((e = Ue(e, 360)), (t = Ue(t, 100)), (n = Ue(n, 100)), 0 === t)) (r = n), (a = n), (o = n);
            else {
              var i = n < 0.5 ? n * (1 + t) : n + t - n * t,
                l = 2 * n - i;
              (o = Qe(l, i, e + 1 / 3)), (r = Qe(l, i, e)), (a = Qe(l, i, e - 1 / 3));
            }
            return { r: 255 * o, g: 255 * r, b: 255 * a };
          })(e.h, i, s)),
          (c = !0),
          (u = "hsl")),
      Object.prototype.hasOwnProperty.call(e, "a") && (a = e.a)),
    (a = Ke(a)),
    { ok: c, format: e.format || u, r: Math.min(255, Math.max(r.r, 0)), g: Math.min(255, Math.max(r.g, 0)), b: Math.min(255, Math.max(r.b, 0)), a: a }
  );
}
var ot = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
  rt = "[\\s|\\(]+(" + ot + ")[,|\\s]+(" + ot + ")[,|\\s]+(" + ot + ")\\s*\\)?",
  at = "[\\s|\\(]+(" + ot + ")[,|\\s]+(" + ot + ")[,|\\s]+(" + ot + ")[,|\\s]+(" + ot + ")\\s*\\)?",
  it = {
    CSS_UNIT: new RegExp(ot),
    rgb: new RegExp("rgb" + rt),
    rgba: new RegExp("rgba" + at),
    hsl: new RegExp("hsl" + rt),
    hsla: new RegExp("hsla" + at),
    hsv: new RegExp("hsv" + rt),
    hsva: new RegExp("hsva" + at),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function lt(e) {
  return Boolean(it.CSS_UNIT.exec(String(e)));
}
var st = (function() {
    function e(t, n) {
      var o;
      if ((void 0 === t && (t = ""), void 0 === n && (n = {}), t instanceof e)) return t;
      "number" == typeof t &&
        (t = (function(e) {
          return { r: e >> 16, g: (65280 & e) >> 8, b: 255 & e };
        })(t)),
        (this.originalInput = t);
      var r = nt(t);
      (this.originalInput = t),
        (this.r = r.r),
        (this.g = r.g),
        (this.b = r.b),
        (this.a = r.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = null !== (o = n.format) && void 0 !== o ? o : r.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = r.ok);
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
          n = e.g / 255,
          o = e.b / 255;
        return (
          0.2126 * (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
          0.7152 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4)) +
          0.0722 * (o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4))
        );
      }),
      (e.prototype.getAlpha = function() {
        return this.a;
      }),
      (e.prototype.setAlpha = function(e) {
        return (this.a = Ke(e)), (this.roundA = Math.round(100 * this.a) / 100), this;
      }),
      (e.prototype.toHsv = function() {
        var e = Ze(this.r, this.g, this.b);
        return { h: 360 * e.h, s: e.s, v: e.v, a: this.a };
      }),
      (e.prototype.toHsvString = function() {
        var e = Ze(this.r, this.g, this.b),
          t = Math.round(360 * e.h),
          n = Math.round(100 * e.s),
          o = Math.round(100 * e.v);
        return 1 === this.a ? "hsv(" + t + ", " + n + "%, " + o + "%)" : "hsva(" + t + ", " + n + "%, " + o + "%, " + this.roundA + ")";
      }),
      (e.prototype.toHsl = function() {
        var e = Je(this.r, this.g, this.b);
        return { h: 360 * e.h, s: e.s, l: e.l, a: this.a };
      }),
      (e.prototype.toHslString = function() {
        var e = Je(this.r, this.g, this.b),
          t = Math.round(360 * e.h),
          n = Math.round(100 * e.s),
          o = Math.round(100 * e.l);
        return 1 === this.a ? "hsl(" + t + ", " + n + "%, " + o + "%)" : "hsla(" + t + ", " + n + "%, " + o + "%, " + this.roundA + ")";
      }),
      (e.prototype.toHex = function(e) {
        return void 0 === e && (e = !1), Ge(this.r, this.g, this.b, e);
      }),
      (e.prototype.toHexString = function(e) {
        return void 0 === e && (e = !1), "#" + this.toHex(e);
      }),
      (e.prototype.toHex8 = function(e) {
        return (
          void 0 === e && (e = !1),
          (function(e, t, n, o, r) {
            var a,
              i = [Ye(Math.round(e).toString(16)), Ye(Math.round(t).toString(16)), Ye(Math.round(n).toString(16)), Ye(((a = o), Math.round(255 * parseFloat(a)).toString(16)))];
            return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1))
              ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0)
              : i.join("");
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
          n = Math.round(this.b);
        return 1 === this.a ? "rgb(" + e + ", " + t + ", " + n + ")" : "rgba(" + e + ", " + t + ", " + n + ", " + this.roundA + ")";
      }),
      (e.prototype.toPercentageRgb = function() {
        var e = function(e) {
          return Math.round(100 * Ue(e, 255)) + "%";
        };
        return { r: e(this.r), g: e(this.g), b: e(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function() {
        var e = function(e) {
          return Math.round(100 * Ue(e, 255));
        };
        return 1 === this.a ? "rgb(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%)" : "rgba(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%, " + this.roundA + ")";
      }),
      (e.prototype.toName = function() {
        if (0 === this.a) return "transparent";
        if (this.a < 1) return !1;
        for (var e = "#" + Ge(this.r, this.g, this.b, !1), t = 0, n = Object.entries(tt); t < n.length; t++) {
          var o = n[t],
            r = o[0];
          if (e === o[1]) return r;
        }
        return !1;
      }),
      (e.prototype.toString = function(e) {
        var t = Boolean(e);
        e = null != e ? e : this.format;
        var n = !1,
          o = this.a < 1 && this.a >= 0;
        return t || !o || (!e.startsWith("hex") && "name" !== e)
          ? ("rgb" === e && (n = this.toRgbString()),
            "prgb" === e && (n = this.toPercentageRgbString()),
            ("hex" !== e && "hex6" !== e) || (n = this.toHexString()),
            "hex3" === e && (n = this.toHexString(!0)),
            "hex4" === e && (n = this.toHex8String(!0)),
            "hex8" === e && (n = this.toHex8String()),
            "name" === e && (n = this.toName()),
            "hsl" === e && (n = this.toHslString()),
            "hsv" === e && (n = this.toHsvString()),
            n || this.toHexString())
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
        var n = this.toHsl();
        return (n.l += t / 100), (n.l = We(n.l)), new e(n);
      }),
      (e.prototype.brighten = function(t) {
        void 0 === t && (t = 10);
        var n = this.toRgb();
        return (
          (n.r = Math.max(0, Math.min(255, n.r - Math.round((-t / 100) * 255)))),
          (n.g = Math.max(0, Math.min(255, n.g - Math.round((-t / 100) * 255)))),
          (n.b = Math.max(0, Math.min(255, n.b - Math.round((-t / 100) * 255)))),
          new e(n)
        );
      }),
      (e.prototype.darken = function(t) {
        void 0 === t && (t = 10);
        var n = this.toHsl();
        return (n.l -= t / 100), (n.l = We(n.l)), new e(n);
      }),
      (e.prototype.tint = function(e) {
        return void 0 === e && (e = 10), this.mix("white", e);
      }),
      (e.prototype.shade = function(e) {
        return void 0 === e && (e = 10), this.mix("black", e);
      }),
      (e.prototype.desaturate = function(t) {
        void 0 === t && (t = 10);
        var n = this.toHsl();
        return (n.s -= t / 100), (n.s = We(n.s)), new e(n);
      }),
      (e.prototype.saturate = function(t) {
        void 0 === t && (t = 10);
        var n = this.toHsl();
        return (n.s += t / 100), (n.s = We(n.s)), new e(n);
      }),
      (e.prototype.greyscale = function() {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function(t) {
        var n = this.toHsl(),
          o = (n.h + t) % 360;
        return (n.h = o < 0 ? 360 + o : o), new e(n);
      }),
      (e.prototype.mix = function(t, n) {
        void 0 === n && (n = 50);
        var o = this.toRgb(),
          r = new e(t).toRgb(),
          a = n / 100;
        return new e({ r: (r.r - o.r) * a + o.r, g: (r.g - o.g) * a + o.g, b: (r.b - o.b) * a + o.b, a: (r.a - o.a) * a + o.a });
      }),
      (e.prototype.analogous = function(t, n) {
        void 0 === t && (t = 6), void 0 === n && (n = 30);
        var o = this.toHsl(),
          r = 360 / n,
          a = [this];
        for (o.h = (o.h - ((r * t) >> 1) + 720) % 360; --t; ) (o.h = (o.h + r) % 360), a.push(new e(o));
        return a;
      }),
      (e.prototype.complement = function() {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function(t) {
        void 0 === t && (t = 6);
        for (var n = this.toHsv(), o = n.h, r = n.s, a = n.v, i = [], l = 1 / t; t--; ) i.push(new e({ h: o, s: r, v: a })), (a = (a + l) % 1);
        return i;
      }),
      (e.prototype.splitcomplement = function() {
        var t = this.toHsl(),
          n = t.h;
        return [this, new e({ h: (n + 72) % 360, s: t.s, l: t.l }), new e({ h: (n + 216) % 360, s: t.s, l: t.l })];
      }),
      (e.prototype.onBackground = function(t) {
        var n = this.toRgb(),
          o = new e(t).toRgb();
        return new e({ r: o.r + (n.r - o.r) * n.a, g: o.g + (n.g - o.g) * n.a, b: o.b + (n.b - o.b) * n.a });
      }),
      (e.prototype.triad = function() {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function() {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function(t) {
        for (var n = this.toHsl(), o = n.h, r = [this], a = 360 / t, i = 1; i < t; i++) r.push(new e({ h: (o + i * a) % 360, s: n.s, l: n.l }));
        return r;
      }),
      (e.prototype.equals = function(t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  ct = [
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
function ut(e, t, n) {
  var o;
  return (
    (o = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? (n ? Math.round(e.h) - 2 * t : Math.round(e.h) + 2 * t) : n ? Math.round(e.h) + 2 * t : Math.round(e.h) - 2 * t) < 0
      ? (o += 360)
      : o >= 360 && (o -= 360),
    o
  );
}
function dt(e, t, n) {
  return 0 === e.h && 0 === e.s
    ? e.s
    : ((o = n ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t) > 1 && (o = 1), n && 5 === t && o > 0.1 && (o = 0.1), o < 0.06 && (o = 0.06), Number(o.toFixed(2)));
  var o;
}
function ft(e, t, n) {
  var o;
  return (o = n ? e.v + 0.05 * t : e.v - 0.15 * t) > 1 && (o = 1), Number(o.toFixed(2));
}
function ht(e) {
  for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [], o = new st(e), r = 5; r > 0; r -= 1) {
    var a = o.toHsv(),
      i = new st({ h: ut(a, r, !0), s: dt(a, r, !0), v: ft(a, r, !0) }).toHexString();
    n.push(i);
  }
  n.push(o.toHexString());
  for (var l = 1; l <= 4; l += 1) {
    var s = o.toHsv(),
      c = new st({ h: ut(s, l), s: dt(s, l), v: ft(s, l) }).toHexString();
    n.push(c);
  }
  return "dark" === t.theme
    ? ct.map(function(e) {
        var o = e.index,
          r = e.opacity;
        return new st(t.backgroundColor || "#141414").mix(n[o], 100 * r).toHexString();
      })
    : n;
}
var gt = {
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
  pt = {},
  mt = {};
Object.keys(gt).forEach(function(e) {
  (pt[e] = ht(gt[e])), (pt[e].primary = pt[e][5]), (mt[e] = ht(gt[e], { theme: "dark", backgroundColor: "#141414" })), (mt[e].primary = mt[e][5]);
}),
  pt.red,
  pt.volcano,
  pt.gold,
  pt.orange,
  pt.yellow,
  pt.lime,
  pt.green,
  pt.cyan,
  pt.blue,
  pt.geekblue,
  pt.purple,
  pt.magenta,
  pt.grey;
var bt = [],
  vt = [];
function yt(e, t) {
  if (((t = t || {}), void 0 === e)) throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");
  var n,
    o = !0 === t.prepend ? "prepend" : "append",
    r = void 0 !== t.container ? t.container : document.querySelector("head"),
    a = bt.indexOf(r);
  return (
    -1 === a && ((a = bt.push(r) - 1), (vt[a] = {})),
    void 0 !== vt[a] && void 0 !== vt[a][o]
      ? (n = vt[a][o])
      : ((n = vt[a][o] = (function() {
          var e = document.createElement("style");
          return e.setAttribute("type", "text/css"), e;
        })()),
        "prepend" === o ? r.insertBefore(n, r.childNodes[0]) : r.appendChild(n)),
    65279 === e.charCodeAt(0) && (e = e.substr(1, e.length)),
    n.styleSheet ? (n.styleSheet.cssText += e) : (n.textContent += e),
    n
  );
}
function wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      o.forEach(function(t) {
        St(e, t, n[t]);
      });
  }
  return e;
}
function St(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
function xt(e) {
  return "object" == typeof e && "string" == typeof e.name && "string" == typeof e.theme && ("object" == typeof e.icon || "function" == typeof e.icon);
}
function Ot(e, t, n) {
  return F(
    e.tag,
    n ? wt({ key: t }, n, e.attrs) : wt({ key: t }, e.attrs),
    (e.children || []).map(function(n, o) {
      return Ot(
        n,
        ""
          .concat(t, "-")
          .concat(e.tag, "-")
          .concat(o)
      );
    })
  );
}
function kt(e) {
  return ht(e)[0];
}
function Pt(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var Ct =
    "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",
  jt = !1;
function Tt(e, t) {
  if (null == e) return {};
  var n,
    o,
    r = (function(e, t) {
      if (null == e) return {};
      var n,
        o,
        r = {},
        a = Object.keys(e);
      for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
function At(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      o.forEach(function(t) {
        Mt(e, t, n[t]);
      });
  }
  return e;
}
function Mt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var It = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
var Et = function(e, t) {
  var n = At({}, e, t.attrs),
    o = n.icon,
    r = n.primaryColor,
    a = n.secondaryColor,
    i = Tt(n, ["icon", "primaryColor", "secondaryColor"]),
    l = It;
  if (
    (r && (l = { primaryColor: r, secondaryColor: a || kt(r) }),
    (function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct;
      f(function() {
        jt || ("undefined" != typeof window && window.document && window.document.documentElement && yt(e, { prepend: !0 }), (jt = !0));
      });
    })(),
    xt(o),
    !xt(o))
  )
    return null;
  var s = o;
  return (
    s && "function" == typeof s.icon && (s = At({}, s, { icon: s.icon(l.primaryColor, l.secondaryColor) })),
    Ot(s.icon, "svg-".concat(s.name), At({}, i, { "data-icon": s.name, width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }))
  );
};
(Et.props = { icon: Object, primaryColor: String, secondaryColor: String, focusable: String }),
  (Et.inheritAttrs = !1),
  (Et.displayName = "IconBase"),
  (Et.getTwoToneColors = function() {
    return At({}, It);
  }),
  (Et.setTwoToneColors = function(e) {
    var t = e.primaryColor,
      n = e.secondaryColor;
    (It.primaryColor = t), (It.secondaryColor = n || kt(t)), (It.calculated = !!n);
  });
var _t = Et;
function Lt(e, t) {
  return (
    (function(e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function(e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var n = [],
        o = !0,
        r = !1,
        a = void 0;
      try {
        for (var i, l = e[Symbol.iterator](); !(o = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0);
      } catch (s) {
        (r = !0), (a = s);
      } finally {
        try {
          o || null == l.return || l.return();
        } finally {
          if (r) throw a;
        }
      }
      return n;
    })(e, t) ||
    (function(e, t) {
      if (!e) return;
      if ("string" == typeof e) return Ht(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ht(e, t);
    })(e, t) ||
    (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })()
  );
}
function Ht(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function Bt(e) {
  var t = Lt(Pt(e), 2),
    n = t[0],
    o = t[1];
  return _t.setTwoToneColors({ primaryColor: n, secondaryColor: o });
}
function Nt(e, t) {
  return (
    (function(e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function(e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var n = [],
        o = !0,
        r = !1,
        a = void 0;
      try {
        for (var i, l = e[Symbol.iterator](); !(o = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0);
      } catch (s) {
        (r = !0), (a = s);
      } finally {
        try {
          o || null == l.return || l.return();
        } finally {
          if (r) throw a;
        }
      }
      return n;
    })(e, t) ||
    (function(e, t) {
      if (!e) return;
      if ("string" == typeof e) return Dt(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dt(e, t);
    })(e, t) ||
    (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })()
  );
}
function Dt(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
  return o;
}
function zt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
function $t(e, t) {
  if (null == e) return {};
  var n,
    o,
    r = (function(e, t) {
      if (null == e) return {};
      var n,
        o,
        r = {},
        a = Object.keys(e);
      for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
  }
  return r;
}
Bt("#1890ff");
var Rt = function(e, t) {
  var n,
    o = (function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? Object(arguments[t]) : {},
          o = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
          (o = o.concat(
            Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable;
            })
          )),
          o.forEach(function(t) {
            zt(e, t, n[t]);
          });
      }
      return e;
    })({}, e, t.attrs),
    r = o.class,
    a = o.icon,
    i = o.spin,
    l = o.rotate,
    s = o.tabindex,
    u = o.twoToneColor,
    d = o.onClick,
    f = $t(o, ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"]),
    h = (zt((n = { anticon: !0 }), "anticon-".concat(a.name), Boolean(a.name)), zt(n, r, r), n),
    g = "" === i || i || "loading" === a.name ? "anticon-spin" : "",
    p = s;
  void 0 === p && d && ((p = -1), (f.tabindex = p));
  var m = l ? { msTransform: "rotate(".concat(l, "deg)"), transform: "rotate(".concat(l, "deg)") } : void 0,
    b = Nt(Pt(u), 2),
    v = b[0],
    y = b[1];
  return c.createVNode("span", c.mergeProps(f, { role: "img", "aria-label": a.name, onClick: d, class: h }), [
    c.createVNode(_t, { class: g, icon: a, primaryColor: v, secondaryColor: y, style: m }, null),
  ]);
};
(Rt.props = { spin: Boolean, rotate: Number, icon: Object, twoToneColor: String }),
  (Rt.displayName = "AntdIcon"),
  (Rt.inheritAttrs = !1),
  (Rt.getTwoToneColor = function() {
    var e = _t.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }),
  (Rt.setTwoToneColor = Bt);
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
              "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
          },
        },
      ],
    },
    name: "close",
    theme: "outlined",
  };
function Ut(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var Wt = function(e, t) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (o = o.concat(
          Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        o.forEach(function(t) {
          Ut(e, t, n[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return c.createVNode(Ft, c.mergeProps(n, { icon: Vt }), null);
};
(Wt.displayName = "CloseOutlined"), (Wt.inheritAttrs = !1);
var Kt = Wt,
  qt = {
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
function Yt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var Jt = function(e, t) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (o = o.concat(
          Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        o.forEach(function(t) {
          Yt(e, t, n[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return c.createVNode(Ft, c.mergeProps(n, { icon: qt }), null);
};
(Jt.displayName = "CompassOutlined"), (Jt.inheritAttrs = !1);
var Qt = Jt,
  Zt = {
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
function Gt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var Xt = function(e, t) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (o = o.concat(
          Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        o.forEach(function(t) {
          Gt(e, t, n[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return c.createVNode(Ft, c.mergeProps(n, { icon: Zt }), null);
};
(Xt.displayName = "DesktopOutlined"), (Xt.inheritAttrs = !1);
var en = Xt,
  tn = {
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
function nn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var on = function(e, t) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (o = o.concat(
          Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        o.forEach(function(t) {
          nn(e, t, n[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return c.createVNode(Ft, c.mergeProps(n, { icon: tn }), null);
};
(on.displayName = "ExclamationCircleOutlined"), (on.inheritAttrs = !1);
var rn = on,
  an = {
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
function ln(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var sn = function(e, t) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (o = o.concat(
          Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        o.forEach(function(t) {
          ln(e, t, n[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return c.createVNode(Ft, c.mergeProps(n, { icon: an }), null);
};
(sn.displayName = "LogoutOutlined"), (sn.inheritAttrs = !1);
var cn = sn,
  un = {
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
function dn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var fn = function(e, t) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (o = o.concat(
          Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        o.forEach(function(t) {
          dn(e, t, n[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return c.createVNode(Ft, c.mergeProps(n, { icon: un }), null);
};
(fn.displayName = "MenuFoldOutlined"), (fn.inheritAttrs = !1);
var hn = fn,
  gn = {
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
function pn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var mn = function(e, t) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (o = o.concat(
          Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        o.forEach(function(t) {
          pn(e, t, n[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return c.createVNode(Ft, c.mergeProps(n, { icon: gn }), null);
};
(mn.displayName = "MenuUnfoldOutlined"), (mn.inheritAttrs = !1);
var bn = mn,
  vn = {
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
function yn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var wn = function(e, t) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (o = o.concat(
          Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        o.forEach(function(t) {
          yn(e, t, n[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return c.createVNode(Ft, c.mergeProps(n, { icon: vn }), null);
};
(wn.displayName = "MobileOutlined"), (wn.inheritAttrs = !1);
var Sn = wn,
  xn = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [{ tag: "path", attrs: { d: "M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z" } }],
    },
    name: "more",
    theme: "outlined",
  };
function On(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var kn = function(e, t) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (o = o.concat(
          Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        o.forEach(function(t) {
          On(e, t, n[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return c.createVNode(Ft, c.mergeProps(n, { icon: xn }), null);
};
(kn.displayName = "MoreOutlined"), (kn.inheritAttrs = !1);
var Pn = kn,
  Cn = {
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
function jn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var Tn = function(e, t) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (o = o.concat(
          Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        o.forEach(function(t) {
          jn(e, t, n[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return c.createVNode(Ft, c.mergeProps(n, { icon: Cn }), null);
};
(Tn.displayName = "ReloadOutlined"), (Tn.inheritAttrs = !1);
var An = Tn,
  Mn = {
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
function In(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var En = function(e, t) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (o = o.concat(
          Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        o.forEach(function(t) {
          In(e, t, n[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return c.createVNode(Ft, c.mergeProps(n, { icon: Mn }), null);
};
(En.displayName = "TabletOutlined"), (En.inheritAttrs = !1);
var _n = En,
  Ln = {
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
function Hn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
var Bn = function(e, t) {
  var n = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? Object(arguments[t]) : {},
        o = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (o = o.concat(
          Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable;
          })
        )),
        o.forEach(function(t) {
          Hn(e, t, n[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return c.createVNode(Ft, c.mergeProps(n, { icon: Ln }), null);
};
(Bn.displayName = "UnlockOutlined"), (Bn.inheritAttrs = !1);
var Nn = Bn,
  Dn = p({
    name: X("Header"),
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
    components: { MenuFoldOutlined: hn, MenuUnfoldOutlined: bn },
  });
const zn = k("data-v-8fd33262");
j("data-v-8fd33262");
const $n = M("div", { class: "flex-1" }, null, -1);
T();
const Rn = zn((e, t, n, o, r, a) => {
  var i, l;
  const s = y("MenuFoldOutlined"),
    c = y("MenuUnfoldOutlined"),
    u = y("a-avatar");
  return (
    w(),
    S(
      L,
      null,
      [
        $(M(s, { class: "text-18", onClick: e.colToggle }, null, 8, ["onClick"]), [[R, !e.collapsed]]),
        $(M(c, { class: "text-18", onClick: e.colToggle }, null, 8, ["onClick"]), [[R, e.collapsed]]),
        $n,
        M("span", { class: "dropdown-trigger px-8 cursor-pointer easi-hover-block", onClick: t[1] || (t[1] = (...t) => e.handleShowSetting && e.handleShowSetting(...t)) }, [
          (null == (i = e.userInfo)
          ? void 0
          : i.avatar)
            ? (w(), S(u, { key: 0, class: "mr-8", shape: "circle", size: "default", src: e.userInfo.avatar, style: { backgroundColor: "#ffbf00", verticalAlign: "middle" } }, null, 8, ["src"]))
            : A("", !0),
          M("span", null, B((null == (l = e.userInfo) ? void 0 : l.name) || "用户名"), 1),
        ]),
      ],
      64
    )
  );
});
(Dn.render = Rn), (Dn.__scopeId = "data-v-8fd33262");
var Fn = p({
  name: X("Setting"),
  emits: ["update:visible"],
  props: {
    userInfo: { type: Object, default: () => ({}) },
    showTabSetting: { type: Boolean, default: !0 },
    onLogout: { type: Function, default: void 0 },
    toDashboard: { type: Function, default: void 0 },
    editPassword: { type: Function, default: void 0 },
  },
  setup(e) {
    const t = g("globalProvider", l({}, oe)),
      n = g("globalEASILocale", { message: {} });
    return {
      globalProvider: t,
      setSetting: (e, n) => {
        (t[e] = n), re(t);
      },
      handleLogout() {
        Z.confirm({
          title: n.message.logoutTitle,
          icon: M(rn),
          content: n.message.logoutMessage,
          centered: !0,
          okText: n.message.confirm,
          cancelText: n.message.cancel,
          onOk: async () => !(null == e ? void 0 : e.onLogout) || e.onLogout(),
        });
      },
      handleToDashBoard() {
        (null == e ? void 0 : e.toDashboard) && e.toDashboard();
      },
      handleEditPassword() {
        (null == e ? void 0 : e.editPassword) && e.editPassword();
      },
      transformTime: (e) => G(e).format("YYYY-MM-DD HH:mm:ss"),
      globalEASILocale: n,
    };
  },
  components: { LogoutOutlined: cn, ExclamationCircleOutlined: rn, CompassOutlined: Qt, UnlockOutlined: Nn, MobileOutlined: Sn, DesktopOutlined: en, TabletOutlined: _n },
});
const Vn = k("data-v-1c127e40");
j("data-v-1c127e40");
const Un = { class: "flex items-center" },
  Wn = { class: "flex items-center" },
  Kn = { class: "m-0" },
  qn = { class: "flex items-center mb-24" },
  Yn = { class: "flex-1" },
  Jn = { key: 1, class: "flex items-center mb-24" },
  Qn = { class: "flex-1" },
  Zn = { key: 2, class: "flex items-center mb-24" },
  Gn = { class: "flex-1" };
T();
const Xn = Vn((e, t, n, o, r, a) => {
  const i = y("a-avatar"),
    l = y("a-typography-text"),
    s = y("DesktopOutlined"),
    c = y("MobileOutlined"),
    u = y("TabletOutlined"),
    d = y("a-divider"),
    f = y("a-switch"),
    h = y("CompassOutlined"),
    g = y("UnlockOutlined"),
    p = y("LogoutOutlined"),
    m = y("a-drawer");
  return (
    w(),
    S(
      m,
      x({ placement: "right", width: "320px" }, e.$attrs, { onClose: t[7] || (t[7] = (t) => e.$emit("update:visible", !1)) }),
      {
        title: Vn(() => {
          var t, n;
          return [
            M("header", Un, [
              (null == (t = e.userInfo)
              ? void 0
              : t.avatar)
                ? (w(),
                  S(i, { key: 0, shape: "circle", size: "default", src: e.userInfo.avatar, style: { backgroundColor: "#ffbf00", verticalAlign: "middle", marginRight: "8px" } }, null, 8, ["src"]))
                : A("", !0),
              P(" " + B((null == (n = e.userInfo) ? void 0 : n.name) || "用户名"), 1),
            ]),
          ];
        }),
        default: Vn(() => {
          var n, o;
          return [
            O(e.$slots, "action-render", {}, void 0, !0),
            (null == (o = null == (n = e.userInfo) ? void 0 : n.devices) ? void 0 : o.length) > 0
              ? (w(),
                S(
                  L,
                  { key: 0 },
                  [
                    M(l, { strong: "", class: "block mb-32" }, { default: Vn(() => [P(B(e.globalEASILocale.message.deviceTitle), 1)]), _: 1 }),
                    (w(!0),
                    S(
                      L,
                      null,
                      E(
                        e.userInfo.devices,
                        (t) => (
                          w(),
                          S("div", { class: "mb-32", key: t.id }, [
                            M("p", Wn, [
                              M(
                                l,
                                { type: "secondary" },
                                {
                                  default: Vn(() => [
                                    "Desktop" === t.device_type
                                      ? (w(), S(s, { key: 0 }))
                                      : "Mobile" === t.device_type
                                      ? (w(), S(c, { key: 1 }))
                                      : "Tablet" === t.device_type
                                      ? (w(), S(u, { key: 2 }))
                                      : A("", !0),
                                  ]),
                                  _: 2,
                                },
                                1024
                              ),
                              M(l, { class: "flex-1 px-8" }, { default: Vn(() => [P(" IP: " + B(t.ip), 1)]), _: 2 }, 1024),
                            ]),
                            M("p", Kn, [M(l, { type: "secondary" }, { default: Vn(() => [P(B(e.globalEASILocale.message.deviceLoginTime) + " " + B(e.transformTime(t.active_at)), 1)]), _: 2 }, 1024)]),
                          ])
                        )
                      ),
                      128
                    )),
                    M(d),
                  ],
                  64
                ))
              : A("", !0),
            M(l, { strong: "", class: "block mb-32" }, { default: Vn(() => [P(B(e.globalEASILocale.message.styleSetting), 1)]), _: 1 }),
            M("div", qn, [
              M("span", Yn, [M(l, null, { default: Vn(() => [P(B(e.globalEASILocale.message.darkSetting), 1)]), _: 1 })]),
              M("div", null, [M(f, { checked: e.globalProvider.mode, onChange: t[1] || (t[1] = (t) => e.setSetting("mode", t)) }, null, 8, ["checked"])]),
            ]),
            e.showTabSetting
              ? (w(),
                S("div", Jn, [
                  M("span", Qn, [M(l, null, { default: Vn(() => [P(B(e.globalEASILocale.message.showTabSetting), 1)]), _: 1 })]),
                  M("div", null, [M(f, { checked: e.globalProvider.showTab, onChange: t[2] || (t[2] = (t) => e.setSetting("showTab", t)) }, null, 8, ["checked"])]),
                ]))
              : A("", !0),
            e.showTabSetting
              ? (w(),
                S("div", Zn, [
                  M("span", Gn, [M(l, null, { default: Vn(() => [P(B(e.globalEASILocale.message.fixedTabSetting), 1)]), _: 1 })]),
                  M("div", null, [M(f, { checked: e.globalProvider.fixedTab, onChange: t[3] || (t[3] = (t) => e.setSetting("fixedTab", t)) }, null, 8, ["checked"])]),
                ]))
              : A("", !0),
            M(d),
            e.onLogout || e.toDashboard || e.editPassword
              ? (w(), S(l, { key: 3, strong: "", class: "block margin-bottom" }, { default: Vn(() => [P(B(e.globalEASILocale.message.more), 1)]), _: 1 }))
              : A("", !0),
            e.toDashboard
              ? (w(),
                S("div", { key: 4, class: "more-item flex items-center cursor-pointer easi-hover-block", onClick: t[4] || (t[4] = (...t) => e.handleToDashBoard && e.handleToDashBoard(...t)) }, [
                  M(h, { class: "mr-8 text-14" }),
                  M(l, null, { default: Vn(() => [P(B(e.globalEASILocale.message.backToDashBoard), 1)]), _: 1 }),
                ]))
              : A("", !0),
            e.editPassword
              ? (w(),
                S("div", { key: 5, class: "more-item flex items-center cursor-pointer easi-hover-block", onClick: t[5] || (t[5] = (...t) => e.handleEditPassword && e.handleEditPassword(...t)) }, [
                  M(g, { class: "mr-8 text-14" }),
                  M(l, null, { default: Vn(() => [P(B(e.globalEASILocale.message.editPassword), 1)]), _: 1 }),
                ]))
              : A("", !0),
            e.onLogout
              ? (w(),
                S("div", { key: 6, class: "more-item flex items-center cursor-pointer text-red-400 easi-hover-block", onClick: t[6] || (t[6] = (...t) => e.handleLogout && e.handleLogout(...t)) }, [
                  M(p, { class: "mr-8 text-14" }),
                  M(l, { type: "danger" }, { default: Vn(() => [P(B(e.globalEASILocale.message.logout), 1)]), _: 1 }),
                ]))
              : A("", !0),
          ];
        }),
        _: 3,
      },
      16
    )
  );
});
(Fn.render = Xn), (Fn.__scopeId = "data-v-1c127e40");
var eo = p({
  name: X("Tab"),
  emits: ["reloadPage"],
  setup(e, { emit: t }) {
    const n = J(),
      o = Q(),
      r = g("globalProvider", l({}, oe)),
      a = N(""),
      i = N([]),
      s = () => {
        if (((a.value = n.fullPath), "Index" !== n.name && (0 === i.value.length || !i.value.some((e) => e.fullPath === n.fullPath)))) {
          const e = n.meta;
          i.value.push({ title: n.query.title || n.meta.title, fullPath: n.fullPath, name: n.name, cached: !0 === e.cached || void 0 === e.cached });
        }
      };
    s(),
      v(
        () => n.fullPath,
        () => {
          s();
        }
      );
    const c = () => {
      t("reloadPage");
    };
    return {
      activeKey: a,
      panes: i,
      toPage: (e) => {
        e !== a.value && o.push(e);
      },
      reloadPage: c,
      removeTab: (e) => {
        const { fullPath: t, name: n, cached: l } = i.value[e];
        i.value.splice(e, 1), l && (r.cachedPage = r.cachedPage.filter((e) => e !== n)), t === a.value && ((a.value = i.value[i.value.length - 1].fullPath), o.push(a.value));
      },
      action({ key: e }) {
        switch (e) {
          case "closeAll":
            (i.value = i.value.filter((e) => e.fullPath === a.value)), (r.cachedPage = i.value[0].cached ? [i.value[0].name] : []);
            break;
          case "refresh":
            c();
        }
      },
      getEASIText: le,
    };
  },
  components: { MoreOutlined: Pn, ReloadOutlined: An, CloseOutlined: Kt },
});
const to = k("data-v-1b967ae2");
j("data-v-1b967ae2");
const no = { class: "flex items-center" };
T();
const oo = to((e, t, n, o, r, a) => {
  const i = y("ReloadOutlined"),
    l = y("CloseOutlined"),
    s = y("a-tab-pane"),
    c = y("MoreOutlined"),
    u = y("a-menu-item"),
    d = y("a-menu"),
    f = y("a-dropdown"),
    h = y("a-tabs");
  return (
    w(),
    S(
      h,
      { activeKey: e.activeKey, tabBarStyle: { paddingLeft: "16px" }, "hide-add": "", onTabClick: e.toPage, type: "editable-card", class: "page-tab" },
      {
        tabBarExtraContent: to(() => [
          M(
            f,
            { onClick: e.action },
            {
              overlay: to(() => [
                M(
                  d,
                  { onClick: e.action },
                  {
                    default: to(() => [
                      M(u, { key: "closeAll" }, { default: to(() => [P(B(e.getEASIText("closeOther")), 1)]), _: 1 }),
                      M(u, { key: "refresh" }, { default: to(() => [P(B(e.getEASIText("refreshPage")), 1)]), _: 1 }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["onClick"]
                ),
              ]),
              default: to(() => [M("a", { class: "ant-dropdown-link p-12 mr-8", onClick: t[1] || (t[1] = V(() => {}, ["prevent"])) }, [M(c, { class: "text-16 leading-0" })])]),
              _: 1,
            },
            8,
            ["onClick"]
          ),
        ]),
        default: to(() => [
          (w(!0),
          S(
            L,
            null,
            E(
              e.panes,
              (t, n) => (
                w(),
                S(
                  s,
                  { key: t.fullPath, closable: !1 },
                  {
                    tab: to(() => [
                      M("span", no, [
                        P(B(t.title) + " ", 1),
                        $(M(i, { class: "icon-action text-12 leading-0 ml-8", onClick: V(e.reloadPage, ["stop"]) }, null, 8, ["onClick"]), [[R, t.fullPath === e.activeKey]]),
                        $(M(l, { class: "icon-action text-12 leading-0 ml-8", onClick: V((t) => e.removeTab(n), ["stop"]) }, null, 8, ["onClick"]), [[R, 1 !== e.panes.length]]),
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
(eo.render = oo), (eo.__scopeId = "data-v-1b967ae2");
var ro = p({
  name: X("Layout"),
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
    const { nav: t } = m(e),
      n = J(),
      o = Q(),
      r = N(ee.exports.isMobile()),
      a = N(!0),
      i = N(r.value),
      s = N(!1),
      c = g("globalProvider", l({}, oe));
    let u;
    v(
      () => c.fixedTab,
      () => {
        clearTimeout(u),
          (a.value = !1),
          (u = setTimeout(() => {
            a.value = !0;
          }, 200));
      }
    );
    const d = () => {
      n.meta.cached && !c.cachedPage.includes(n.name) && (c.cachedPage = [...c.cachedPage, n.name]);
    };
    d(),
      v(
        () => n.name,
        (e) => {
          d();
        }
      );
    const h = () => {
      ee.exports.debounced(() => {
        i.value && window.innerWidth > 1200 ? (i.value = !1) : !i.value && window.innerWidth <= 1200 && (i.value = !0),
          r.value && window.innerWidth > 750 ? (r.value = !1) : !r.value && window.innerWidth <= 750 && (r.value = !0);
      }, 250)();
    };
    return (
      h(),
      window.addEventListener("resize", h, !1),
      z(() => {
        "Index" === n.name && t.value.length > 0 && o.replace(t.value[0].path);
      }),
      U(() => {
        window.removeEventListener("resize", h, !1);
      }),
      {
        isH5: r,
        showSetting: s,
        collapsed: i,
        addTransition: a,
        setCollapsed() {
          i.value = !i.value;
        },
        collWidth: C(() => (i.value ? "80px" : "200px")),
        globalProvider: c,
        cachedPage: C(() => (c.showTab ? c.cachedPage : [])),
        onReloadPage: async (e = !1) => (
          await (async function(e, t, n = !1) {
            n ? (e.cachedPage = []) : !1 !== t.meta.cached && (e.cachedPage = e.cachedPage.filter((e) => t.name !== e)),
              (e.reloadPage = !1),
              await f(),
              !1 !== t.meta.cached && (e.cachedPage = [...e.cachedPage, t.name]),
              (e.reloadPage = !0);
          })(c, n, e),
          !0
        ),
        handleShowSetting() {
          s.value = !0;
        },
        copyRightYear() {
          let t = new Date().getFullYear();
          return e.startYear ? (e.startYear.toString() === t.toString() ? e.startYear : `${e.startYear}-${t}`) : "";
        },
      }
    );
  },
  components: { PageNav: Ve, PageHeader: Dn, PageSetting: Fn, PageTab: eo },
});
const ao = k("data-v-5979bddb");
j("data-v-5979bddb");
const io = M("div", { class: "h-48" }, null, -1),
  lo = { key: 1, class: "h-64" };
T();
const so = ao((e, t, n, o, r, a) => {
  const i = y("PageNav"),
    l = y("PageHeader"),
    s = y("a-layout-header"),
    c = y("PageTab"),
    u = y("router-view"),
    d = y("a-layout-content"),
    f = y("a-layout-footer"),
    h = y("a-layout"),
    g = y("PageSetting");
  return (
    w(),
    S(
      h,
      { class: "min-h-screen" },
      {
        default: ao(() => [
          M(
            i,
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
          M(h, null, {
            default: ao(() => [
              io,
              M(
                s,
                {
                  class: ["page-header fixed top-0 right-0 bg-white flex items-center h-48 leading-48 pl-16 pr-16 z-10", { "transition-width": !e.isH5 }],
                  style: { width: e.isH5 ? "100%" : `calc(100% - ${e.collWidth})` },
                },
                {
                  default: ao(() => [
                    M(l, { collapsed: e.collapsed, userInfo: e.userInfo, onColToggle: e.setCollapsed, onHandleShowSetting: e.handleShowSetting }, null, 8, [
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
                ? (w(),
                  S(
                    c,
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
                : A("", !0),
              e.globalProvider.showTab && e.globalProvider.fixedTab ? (w(), S("div", lo)) : A("", !0),
              M(d, null, {
                default: ao(() => [
                  M(u, null, {
                    default: ao(({ Component: t }) => [
                      M(
                        D,
                        { name: "slid-up", mode: "out-in" },
                        {
                          default: ao(() => [
                            (w(), S(W, { include: e.globalProvider.cachedPage }, [e.globalProvider.reloadPage ? (w(), S(K(t), { key: (t || {}).name })) : A("", !0)], 1032, ["include"])),
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
              M(f, { class: "px-16 py-12 text-center" }, { default: ao(() => [P(" © " + B(e.copyRightYear()) + " EASI, Make Life Easier. ", 1)]), _: 1 }),
            ]),
            _: 1,
          }),
          M(
            g,
            {
              visible: e.showSetting,
              "onUpdate:visible": t[2] || (t[2] = (t) => (e.showSetting = t)),
              userInfo: e.userInfo,
              showTabSetting: e.showTabSetting,
              onLogout: e.onLogout,
              toDashboard: e.toDashboard,
              editPassword: e.editPassword,
            },
            { "action-render": ao(() => [O(e.$slots, "action-render", {}, void 0, !0)]), _: 3 },
            8,
            ["visible", "userInfo", "showTabSetting", "onLogout", "toDashboard", "editPassword"]
          ),
        ]),
        _: 1,
      }
    )
  );
});
(ro.render = so),
  (ro.__scopeId = "data-v-5979bddb"),
  (ro.install = (e) => {
    e.component(ro.name, ro);
  });
var co = p({ name: X("Table"), props: { loading: { type: Boolean, default: !1 }, styleClass: { type: String }, scroll: { type: Object, default: () => ({ x: 1620 }) } } });
(co.render = function(e, t, n, o, r, a) {
  const i = y("a-space"),
    l = y("a-col"),
    s = y("a-row"),
    c = y("a-table"),
    u = q("loading");
  return $(
    (w(),
    S(
      c,
      x({ scroll: e.scroll }, e.$attrs),
      I({ _: 2 }, [
        e.$slots.headerLeft || e.$slots.headerRight
          ? {
              name: "title",
              fn: H(() => [
                M(
                  s,
                  { align: "middle", class: ["flex-wrap", e.styleClass] },
                  {
                    default: H(() => [
                      M(
                        l,
                        { flex: 1, class: "md:min-w-0" },
                        { default: H(() => [e.$slots.headerLeft ? (w(), S(i, { key: 0, class: "flex-wrap" }, { default: H(() => [O(e.$slots, "headerLeft")]), _: 3 })) : A("", !0)]), _: 1 }
                      ),
                      M(l, null, { default: H(() => [e.$slots.headerRight ? (w(), S(i, { key: 0 }, { default: H(() => [O(e.$slots, "headerRight")]), _: 3 })) : A("", !0)]), _: 1 }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class"]
                ),
              ]),
            }
          : void 0,
        E(e.$slots, (t, n) => ({
          name: n,
          fn: H((t) => ["title" !== e.$slots.name && "headerLeft" !== e.$slots.name && "headerRight" !== e.$slots.name ? O(e.$slots, n, x({ key: 0 }, t)) : A("", !0)]),
        })),
      ]),
      1040,
      ["scroll"]
    )),
    [[u, e.loading]]
  );
}),
  (co.install = (e) => {
    e.component(co.name, co);
  }),
  (Fn.install = (e) => {
    e.component(Fn.name, Fn);
  });
var uo = {
    install: (e) => {
      (e.config.globalProperties.$usePermissions = (t, n = "in") => {
        var o, r;
        let a = !1;
        const i = (null == (r = null == (o = e.config.globalProperties.$store.state) ? void 0 : o.permission) ? void 0 : r.permissionMap) || {};
        return Array.isArray(t) ? ("in" === n ? (a = t.some((e) => !!i[e])) : "all" === n && (a = t.every((e) => !!i[e]))) : "string" == typeof t && (a = !!i[t]), a;
      }),
        e.directive("permission", {
          mounted(t, n) {
            var o;
            const { value: r, arg: a = "in" } = n;
            e.config.globalProperties.$usePermissions(r, a) || null == (o = null == t ? void 0 : t.parentNode) || o.removeChild(t);
          },
        });
    },
  },
  fo = {
    install: (e) => {
      const t = (e) => {
          e &&
            setTimeout(() => {
              var t, n;
              (e.domInserted = !1), null == (n = null == (t = null == e ? void 0 : e.loadingRoot) ? void 0 : t.parentElement) || n.removeChild(null == e ? void 0 : e.loadingRoot);
            }, 300);
        },
        n = async (n, o) => {
          let r = "",
            a = !0,
            i = "normal";
          if ("object" == typeof o.value) {
            const { title: e, show: t, size: n = "normal" } = o.value;
            (r = e), (a = t), (i = n);
          } else a = o.value;
          a
            ? (await f(() => {
                (n.originalPosition = getComputedStyle(n, null).position),
                  ((t, n, o) => {
                    var r, a;
                    "none" !== getComputedStyle(t, null).display &&
                      "hidden" !== getComputedStyle(t, null).visibility &&
                      ("absolute" !== t.originalPosition && "fixed" !== t.originalPosition && (t.style.position = "relative"),
                      (t.comp.cShow = !0),
                      n && (t.comp.cTitle = n),
                      o && (t.comp.cSize = o),
                      (t.comp.root = null == (a = null == (r = e._instance) ? void 0 : r.root) ? void 0 : a.proxy),
                      null == t || t.appendChild(null == t ? void 0 : t.loadingRoot));
                  })(n, r, i);
              }),
              (n.domInserted = !0))
            : ((n.comp.cShow = !1), n.domInserted && t(n));
        };
      e.directive("loading", {
        async beforeMount(e, t) {
          const o = Y(Te);
          (e.loading = e), (e.loadingRoot = document.createElement("div")), (e.comp = o.mount(e.loadingRoot)), await n(e, t);
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
function ho(e, t) {
  const n = d(e);
  return [
    n,
    (e, o, ...r) => {
      null == t || t(...r), (n[e] = o);
    },
  ];
}
function go(e) {
  return d(l({ showQuickJumper: !0, showSizeChanger: !0, showTotal: (e) => le("pageTotal", { total: e || 0 }), showSizeChange: () => null, onShowSizeChange: () => null }, e));
}
const po = [se, de, he, me, we, ro, Te, Le, Oe, co, Fn],
  mo = [uo],
  bo = (e) => {
    mo.forEach((t) => {
      e.use(t);
    }),
      e.use(fo),
      po.forEach((t) => {
        e.component(t.name, t);
      });
  };
var vo = { version: "0.0.23", install: bo };
export {
  he as EASIButton,
  me as EASIDrawer,
  we as EASIError,
  ro as EASILayout,
  Te as EASILoading,
  Le as EASIModal,
  Oe as EASIPage,
  se as EASIProvider,
  Fn as EASISetting,
  co as EASITable,
  de as EASIText,
  vo as default,
  bo as install,
  ho as useModalVisible,
  go as usePagination,
  fo as vLoading,
  uo as vPermission,
};
