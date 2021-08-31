"use strict";
var e = Object.defineProperty,
  t = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  i = (t, o, n) => (o in t ? e(t, o, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (t[o] = n)),
  l = (e, t) => {
    for (var o in t || (t = {})) r.call(t, o) && i(e, o, t[o]);
    if (n) for (var o of n(t)) a.call(t, o) && i(e, o, t[o]);
    return e;
  },
  s = (e, n) => t(e, o(n));
Object.defineProperty(exports, "__esModule", { value: !0 }), (exports[Symbol.toStringTag] = "Module");
var c = require("vue"),
  d = require("vue-router"),
  u = require("ant-design-vue");
function p(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
function f(e) {
  if (e && e.__esModule) return e;
  var t = { __proto__: null, [Symbol.toStringTag]: "Module" };
  return (
    e &&
      Object.keys(e).forEach(function(o) {
        if ("default" !== o) {
          var n = Object.getOwnPropertyDescriptor(e, o);
          Object.defineProperty(
            t,
            o,
            n.get
              ? n
              : {
                  enumerable: !0,
                  get: function() {
                    return e[o];
                  },
                }
          );
        }
      }),
    (t.default = e),
    Object.freeze(t)
  );
}
var h = p(c),
  m = f(c);
function g(e) {
  return `EASI${e}`;
}
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
var b = { exports: {} },
  v = { exports: {} };
(v.exports = (function() {
  function e() {
    for (var e = 0, t = {}; e < arguments.length; e++) {
      var o = arguments[e];
      for (var n in o) t[n] = o[n];
    }
    return t;
  }
  function t(e) {
    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }
  return (function o(n) {
    function r() {}
    function a(t, o, a) {
      if ("undefined" != typeof document) {
        "number" == typeof (a = e({ path: "/" }, r.defaults, a)).expires && (a.expires = new Date(1 * new Date() + 864e5 * a.expires)), (a.expires = a.expires ? a.expires.toUTCString() : "");
        try {
          var i = JSON.stringify(o);
          /^[\{\[]/.test(i) && (o = i);
        } catch (c) {}
        (o = n.write ? n.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)),
          (t = encodeURIComponent(String(t))
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/[\(\)]/g, escape));
        var l = "";
        for (var s in a) a[s] && ((l += "; " + s), !0 !== a[s] && (l += "=" + a[s].split(";")[0]));
        return (document.cookie = t + "=" + o + l);
      }
    }
    function i(e, o) {
      if ("undefined" != typeof document) {
        for (var r = {}, a = document.cookie ? document.cookie.split("; ") : [], i = 0; i < a.length; i++) {
          var l = a[i].split("="),
            s = l.slice(1).join("=");
          o || '"' !== s.charAt(0) || (s = s.slice(1, -1));
          try {
            var c = t(l[0]);
            if (((s = (n.read || n)(s, c) || t(s)), o))
              try {
                s = JSON.parse(s);
              } catch (d) {}
            if (((r[c] = s), e === c)) break;
          } catch (d) {}
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
      (r.remove = function(t, o) {
        a(t, "", e(o, { expires: -1 }));
      }),
      (r.defaults = {}),
      (r.withConverter = o),
      r
    );
  })(function() {});
})()),
  (function(e, t, o) {
    function n(e) {
      if (e && e.__esModule) return e;
      var t = { __proto__: null, [Symbol.toStringTag]: "Module" };
      return (
        e &&
          Object.keys(e).forEach(function(o) {
            if ("default" !== o) {
              var n = Object.getOwnPropertyDescriptor(e, o);
              Object.defineProperty(
                t,
                o,
                n.get
                  ? n
                  : {
                      enumerable: !0,
                      get: function() {
                        return e[o];
                      },
                    }
              );
            }
          }),
        (t.default = e),
        Object.freeze(t)
      );
    }
    var r = n(o);
    const a = class {
      constructor(e, t) {
        (this.options = Object.assign({}, a.defaultOptions, t)),
          (this.name = e),
          (this.version = this.options.version),
          (this.db = void 0),
          (this.initComplete = !1),
          (this.versionChanged = null),
          (this.initPromise = this.init());
        for (const o of this.options.store) {
          const { storeName: e } = o;
          this[`$${e}`] = {
            add: (t, o) => this.add(e, t, o),
            put: (t, o) => this.put(e, t, o),
            getAll: (t, o, n) => this.getAll(e, t, o, n),
            get: (t, o) => this.get(e, t, o),
            getAllKeys: (t, o) => this.getAllKeys(e, t, o),
            count: (t) => this.count(e, t),
            delete: (t) => this.delete(e, t),
            deleteIndex: (t) => this.deleteIndex(e, t),
            elasticSearch: (t, o) => this.elasticSearch(e, t, o),
            index: (t) => this.index(e, t),
            clear: () => this.clear(e),
          };
        }
      }
      async init() {
        return new Promise((e, t) => {
          if (this.initComplete) return e(this.db);
          const o = window.indexedDB.open(this.name, this.version);
          (o.onerror = (e) => {
            t(e);
          }),
            (o.onsuccess = async () => {
              (this.db = o.result),
                (this.initComplete = !0),
                (this.db.onversionchange = () => {
                  window.location.reload();
                }),
                this.versionChanged && this.options.upgradeCallBack && (await this.options.upgradeCallBack(this, this.versionChanged)),
                e(this.db);
            }),
            (o.onupgradeneeded = async (e) => {
              (this.versionChanged = e), await this._upgrade(e, o);
            });
        });
      }
      async _upgrade(e, t) {
        this.db = e.target.result;
        for (const o of this.options.store) await this.createStore(o, t);
        return this.db;
      }
      async createStore(e, t) {
        const { storeName: o, options: n, indexOptions: r } = e;
        let i;
        return this.db.objectStoreNames.contains(o)
          ? t.transaction.objectStore(o)
          : ((i = this.db.createObjectStore(o, Object.assign({}, a.defaultStoreOptions, n))),
            console.log(i),
            r &&
              r.forEach((e) => {
                i.createIndex(e.name, e.key, { unique: e.unique, multiEntry: !!e.multiEntry });
              }),
            i);
      }
      async add(e, t, o) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((n, r) => {
            const a = this.db
              .transaction([e], "readwrite")
              .objectStore(e)
              .add(t, o);
            (a.onsuccess = function(e) {
              n(e);
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
          new Promise((o, n) => {
            const r = this.db
              .transaction([e], "readwrite")
              .objectStore(e)
              .delete(t);
            (r.onsuccess = function(e) {
              o(e);
            }),
              (r.onerror = function(e) {
                n(e);
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
          new Promise((t, o) => {
            const n = this.db
              .transaction([e], "readwrite")
              .objectStore(e)
              .clear();
            (n.onsuccess = (e) => {
              t(e);
            }),
              (n.onerror = (e) => {
                o(e);
              });
          })
        );
      }
      async put(e, t, o) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((n, r) => {
            const a = this.db
              .transaction([e], "readwrite")
              .objectStore(e)
              .put(t, o);
            (a.onsuccess = function() {
              n(t);
            }),
              (a.onerror = function(e) {
                r(e);
              });
          })
        );
      }
      async get(e, t, o) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((n, r) => {
            const a = this.db.transaction([e], "readonly").objectStore(e);
            let i;
            if (o) {
              const e = a.index(o);
              i = e.get(t);
            } else i = a.get(t);
            (i.onerror = function(e) {
              r(e);
            }),
              (i.onsuccess = function() {
                i.result ? n(i.result) : n(null);
              });
          })
        );
      }
      async getAllKeys(e, t, o) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((n, r) => {
            const a = this.db
              .transaction([e], "readonly")
              .objectStore(e)
              .getAllKeys(t, o);
            (a.onsuccess = function() {
              n(a.result);
            }),
              (a.onerror = function(e) {
                r(e);
              });
          })
        );
      }
      async getAll(e, t, o, n) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((r, a) => {
            let i = this.db.transaction(e).objectStore(e);
            const l = t ? i.index(t) : i,
              s = null != n ? l.getAll(o, n) : l.getAll(o);
            (s.onsuccess = function() {
              r(s.result);
            }),
              (s.onerror = function(e) {
                a(e);
              });
          })
        );
      }
      async elasticSearch(e, t, o) {
        return (
          this.initComplete || (await this.initPromise),
          new Promise((n, r) => {
            const a = this.db.transaction(e).objectStore(e),
              i = [],
              l = a.openCursor();
            (l.onsuccess = (e) => {
              const r = e.target.result;
              r ? (Array.isArray(o) ? o.some((e) => this._compareType(r.value, t, e)) && i.push(r.value) : this._compareType(r.value, t, o) && i.push(r.value), r.continue()) : n(i);
            }),
              (l.onerror = (e) => {
                r(e);
              });
          })
        );
      }
      _compareType(e, t, o) {
        const n = o ? e[o] : e;
        let r = !1;
        switch (typeof n) {
          case "boolean":
            r = "boolean" == typeof t && n === t;
            break;
          case "number":
          case "bigint":
            r = "number" == typeof t && n === t;
            break;
          case "string":
            r = ("string" == typeof t && n.indexOf(t) > -1) || (t instanceof RegExp && t.test(n));
            break;
          default:
            Array.isArray(n) && (r = t instanceof RegExp ? n.some((e) => t.test(e)) : n.includes(t));
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
          new Promise((o, n) => {
            const r = this.db
              .transaction(e)
              .objectStore(e)
              .count(t);
            (r.onsuccess = function() {
              o(r.result);
            }),
              (r.onerror = function(e) {
                n(e);
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
        const { databaseName: o, options: n } = t,
          r = new i(o, n);
        (e.config.globalProperties.$db = r), e.provide(l, r);
      },
    };
    function c(e, t, o = 0) {
      o && (o = Date.now() + o);
      const n = JSON.stringify({ value: t, expires: o });
      this.setItem(e, n);
    }
    function d(e) {
      const t = this.getItem(e);
      if (!t) return null;
      const { value: o, expires: n } = JSON.parse(t);
      return n && Date.now() >= n ? (this.removeItem(e), null) : o;
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
          let o = t
              .match(/^(easicustomer|easimalaysia)(.+?)(\s|\()/)[2]
              .replace(/\s|\//g, "")
              .split("."),
            n = e.split("."),
            r = o.length > n.length ? o.length : n.length;
          for (let e = 0; e < r; e++) {
            if (Number(n[e] || 0) < Number(o[e] || 0)) return !0;
            if (Number(n[e] || 0) > Number(o[e] || 0)) return !1;
          }
          return !0;
        } catch (o) {
          return !1;
        }
      }),
      (e.copy = function(e, t = document.querySelector("body")) {
        if (!document.queryCommandSupported("copy")) return !1;
        const o = document.createElement("textarea");
        (o.value = e), t.appendChild(o), o.select(), o.setSelectionRange(0, e.length);
        const n = document.execCommand("copy");
        return o.remove(), n;
      }),
      (e.createWorker = function(e, t, o) {
        return new Promise((n, r) => {
          if (!window.Worker) return o && o(t);
          {
            const o = new Blob(["(" + e.toString() + ")()"]),
              a = window.URL.createObjectURL(o),
              i = new Worker(a);
            i.postMessage(t),
              (i.onmessage = ({ data: e }) => {
                i.terminate(), n(e);
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
      (e.debounced = function(e, t = 200, o = !1) {
        let n;
        return (...r) => {
          if (o) return e.apply(this, r), void (o = !1);
          clearTimeout(n),
            (n = setTimeout(() => {
              e.apply(this, r);
            }, t));
        };
      }),
      (e.getCookie = function(e) {
        return r.get(e);
      }),
      (e.getLocal = function(e) {
        return d.call(localStorage, e);
      }),
      (e.getSession = function(e) {
        return d.call(sessionStorage, e);
      }),
      (e.indexDBPlugin = s),
      (e.isMobile = function() {
        return !!window.navigator.userAgent.match(/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i);
      }),
      (e.loadScript = function(e, t) {
        return new Promise((o, n) => {
          if (document.querySelector(`#${t}`)) return o("");
          const r = document.createElement("script");
          (r.type = "text/javascript"),
            (r.src = e),
            t && (r.id = t),
            document.getElementsByTagName("head")[0].appendChild(r),
            (r.onload = function() {
              o("");
            }),
            (r.onerror = function() {
              n("引入失败");
            });
        });
      }),
      (e.openAppView = function(e, t = "au.com.easi.customer") {
        window.location.href = `${t}://${e}`;
      }),
      (e.openAppWeb = function({ scheme: e = "au.com.easi.courier", title: t, url: o, show: n }) {
        window.location.href = `${e}://web/help?text=${t}&url=${encodeURIComponent(o)}&show=${n}`;
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
      (e.setCookie = function(e, t, o) {
        o && (o /= 864e5), o ? r.set(e, t, { expires: o }) : r.set(e, t);
      }),
      (e.setLocal = function(e, t, o = 0) {
        c.call(localStorage, e, t, o);
      }),
      (e.setSession = function(e, t, o = 0) {
        c.call(sessionStorage, e, t, o);
      }),
      (e.useDB = function() {
        const e = t.inject(l);
        if (!e) throw new Error("未发现indexdb实例");
        return e;
      }),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e[Symbol.toStringTag] = "Module");
  })(b.exports, h.default, v.exports);
const y = document.querySelector("html"),
  w = { reloadPage: !0, mode: !1, showTab: !0, fixedTab: !0, cachedPage: [] };
function S(e) {
  const t = c.toRaw(e),
    { cachedPage: o, reloadPage: i } = t,
    l = ((e, t) => {
      var o = {};
      for (var i in e) r.call(e, i) && t.indexOf(i) < 0 && (o[i] = e[i]);
      if (null != e && n) for (var i of n(e)) t.indexOf(i) < 0 && a.call(e, i) && (o[i] = e[i]);
      return o;
    })(t, ["cachedPage", "reloadPage"]);
  !0 === l.mode || "dark" === l.mode ? y.setAttribute("data-pro-theme", "antdv-pro-theme-dark") : y.removeAttribute("data-pro-theme"), b.exports.setLocal("setting", l);
}
const k = {
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
  },
};
function C(e) {
  return c.reactive({ message: k[e] });
}
function x(e, t) {
  const o = c.inject("globalEASILocale", { message: {} });
  let n = null == o ? void 0 : o.message[e];
  if (n) {
    if (t) {
      const e = /(\{).*?(\})/g;
      n.match(e).forEach((e) => {
        let o = e.replace(/\{|\}|\s|\n|\t/g, "");
        const r = new RegExp(`${e}`, "g");
        n = n.replace(r, t[o]);
      });
    }
    return n;
  }
  return console.warn("未匹配到文案key"), e;
}
var P = c.defineComponent({
  name: g("Provider"),
  props: { locale: { type: Object, default: () => ({ locale: "zh-cn" }) } },
  setup(e) {
    const { locale: t } = c.toRefs(e),
      o = (function() {
        const e = b.exports.getLocal("setting") || { mode: !1, fixedTab: !0, showTab: !0 };
        return (!0 !== e.mode && "dark" !== e.mode) || (e.mode && y.setAttribute("data-pro-theme", "antdv-pro-theme-dark")), c.reactive(s(l({}, e), { cachedPage: [], reloadPage: !0 }));
      })(),
      n = C(e.locale ? e.locale.locale : "zh-cn");
    c.provide("globalProvider", o),
      c.provide("globalEASILocale", n),
      c.watch(
        () => t.value,
        (e) => {
          n.message = (null == e ? void 0 : e.locale) ? k[e.locale] : k["zh-cn"];
        }
      );
  },
});
const O = c.withScopeId("data-v-c6b13f8e"),
  N = O((e, t, o, n, r, a) => {
    const i = c.resolveComponent("a-config-provider");
    return c.openBlock(), c.createBlock(i, c.mergeProps({ locale: e.locale }, e.$attrs), { default: O(() => [c.renderSlot(e.$slots, "default", {}, void 0, !0)]), _: 3 }, 16, ["locale"]);
  });
(P.render = N), (P.__scopeId = "data-v-c6b13f8e");
var B, T;
(P.install = (e) => {
  e.component(P.name, P);
}),
  ((T = B || (B = {}))[(T.Continue = 100)] = "Continue"),
  (T[(T.Success = 200)] = "Success"),
  (T[(T.Created = 201)] = "Created"),
  (T[(T.Accepted = 202)] = "Accepted"),
  (T[(T.NoContent = 204)] = "NoContent"),
  (T[(T.MovedPermenantly = 301)] = "MovedPermenantly"),
  (T[(T.TemporaryRedirect = 307)] = "TemporaryRedirect"),
  (T[(T.NotModified = 304)] = "NotModified"),
  (T[(T.BadRequest = 400)] = "BadRequest"),
  (T[(T.Unauthorized = 401)] = "Unauthorized"),
  (T[(T.PaymentRequired = 402)] = "PaymentRequired"),
  (T[(T.Forbidden = 403)] = "Forbidden"),
  (T[(T.NotFound = 404)] = "NotFound"),
  (T[(T.MethodNotAllowed = 405)] = "MethodNotAllowed"),
  (T[(T.RequestTimeout = 408)] = "RequestTimeout"),
  (T[(T.Conflict = 409)] = "Conflict"),
  (T[(T.Gone = 410)] = "Gone"),
  (T[(T.IAmATeapot = 418)] = "IAmATeapot"),
  (T[(T.UnprocessableEntity = 422)] = "UnprocessableEntity"),
  (T[(T.TooManyRequests = 429)] = "TooManyRequests"),
  (T[(T.InternalServerError = 500)] = "InternalServerError"),
  (T[(T.NotImplemented = 501)] = "NotImplemented"),
  (T[(T.BadGateway = 502)] = "BadGateway"),
  (T[(T.ServiceUnavailable = 503)] = "ServiceUnavailable"),
  (T[(T.GatewayTimeout = 504)] = "GatewayTimeout"),
  (T[(T.AuthenticationRequired = 511)] = "AuthenticationRequired"),
  Array.isArray ||
    (Array.isArray = function(e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    });
const A = "https://maps.googleapis.com/maps/api/js";
function j(e, t) {
  const o = document.querySelector(`#google-maps-${e}-js`);
  return Boolean(o);
}
console.log(async function(e, t, o, n) {
  return (
    j(e) ||
      (await (async function(e, t, o, n, r = {}) {
        if (j(e)) return void console.info(`Attempt to add script tag for the "${e}" library in Google Maps ignored as this tag already exists in the DOM${t ? " [ " + t + "]" : ""}`);
        const a = async (t = 2e3) => {
            throw (await (async function(e) {
              return new Promise((t) => setTimeout(t, e));
            })(t),
            new Error(`Timed out waiting for Google API to load [ ${e} / ${t} ]`));
          },
          i = () => {
            var r = document.createElement("script");
            return (
              (r.id = `google-maps-${e}-js`),
              (r.src = (function(e, t, o = !0, n, r) {
                let a = `${A}?libraries=${e}&sensors=false`;
                t && (a = `${a}&key=${t}`);
                n && (a = `${a}&region=${n}`);
                r && (a = `${a}&language=${r}`);
                o && (a = `${a}&callback=${e}LoaderCallback`);
                return a;
              })(e, t, !0, o, n)),
              document.querySelector("head").appendChild(r),
              new Promise((t) => {
                window[`${e}LoaderCallback`] = () => {
                  t();
                };
              })
            );
          };
        return Promise.race(r.timeout ? [a(r.timeout), i()] : [i()]);
      })(e, t, o, n)),
    window.google
  );
});
var V = c.defineComponent({ name: g("Text"), props: {}, setup(e) {} });
const M = c.createTextVNode("这是一个text组件");
(V.render = function(e, t, o, n, r, a) {
  return c.openBlock(), c.createBlock("div", null, [c.renderSlot(e.$slots, "default", {}, () => [M])]);
}),
  (V.install = (e) => {
    e.component(V.name, V);
  });
var I = c.defineComponent({
  name: g("Button"),
  props: { type: { type: String, default: "default" }, success: { type: Boolean, default: !1 }, warning: { type: Boolean, default: !1 }, info: { type: Boolean, default: !1 } },
  setup(e) {
    const { type: t, success: o, warning: n, info: r } = c.toRefs(e);
    return {
      className: c.computed(() => {
        let e = "link" === t.value ? "px-0 " : "";
        return o.value ? (e += "easi-btn-success") : n.value ? (e += "easi-btn-warning") : r.value && (e += "easi-btn-info"), e;
      }),
    };
  },
});
const E = c.withScopeId("data-v-1fd440a2"),
  D = E((e, t, o, n, r, a) => {
    const i = c.resolveComponent("a-button");
    return (
      c.openBlock(),
      c.createBlock(
        i,
        c.mergeProps(e.$attrs, { type: e.type, class: e.className }),
        { icon: E(() => [c.renderSlot(e.$slots, "icon", {}, void 0, !0)]), default: E(() => [c.renderSlot(e.$slots, "default", {}, void 0, !0)]), _: 3 },
        16,
        ["type", "class"]
      )
    );
  });
(I.render = D),
  (I.__scopeId = "data-v-1fd440a2"),
  (I.install = (e) => {
    e.component(I.name, I);
  });
var _ = c.defineComponent({
  name: g("Drawer"),
  emits: ["update:visible", "close", "show"],
  props: { visible: { default: !1, type: Boolean }, width: { default: "500px", type: String }, bodyStyle: { default: () => ({}), type: Object } },
  setup(e, { emit: t, slots: o }) {
    const { bodyStyle: n, visible: r } = c.toRefs(e),
      a = c.computed(() => (o.footer ? s(l({}, n.value), { paddingBottom: "55px" }) : c.toRaw(n.value)));
    return (
      c.watch(
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
const R = c.withScopeId("data-v-18c84441");
c.pushScopeId("data-v-18c84441");
const L = { key: 0, class: "drawer-footer" };
c.popScopeId();
const $ = R((e, t, o, n, r, a) => {
  const i = c.resolveComponent("a-drawer");
  return (
    c.openBlock(),
    c.createBlock(
      i,
      c.mergeProps(e.$attrs, { visible: e.visible, width: e.width, maskClosable: !1, "body-style": e.computedBodyStyle, onClose: e.handleClose }),
      {
        default: R(() => [
          c.renderSlot(e.$slots, "default", {}, void 0, !0),
          e.$slots.footer ? (c.openBlock(), c.createBlock("div", L, [c.renderSlot(e.$slots, "footer", {}, void 0, !0)])) : c.createCommentVNode("", !0),
        ]),
        _: 3,
      },
      16,
      ["visible", "width", "body-style", "onClose"]
    )
  );
});
(_.render = $),
  (_.__scopeId = "data-v-18c84441"),
  (_.install = (e) => {
    e.component(_.name, _);
  });
var H = c.defineComponent({ name: g("Error"), props: { status: { type: String, default: "" } } });
const z = c.withScopeId("data-v-cd4c8848"),
  F = z((e, t, o, n, r, a) => {
    const i = c.resolveComponent("a-result"),
      l = c.resolveComponent("a-card");
    return (
      c.openBlock(),
      c.createBlock(
        l,
        { bordered: !1, class: "error-full-page" },
        {
          default: z(() => [
            c.createVNode(i, { status: e.status }, c.createSlots({ _: 2 }, [c.renderList(e.$slots, (t, o) => ({ name: o, fn: z((t) => [c.renderSlot(e.$slots, o, t, void 0, !0)]) }))]), 1032, [
              "status",
            ]),
          ]),
          _: 1,
        }
      )
    );
  });
(H.render = F),
  (H.__scopeId = "data-v-cd4c8848"),
  (H.install = (e) => {
    e.component(H.name, H);
  });
var q = c.defineComponent({
  name: g("Page"),
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
    const { breadcrumb: o, title: n, desc: r, hasPermission: a } = c.toRefs(e),
      i = d.useRoute(),
      { appContext: l } = c.getCurrentInstance(),
      s = c.computed(() => o.value || i.meta.breadcrumb || i.matched.slice(1).map((e) => ({ path: e.path, breadcrumbName: e.meta.title }))),
      u = c.computed(() => n.value || (i.meta.title && i.meta.title)),
      p = c.computed(() => r.value || (i.meta.desc && i.meta.desc));
    return (a.value || l.config.globalProperties.$usePermissions(i.meta.permission)) && t("initPage"), { breadcrumbRoutes: s, pageTitle: u, pageDesc: p, getEASIText: x };
  },
  components: { NoPermission: H },
});
const U = { key: 0, class: "page-breadcrumb-wrap" },
  W = { key: 0 },
  K = { class: "p-24" },
  Y = c.createTextVNode(" 403 ");
(q.render = function(e, t, o, n, r, a) {
  const i = c.resolveComponent("router-link"),
    l = c.resolveComponent("a-breadcrumb"),
    s = c.resolveComponent("a-page-header"),
    d = c.resolveComponent("a-card"),
    u = c.resolveComponent("NoPermission");
  return (
    c.openBlock(),
    c.createBlock("div", null, [
      e.$usePermissions(e.$route.meta.permission) || e.hasPermission
        ? (c.openBlock(),
          c.createBlock(
            c.Fragment,
            { key: 0 },
            [
              e.showPageHeader
                ? (c.openBlock(),
                  c.createBlock("div", U, [
                    c.createVNode(
                      s,
                      { title: e.pageTitle },
                      {
                        breadcrumb: c.withCtx(() => [
                          e.breadcrumbRoutes.length > 1
                            ? (c.openBlock(),
                              c.createBlock(
                                l,
                                { key: 0, routes: e.breadcrumbRoutes },
                                {
                                  itemRender: c.withCtx(({ route: e }) => [
                                    c.createVNode(i, { to: e.path }, { default: c.withCtx(() => [c.createTextVNode(c.toDisplayString(e.breadcrumbName), 1)]), _: 2 }, 1032, ["to"]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["routes"]
                              ))
                            : c.createCommentVNode("", !0),
                        ]),
                        default: c.withCtx(() => [
                          e.pageDesc ? (c.openBlock(), c.createBlock("p", W, c.toDisplayString(e.pageDesc), 1)) : c.createCommentVNode("", !0),
                          c.renderSlot(e.$slots, "header"),
                        ]),
                        _: 3,
                      },
                      8,
                      ["title"]
                    ),
                  ]))
                : c.createCommentVNode("", !0),
              c.createVNode("div", K, [
                "card" === e.layoutType
                  ? (c.openBlock(), c.createBlock(d, { key: 0 }, { default: c.withCtx(() => [c.renderSlot(e.$slots, "default")]), _: 3 }))
                  : c.renderSlot(e.$slots, "default", { key: 1 }),
              ]),
            ],
            64
          ))
        : (c.openBlock(),
          c.createBlock(u, { key: 1, status: "403" }, { title: c.withCtx(() => [Y]), "sub-title": c.withCtx(() => [c.createTextVNode(c.toDisplayString(e.getEASIText("noPermission")), 1)]), _: 1 })),
    ])
  );
}),
  (q.install = (e) => {
    e.component(q.name, q);
  });
var G = c.defineComponent({
  name: g("Loading"),
  emits: ["update:show"],
  props: { title: { type: String, default: void 0 }, show: { default: !1, type: Boolean }, size: { default: "normal", type: String } },
  setup(e, { emit: t }) {
    var o, n, r, a, i;
    const { show: l, size: s } = c.toRefs(e),
      d = c.getCurrentInstance(),
      u = (null == (o = null == d ? void 0 : d.root) ? void 0 : o.proxy) || { localeMessage: { locale: "zh-cn" } },
      p = c.ref(u),
      f = C((null == (a = null == (r = null == (n = null == d ? void 0 : d.root) ? void 0 : n.proxy) ? void 0 : r.localeMessage) ? void 0 : a.locale) || "zh-cn"),
      h = null == (i = null == f ? void 0 : f.message) ? void 0 : i.loading,
      m = c.ref(e.show),
      g = c.ref(h),
      b = c.ref("normal");
    return (
      c.watch(
        () => l.value,
        (e) => {
          m.value = e;
        }
      ),
      c.watch(
        () => s.value,
        (e) => {
          b.value = e;
        }
      ),
      c.watch(
        () => {
          var e;
          return null == (e = p.value) ? void 0 : e.localeMessage;
        },
        (e) => {
          e && ((f.message = k[(null == e ? void 0 : e.locale) || "zh-cn"]), (g.value = f.message.loading));
        }
      ),
      c.watch(
        () => m.value,
        (e) => {
          t("update:show", e);
        }
      ),
      { cShow: m, cTitle: g, cSize: b, root: p }
    );
  },
});
const J = c.withScopeId("data-v-4a04b4b8");
c.pushScopeId("data-v-4a04b4b8");
const Q = { key: 0, class: "loading-container", id: "cus-loading" },
  Z = c.createVNode(
    "div",
    { class: "loading-wrap" },
    [
      c.createVNode("div", { class: "ball" }, [c.createVNode("i", { class: "bg spoon" }), c.createVNode("i", { class: "bg fork" })]),
      c.createVNode("div", { class: "loading-shadow" }, [c.createVNode("div")]),
    ],
    -1
  ),
  X = { key: 0, class: "tips" };
c.popScopeId();
const ee = J(
  (e, t, o, n, r, a) => (
    c.openBlock(),
    c.createBlock(
      c.Transition,
      { name: "fade", mode: "out-in" },
      {
        default: J(() => [
          e.cShow
            ? (c.openBlock(),
              c.createBlock("div", Q, [
                c.createVNode(
                  "div",
                  { class: ["loading", e.cSize] },
                  [Z, e.title || e.cTitle ? (c.openBlock(), c.createBlock("p", X, c.toDisplayString(e.title || e.cTitle), 1)) : c.createCommentVNode("", !0)],
                  2
                ),
              ]))
            : c.createCommentVNode("", !0),
        ]),
        _: 1,
      }
    )
  )
);
(G.render = ee),
  (G.__scopeId = "data-v-4a04b4b8"),
  (G.install = (e) => {
    e.component(G.name, G);
  });
var te = c.defineComponent({
  name: g("Modal"),
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
    const { handleOk: o, visible: n } = c.toRefs(e),
      r = c.ref(!1);
    c.watch(
      () => n.value,
      (e) => {
        e && (t("update:visible", !0), t("show"));
      }
    );
    const a = c.ref(!1),
      i = () => {
        (r.value = !1), t("update:visible", !1), t("cancel");
      };
    return {
      symbolVisible: r,
      autoLoading: a,
      bodyScrollStyle: { maxHeight: "calc(100vh - 160px)", overflow: "auto" },
      onConfirm: async () => {
        if (o.value && "function" == typeof o.value)
          try {
            (a.value = !0), await o.value(), (a.value = !1), i();
          } catch (e) {
            console.log(e), (a.value = !1);
          }
        else t("ok"), i();
      },
      onCancel: i,
      showModal: () => {
        (r.value = !0), t("update:visible", !0), t("show");
      },
      getEASIText: x,
    };
  },
});
const oe = { key: 0, class: "footer" };
(te.render = function(e, t, o, n, r, a) {
  const i = c.resolveComponent("a-button"),
    s = c.resolveComponent("a-modal");
  return (
    c.openBlock(),
    c.createBlock(
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
        footer: c.withCtx(() => [
          c.renderSlot(e.$slots, "footer"),
          !e.$slots.footer && e.footer
            ? (c.openBlock(),
              c.createBlock("div", oe, [
                e.showCancel
                  ? (c.openBlock(),
                    c.createBlock(i, { key: 0, onClick: e.onCancel }, { default: c.withCtx(() => [c.createTextVNode(c.toDisplayString(e.cancelText || e.getEASIText("cancel")), 1)]), _: 1 }, 8, [
                      "onClick",
                    ]))
                  : c.createCommentVNode("", !0),
                e.showOk
                  ? (c.openBlock(),
                    c.createBlock(
                      i,
                      { key: 1, type: e.okType, loading: e.autoLoading || e.confirmLoading, onClick: e.onConfirm },
                      { default: c.withCtx(() => [c.createTextVNode(c.toDisplayString(e.okText || e.getEASIText("confirm")), 1)]), _: 1 },
                      8,
                      ["type", "loading", "onClick"]
                    ))
                  : c.createCommentVNode("", !0),
              ]))
            : c.createCommentVNode("", !0),
        ]),
        default: c.withCtx(() => [c.renderSlot(e.$slots, "default")]),
        _: 3,
      },
      8,
      ["visible", "title", "bodyStyle", "closable", "confirmLoading", "destroyOnClose", "keyboard", "maskClosable", "width", "getContainer", "afterClose", "class", "onCancel"]
    )
  );
}),
  (te.install = (e) => {
    e.component(te.name, te);
  });
var ne = c.defineComponent({
  name: g("menu"),
  props: {
    collapsed: { type: Boolean, default: !1 },
    logo: { type: String, default: null },
    title: { type: String, default: null },
    subTitle: { type: String, default: null },
    nav: { type: Array, default: () => [] },
  },
  setup(e) {
    const { collapsed: t } = c.toRefs(e),
      o = d.useRoute(),
      n = d.useRouter(),
      r = c.ref([]),
      a = c.ref([]),
      i = () => {
        const e = [...c.toRaw(o.meta.breadcrumb || [])];
        t.value || (r.value = e.map((e) => e.name)), (a.value = [o.meta.selected || o.name]);
      };
    c.onMounted(() => {
      i();
    }),
      c.watch(() => o.name, i),
      c.watch(
        () => t.value,
        (e) => {
          if (e) r.value = [];
          else {
            const e = [...c.toRaw(o.meta.breadcrumb || [])];
            r.value = e.map((e) => e.name);
          }
        }
      );
    return {
      openKeys: r,
      selectedKeys: a,
      toPage: (e) => {
        o.name !== e && n.push({ name: e });
      },
    };
  },
});
const re = c.withScopeId("data-v-1659a694");
c.pushScopeId("data-v-1659a694");
const ae = { key: 0, class: "admin-title text-white ml-16 truncate" },
  ie = { key: 1, class: "text-12 truncate text-gray-400" },
  le = { class: "flex-1 overflow-y-auto overflow-x-hidden" },
  se = { class: "flex items-center" };
c.popScopeId();
const ce = re((e, t, o, n, r, a) => {
  const i = c.resolveComponent("a-menu-item"),
    l = c.resolveComponent("a-sub-menu"),
    s = c.resolveComponent("a-menu");
  return (
    c.openBlock(),
    c.createBlock(
      c.Fragment,
      null,
      [
        c.createVNode(
          "div",
          { class: ["py-6 flex items-center", [e.collapsed ? "px-24" : "px-16"]] },
          [
            c.createVNode("img", { src: e.logo, alt: "", class: "logo" }, null, 8, ["src"]),
            e.title || e.subTitle
              ? c.withDirectives(
                  (c.openBlock(),
                  c.createBlock(
                    "div",
                    ae,
                    [
                      e.title
                        ? (c.openBlock(), c.createBlock("p", { key: 0, class: ["truncate", [e.subTitle ? "text-14" : "text-16"]] }, c.toDisplayString(e.title), 3))
                        : c.createCommentVNode("", !0),
                      e.subTitle ? (c.openBlock(), c.createBlock("p", ie, c.toDisplayString(e.subTitle), 1)) : c.createCommentVNode("", !0),
                    ],
                    512
                  )),
                  [[c.vShow, !e.collapsed]]
                )
              : c.createCommentVNode("", !0),
          ],
          2
        ),
        c.createVNode("div", le, [
          c.createVNode(
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
              default: re(() => [
                (c.openBlock(!0),
                c.createBlock(
                  c.Fragment,
                  null,
                  c.renderList(
                    e.nav,
                    (t) => (
                      c.openBlock(),
                      c.createBlock(
                        c.Fragment,
                        { key: t.name },
                        [
                          t.children && t.children.length > 0 && !t.meta.hideMenu
                            ? (c.openBlock(),
                              c.createBlock(
                                l,
                                { key: t.name },
                                {
                                  title: re(() => [
                                    c.createVNode("span", se, [
                                      t.meta.icon ? (c.openBlock(), c.createBlock("i", { key: 0, class: [t.meta.icon, "anticon"] }, null, 2)) : c.createCommentVNode("", !0),
                                      c.createVNode("span", null, c.toDisplayString(t.meta.title), 1),
                                    ]),
                                  ]),
                                  default: re(() => [
                                    (c.openBlock(!0),
                                    c.createBlock(
                                      c.Fragment,
                                      null,
                                      c.renderList(
                                        t.children,
                                        (t) => (
                                          c.openBlock(),
                                          c.createBlock(
                                            c.Fragment,
                                            { key: t.name },
                                            [
                                              t.meta.hideMenu
                                                ? c.createCommentVNode("", !0)
                                                : (c.openBlock(),
                                                  c.createBlock(
                                                    i,
                                                    { key: t.name, class: "flex items-center", onClick: (o) => e.toPage(t.name) },
                                                    {
                                                      default: re(() => [
                                                        t.meta.icon ? (c.openBlock(), c.createBlock("i", { key: 0, class: [t.meta.icon, "anticon"] }, null, 2)) : c.createCommentVNode("", !0),
                                                        c.createVNode("span", null, c.toDisplayString(t.meta.title), 1),
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
                            ? c.createCommentVNode("", !0)
                            : (c.openBlock(),
                              c.createBlock(
                                i,
                                { key: t.name, class: "flex items-center", onClick: (o) => e.toPage(t.name) },
                                {
                                  default: re(() => [
                                    t.meta.icon ? (c.openBlock(), c.createBlock("i", { key: 0, class: [t.meta.icon, "anticon"] }, null, 2)) : c.createCommentVNode("", !0),
                                    c.createVNode("span", null, c.toDisplayString(t.meta.title), 1),
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
(ne.render = ce), (ne.__scopeId = "data-v-1659a694");
var de = c.defineComponent({
  name: g("Nav"),
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
  components: { NavMenu: ne },
});
function ue(e, t) {
  (function(e) {
    return "string" == typeof e && -1 !== e.indexOf(".") && 1 === parseFloat(e);
  })(e) && (e = "100%");
  var o = (function(e) {
    return "string" == typeof e && -1 !== e.indexOf("%");
  })(e);
  return (
    (e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    o && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6 ? 1 : (e = 360 === t ? (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)) : (e % t) / parseFloat(String(t)))
  );
}
function pe(e) {
  return Math.min(1, Math.max(0, e));
}
function fe(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function he(e) {
  return e <= 1 ? 100 * Number(e) + "%" : e;
}
function me(e) {
  return 1 === e.length ? "0" + e : String(e);
}
function ge(e, t, o) {
  (e = ue(e, 255)), (t = ue(t, 255)), (o = ue(o, 255));
  var n = Math.max(e, t, o),
    r = Math.min(e, t, o),
    a = 0,
    i = 0,
    l = (n + r) / 2;
  if (n === r) (i = 0), (a = 0);
  else {
    var s = n - r;
    switch (((i = l > 0.5 ? s / (2 - n - r) : s / (n + r)), n)) {
      case e:
        a = (t - o) / s + (t < o ? 6 : 0);
        break;
      case t:
        a = (o - e) / s + 2;
        break;
      case o:
        a = (e - t) / s + 4;
    }
    a /= 6;
  }
  return { h: a, s: i, l: l };
}
function be(e, t, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? e + 6 * o * (t - e) : o < 0.5 ? t : o < 2 / 3 ? e + (t - e) * (2 / 3 - o) * 6 : e;
}
function ve(e, t, o) {
  (e = ue(e, 255)), (t = ue(t, 255)), (o = ue(o, 255));
  var n = Math.max(e, t, o),
    r = Math.min(e, t, o),
    a = 0,
    i = n,
    l = n - r,
    s = 0 === n ? 0 : l / n;
  if (n === r) a = 0;
  else {
    switch (n) {
      case e:
        a = (t - o) / l + (t < o ? 6 : 0);
        break;
      case t:
        a = (o - e) / l + 2;
        break;
      case o:
        a = (e - t) / l + 4;
    }
    a /= 6;
  }
  return { h: a, s: s, v: i };
}
function ye(e, t, o, n) {
  var r = [me(Math.round(e).toString(16)), me(Math.round(t).toString(16)), me(Math.round(o).toString(16))];
  return n && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function we(e) {
  return Se(e) / 255;
}
function Se(e) {
  return parseInt(e, 16);
}
de.render = function(e, t, o, n, r, a) {
  const i = c.resolveComponent("NavMenu"),
    l = c.resolveComponent("a-layout-sider"),
    s = c.resolveComponent("a-drawer");
  return (
    c.openBlock(),
    c.createBlock(
      c.Fragment,
      null,
      [
        c.withDirectives(c.createVNode("div", { class: ["side-placeholder", { "transition-width": !e.isH5 }], style: { width: e.collWidth } }, null, 6), [[c.vShow, !e.isH5]]),
        c.withDirectives(
          c.createVNode(
            l,
            { class: "flex fixed top-0 left-0 flex-col h-screen overflow-hidden z-10", collapsible: "", collapsed: e.collapsed, trigger: null },
            {
              default: c.withCtx(() => [
                c.createVNode(i, { logo: e.logo, title: e.title, "sub-title": e.subTitle, nav: e.nav, collapsed: e.collapsed }, null, 8, ["logo", "title", "sub-title", "nav", "collapsed"]),
              ]),
              _: 1,
            },
            8,
            ["collapsed"]
          ),
          [[c.vShow, !e.isH5]]
        ),
        c.createVNode(
          s,
          { placement: "left", width: "200px", closable: !1, visible: !e.collapsed && e.isH5, bodyStyle: { padding: 0, height: "100%" }, onClose: t[1] || (t[1] = (t) => e.$emit("hideMenu")) },
          {
            default: c.withCtx(() => [
              c.createVNode(
                l,
                { class: "flex flex-col h-screen overflow-hidden", collapsible: "", collapsed: !1, trigger: null },
                {
                  default: c.withCtx(() => [c.createVNode(i, { logo: e.logo, title: e.title, "sub-title": e.subTitle, nav: e.nav, collapsed: !1 }, null, 8, ["logo", "title", "sub-title", "nav"])]),
                  _: 1,
                }
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
var ke = {
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
function Ce(e) {
  var t,
    o,
    n,
    r = { r: 0, g: 0, b: 0 },
    a = 1,
    i = null,
    l = null,
    s = null,
    c = !1,
    d = !1;
  return (
    "string" == typeof e &&
      (e = (function(e) {
        if (0 === (e = e.trim().toLowerCase()).length) return !1;
        var t = !1;
        if (ke[e]) (e = ke[e]), (t = !0);
        else if ("transparent" === e) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        var o = Ne.rgb.exec(e);
        if (o) return { r: o[1], g: o[2], b: o[3] };
        if ((o = Ne.rgba.exec(e))) return { r: o[1], g: o[2], b: o[3], a: o[4] };
        if ((o = Ne.hsl.exec(e))) return { h: o[1], s: o[2], l: o[3] };
        if ((o = Ne.hsla.exec(e))) return { h: o[1], s: o[2], l: o[3], a: o[4] };
        if ((o = Ne.hsv.exec(e))) return { h: o[1], s: o[2], v: o[3] };
        if ((o = Ne.hsva.exec(e))) return { h: o[1], s: o[2], v: o[3], a: o[4] };
        if ((o = Ne.hex8.exec(e))) return { r: Se(o[1]), g: Se(o[2]), b: Se(o[3]), a: we(o[4]), format: t ? "name" : "hex8" };
        if ((o = Ne.hex6.exec(e))) return { r: Se(o[1]), g: Se(o[2]), b: Se(o[3]), format: t ? "name" : "hex" };
        if ((o = Ne.hex4.exec(e))) return { r: Se(o[1] + o[1]), g: Se(o[2] + o[2]), b: Se(o[3] + o[3]), a: we(o[4] + o[4]), format: t ? "name" : "hex8" };
        if ((o = Ne.hex3.exec(e))) return { r: Se(o[1] + o[1]), g: Se(o[2] + o[2]), b: Se(o[3] + o[3]), format: t ? "name" : "hex" };
        return !1;
      })(e)),
    "object" == typeof e &&
      (Be(e.r) && Be(e.g) && Be(e.b)
        ? ((t = e.r), (o = e.g), (n = e.b), (r = { r: 255 * ue(t, 255), g: 255 * ue(o, 255), b: 255 * ue(n, 255) }), (c = !0), (d = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
        : Be(e.h) && Be(e.s) && Be(e.v)
        ? ((i = he(e.s)),
          (l = he(e.v)),
          (r = (function(e, t, o) {
            (e = 6 * ue(e, 360)), (t = ue(t, 100)), (o = ue(o, 100));
            var n = Math.floor(e),
              r = e - n,
              a = o * (1 - t),
              i = o * (1 - r * t),
              l = o * (1 - (1 - r) * t),
              s = n % 6;
            return { r: 255 * [o, i, a, a, l, o][s], g: 255 * [l, o, o, i, a, a][s], b: 255 * [a, a, l, o, o, i][s] };
          })(e.h, i, l)),
          (c = !0),
          (d = "hsv"))
        : Be(e.h) &&
          Be(e.s) &&
          Be(e.l) &&
          ((i = he(e.s)),
          (s = he(e.l)),
          (r = (function(e, t, o) {
            var n, r, a;
            if (((e = ue(e, 360)), (t = ue(t, 100)), (o = ue(o, 100)), 0 === t)) (r = o), (a = o), (n = o);
            else {
              var i = o < 0.5 ? o * (1 + t) : o + t - o * t,
                l = 2 * o - i;
              (n = be(l, i, e + 1 / 3)), (r = be(l, i, e)), (a = be(l, i, e - 1 / 3));
            }
            return { r: 255 * n, g: 255 * r, b: 255 * a };
          })(e.h, i, s)),
          (c = !0),
          (d = "hsl")),
      Object.prototype.hasOwnProperty.call(e, "a") && (a = e.a)),
    (a = fe(a)),
    { ok: c, format: e.format || d, r: Math.min(255, Math.max(r.r, 0)), g: Math.min(255, Math.max(r.g, 0)), b: Math.min(255, Math.max(r.b, 0)), a: a }
  );
}
var xe = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
  Pe = "[\\s|\\(]+(" + xe + ")[,|\\s]+(" + xe + ")[,|\\s]+(" + xe + ")\\s*\\)?",
  Oe = "[\\s|\\(]+(" + xe + ")[,|\\s]+(" + xe + ")[,|\\s]+(" + xe + ")[,|\\s]+(" + xe + ")\\s*\\)?",
  Ne = {
    CSS_UNIT: new RegExp(xe),
    rgb: new RegExp("rgb" + Pe),
    rgba: new RegExp("rgba" + Oe),
    hsl: new RegExp("hsl" + Pe),
    hsla: new RegExp("hsla" + Oe),
    hsv: new RegExp("hsv" + Pe),
    hsva: new RegExp("hsva" + Oe),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
function Be(e) {
  return Boolean(Ne.CSS_UNIT.exec(String(e)));
}
var Te = (function() {
    function e(t, o) {
      var n;
      if ((void 0 === t && (t = ""), void 0 === o && (o = {}), t instanceof e)) return t;
      "number" == typeof t &&
        (t = (function(e) {
          return { r: e >> 16, g: (65280 & e) >> 8, b: 255 & e };
        })(t)),
        (this.originalInput = t);
      var r = Ce(t);
      (this.originalInput = t),
        (this.r = r.r),
        (this.g = r.g),
        (this.b = r.b),
        (this.a = r.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = null !== (n = o.format) && void 0 !== n ? n : r.format),
        (this.gradientType = o.gradientType),
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
          o = e.g / 255,
          n = e.b / 255;
        return (
          0.2126 * (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
          0.7152 * (o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)) +
          0.0722 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4))
        );
      }),
      (e.prototype.getAlpha = function() {
        return this.a;
      }),
      (e.prototype.setAlpha = function(e) {
        return (this.a = fe(e)), (this.roundA = Math.round(100 * this.a) / 100), this;
      }),
      (e.prototype.toHsv = function() {
        var e = ve(this.r, this.g, this.b);
        return { h: 360 * e.h, s: e.s, v: e.v, a: this.a };
      }),
      (e.prototype.toHsvString = function() {
        var e = ve(this.r, this.g, this.b),
          t = Math.round(360 * e.h),
          o = Math.round(100 * e.s),
          n = Math.round(100 * e.v);
        return 1 === this.a ? "hsv(" + t + ", " + o + "%, " + n + "%)" : "hsva(" + t + ", " + o + "%, " + n + "%, " + this.roundA + ")";
      }),
      (e.prototype.toHsl = function() {
        var e = ge(this.r, this.g, this.b);
        return { h: 360 * e.h, s: e.s, l: e.l, a: this.a };
      }),
      (e.prototype.toHslString = function() {
        var e = ge(this.r, this.g, this.b),
          t = Math.round(360 * e.h),
          o = Math.round(100 * e.s),
          n = Math.round(100 * e.l);
        return 1 === this.a ? "hsl(" + t + ", " + o + "%, " + n + "%)" : "hsla(" + t + ", " + o + "%, " + n + "%, " + this.roundA + ")";
      }),
      (e.prototype.toHex = function(e) {
        return void 0 === e && (e = !1), ye(this.r, this.g, this.b, e);
      }),
      (e.prototype.toHexString = function(e) {
        return void 0 === e && (e = !1), "#" + this.toHex(e);
      }),
      (e.prototype.toHex8 = function(e) {
        return (
          void 0 === e && (e = !1),
          (function(e, t, o, n, r) {
            var a,
              i = [me(Math.round(e).toString(16)), me(Math.round(t).toString(16)), me(Math.round(o).toString(16)), me(((a = n), Math.round(255 * parseFloat(a)).toString(16)))];
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
          o = Math.round(this.b);
        return 1 === this.a ? "rgb(" + e + ", " + t + ", " + o + ")" : "rgba(" + e + ", " + t + ", " + o + ", " + this.roundA + ")";
      }),
      (e.prototype.toPercentageRgb = function() {
        var e = function(e) {
          return Math.round(100 * ue(e, 255)) + "%";
        };
        return { r: e(this.r), g: e(this.g), b: e(this.b), a: this.a };
      }),
      (e.prototype.toPercentageRgbString = function() {
        var e = function(e) {
          return Math.round(100 * ue(e, 255));
        };
        return 1 === this.a ? "rgb(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%)" : "rgba(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%, " + this.roundA + ")";
      }),
      (e.prototype.toName = function() {
        if (0 === this.a) return "transparent";
        if (this.a < 1) return !1;
        for (var e = "#" + ye(this.r, this.g, this.b, !1), t = 0, o = Object.entries(ke); t < o.length; t++) {
          var n = o[t],
            r = n[0];
          if (e === n[1]) return r;
        }
        return !1;
      }),
      (e.prototype.toString = function(e) {
        var t = Boolean(e);
        e = null != e ? e : this.format;
        var o = !1,
          n = this.a < 1 && this.a >= 0;
        return t || !n || (!e.startsWith("hex") && "name" !== e)
          ? ("rgb" === e && (o = this.toRgbString()),
            "prgb" === e && (o = this.toPercentageRgbString()),
            ("hex" !== e && "hex6" !== e) || (o = this.toHexString()),
            "hex3" === e && (o = this.toHexString(!0)),
            "hex4" === e && (o = this.toHex8String(!0)),
            "hex8" === e && (o = this.toHex8String()),
            "name" === e && (o = this.toName()),
            "hsl" === e && (o = this.toHslString()),
            "hsv" === e && (o = this.toHsvString()),
            o || this.toHexString())
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
        var o = this.toHsl();
        return (o.l += t / 100), (o.l = pe(o.l)), new e(o);
      }),
      (e.prototype.brighten = function(t) {
        void 0 === t && (t = 10);
        var o = this.toRgb();
        return (
          (o.r = Math.max(0, Math.min(255, o.r - Math.round((-t / 100) * 255)))),
          (o.g = Math.max(0, Math.min(255, o.g - Math.round((-t / 100) * 255)))),
          (o.b = Math.max(0, Math.min(255, o.b - Math.round((-t / 100) * 255)))),
          new e(o)
        );
      }),
      (e.prototype.darken = function(t) {
        void 0 === t && (t = 10);
        var o = this.toHsl();
        return (o.l -= t / 100), (o.l = pe(o.l)), new e(o);
      }),
      (e.prototype.tint = function(e) {
        return void 0 === e && (e = 10), this.mix("white", e);
      }),
      (e.prototype.shade = function(e) {
        return void 0 === e && (e = 10), this.mix("black", e);
      }),
      (e.prototype.desaturate = function(t) {
        void 0 === t && (t = 10);
        var o = this.toHsl();
        return (o.s -= t / 100), (o.s = pe(o.s)), new e(o);
      }),
      (e.prototype.saturate = function(t) {
        void 0 === t && (t = 10);
        var o = this.toHsl();
        return (o.s += t / 100), (o.s = pe(o.s)), new e(o);
      }),
      (e.prototype.greyscale = function() {
        return this.desaturate(100);
      }),
      (e.prototype.spin = function(t) {
        var o = this.toHsl(),
          n = (o.h + t) % 360;
        return (o.h = n < 0 ? 360 + n : n), new e(o);
      }),
      (e.prototype.mix = function(t, o) {
        void 0 === o && (o = 50);
        var n = this.toRgb(),
          r = new e(t).toRgb(),
          a = o / 100;
        return new e({ r: (r.r - n.r) * a + n.r, g: (r.g - n.g) * a + n.g, b: (r.b - n.b) * a + n.b, a: (r.a - n.a) * a + n.a });
      }),
      (e.prototype.analogous = function(t, o) {
        void 0 === t && (t = 6), void 0 === o && (o = 30);
        var n = this.toHsl(),
          r = 360 / o,
          a = [this];
        for (n.h = (n.h - ((r * t) >> 1) + 720) % 360; --t; ) (n.h = (n.h + r) % 360), a.push(new e(n));
        return a;
      }),
      (e.prototype.complement = function() {
        var t = this.toHsl();
        return (t.h = (t.h + 180) % 360), new e(t);
      }),
      (e.prototype.monochromatic = function(t) {
        void 0 === t && (t = 6);
        for (var o = this.toHsv(), n = o.h, r = o.s, a = o.v, i = [], l = 1 / t; t--; ) i.push(new e({ h: n, s: r, v: a })), (a = (a + l) % 1);
        return i;
      }),
      (e.prototype.splitcomplement = function() {
        var t = this.toHsl(),
          o = t.h;
        return [this, new e({ h: (o + 72) % 360, s: t.s, l: t.l }), new e({ h: (o + 216) % 360, s: t.s, l: t.l })];
      }),
      (e.prototype.onBackground = function(t) {
        var o = this.toRgb(),
          n = new e(t).toRgb();
        return new e({ r: n.r + (o.r - n.r) * o.a, g: n.g + (o.g - n.g) * o.a, b: n.b + (o.b - n.b) * o.a });
      }),
      (e.prototype.triad = function() {
        return this.polyad(3);
      }),
      (e.prototype.tetrad = function() {
        return this.polyad(4);
      }),
      (e.prototype.polyad = function(t) {
        for (var o = this.toHsl(), n = o.h, r = [this], a = 360 / t, i = 1; i < t; i++) r.push(new e({ h: (n + i * a) % 360, s: o.s, l: o.l }));
        return r;
      }),
      (e.prototype.equals = function(t) {
        return this.toRgbString() === new e(t).toRgbString();
      }),
      e
    );
  })(),
  Ae = [
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
function je(e, t, o) {
  var n;
  return (
    (n = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? (o ? Math.round(e.h) - 2 * t : Math.round(e.h) + 2 * t) : o ? Math.round(e.h) + 2 * t : Math.round(e.h) - 2 * t) < 0
      ? (n += 360)
      : n >= 360 && (n -= 360),
    n
  );
}
function Ve(e, t, o) {
  return 0 === e.h && 0 === e.s
    ? e.s
    : ((n = o ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t) > 1 && (n = 1), o && 5 === t && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2)));
  var n;
}
function Me(e, t, o) {
  var n;
  return (n = o ? e.v + 0.05 * t : e.v - 0.15 * t) > 1 && (n = 1), Number(n.toFixed(2));
}
function Ie(e) {
  for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = [], n = new Te(e), r = 5; r > 0; r -= 1) {
    var a = n.toHsv(),
      i = new Te({ h: je(a, r, !0), s: Ve(a, r, !0), v: Me(a, r, !0) }).toHexString();
    o.push(i);
  }
  o.push(n.toHexString());
  for (var l = 1; l <= 4; l += 1) {
    var s = n.toHsv(),
      c = new Te({ h: je(s, l), s: Ve(s, l), v: Me(s, l) }).toHexString();
    o.push(c);
  }
  return "dark" === t.theme
    ? Ae.map(function(e) {
        var n = e.index,
          r = e.opacity;
        return new Te(t.backgroundColor || "#141414").mix(o[n], 100 * r).toHexString();
      })
    : o;
}
var Ee = {
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
  De = {},
  _e = {};
Object.keys(Ee).forEach(function(e) {
  (De[e] = Ie(Ee[e])), (De[e].primary = De[e][5]), (_e[e] = Ie(Ee[e], { theme: "dark", backgroundColor: "#141414" })), (_e[e].primary = _e[e][5]);
}),
  De.red,
  De.volcano,
  De.gold,
  De.orange,
  De.yellow,
  De.lime,
  De.green,
  De.cyan,
  De.blue,
  De.geekblue,
  De.purple,
  De.magenta,
  De.grey;
var Re = [],
  Le = [];
function $e(e, t) {
  if (((t = t || {}), void 0 === e)) throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");
  var o,
    n = !0 === t.prepend ? "prepend" : "append",
    r = void 0 !== t.container ? t.container : document.querySelector("head"),
    a = Re.indexOf(r);
  return (
    -1 === a && ((a = Re.push(r) - 1), (Le[a] = {})),
    void 0 !== Le[a] && void 0 !== Le[a][n]
      ? (o = Le[a][n])
      : ((o = Le[a][n] = (function() {
          var e = document.createElement("style");
          return e.setAttribute("type", "text/css"), e;
        })()),
        "prepend" === n ? r.insertBefore(o, r.childNodes[0]) : r.appendChild(o)),
    65279 === e.charCodeAt(0) && (e = e.substr(1, e.length)),
    o.styleSheet ? (o.styleSheet.cssText += e) : (o.textContent += e),
    o
  );
}
function He(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(o);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function(e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable;
        })
      )),
      n.forEach(function(t) {
        ze(e, t, o[t]);
      });
  }
  return e;
}
function ze(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
}
function Fe(e) {
  return "object" == typeof e && "string" == typeof e.name && "string" == typeof e.theme && ("object" == typeof e.icon || "function" == typeof e.icon);
}
function qe(e, t, o) {
  return o
    ? c.h(
        e.tag,
        He({ key: t }, o, e.attrs),
        (e.children || []).map(function(o, n) {
          return qe(
            o,
            ""
              .concat(t, "-")
              .concat(e.tag, "-")
              .concat(n)
          );
        })
      )
    : c.h(
        e.tag,
        He({ key: t }, e.attrs),
        (e.children || []).map(function(o, n) {
          return qe(
            o,
            ""
              .concat(t, "-")
              .concat(e.tag, "-")
              .concat(n)
          );
        })
      );
}
function Ue(e) {
  return Ie(e)[0];
}
function We(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
var Ke =
    "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",
  Ye = !1;
function Ge(e, t) {
  if (null == e) return {};
  var o,
    n,
    r = (function(e, t) {
      if (null == e) return {};
      var o,
        n,
        r = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) (o = a[n]), t.indexOf(o) >= 0 || (r[o] = e[o]);
      return r;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) (o = a[n]), t.indexOf(o) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]));
  }
  return r;
}
function Je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(o);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function(e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable;
        })
      )),
      n.forEach(function(t) {
        Qe(e, t, o[t]);
      });
  }
  return e;
}
function Qe(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
}
var Ze = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
var Xe = function(e, t) {
  var o = Je({}, e, t.attrs),
    n = o.icon,
    r = o.primaryColor,
    a = o.secondaryColor,
    i = Ge(o, ["icon", "primaryColor", "secondaryColor"]),
    l = Ze;
  if (
    (r && (l = { primaryColor: r, secondaryColor: a || Ue(r) }),
    (function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ke;
      c.nextTick(function() {
        Ye || ("undefined" != typeof window && window.document && window.document.documentElement && $e(e, { prepend: !0 }), (Ye = !0));
      });
    })(),
    Fe(n),
    !Fe(n))
  )
    return null;
  var s = n;
  return (
    s && "function" == typeof s.icon && (s = Je({}, s, { icon: s.icon(l.primaryColor, l.secondaryColor) })),
    qe(s.icon, "svg-".concat(s.name), Je({}, i, { "data-icon": s.name, width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }))
  );
};
function et(e, t) {
  return (
    (function(e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function(e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var o = [],
        n = !0,
        r = !1,
        a = void 0;
      try {
        for (var i, l = e[Symbol.iterator](); !(n = (i = l.next()).done) && (o.push(i.value), !t || o.length !== t); n = !0);
      } catch (s) {
        (r = !0), (a = s);
      } finally {
        try {
          n || null == l.return || l.return();
        } finally {
          if (r) throw a;
        }
      }
      return o;
    })(e, t) ||
    (function(e, t) {
      if (!e) return;
      if ("string" == typeof e) return tt(e, t);
      var o = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === o && e.constructor && (o = e.constructor.name);
      if ("Map" === o || "Set" === o) return Array.from(e);
      if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return tt(e, t);
    })(e, t) ||
    (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })()
  );
}
function tt(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
  return n;
}
function ot(e) {
  var t = et(We(e), 2),
    o = t[0],
    n = t[1];
  return Xe.setTwoToneColors({ primaryColor: o, secondaryColor: n });
}
function nt(e, t) {
  return (
    (function(e) {
      if (Array.isArray(e)) return e;
    })(e) ||
    (function(e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var o = [],
        n = !0,
        r = !1,
        a = void 0;
      try {
        for (var i, l = e[Symbol.iterator](); !(n = (i = l.next()).done) && (o.push(i.value), !t || o.length !== t); n = !0);
      } catch (s) {
        (r = !0), (a = s);
      } finally {
        try {
          n || null == l.return || l.return();
        } finally {
          if (r) throw a;
        }
      }
      return o;
    })(e, t) ||
    (function(e, t) {
      if (!e) return;
      if ("string" == typeof e) return rt(e, t);
      var o = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === o && e.constructor && (o = e.constructor.name);
      if ("Map" === o || "Set" === o) return Array.from(e);
      if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return rt(e, t);
    })(e, t) ||
    (function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })()
  );
}
function rt(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
  return n;
}
function at(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
}
function it(e, t) {
  if (null == e) return {};
  var o,
    n,
    r = (function(e, t) {
      if (null == e) return {};
      var o,
        n,
        r = {},
        a = Object.keys(e);
      for (n = 0; n < a.length; n++) (o = a[n]), t.indexOf(o) >= 0 || (r[o] = e[o]);
      return r;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) (o = a[n]), t.indexOf(o) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]));
  }
  return r;
}
(Xe.props = { icon: Object, primaryColor: String, secondaryColor: String, focusable: String }),
  (Xe.inheritAttrs = !1),
  (Xe.displayName = "IconBase"),
  (Xe.getTwoToneColors = function() {
    return Je({}, Ze);
  }),
  (Xe.setTwoToneColors = function(e) {
    var t = e.primaryColor,
      o = e.secondaryColor;
    (Ze.primaryColor = t), (Ze.secondaryColor = o || Ue(t)), (Ze.calculated = !!o);
  }),
  ot("#1890ff");
var lt = function(e, t) {
  var o,
    n = (function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? Object(arguments[t]) : {},
          n = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols &&
          (n = n.concat(
            Object.getOwnPropertySymbols(o).filter(function(e) {
              return Object.getOwnPropertyDescriptor(o, e).enumerable;
            })
          )),
          n.forEach(function(t) {
            at(e, t, o[t]);
          });
      }
      return e;
    })({}, e, t.attrs),
    r = n.class,
    a = n.icon,
    i = n.spin,
    l = n.rotate,
    s = n.tabindex,
    c = n.twoToneColor,
    d = n.onClick,
    u = it(n, ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"]),
    p = (at((o = { anticon: !0 }), "anticon-".concat(a.name), Boolean(a.name)), at(o, r, r), o),
    f = "" === i || i || "loading" === a.name ? "anticon-spin" : "",
    h = s;
  void 0 === h && d && ((h = -1), (u.tabindex = h));
  var g = l ? { msTransform: "rotate(".concat(l, "deg)"), transform: "rotate(".concat(l, "deg)") } : void 0,
    b = nt(We(c), 2),
    v = b[0],
    y = b[1];
  return m.createVNode("span", m.mergeProps(u, { role: "img", "aria-label": a.name, onClick: d, class: p }), [
    m.createVNode(Xe, { class: f, icon: a, primaryColor: v, secondaryColor: y, style: g }, null),
  ]);
};
(lt.props = { spin: Boolean, rotate: Number, icon: Object, twoToneColor: String }),
  (lt.displayName = "AntdIcon"),
  (lt.inheritAttrs = !1),
  (lt.getTwoToneColor = function() {
    var e = Xe.getTwoToneColors();
    return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
  }),
  (lt.setTwoToneColor = ot);
var st = {
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
function ct(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
}
var dt = function(e, t) {
  var o = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          ct(e, t, o[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return m.createVNode(lt, m.mergeProps(o, { icon: st }), null);
};
(dt.displayName = "CloseOutlined"), (dt.inheritAttrs = !1);
var ut = {
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
function pt(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
}
var ft = function(e, t) {
  var o = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          pt(e, t, o[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return m.createVNode(lt, m.mergeProps(o, { icon: ut }), null);
};
(ft.displayName = "CompassOutlined"), (ft.inheritAttrs = !1);
var ht = {
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
function mt(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
}
var gt = function(e, t) {
  var o = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          mt(e, t, o[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return m.createVNode(lt, m.mergeProps(o, { icon: ht }), null);
};
(gt.displayName = "ExclamationCircleOutlined"), (gt.inheritAttrs = !1);
var bt = {
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
function vt(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
}
var yt = function(e, t) {
  var o = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          vt(e, t, o[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return m.createVNode(lt, m.mergeProps(o, { icon: bt }), null);
};
(yt.displayName = "LogoutOutlined"), (yt.inheritAttrs = !1);
var wt = {
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
function St(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
}
var kt = function(e, t) {
  var o = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          St(e, t, o[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return m.createVNode(lt, m.mergeProps(o, { icon: wt }), null);
};
(kt.displayName = "MenuFoldOutlined"), (kt.inheritAttrs = !1);
var Ct = {
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
function xt(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
}
var Pt = function(e, t) {
  var o = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          xt(e, t, o[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return m.createVNode(lt, m.mergeProps(o, { icon: Ct }), null);
};
(Pt.displayName = "MenuUnfoldOutlined"), (Pt.inheritAttrs = !1);
var Ot = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [{ tag: "path", attrs: { d: "M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z" } }],
  },
  name: "more",
  theme: "outlined",
};
function Nt(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
}
var Bt = function(e, t) {
  var o = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          Nt(e, t, o[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return m.createVNode(lt, m.mergeProps(o, { icon: Ot }), null);
};
(Bt.displayName = "MoreOutlined"), (Bt.inheritAttrs = !1);
var Tt = {
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
function At(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
}
var jt = function(e, t) {
  var o = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          At(e, t, o[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return m.createVNode(lt, m.mergeProps(o, { icon: Tt }), null);
};
(jt.displayName = "ReloadOutlined"), (jt.inheritAttrs = !1);
var Vt = {
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
function Mt(e, t, o) {
  return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
}
var It = function(e, t) {
  var o = (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? Object(arguments[t]) : {},
        n = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(o).filter(function(e) {
            return Object.getOwnPropertyDescriptor(o, e).enumerable;
          })
        )),
        n.forEach(function(t) {
          Mt(e, t, o[t]);
        });
    }
    return e;
  })({}, e, t.attrs);
  return m.createVNode(lt, m.mergeProps(o, { icon: Vt }), null);
};
(It.displayName = "UnlockOutlined"), (It.inheritAttrs = !1);
var Et = c.defineComponent({
  name: g("Header"),
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
  components: { MenuFoldOutlined: kt, MenuUnfoldOutlined: Pt },
});
const Dt = c.withScopeId("data-v-8fd33262");
c.pushScopeId("data-v-8fd33262");
const _t = c.createVNode("div", { class: "flex-1" }, null, -1);
c.popScopeId();
const Rt = Dt((e, t, o, n, r, a) => {
  var i, l;
  const s = c.resolveComponent("MenuFoldOutlined"),
    d = c.resolveComponent("MenuUnfoldOutlined"),
    u = c.resolveComponent("a-avatar");
  return (
    c.openBlock(),
    c.createBlock(
      c.Fragment,
      null,
      [
        c.withDirectives(c.createVNode(s, { class: "text-18", onClick: e.colToggle }, null, 8, ["onClick"]), [[c.vShow, !e.collapsed]]),
        c.withDirectives(c.createVNode(d, { class: "text-18", onClick: e.colToggle }, null, 8, ["onClick"]), [[c.vShow, e.collapsed]]),
        _t,
        c.createVNode("span", { class: "dropdown-trigger px-8 cursor-pointer easi-hover-block", onClick: t[1] || (t[1] = (...t) => e.handleShowSetting && e.handleShowSetting(...t)) }, [
          (null == (i = e.userInfo)
          ? void 0
          : i.avatar)
            ? (c.openBlock(),
              c.createBlock(u, { key: 0, class: "mr-8", shape: "circle", size: "default", src: e.userInfo.avatar, style: { backgroundColor: "#ffbf00", verticalAlign: "middle" } }, null, 8, ["src"]))
            : c.createCommentVNode("", !0),
          c.createVNode("span", null, c.toDisplayString((null == (l = e.userInfo) ? void 0 : l.name) || "用户名"), 1),
        ]),
      ],
      64
    )
  );
});
(Et.render = Rt), (Et.__scopeId = "data-v-8fd33262");
var Lt = c.defineComponent({
  name: g("Setting"),
  emits: ["update:visible"],
  props: {
    userInfo: { type: Object, default: () => ({}) },
    showTabSetting: { type: Boolean, default: !0 },
    onLogout: { type: Function, default: void 0 },
    toDashboard: { type: Function, default: void 0 },
    editPassword: { type: Function, default: void 0 },
  },
  setup(e) {
    const t = c.inject("globalProvider", l({}, w)),
      o = c.inject("globalEASILocale", { message: {} });
    return {
      globalProvider: t,
      setSetting: (e, o) => {
        (t[e] = o), S(t);
      },
      handleLogout() {
        u.Modal.confirm({
          title: o.message.logoutTitle,
          icon: c.createVNode(gt),
          content: o.message.logoutMessage,
          centered: !0,
          okText: o.message.confirm,
          cancelText: o.message.cancel,
          onOk: async () => !(null == e ? void 0 : e.onLogout) || e.onLogout(),
        });
      },
      handleToDashBoard() {
        (null == e ? void 0 : e.toDashboard) && e.toDashboard();
      },
      handleEditPassword() {
        (null == e ? void 0 : e.editPassword) && e.editPassword();
      },
      globalEASILocale: o,
    };
  },
  components: { LogoutOutlined: yt, ExclamationCircleOutlined: gt, CompassOutlined: ft, UnlockOutlined: It },
});
const $t = c.withScopeId("data-v-0ac33eb4");
c.pushScopeId("data-v-0ac33eb4");
const Ht = { class: "flex items-center" },
  zt = { class: "flex items-center mb-24" },
  Ft = { class: "flex-1" },
  qt = { key: 0, class: "flex items-center mb-24" },
  Ut = { class: "flex-1" },
  Wt = { key: 1, class: "flex items-center mb-24" },
  Kt = { class: "flex-1" };
c.popScopeId();
const Yt = $t((e, t, o, n, r, a) => {
  const i = c.resolveComponent("a-avatar"),
    l = c.resolveComponent("a-typography-text"),
    s = c.resolveComponent("a-switch"),
    d = c.resolveComponent("a-divider"),
    u = c.resolveComponent("CompassOutlined"),
    p = c.resolveComponent("UnlockOutlined"),
    f = c.resolveComponent("LogoutOutlined"),
    h = c.resolveComponent("a-drawer");
  return (
    c.openBlock(),
    c.createBlock(
      h,
      c.mergeProps({ placement: "right", width: "320px" }, e.$attrs, { onClose: t[7] || (t[7] = (t) => e.$emit("update:visible", !1)) }),
      {
        title: $t(() => {
          var t, o;
          return [
            c.createVNode("header", Ht, [
              (null == (t = e.userInfo)
              ? void 0
              : t.avatar)
                ? (c.openBlock(),
                  c.createBlock(i, { key: 0, shape: "circle", size: "default", src: e.userInfo.avatar, style: { backgroundColor: "#ffbf00", verticalAlign: "middle", marginRight: "8px" } }, null, 8, [
                    "src",
                  ]))
                : c.createCommentVNode("", !0),
              c.createTextVNode(" " + c.toDisplayString((null == (o = e.userInfo) ? void 0 : o.name) || "用户名"), 1),
            ]),
          ];
        }),
        default: $t(() => [
          c.renderSlot(e.$slots, "action-render", {}, void 0, !0),
          c.createVNode(l, { strong: "", class: "block mb-32" }, { default: $t(() => [c.createTextVNode(c.toDisplayString(e.globalEASILocale.message.styleSetting), 1)]), _: 1 }),
          c.createVNode("div", zt, [
            c.createVNode("span", Ft, [c.createVNode(l, null, { default: $t(() => [c.createTextVNode(c.toDisplayString(e.globalEASILocale.message.darkSetting), 1)]), _: 1 })]),
            c.createVNode("div", null, [c.createVNode(s, { checked: e.globalProvider.mode, onChange: t[1] || (t[1] = (t) => e.setSetting("mode", t)) }, null, 8, ["checked"])]),
          ]),
          e.showTabSetting
            ? (c.openBlock(),
              c.createBlock("div", qt, [
                c.createVNode("span", Ut, [c.createVNode(l, null, { default: $t(() => [c.createTextVNode(c.toDisplayString(e.globalEASILocale.message.showTabSetting), 1)]), _: 1 })]),
                c.createVNode("div", null, [c.createVNode(s, { checked: e.globalProvider.showTab, onChange: t[2] || (t[2] = (t) => e.setSetting("showTab", t)) }, null, 8, ["checked"])]),
              ]))
            : c.createCommentVNode("", !0),
          e.showTabSetting
            ? (c.openBlock(),
              c.createBlock("div", Wt, [
                c.createVNode("span", Kt, [c.createVNode(l, null, { default: $t(() => [c.createTextVNode(c.toDisplayString(e.globalEASILocale.message.fixedTabSetting), 1)]), _: 1 })]),
                c.createVNode("div", null, [c.createVNode(s, { checked: e.globalProvider.fixedTab, onChange: t[3] || (t[3] = (t) => e.setSetting("fixedTab", t)) }, null, 8, ["checked"])]),
              ]))
            : c.createCommentVNode("", !0),
          c.createVNode(d),
          e.onLogout || e.toDashboard || e.editPassword
            ? (c.openBlock(),
              c.createBlock(l, { key: 2, strong: "", class: "block margin-bottom" }, { default: $t(() => [c.createTextVNode(c.toDisplayString(e.globalEASILocale.message.more), 1)]), _: 1 }))
            : c.createCommentVNode("", !0),
          e.toDashboard
            ? (c.openBlock(),
              c.createBlock(
                "div",
                { key: 3, class: "more-item flex items-center cursor-pointer easi-hover-block", onClick: t[4] || (t[4] = (...t) => e.handleToDashBoard && e.handleToDashBoard(...t)) },
                [
                  c.createVNode(u, { class: "mr-8 text-14" }),
                  c.createVNode(l, null, { default: $t(() => [c.createTextVNode(c.toDisplayString(e.globalEASILocale.message.backToDashBoard), 1)]), _: 1 }),
                ]
              ))
            : c.createCommentVNode("", !0),
          e.editPassword
            ? (c.openBlock(),
              c.createBlock(
                "div",
                { key: 4, class: "more-item flex items-center cursor-pointer easi-hover-block", onClick: t[5] || (t[5] = (...t) => e.handleEditPassword && e.handleEditPassword(...t)) },
                [c.createVNode(p, { class: "mr-8 text-14" }), c.createVNode(l, null, { default: $t(() => [c.createTextVNode(c.toDisplayString(e.globalEASILocale.message.editPassword), 1)]), _: 1 })]
              ))
            : c.createCommentVNode("", !0),
          e.onLogout
            ? (c.openBlock(),
              c.createBlock(
                "div",
                { key: 5, class: "more-item flex items-center cursor-pointer text-red-400 easi-hover-block", onClick: t[6] || (t[6] = (...t) => e.handleLogout && e.handleLogout(...t)) },
                [
                  c.createVNode(f, { class: "mr-8 text-14" }),
                  c.createVNode(l, { type: "danger" }, { default: $t(() => [c.createTextVNode(c.toDisplayString(e.globalEASILocale.message.logout), 1)]), _: 1 }),
                ]
              ))
            : c.createCommentVNode("", !0),
        ]),
        _: 3,
      },
      16
    )
  );
});
(Lt.render = Yt), (Lt.__scopeId = "data-v-0ac33eb4");
var Gt = c.defineComponent({
  name: g("Tab"),
  emits: ["reloadPage"],
  setup(e, { emit: t }) {
    const o = d.useRoute(),
      n = d.useRouter(),
      r = c.inject("globalProvider", l({}, w)),
      a = c.ref(""),
      i = c.ref([]),
      s = () => {
        if (((a.value = o.fullPath), "Index" !== o.name && (0 === i.value.length || !i.value.some((e) => e.fullPath === o.fullPath)))) {
          const e = o.meta;
          i.value.push({ title: o.query.title || o.meta.title, fullPath: o.fullPath, name: o.name, cached: !0 === e.cached || void 0 === e.cached });
        }
      };
    s(),
      c.watch(
        () => o.fullPath,
        () => {
          s();
        }
      );
    const u = () => {
      t("reloadPage");
    };
    return {
      activeKey: a,
      panes: i,
      toPage: (e) => {
        e !== a.value && n.push(e);
      },
      reloadPage: u,
      removeTab: (e) => {
        const { fullPath: t, name: o, cached: l } = i.value[e];
        i.value.splice(e, 1), l && (r.cachedPage = r.cachedPage.filter((e) => e !== o)), t === a.value && ((a.value = i.value[i.value.length - 1].fullPath), n.push(a.value));
      },
      action({ key: e }) {
        switch (e) {
          case "closeAll":
            (i.value = i.value.filter((e) => e.fullPath === a.value)), (r.cachedPage = i.value[0].cached ? [i.value[0].name] : []);
            break;
          case "refresh":
            u();
        }
      },
      getEASIText: x,
    };
  },
  components: { MoreOutlined: Bt, ReloadOutlined: jt, CloseOutlined: dt },
});
const Jt = c.withScopeId("data-v-1b967ae2");
c.pushScopeId("data-v-1b967ae2");
const Qt = { class: "flex items-center" };
c.popScopeId();
const Zt = Jt((e, t, o, n, r, a) => {
  const i = c.resolveComponent("ReloadOutlined"),
    l = c.resolveComponent("CloseOutlined"),
    s = c.resolveComponent("a-tab-pane"),
    d = c.resolveComponent("MoreOutlined"),
    u = c.resolveComponent("a-menu-item"),
    p = c.resolveComponent("a-menu"),
    f = c.resolveComponent("a-dropdown"),
    h = c.resolveComponent("a-tabs");
  return (
    c.openBlock(),
    c.createBlock(
      h,
      { activeKey: e.activeKey, tabBarStyle: { paddingLeft: "16px" }, "hide-add": "", onTabClick: e.toPage, type: "editable-card", class: "page-tab" },
      {
        tabBarExtraContent: Jt(() => [
          c.createVNode(
            f,
            { onClick: e.action },
            {
              overlay: Jt(() => [
                c.createVNode(
                  p,
                  { onClick: e.action },
                  {
                    default: Jt(() => [
                      c.createVNode(u, { key: "closeAll" }, { default: Jt(() => [c.createTextVNode(c.toDisplayString(e.getEASIText("closeOther")), 1)]), _: 1 }),
                      c.createVNode(u, { key: "refresh" }, { default: Jt(() => [c.createTextVNode(c.toDisplayString(e.getEASIText("refreshPage")), 1)]), _: 1 }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["onClick"]
                ),
              ]),
              default: Jt(() => [
                c.createVNode("a", { class: "ant-dropdown-link p-12 mr-8", onClick: t[1] || (t[1] = c.withModifiers(() => {}, ["prevent"])) }, [c.createVNode(d, { class: "text-16 leading-0" })]),
              ]),
              _: 1,
            },
            8,
            ["onClick"]
          ),
        ]),
        default: Jt(() => [
          (c.openBlock(!0),
          c.createBlock(
            c.Fragment,
            null,
            c.renderList(
              e.panes,
              (t, o) => (
                c.openBlock(),
                c.createBlock(
                  s,
                  { key: t.fullPath, closable: !1 },
                  {
                    tab: Jt(() => [
                      c.createVNode("span", Qt, [
                        c.createTextVNode(c.toDisplayString(t.title) + " ", 1),
                        c.withDirectives(c.createVNode(i, { class: "icon-action text-12 leading-0 ml-8", onClick: c.withModifiers(e.reloadPage, ["stop"]) }, null, 8, ["onClick"]), [
                          [c.vShow, t.fullPath === e.activeKey],
                        ]),
                        c.withDirectives(c.createVNode(l, { class: "icon-action text-12 leading-0 ml-8", onClick: c.withModifiers((t) => e.removeTab(o), ["stop"]) }, null, 8, ["onClick"]), [
                          [c.vShow, 1 !== e.panes.length],
                        ]),
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
(Gt.render = Zt), (Gt.__scopeId = "data-v-1b967ae2");
var Xt = c.defineComponent({
  name: g("Layout"),
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
    const { nav: t } = c.toRefs(e),
      o = d.useRoute(),
      n = d.useRouter(),
      r = c.ref(b.exports.isMobile()),
      a = c.ref(!0),
      i = c.ref(r.value),
      s = c.ref(!1),
      u = c.inject("globalProvider", l({}, w));
    let p;
    c.watch(
      () => u.fixedTab,
      () => {
        clearTimeout(p),
          (a.value = !1),
          (p = setTimeout(() => {
            a.value = !0;
          }, 200));
      }
    );
    const f = () => {
      o.meta.cached && !u.cachedPage.includes(o.name) && (u.cachedPage = [...u.cachedPage, o.name]);
    };
    f(),
      c.watch(
        () => o.name,
        (e) => {
          f();
        }
      );
    const h = () => {
      b.exports.debounced(() => {
        i.value && window.innerWidth > 1200 ? (i.value = !1) : !i.value && window.innerWidth <= 1200 && (i.value = !0),
          r.value && window.innerWidth > 750 ? (r.value = !1) : !r.value && window.innerWidth <= 750 && (r.value = !0);
      }, 250)();
    };
    return (
      h(),
      window.addEventListener("resize", h, !1),
      c.onMounted(() => {
        "Index" === o.name && t.value.length > 0 && n.replace(t.value[0].path);
      }),
      c.onBeforeUnmount(() => {
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
        collWidth: c.computed(() => (i.value ? "80px" : "200px")),
        globalProvider: u,
        cachedPage: c.computed(() => (u.showTab ? u.cachedPage : [])),
        onReloadPage: async (e = !1) => (
          await (async function(e, t, o = !1) {
            o ? (e.cachedPage = []) : !1 !== t.meta.cached && (e.cachedPage = e.cachedPage.filter((e) => t.name !== e)),
              (e.reloadPage = !1),
              await c.nextTick(),
              !1 !== t.meta.cached && (e.cachedPage = [...e.cachedPage, t.name]),
              (e.reloadPage = !0);
          })(u, o, e),
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
  components: { PageNav: de, PageHeader: Et, PageSetting: Lt, PageTab: Gt },
});
const eo = c.withScopeId("data-v-5979bddb");
c.pushScopeId("data-v-5979bddb");
const to = c.createVNode("div", { class: "h-48" }, null, -1),
  oo = { key: 1, class: "h-64" };
c.popScopeId();
const no = eo((e, t, o, n, r, a) => {
  const i = c.resolveComponent("PageNav"),
    l = c.resolveComponent("PageHeader"),
    s = c.resolveComponent("a-layout-header"),
    d = c.resolveComponent("PageTab"),
    u = c.resolveComponent("router-view"),
    p = c.resolveComponent("a-layout-content"),
    f = c.resolveComponent("a-layout-footer"),
    h = c.resolveComponent("a-layout"),
    m = c.resolveComponent("PageSetting");
  return (
    c.openBlock(),
    c.createBlock(
      h,
      { class: "min-h-screen" },
      {
        default: eo(() => [
          c.createVNode(
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
          c.createVNode(h, null, {
            default: eo(() => [
              to,
              c.createVNode(
                s,
                {
                  class: ["page-header fixed top-0 right-0 bg-white flex items-center h-48 leading-48 pl-16 pr-16 z-10", { "transition-width": !e.isH5 }],
                  style: { width: e.isH5 ? "100%" : `calc(100% - ${e.collWidth})` },
                },
                {
                  default: eo(() => [
                    c.createVNode(l, { collapsed: e.collapsed, userInfo: e.userInfo, onColToggle: e.setCollapsed, onHandleShowSetting: e.handleShowSetting }, null, 8, [
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
                ? (c.openBlock(),
                  c.createBlock(
                    d,
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
                : c.createCommentVNode("", !0),
              e.globalProvider.showTab && e.globalProvider.fixedTab ? (c.openBlock(), c.createBlock("div", oo)) : c.createCommentVNode("", !0),
              c.createVNode(p, null, {
                default: eo(() => [
                  c.createVNode(u, null, {
                    default: eo(({ Component: t }) => [
                      c.createVNode(
                        c.Transition,
                        { name: "slid-up", mode: "out-in" },
                        {
                          default: eo(() => [
                            (c.openBlock(),
                            c.createBlock(
                              c.KeepAlive,
                              { include: e.globalProvider.cachedPage },
                              [e.globalProvider.reloadPage ? (c.openBlock(), c.createBlock(c.resolveDynamicComponent(t), { key: (t || {}).name })) : c.createCommentVNode("", !0)],
                              1032,
                              ["include"]
                            )),
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
              c.createVNode(f, { class: "px-16 py-12 text-center" }, { default: eo(() => [c.createTextVNode(" © " + c.toDisplayString(e.copyRightYear()) + " EASI, Make Life Easier. ", 1)]), _: 1 }),
            ]),
            _: 1,
          }),
          c.createVNode(
            m,
            {
              visible: e.showSetting,
              "onUpdate:visible": t[2] || (t[2] = (t) => (e.showSetting = t)),
              userInfo: e.userInfo,
              showTabSetting: e.showTabSetting,
              onLogout: e.onLogout,
              toDashboard: e.toDashboard,
              editPassword: e.editPassword,
            },
            { "action-render": eo(() => [c.renderSlot(e.$slots, "action-render", {}, void 0, !0)]), _: 3 },
            8,
            ["visible", "userInfo", "showTabSetting", "onLogout", "toDashboard", "editPassword"]
          ),
        ]),
        _: 1,
      }
    )
  );
});
(Xt.render = no),
  (Xt.__scopeId = "data-v-5979bddb"),
  (Xt.install = (e) => {
    e.component(Xt.name, Xt);
  });
var ro = c.defineComponent({ name: g("Table"), props: { loading: { type: Boolean, default: !1 }, styleClass: { type: String }, scroll: { type: Object, default: () => ({ x: 1620 }) } } });
(ro.render = function(e, t, o, n, r, a) {
  const i = c.resolveComponent("a-space"),
    l = c.resolveComponent("a-col"),
    s = c.resolveComponent("a-row"),
    d = c.resolveComponent("a-table"),
    u = c.resolveDirective("loading");
  return c.withDirectives(
    (c.openBlock(),
    c.createBlock(
      d,
      c.mergeProps({ scroll: e.scroll }, e.$attrs),
      c.createSlots({ _: 2 }, [
        e.$slots.headerLeft || e.$slots.headerRight
          ? {
              name: "title",
              fn: c.withCtx(() => [
                c.createVNode(
                  s,
                  { align: "middle", class: ["flex-wrap", e.styleClass] },
                  {
                    default: c.withCtx(() => [
                      c.createVNode(
                        l,
                        { flex: 1, class: "md:min-w-0" },
                        {
                          default: c.withCtx(() => [
                            e.$slots.headerLeft
                              ? (c.openBlock(), c.createBlock(i, { key: 0, class: "flex-wrap" }, { default: c.withCtx(() => [c.renderSlot(e.$slots, "headerLeft")]), _: 3 }))
                              : c.createCommentVNode("", !0),
                          ]),
                          _: 1,
                        }
                      ),
                      c.createVNode(l, null, {
                        default: c.withCtx(() => [
                          e.$slots.headerRight
                            ? (c.openBlock(), c.createBlock(i, { key: 0 }, { default: c.withCtx(() => [c.renderSlot(e.$slots, "headerRight")]), _: 3 }))
                            : c.createCommentVNode("", !0),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class"]
                ),
              ]),
            }
          : void 0,
        c.renderList(e.$slots, (t, o) => ({
          name: o,
          fn: c.withCtx((t) => [
            "title" !== e.$slots.name && "headerLeft" !== e.$slots.name && "headerRight" !== e.$slots.name ? c.renderSlot(e.$slots, o, c.mergeProps({ key: 0 }, t)) : c.createCommentVNode("", !0),
          ]),
        })),
      ]),
      1040,
      ["scroll"]
    )),
    [[u, e.loading]]
  );
}),
  (ro.install = (e) => {
    e.component(ro.name, ro);
  }),
  (Lt.install = (e) => {
    e.component(Lt.name, Lt);
  });
var ao = {
    install: (e) => {
      (e.config.globalProperties.$usePermissions = (t, o = "in") => {
        var n, r;
        let a = !1;
        const i = (null == (r = null == (n = e.config.globalProperties.$store.state) ? void 0 : n.permission) ? void 0 : r.permissionMap) || {};
        return Array.isArray(t) ? ("in" === o ? (a = t.some((e) => !!i[e])) : "all" === o && (a = t.every((e) => !!i[e]))) : "string" == typeof t && (a = !!i[t]), a;
      }),
        e.directive("permission", {
          mounted(t, o) {
            var n;
            const { value: r, arg: a = "in" } = o;
            e.config.globalProperties.$usePermissions(r, a) || null == (n = null == t ? void 0 : t.parentNode) || n.removeChild(t);
          },
        });
    },
  },
  io = {
    install: (e) => {
      const t = (e) => {
          e &&
            setTimeout(() => {
              var t, o;
              (e.domInserted = !1), null == (o = null == (t = null == e ? void 0 : e.loadingRoot) ? void 0 : t.parentElement) || o.removeChild(null == e ? void 0 : e.loadingRoot);
            }, 300);
        },
        o = async (o, n) => {
          let r = "",
            a = !0,
            i = "normal";
          if ("object" == typeof n.value) {
            const { title: e, show: t, size: o = "normal" } = n.value;
            (r = e), (a = t), (i = o);
          } else a = n.value;
          a
            ? (await c.nextTick(() => {
                (o.originalPosition = getComputedStyle(o, null).position),
                  ((t, o, n) => {
                    var r, a;
                    "none" !== getComputedStyle(t, null).display &&
                      "hidden" !== getComputedStyle(t, null).visibility &&
                      ("absolute" !== t.originalPosition && "fixed" !== t.originalPosition && (t.style.position = "relative"),
                      (t.comp.cShow = !0),
                      o && (t.comp.cTitle = o),
                      n && (t.comp.cSize = n),
                      (t.comp.root = null == (a = null == (r = e._instance) ? void 0 : r.root) ? void 0 : a.proxy),
                      null == t || t.appendChild(null == t ? void 0 : t.loadingRoot));
                  })(o, r, i);
              }),
              (o.domInserted = !0))
            : ((o.comp.cShow = !1), o.domInserted && t(o));
        };
      e.directive("loading", {
        async beforeMount(e, t) {
          const n = c.createApp(G);
          (e.loading = e), (e.loadingRoot = document.createElement("div")), (e.comp = n.mount(e.loadingRoot)), await o(e, t);
        },
        async updated(e, t) {
          t.oldValue !== t.value && (await o(e, t));
        },
        async beforeUnmount(e) {
          e.domInserted && ((e.loading = e), t(e)), (e.comp = null);
        },
      });
    },
  };
const lo = [P, V, I, _, H, Xt, G, te, q, ro, Lt],
  so = [ao],
  co = (e) => {
    so.forEach((t) => {
      e.use(t);
    }),
      e.use(io),
      lo.forEach((t) => {
        e.component(t.name, t);
      });
  };
var uo = { version: "0.0.22", install: co };
(exports.EASIButton = I),
  (exports.EASIDrawer = _),
  (exports.EASIError = H),
  (exports.EASILayout = Xt),
  (exports.EASILoading = G),
  (exports.EASIModal = te),
  (exports.EASIPage = q),
  (exports.EASIProvider = P),
  (exports.EASISetting = Lt),
  (exports.EASITable = ro),
  (exports.EASIText = V),
  (exports.default = uo),
  (exports.install = co),
  (exports.useModalVisible = function(e, t) {
    const o = c.reactive(e);
    return [
      o,
      (e, n, ...r) => {
        null == t || t(...r), (o[e] = n);
      },
    ];
  }),
  (exports.usePagination = function(e) {
    return c.reactive(l({ showQuickJumper: !0, showSizeChanger: !0, showTotal: (e) => x("pageTotal", { total: e || 0 }), showSizeChange: () => null, onShowSizeChange: () => null }, e));
  }),
  (exports.vLoading = io),
  (exports.vPermission = ao);
