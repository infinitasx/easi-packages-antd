var __defProp = Object.defineProperty,
  __defProps = Object.defineProperties,
  __getOwnPropDescs = Object.getOwnPropertyDescriptors,
  __getOwnPropSymbols = Object.getOwnPropertySymbols,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __propIsEnum = Object.prototype.propertyIsEnumerable,
  __defNormalProp = (e, t, o) => (t in e ? __defProp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o)),
  __spreadValues = (e, t) => {
    for (var o in t || (t = {})) __hasOwnProp.call(t, o) && __defNormalProp(e, o, t[o]);
    if (__getOwnPropSymbols) for (var o of __getOwnPropSymbols(t)) __propIsEnum.call(t, o) && __defNormalProp(e, o, t[o]);
    return e;
  },
  __spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t)),
  __objRest = (e, t) => {
    var o = {};
    for (var n in e) __hasOwnProp.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
    if (null != e && __getOwnPropSymbols) for (var n of __getOwnPropSymbols(e)) t.indexOf(n) < 0 && __propIsEnum.call(e, n) && (o[n] = e[n]);
    return o;
  };
!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("vue"), require("vue-router"), require("ant-design-vue"), require("moment"))
    : "function" == typeof define && define.amd
    ? define(["exports", "vue", "vue-router", "ant-design-vue", "moment"], t)
    : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).EASI = {}), e.Vue, e.VueRouter, e.antd, e.moment);
})(this, function(e, t, o, n, r) {
  "use strict";
  function a(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  function l(e) {
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
  var i = a(t),
    c = l(t),
    s = a(r);
  function d(e) {
    return `EASI${e}`;
  }
  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  var u = { exports: {} },
    p = { exports: {} };
  (p.exports = (function() {
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
            var l = JSON.stringify(o);
            /^[\{\[]/.test(l) && (o = l);
          } catch (s) {}
          (o = n.write ? n.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)),
            (t = encodeURIComponent(String(t))
              .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
              .replace(/[\(\)]/g, escape));
          var i = "";
          for (var c in a) a[c] && ((i += "; " + c), !0 !== a[c] && (i += "=" + a[c].split(";")[0]));
          return (document.cookie = t + "=" + o + i);
        }
      }
      function l(e, o) {
        if ("undefined" != typeof document) {
          for (var r = {}, a = document.cookie ? document.cookie.split("; ") : [], l = 0; l < a.length; l++) {
            var i = a[l].split("="),
              c = i.slice(1).join("=");
            o || '"' !== c.charAt(0) || (c = c.slice(1, -1));
            try {
              var s = t(i[0]);
              if (((c = (n.read || n)(c, s) || t(c)), o))
                try {
                  c = JSON.parse(c);
                } catch (d) {}
              if (((r[s] = c), e === s)) break;
            } catch (d) {}
          }
          return e ? r[e] : r;
        }
      }
      return (
        (r.set = a),
        (r.get = function(e) {
          return l(e, !1);
        }),
        (r.getJSON = function(e) {
          return l(e, !0);
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
          let l;
          return this.db.objectStoreNames.contains(o)
            ? t.transaction.objectStore(o)
            : ((l = this.db.createObjectStore(o, Object.assign({}, a.defaultStoreOptions, n))),
              console.log(l),
              r &&
                r.forEach((e) => {
                  l.createIndex(e.name, e.key, { unique: e.unique, multiEntry: !!e.multiEntry });
                }),
              l);
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
              let l;
              if (o) {
                const e = a.index(o);
                l = e.get(t);
              } else l = a.get(t);
              (l.onerror = function(e) {
                r(e);
              }),
                (l.onsuccess = function() {
                  l.result ? n(l.result) : n(null);
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
              let l = this.db.transaction(e).objectStore(e);
              const i = t ? l.index(t) : l,
                c = null != n ? i.getAll(o, n) : i.getAll(o);
              (c.onsuccess = function() {
                r(c.result);
              }),
                (c.onerror = function(e) {
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
                l = [],
                i = a.openCursor();
              (i.onsuccess = (e) => {
                const r = e.target.result;
                r ? (Array.isArray(o) ? o.some((e) => this._compareType(r.value, t, e)) && l.push(r.value) : this._compareType(r.value, t, o) && l.push(r.value), r.continue()) : n(l);
              }),
                (i.onerror = (e) => {
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
      let l = a;
      (l.defaultOptions = { version: 1, store: [] }), (l.defaultStoreOptions = { autoIncrement: !0 });
      const i = Symbol();
      var c = {
        install: (e, t) => {
          if (!t) throw new Error("请设置indexDB参数");
          const { databaseName: o, options: n } = t,
            r = new l(o, n);
          (e.config.globalProperties.$db = r), e.provide(i, r);
        },
      };
      function s(e, t, o = 0) {
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
      (e.EASIIndexDB = l),
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
                l = new Worker(a);
              l.postMessage(t),
                (l.onmessage = ({ data: e }) => {
                  l.terminate(), n(e);
                }),
                (l.onerror = (e) => {
                  l.terminate(), r(e.message);
                }),
                (l.onmessageerror = (e) => {
                  l.terminate(), r(e);
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
        (e.indexDBPlugin = c),
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
          s.call(localStorage, e, t, o);
        }),
        (e.setSession = function(e, t, o = 0) {
          s.call(sessionStorage, e, t, o);
        }),
        (e.useDB = function() {
          const e = t.inject(i);
          if (!e) throw new Error("未发现indexdb实例");
          return e;
        }),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e[Symbol.toStringTag] = "Module");
    })(u.exports, i.default, p.exports);
  const f = "setting",
    h = document.querySelector("html"),
    m = { reloadPage: !0, mode: !1, showTab: !0, fixedTab: !0, cachedPage: [] };
  const g = {
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
  function b(e) {
    return t.reactive({ message: g[e] });
  }
  function v(e, o) {
    const n = t.inject("globalEASILocale", { message: {} });
    let r = null == n ? void 0 : n.message[e];
    if (r) {
      if (o) {
        const e = /(\{).*?(\})/g;
        r.match(e).forEach((e) => {
          let t = e.replace(/\{|\}|\s|\n|\t/g, "");
          const n = new RegExp(`${e}`, "g");
          r = r.replace(n, o[t]);
        });
      }
      return r;
    }
    return console.warn("未匹配到文案key"), e;
  }
  var y = t.defineComponent({
    name: d("Provider"),
    props: { locale: { type: Object, default: () => ({ locale: "zh-cn" }) } },
    setup(e) {
      const { locale: o } = t.toRefs(e),
        n = (function() {
          const e = u.exports.getLocal(f) || { mode: !1, fixedTab: !0, showTab: !0 };
          return (
            (!0 !== e.mode && "dark" !== e.mode) || (e.mode && h.setAttribute("data-pro-theme", "antdv-pro-theme-dark")),
            t.reactive(__spreadProps(__spreadValues({}, e), { cachedPage: [], reloadPage: !0 }))
          );
        })(),
        r = b(e.locale ? e.locale.locale : "zh-cn");
      t.provide("globalProvider", n),
        t.provide("globalEASILocale", r),
        t.watch(
          () => o.value,
          (e) => {
            r.message = (null == e ? void 0 : e.locale) ? g[e.locale] : g["zh-cn"];
          }
        );
    },
  });
  const w = t.withScopeId("data-v-c6b13f8e"),
    S = w((e, o, n, r, a, l) => {
      const i = t.resolveComponent("a-config-provider");
      return t.openBlock(), t.createBlock(i, t.mergeProps({ locale: e.locale }, e.$attrs), { default: w(() => [t.renderSlot(e.$slots, "default", {}, void 0, !0)]), _: 3 }, 16, ["locale"]);
    });
  (y.render = S), (y.__scopeId = "data-v-c6b13f8e");
  y.install = (e) => {
    e.component(y.name, y);
  };
  var k = t.defineComponent({ name: d("Text"), props: {}, setup(e) {} });
  const C = t.createTextVNode("这是一个text组件");
  (k.render = function(e, o, n, r, a, l) {
    return t.openBlock(), t.createBlock("div", null, [t.renderSlot(e.$slots, "default", {}, () => [C])]);
  }),
    (k.install = (e) => {
      e.component(k.name, k);
    });
  var x = t.defineComponent({
    name: d("Button"),
    props: { type: { type: String, default: "default" }, success: { type: Boolean, default: !1 }, warning: { type: Boolean, default: !1 }, info: { type: Boolean, default: !1 } },
    setup(e) {
      const { type: o, success: n, warning: r, info: a } = t.toRefs(e);
      return {
        className: t.computed(() => {
          let e = "link" === o.value ? "px-0 " : "";
          return n.value ? (e += "easi-btn-success") : r.value ? (e += "easi-btn-warning") : a.value && (e += "easi-btn-info"), e;
        }),
      };
    },
  });
  const P = t.withScopeId("data-v-1fd440a2"),
    O = P((e, o, n, r, a, l) => {
      const i = t.resolveComponent("a-button");
      return (
        t.openBlock(),
        t.createBlock(
          i,
          t.mergeProps(e.$attrs, { type: e.type, class: e.className }),
          { icon: P(() => [t.renderSlot(e.$slots, "icon", {}, void 0, !0)]), default: P(() => [t.renderSlot(e.$slots, "default", {}, void 0, !0)]), _: 3 },
          16,
          ["type", "class"]
        )
      );
    });
  (x.render = O),
    (x.__scopeId = "data-v-1fd440a2"),
    (x.install = (e) => {
      e.component(x.name, x);
    });
  var N = t.defineComponent({
    name: d("Drawer"),
    emits: ["update:visible", "close", "show"],
    props: { visible: { default: !1, type: Boolean }, width: { default: "500px", type: String }, bodyStyle: { default: () => ({}), type: Object } },
    setup(e, { emit: o, slots: n }) {
      const { bodyStyle: r, visible: a } = t.toRefs(e),
        l = t.computed(() => (n.footer ? __spreadProps(__spreadValues({}, r.value), { paddingBottom: "55px" }) : t.toRaw(r.value)));
      return (
        t.watch(
          () => a.value,
          (e) => {
            e && o("show");
          }
        ),
        {
          computedBodyStyle: l,
          handleClose() {
            o("update:visible", !1), o("close");
          },
        }
      );
    },
  });
  const B = t.withScopeId("data-v-18c84441");
  t.pushScopeId("data-v-18c84441");
  const T = { key: 0, class: "drawer-footer" };
  t.popScopeId();
  const V = B((e, o, n, r, a, l) => {
    const i = t.resolveComponent("a-drawer");
    return (
      t.openBlock(),
      t.createBlock(
        i,
        t.mergeProps(e.$attrs, { visible: e.visible, width: e.width, maskClosable: !1, "body-style": e.computedBodyStyle, onClose: e.handleClose }),
        {
          default: B(() => [
            t.renderSlot(e.$slots, "default", {}, void 0, !0),
            e.$slots.footer ? (t.openBlock(), t.createBlock("div", T, [t.renderSlot(e.$slots, "footer", {}, void 0, !0)])) : t.createCommentVNode("", !0),
          ]),
          _: 3,
        },
        16,
        ["visible", "width", "body-style", "onClose"]
      )
    );
  });
  (N.render = V),
    (N.__scopeId = "data-v-18c84441"),
    (N.install = (e) => {
      e.component(N.name, N);
    });
  var j = t.defineComponent({ name: d("Error"), props: { status: { type: String, default: "" } } });
  const _ = t.withScopeId("data-v-cd4c8848"),
    A = _((e, o, n, r, a, l) => {
      const i = t.resolveComponent("a-result"),
        c = t.resolveComponent("a-card");
      return (
        t.openBlock(),
        t.createBlock(
          c,
          { bordered: !1, class: "error-full-page" },
          {
            default: _(() => [
              t.createVNode(i, { status: e.status }, t.createSlots({ _: 2 }, [t.renderList(e.$slots, (o, n) => ({ name: n, fn: _((o) => [t.renderSlot(e.$slots, n, o, void 0, !0)]) }))]), 1032, [
                "status",
              ]),
            ]),
            _: 1,
          }
        )
      );
    });
  (j.render = A),
    (j.__scopeId = "data-v-cd4c8848"),
    (j.install = (e) => {
      e.component(j.name, j);
    });
  var M = t.defineComponent({
    name: d("Page"),
    emits: ["initPage"],
    props: {
      showPageHeader: { type: Boolean, default: !0 },
      breadcrumb: { type: Array, default: void 0 },
      title: { type: String, default: "" },
      desc: { type: String, default: "" },
      layoutType: { type: String, default: "customer" },
      hasPermission: { type: Boolean, default: !1 },
    },
    setup(e, { emit: n }) {
      const { breadcrumb: r, title: a, desc: l, hasPermission: i } = t.toRefs(e),
        c = o.useRoute(),
        { appContext: s } = t.getCurrentInstance(),
        d = t.computed(() => r.value || c.meta.breadcrumb || c.matched.slice(1).map((e) => ({ path: e.path, breadcrumbName: e.meta.title }))),
        u = t.computed(() => a.value || (c.meta.title && c.meta.title)),
        p = t.computed(() => l.value || (c.meta.desc && c.meta.desc));
      return (i.value || s.config.globalProperties.$usePermissions(c.meta.permission)) && n("initPage"), { breadcrumbRoutes: d, pageTitle: u, pageDesc: p, getEASIText: v };
    },
    components: { NoPermission: j },
  });
  const I = { key: 0, class: "page-breadcrumb-wrap" },
    D = { key: 0 },
    E = { class: "p-24" },
    L = t.createTextVNode(" 403 ");
  (M.render = function(e, o, n, r, a, l) {
    const i = t.resolveComponent("router-link"),
      c = t.resolveComponent("a-breadcrumb"),
      s = t.resolveComponent("a-page-header"),
      d = t.resolveComponent("a-card"),
      u = t.resolveComponent("NoPermission");
    return (
      t.openBlock(),
      t.createBlock("div", null, [
        e.$usePermissions(e.$route.meta.permission) || e.hasPermission
          ? (t.openBlock(),
            t.createBlock(
              t.Fragment,
              { key: 0 },
              [
                e.showPageHeader
                  ? (t.openBlock(),
                    t.createBlock("div", I, [
                      t.createVNode(
                        s,
                        { title: e.pageTitle },
                        {
                          breadcrumb: t.withCtx(() => [
                            e.breadcrumbRoutes.length > 1
                              ? (t.openBlock(),
                                t.createBlock(
                                  c,
                                  { key: 0, routes: e.breadcrumbRoutes },
                                  {
                                    itemRender: t.withCtx(({ route: e }) => [
                                      t.createVNode(i, { to: e.path }, { default: t.withCtx(() => [t.createTextVNode(t.toDisplayString(e.breadcrumbName), 1)]), _: 2 }, 1032, ["to"]),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["routes"]
                                ))
                              : t.createCommentVNode("", !0),
                          ]),
                          default: t.withCtx(() => [
                            e.pageDesc ? (t.openBlock(), t.createBlock("p", D, t.toDisplayString(e.pageDesc), 1)) : t.createCommentVNode("", !0),
                            t.renderSlot(e.$slots, "header"),
                          ]),
                          _: 3,
                        },
                        8,
                        ["title"]
                      ),
                    ]))
                  : t.createCommentVNode("", !0),
                t.createVNode("div", E, [
                  "card" === e.layoutType
                    ? (t.openBlock(), t.createBlock(d, { key: 0 }, { default: t.withCtx(() => [t.renderSlot(e.$slots, "default")]), _: 3 }))
                    : t.renderSlot(e.$slots, "default", { key: 1 }),
                ]),
              ],
              64
            ))
          : (t.openBlock(),
            t.createBlock(u, { key: 1, status: "403" }, { title: t.withCtx(() => [L]), "sub-title": t.withCtx(() => [t.createTextVNode(t.toDisplayString(e.getEASIText("noPermission")), 1)]), _: 1 })),
      ])
    );
  }),
    (M.install = (e) => {
      e.component(M.name, M);
    });
  var H = t.defineComponent({
    name: d("Loading"),
    emits: ["update:show"],
    props: { title: { type: String, default: void 0 }, show: { default: !1, type: Boolean }, size: { default: "normal", type: String } },
    setup(e, { emit: o }) {
      var n, r, a, l, i;
      const { show: c, size: s } = t.toRefs(e),
        d = t.getCurrentInstance(),
        u = (null == (n = null == d ? void 0 : d.root) ? void 0 : n.proxy) || { localeMessage: { locale: "zh-cn" } },
        p = t.ref(u),
        f = b((null == (l = null == (a = null == (r = null == d ? void 0 : d.root) ? void 0 : r.proxy) ? void 0 : a.localeMessage) ? void 0 : l.locale) || "zh-cn"),
        h = null == (i = null == f ? void 0 : f.message) ? void 0 : i.loading,
        m = t.ref(e.show),
        v = t.ref(h),
        y = t.ref("normal");
      return (
        t.watch(
          () => c.value,
          (e) => {
            m.value = e;
          }
        ),
        t.watch(
          () => s.value,
          (e) => {
            y.value = e;
          }
        ),
        t.watch(
          () => {
            var e;
            return null == (e = p.value) ? void 0 : e.localeMessage;
          },
          (e) => {
            e && ((f.message = g[(null == e ? void 0 : e.locale) || "zh-cn"]), (v.value = f.message.loading));
          }
        ),
        t.watch(
          () => m.value,
          (e) => {
            o("update:show", e);
          }
        ),
        { cShow: m, cTitle: v, cSize: y, root: p }
      );
    },
  });
  const R = t.withScopeId("data-v-4a04b4b8");
  t.pushScopeId("data-v-4a04b4b8");
  const z = { key: 0, class: "loading-container", id: "cus-loading" },
    $ = t.createVNode(
      "div",
      { class: "loading-wrap" },
      [
        t.createVNode("div", { class: "ball" }, [t.createVNode("i", { class: "bg spoon" }), t.createVNode("i", { class: "bg fork" })]),
        t.createVNode("div", { class: "loading-shadow" }, [t.createVNode("div")]),
      ],
      -1
    ),
    F = { key: 0, class: "tips" };
  t.popScopeId();
  const U = R(
    (e, o, n, r, a, l) => (
      t.openBlock(),
      t.createBlock(
        t.Transition,
        { name: "fade", mode: "out-in" },
        {
          default: R(() => [
            e.cShow
              ? (t.openBlock(),
                t.createBlock("div", z, [
                  t.createVNode(
                    "div",
                    { class: ["loading", e.cSize] },
                    [$, e.title || e.cTitle ? (t.openBlock(), t.createBlock("p", F, t.toDisplayString(e.title || e.cTitle), 1)) : t.createCommentVNode("", !0)],
                    2
                  ),
                ]))
              : t.createCommentVNode("", !0),
          ]),
          _: 1,
        }
      )
    )
  );
  (H.render = U),
    (H.__scopeId = "data-v-4a04b4b8"),
    (H.install = (e) => {
      e.component(H.name, H);
    });
  var W = t.defineComponent({
    name: d("Modal"),
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
    setup(e, { emit: o }) {
      const { handleOk: n, visible: r } = t.toRefs(e),
        a = t.ref(!1);
      t.watch(
        () => r.value,
        (e) => {
          e && (o("update:visible", !0), o("show"));
        }
      );
      const l = t.ref(!1),
        i = () => {
          (a.value = !1), o("update:visible", !1), o("cancel");
        };
      return {
        symbolVisible: a,
        autoLoading: l,
        bodyScrollStyle: { maxHeight: "calc(100vh - 160px)", overflow: "auto" },
        onConfirm: async () => {
          if (n.value && "function" == typeof n.value)
            try {
              (l.value = !0), await n.value(), (l.value = !1), i();
            } catch (e) {
              console.log(e), (l.value = !1);
            }
          else o("ok"), i();
        },
        onCancel: i,
        showModal: () => {
          (a.value = !0), o("update:visible", !0), o("show");
        },
        getEASIText: v,
      };
    },
  });
  const q = { key: 0, class: "footer" };
  (W.render = function(e, o, n, r, a, l) {
    const i = t.resolveComponent("a-button"),
      c = t.resolveComponent("a-modal");
    return (
      t.openBlock(),
      t.createBlock(
        c,
        {
          visible: void 0 === e.visible ? e.symbolVisible : e.visible,
          title: e.title,
          bodyStyle: e.autoHeight ? e.bodyStyle : __spreadValues(__spreadValues({}, e.bodyScrollStyle), e.bodyStyle),
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
          footer: t.withCtx(() => [
            t.renderSlot(e.$slots, "footer"),
            !e.$slots.footer && e.footer
              ? (t.openBlock(),
                t.createBlock("div", q, [
                  e.showCancel
                    ? (t.openBlock(),
                      t.createBlock(i, { key: 0, onClick: e.onCancel }, { default: t.withCtx(() => [t.createTextVNode(t.toDisplayString(e.cancelText || e.getEASIText("cancel")), 1)]), _: 1 }, 8, [
                        "onClick",
                      ]))
                    : t.createCommentVNode("", !0),
                  e.showOk
                    ? (t.openBlock(),
                      t.createBlock(
                        i,
                        { key: 1, type: e.okType, loading: e.autoLoading || e.confirmLoading, onClick: e.onConfirm },
                        { default: t.withCtx(() => [t.createTextVNode(t.toDisplayString(e.okText || e.getEASIText("confirm")), 1)]), _: 1 },
                        8,
                        ["type", "loading", "onClick"]
                      ))
                    : t.createCommentVNode("", !0),
                ]))
              : t.createCommentVNode("", !0),
          ]),
          default: t.withCtx(() => [t.renderSlot(e.$slots, "default")]),
          _: 3,
        },
        8,
        ["visible", "title", "bodyStyle", "closable", "confirmLoading", "destroyOnClose", "keyboard", "maskClosable", "width", "getContainer", "afterClose", "class", "onCancel"]
      )
    );
  }),
    (W.install = (e) => {
      e.component(W.name, W);
    });
  var K = t.defineComponent({
    name: d("menu"),
    props: {
      collapsed: { type: Boolean, default: !1 },
      logo: { type: String, default: null },
      title: { type: String, default: null },
      subTitle: { type: String, default: null },
      nav: { type: Array, default: () => [] },
    },
    setup(e) {
      const { collapsed: n } = t.toRefs(e),
        r = o.useRoute(),
        a = o.useRouter(),
        l = t.ref([]),
        i = t.ref([]),
        c = () => {
          const e = [...t.toRaw(r.meta.breadcrumb || [])];
          n.value || (l.value = e.map((e) => e.name)), (i.value = [r.meta.selected || r.name]);
        };
      t.onMounted(() => {
        c();
      }),
        t.watch(() => r.name, c),
        t.watch(
          () => n.value,
          (e) => {
            if (e) l.value = [];
            else {
              const e = [...t.toRaw(r.meta.breadcrumb || [])];
              l.value = e.map((e) => e.name);
            }
          }
        );
      return {
        openKeys: l,
        selectedKeys: i,
        toPage: (e) => {
          r.name !== e && a.push({ name: e });
        },
      };
    },
  });
  const Y = t.withScopeId("data-v-1659a694");
  t.pushScopeId("data-v-1659a694");
  const J = { key: 0, class: "admin-title text-white ml-16 truncate" },
    Q = { key: 1, class: "text-12 truncate text-gray-400" },
    Z = { class: "flex-1 overflow-y-auto overflow-x-hidden" },
    G = { class: "flex items-center" };
  t.popScopeId();
  const X = Y((e, o, n, r, a, l) => {
    const i = t.resolveComponent("a-menu-item"),
      c = t.resolveComponent("a-sub-menu"),
      s = t.resolveComponent("a-menu");
    return (
      t.openBlock(),
      t.createBlock(
        t.Fragment,
        null,
        [
          t.createVNode(
            "div",
            { class: ["py-6 flex items-center", [e.collapsed ? "px-24" : "px-16"]] },
            [
              t.createVNode("img", { src: e.logo, alt: "", class: "logo" }, null, 8, ["src"]),
              e.title || e.subTitle
                ? t.withDirectives(
                    (t.openBlock(),
                    t.createBlock(
                      "div",
                      J,
                      [
                        e.title
                          ? (t.openBlock(), t.createBlock("p", { key: 0, class: ["truncate", [e.subTitle ? "text-14" : "text-16"]] }, t.toDisplayString(e.title), 3))
                          : t.createCommentVNode("", !0),
                        e.subTitle ? (t.openBlock(), t.createBlock("p", Q, t.toDisplayString(e.subTitle), 1)) : t.createCommentVNode("", !0),
                      ],
                      512
                    )),
                    [[t.vShow, !e.collapsed]]
                  )
                : t.createCommentVNode("", !0),
            ],
            2
          ),
          t.createVNode("div", Z, [
            t.createVNode(
              s,
              {
                class: "layout-menu",
                mode: "inline",
                inlineCollapsed: !1,
                openKeys: e.openKeys,
                "onUpdate:openKeys": o[1] || (o[1] = (t) => (e.openKeys = t)),
                selectedKeys: e.selectedKeys,
                "onUpdate:selectedKeys": o[2] || (o[2] = (t) => (e.selectedKeys = t)),
                theme: "dark",
              },
              {
                default: Y(() => [
                  (t.openBlock(!0),
                  t.createBlock(
                    t.Fragment,
                    null,
                    t.renderList(
                      e.nav,
                      (o) => (
                        t.openBlock(),
                        t.createBlock(
                          t.Fragment,
                          { key: o.name },
                          [
                            o.children && o.children.length > 0 && !o.meta.hideMenu
                              ? (t.openBlock(),
                                t.createBlock(
                                  c,
                                  { key: o.name },
                                  {
                                    title: Y(() => [
                                      t.createVNode("span", G, [
                                        o.meta.icon ? (t.openBlock(), t.createBlock("i", { key: 0, class: [o.meta.icon, "anticon"] }, null, 2)) : t.createCommentVNode("", !0),
                                        t.createVNode("span", null, t.toDisplayString(o.meta.title), 1),
                                      ]),
                                    ]),
                                    default: Y(() => [
                                      (t.openBlock(!0),
                                      t.createBlock(
                                        t.Fragment,
                                        null,
                                        t.renderList(
                                          o.children,
                                          (o) => (
                                            t.openBlock(),
                                            t.createBlock(
                                              t.Fragment,
                                              { key: o.name },
                                              [
                                                o.meta.hideMenu
                                                  ? t.createCommentVNode("", !0)
                                                  : (t.openBlock(),
                                                    t.createBlock(
                                                      i,
                                                      { key: o.name, class: "flex items-center", onClick: (t) => e.toPage(o.name) },
                                                      {
                                                        default: Y(() => [
                                                          o.meta.icon ? (t.openBlock(), t.createBlock("i", { key: 0, class: [o.meta.icon, "anticon"] }, null, 2)) : t.createCommentVNode("", !0),
                                                          t.createVNode("span", null, t.toDisplayString(o.meta.title), 1),
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
                              : o.children || o.meta.hideMenu
                              ? t.createCommentVNode("", !0)
                              : (t.openBlock(),
                                t.createBlock(
                                  i,
                                  { key: o.name, class: "flex items-center", onClick: (t) => e.toPage(o.name) },
                                  {
                                    default: Y(() => [
                                      o.meta.icon ? (t.openBlock(), t.createBlock("i", { key: 0, class: [o.meta.icon, "anticon"] }, null, 2)) : t.createCommentVNode("", !0),
                                      t.createVNode("span", null, t.toDisplayString(o.meta.title), 1),
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
  (K.render = X), (K.__scopeId = "data-v-1659a694");
  var ee = t.defineComponent({
    name: d("Nav"),
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
    components: { NavMenu: K },
  });
  function te(e, t) {
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
  function oe(e) {
    return Math.min(1, Math.max(0, e));
  }
  function ne(e) {
    return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
  }
  function re(e) {
    return e <= 1 ? 100 * Number(e) + "%" : e;
  }
  function ae(e) {
    return 1 === e.length ? "0" + e : String(e);
  }
  function le(e, t, o) {
    (e = te(e, 255)), (t = te(t, 255)), (o = te(o, 255));
    var n = Math.max(e, t, o),
      r = Math.min(e, t, o),
      a = 0,
      l = 0,
      i = (n + r) / 2;
    if (n === r) (l = 0), (a = 0);
    else {
      var c = n - r;
      switch (((l = i > 0.5 ? c / (2 - n - r) : c / (n + r)), n)) {
        case e:
          a = (t - o) / c + (t < o ? 6 : 0);
          break;
        case t:
          a = (o - e) / c + 2;
          break;
        case o:
          a = (e - t) / c + 4;
      }
      a /= 6;
    }
    return { h: a, s: l, l: i };
  }
  function ie(e, t, o) {
    return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? e + 6 * o * (t - e) : o < 0.5 ? t : o < 2 / 3 ? e + (t - e) * (2 / 3 - o) * 6 : e;
  }
  function ce(e, t, o) {
    (e = te(e, 255)), (t = te(t, 255)), (o = te(o, 255));
    var n = Math.max(e, t, o),
      r = Math.min(e, t, o),
      a = 0,
      l = n,
      i = n - r,
      c = 0 === n ? 0 : i / n;
    if (n === r) a = 0;
    else {
      switch (n) {
        case e:
          a = (t - o) / i + (t < o ? 6 : 0);
          break;
        case t:
          a = (o - e) / i + 2;
          break;
        case o:
          a = (e - t) / i + 4;
      }
      a /= 6;
    }
    return { h: a, s: c, v: l };
  }
  function se(e, t, o, n) {
    var r = [ae(Math.round(e).toString(16)), ae(Math.round(t).toString(16)), ae(Math.round(o).toString(16))];
    return n && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
  }
  function de(e) {
    return ue(e) / 255;
  }
  function ue(e) {
    return parseInt(e, 16);
  }
  ee.render = function(e, o, n, r, a, l) {
    const i = t.resolveComponent("NavMenu"),
      c = t.resolveComponent("a-layout-sider"),
      s = t.resolveComponent("a-drawer");
    return (
      t.openBlock(),
      t.createBlock(
        t.Fragment,
        null,
        [
          t.withDirectives(t.createVNode("div", { class: ["side-placeholder", { "transition-width": !e.isH5 }], style: { width: e.collWidth } }, null, 6), [[t.vShow, !e.isH5]]),
          t.withDirectives(
            t.createVNode(
              c,
              { class: "flex fixed top-0 left-0 flex-col h-screen overflow-hidden z-10", collapsible: "", collapsed: e.collapsed, trigger: null },
              {
                default: t.withCtx(() => [
                  t.createVNode(i, { logo: e.logo, title: e.title, "sub-title": e.subTitle, nav: e.nav, collapsed: e.collapsed }, null, 8, ["logo", "title", "sub-title", "nav", "collapsed"]),
                ]),
                _: 1,
              },
              8,
              ["collapsed"]
            ),
            [[t.vShow, !e.isH5]]
          ),
          t.createVNode(
            s,
            { placement: "left", width: "200px", closable: !1, visible: !e.collapsed && e.isH5, bodyStyle: { padding: 0, height: "100%" }, onClose: o[1] || (o[1] = (t) => e.$emit("hideMenu")) },
            {
              default: t.withCtx(() => [
                t.createVNode(
                  c,
                  { class: "flex flex-col h-screen overflow-hidden", collapsible: "", collapsed: !1, trigger: null },
                  {
                    default: t.withCtx(() => [t.createVNode(i, { logo: e.logo, title: e.title, "sub-title": e.subTitle, nav: e.nav, collapsed: !1 }, null, 8, ["logo", "title", "sub-title", "nav"])]),
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
  var pe = {
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
  function fe(e) {
    var t,
      o,
      n,
      r = { r: 0, g: 0, b: 0 },
      a = 1,
      l = null,
      i = null,
      c = null,
      s = !1,
      d = !1;
    return (
      "string" == typeof e &&
        (e = (function(e) {
          if (0 === (e = e.trim().toLowerCase()).length) return !1;
          var t = !1;
          if (pe[e]) (e = pe[e]), (t = !0);
          else if ("transparent" === e) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
          var o = be.rgb.exec(e);
          if (o) return { r: o[1], g: o[2], b: o[3] };
          if ((o = be.rgba.exec(e))) return { r: o[1], g: o[2], b: o[3], a: o[4] };
          if ((o = be.hsl.exec(e))) return { h: o[1], s: o[2], l: o[3] };
          if ((o = be.hsla.exec(e))) return { h: o[1], s: o[2], l: o[3], a: o[4] };
          if ((o = be.hsv.exec(e))) return { h: o[1], s: o[2], v: o[3] };
          if ((o = be.hsva.exec(e))) return { h: o[1], s: o[2], v: o[3], a: o[4] };
          if ((o = be.hex8.exec(e))) return { r: ue(o[1]), g: ue(o[2]), b: ue(o[3]), a: de(o[4]), format: t ? "name" : "hex8" };
          if ((o = be.hex6.exec(e))) return { r: ue(o[1]), g: ue(o[2]), b: ue(o[3]), format: t ? "name" : "hex" };
          if ((o = be.hex4.exec(e))) return { r: ue(o[1] + o[1]), g: ue(o[2] + o[2]), b: ue(o[3] + o[3]), a: de(o[4] + o[4]), format: t ? "name" : "hex8" };
          if ((o = be.hex3.exec(e))) return { r: ue(o[1] + o[1]), g: ue(o[2] + o[2]), b: ue(o[3] + o[3]), format: t ? "name" : "hex" };
          return !1;
        })(e)),
      "object" == typeof e &&
        (ve(e.r) && ve(e.g) && ve(e.b)
          ? ((t = e.r), (o = e.g), (n = e.b), (r = { r: 255 * te(t, 255), g: 255 * te(o, 255), b: 255 * te(n, 255) }), (s = !0), (d = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
          : ve(e.h) && ve(e.s) && ve(e.v)
          ? ((l = re(e.s)),
            (i = re(e.v)),
            (r = (function(e, t, o) {
              (e = 6 * te(e, 360)), (t = te(t, 100)), (o = te(o, 100));
              var n = Math.floor(e),
                r = e - n,
                a = o * (1 - t),
                l = o * (1 - r * t),
                i = o * (1 - (1 - r) * t),
                c = n % 6;
              return { r: 255 * [o, l, a, a, i, o][c], g: 255 * [i, o, o, l, a, a][c], b: 255 * [a, a, i, o, o, l][c] };
            })(e.h, l, i)),
            (s = !0),
            (d = "hsv"))
          : ve(e.h) &&
            ve(e.s) &&
            ve(e.l) &&
            ((l = re(e.s)),
            (c = re(e.l)),
            (r = (function(e, t, o) {
              var n, r, a;
              if (((e = te(e, 360)), (t = te(t, 100)), (o = te(o, 100)), 0 === t)) (r = o), (a = o), (n = o);
              else {
                var l = o < 0.5 ? o * (1 + t) : o + t - o * t,
                  i = 2 * o - l;
                (n = ie(i, l, e + 1 / 3)), (r = ie(i, l, e)), (a = ie(i, l, e - 1 / 3));
              }
              return { r: 255 * n, g: 255 * r, b: 255 * a };
            })(e.h, l, c)),
            (s = !0),
            (d = "hsl")),
        Object.prototype.hasOwnProperty.call(e, "a") && (a = e.a)),
      (a = ne(a)),
      { ok: s, format: e.format || d, r: Math.min(255, Math.max(r.r, 0)), g: Math.min(255, Math.max(r.g, 0)), b: Math.min(255, Math.max(r.b, 0)), a: a }
    );
  }
  var he = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
    me = "[\\s|\\(]+(" + he + ")[,|\\s]+(" + he + ")[,|\\s]+(" + he + ")\\s*\\)?",
    ge = "[\\s|\\(]+(" + he + ")[,|\\s]+(" + he + ")[,|\\s]+(" + he + ")[,|\\s]+(" + he + ")\\s*\\)?",
    be = {
      CSS_UNIT: new RegExp(he),
      rgb: new RegExp("rgb" + me),
      rgba: new RegExp("rgba" + ge),
      hsl: new RegExp("hsl" + me),
      hsla: new RegExp("hsla" + ge),
      hsv: new RegExp("hsv" + me),
      hsva: new RegExp("hsva" + ge),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    };
  function ve(e) {
    return Boolean(be.CSS_UNIT.exec(String(e)));
  }
  var ye = (function() {
      function e(t, o) {
        var n;
        if ((void 0 === t && (t = ""), void 0 === o && (o = {}), t instanceof e)) return t;
        "number" == typeof t &&
          (t = (function(e) {
            return { r: e >> 16, g: (65280 & e) >> 8, b: 255 & e };
          })(t)),
          (this.originalInput = t);
        var r = fe(t);
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
          return (this.a = ne(e)), (this.roundA = Math.round(100 * this.a) / 100), this;
        }),
        (e.prototype.toHsv = function() {
          var e = ce(this.r, this.g, this.b);
          return { h: 360 * e.h, s: e.s, v: e.v, a: this.a };
        }),
        (e.prototype.toHsvString = function() {
          var e = ce(this.r, this.g, this.b),
            t = Math.round(360 * e.h),
            o = Math.round(100 * e.s),
            n = Math.round(100 * e.v);
          return 1 === this.a ? "hsv(" + t + ", " + o + "%, " + n + "%)" : "hsva(" + t + ", " + o + "%, " + n + "%, " + this.roundA + ")";
        }),
        (e.prototype.toHsl = function() {
          var e = le(this.r, this.g, this.b);
          return { h: 360 * e.h, s: e.s, l: e.l, a: this.a };
        }),
        (e.prototype.toHslString = function() {
          var e = le(this.r, this.g, this.b),
            t = Math.round(360 * e.h),
            o = Math.round(100 * e.s),
            n = Math.round(100 * e.l);
          return 1 === this.a ? "hsl(" + t + ", " + o + "%, " + n + "%)" : "hsla(" + t + ", " + o + "%, " + n + "%, " + this.roundA + ")";
        }),
        (e.prototype.toHex = function(e) {
          return void 0 === e && (e = !1), se(this.r, this.g, this.b, e);
        }),
        (e.prototype.toHexString = function(e) {
          return void 0 === e && (e = !1), "#" + this.toHex(e);
        }),
        (e.prototype.toHex8 = function(e) {
          return (
            void 0 === e && (e = !1),
            (function(e, t, o, n, r) {
              var a,
                l = [ae(Math.round(e).toString(16)), ae(Math.round(t).toString(16)), ae(Math.round(o).toString(16)), ae(((a = n), Math.round(255 * parseFloat(a)).toString(16)))];
              return r && l[0].startsWith(l[0].charAt(1)) && l[1].startsWith(l[1].charAt(1)) && l[2].startsWith(l[2].charAt(1)) && l[3].startsWith(l[3].charAt(1))
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
            o = Math.round(this.b);
          return 1 === this.a ? "rgb(" + e + ", " + t + ", " + o + ")" : "rgba(" + e + ", " + t + ", " + o + ", " + this.roundA + ")";
        }),
        (e.prototype.toPercentageRgb = function() {
          var e = function(e) {
            return Math.round(100 * te(e, 255)) + "%";
          };
          return { r: e(this.r), g: e(this.g), b: e(this.b), a: this.a };
        }),
        (e.prototype.toPercentageRgbString = function() {
          var e = function(e) {
            return Math.round(100 * te(e, 255));
          };
          return 1 === this.a ? "rgb(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%)" : "rgba(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%, " + this.roundA + ")";
        }),
        (e.prototype.toName = function() {
          if (0 === this.a) return "transparent";
          if (this.a < 1) return !1;
          for (var e = "#" + se(this.r, this.g, this.b, !1), t = 0, o = Object.entries(pe); t < o.length; t++) {
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
          return (o.l += t / 100), (o.l = oe(o.l)), new e(o);
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
          return (o.l -= t / 100), (o.l = oe(o.l)), new e(o);
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
          return (o.s -= t / 100), (o.s = oe(o.s)), new e(o);
        }),
        (e.prototype.saturate = function(t) {
          void 0 === t && (t = 10);
          var o = this.toHsl();
          return (o.s += t / 100), (o.s = oe(o.s)), new e(o);
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
          for (var o = this.toHsv(), n = o.h, r = o.s, a = o.v, l = [], i = 1 / t; t--; ) l.push(new e({ h: n, s: r, v: a })), (a = (a + i) % 1);
          return l;
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
          for (var o = this.toHsl(), n = o.h, r = [this], a = 360 / t, l = 1; l < t; l++) r.push(new e({ h: (n + l * a) % 360, s: o.s, l: o.l }));
          return r;
        }),
        (e.prototype.equals = function(t) {
          return this.toRgbString() === new e(t).toRgbString();
        }),
        e
      );
    })(),
    we = [
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
  function Se(e, t, o) {
    var n;
    return (
      (n = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? (o ? Math.round(e.h) - 2 * t : Math.round(e.h) + 2 * t) : o ? Math.round(e.h) + 2 * t : Math.round(e.h) - 2 * t) < 0
        ? (n += 360)
        : n >= 360 && (n -= 360),
      n
    );
  }
  function ke(e, t, o) {
    return 0 === e.h && 0 === e.s
      ? e.s
      : ((n = o ? e.s - 0.16 * t : 4 === t ? e.s + 0.16 : e.s + 0.05 * t) > 1 && (n = 1), o && 5 === t && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2)));
    var n;
  }
  function Ce(e, t, o) {
    var n;
    return (n = o ? e.v + 0.05 * t : e.v - 0.15 * t) > 1 && (n = 1), Number(n.toFixed(2));
  }
  function xe(e) {
    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = [], n = new ye(e), r = 5; r > 0; r -= 1) {
      var a = n.toHsv(),
        l = new ye({ h: Se(a, r, !0), s: ke(a, r, !0), v: Ce(a, r, !0) }).toHexString();
      o.push(l);
    }
    o.push(n.toHexString());
    for (var i = 1; i <= 4; i += 1) {
      var c = n.toHsv(),
        s = new ye({ h: Se(c, i), s: ke(c, i), v: Ce(c, i) }).toHexString();
      o.push(s);
    }
    return "dark" === t.theme
      ? we.map(function(e) {
          var n = e.index,
            r = e.opacity;
          return new ye(t.backgroundColor || "#141414").mix(o[n], 100 * r).toHexString();
        })
      : o;
  }
  var Pe = {
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
    Oe = {},
    Ne = {};
  Object.keys(Pe).forEach(function(e) {
    (Oe[e] = xe(Pe[e])), (Oe[e].primary = Oe[e][5]), (Ne[e] = xe(Pe[e], { theme: "dark", backgroundColor: "#141414" })), (Ne[e].primary = Ne[e][5]);
  }),
    Oe.red,
    Oe.volcano,
    Oe.gold,
    Oe.orange,
    Oe.yellow,
    Oe.lime,
    Oe.green,
    Oe.cyan,
    Oe.blue,
    Oe.geekblue,
    Oe.purple,
    Oe.magenta,
    Oe.grey;
  var Be = [],
    Te = [];
  function Ve(e, t) {
    if (((t = t || {}), void 0 === e)) throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");
    var o,
      n = !0 === t.prepend ? "prepend" : "append",
      r = void 0 !== t.container ? t.container : document.querySelector("head"),
      a = Be.indexOf(r);
    return (
      -1 === a && ((a = Be.push(r) - 1), (Te[a] = {})),
      void 0 !== Te[a] && void 0 !== Te[a][n]
        ? (o = Te[a][n])
        : ((o = Te[a][n] = (function() {
            var e = document.createElement("style");
            return e.setAttribute("type", "text/css"), e;
          })()),
          "prepend" === n ? r.insertBefore(o, r.childNodes[0]) : r.appendChild(o)),
      65279 === e.charCodeAt(0) && (e = e.substr(1, e.length)),
      o.styleSheet ? (o.styleSheet.cssText += e) : (o.textContent += e),
      o
    );
  }
  function je(e) {
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
          _e(e, t, o[t]);
        });
    }
    return e;
  }
  function _e(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
  }
  function Ae(e) {
    return "object" == typeof e && "string" == typeof e.name && "string" == typeof e.theme && ("object" == typeof e.icon || "function" == typeof e.icon);
  }
  function Me(e, o, n) {
    return n
      ? t.h(
          e.tag,
          je({ key: o }, n, e.attrs),
          (e.children || []).map(function(t, n) {
            return Me(
              t,
              ""
                .concat(o, "-")
                .concat(e.tag, "-")
                .concat(n)
            );
          })
        )
      : t.h(
          e.tag,
          je({ key: o }, e.attrs),
          (e.children || []).map(function(t, n) {
            return Me(
              t,
              ""
                .concat(o, "-")
                .concat(e.tag, "-")
                .concat(n)
            );
          })
        );
  }
  function Ie(e) {
    return xe(e)[0];
  }
  function De(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
  }
  var Ee =
      "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",
    Le = !1;
  function He(e, t) {
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
  function Re(e) {
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
  var $e = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
  var Fe = function(e, o) {
    var n = Re({}, e, o.attrs),
      r = n.icon,
      a = n.primaryColor,
      l = n.secondaryColor,
      i = He(n, ["icon", "primaryColor", "secondaryColor"]),
      c = $e;
    if (
      (a && (c = { primaryColor: a, secondaryColor: l || Ie(a) }),
      (function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ee;
        t.nextTick(function() {
          Le || ("undefined" != typeof window && window.document && window.document.documentElement && Ve(e, { prepend: !0 }), (Le = !0));
        });
      })(),
      Ae(r),
      !Ae(r))
    )
      return null;
    var s = r;
    return (
      s && "function" == typeof s.icon && (s = Re({}, s, { icon: s.icon(c.primaryColor, c.secondaryColor) })),
      Me(s.icon, "svg-".concat(s.name), Re({}, i, { "data-icon": s.name, width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }))
    );
  };
  (Fe.props = { icon: Object, primaryColor: String, secondaryColor: String, focusable: String }),
    (Fe.inheritAttrs = !1),
    (Fe.displayName = "IconBase"),
    (Fe.getTwoToneColors = function() {
      return Re({}, $e);
    }),
    (Fe.setTwoToneColors = function(e) {
      var t = e.primaryColor,
        o = e.secondaryColor;
      ($e.primaryColor = t), ($e.secondaryColor = o || Ie(t)), ($e.calculated = !!o);
    });
  var Ue = Fe;
  function We(e, t) {
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
          for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (o.push(l.value), !t || o.length !== t); n = !0);
        } catch (c) {
          (r = !0), (a = c);
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (r) throw a;
          }
        }
        return o;
      })(e, t) ||
      (function(e, t) {
        if (!e) return;
        if ("string" == typeof e) return qe(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === o && e.constructor && (o = e.constructor.name);
        if ("Map" === o || "Set" === o) return Array.from(e);
        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return qe(e, t);
      })(e, t) ||
      (function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      })()
    );
  }
  function qe(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
    return n;
  }
  function Ke(e) {
    var t = We(De(e), 2),
      o = t[0],
      n = t[1];
    return Ue.setTwoToneColors({ primaryColor: o, secondaryColor: n });
  }
  function Ye(e, t) {
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
          for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (o.push(l.value), !t || o.length !== t); n = !0);
        } catch (c) {
          (r = !0), (a = c);
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (r) throw a;
          }
        }
        return o;
      })(e, t) ||
      (function(e, t) {
        if (!e) return;
        if ("string" == typeof e) return Je(e, t);
        var o = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === o && e.constructor && (o = e.constructor.name);
        if ("Map" === o || "Set" === o) return Array.from(e);
        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Je(e, t);
      })(e, t) ||
      (function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      })()
    );
  }
  function Je(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
    return n;
  }
  function Qe(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
  }
  function Ze(e, t) {
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
  Ke("#1890ff");
  var Ge = function(e, t) {
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
              Qe(e, t, o[t]);
            });
        }
        return e;
      })({}, e, t.attrs),
      r = n.class,
      a = n.icon,
      l = n.spin,
      i = n.rotate,
      s = n.tabindex,
      d = n.twoToneColor,
      u = n.onClick,
      p = Ze(n, ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"]),
      f = (Qe((o = { anticon: !0 }), "anticon-".concat(a.name), Boolean(a.name)), Qe(o, r, r), o),
      h = "" === l || l || "loading" === a.name ? "anticon-spin" : "",
      m = s;
    void 0 === m && u && ((m = -1), (p.tabindex = m));
    var g = i ? { msTransform: "rotate(".concat(i, "deg)"), transform: "rotate(".concat(i, "deg)") } : void 0,
      b = Ye(De(d), 2),
      v = b[0],
      y = b[1];
    return c.createVNode("span", c.mergeProps(p, { role: "img", "aria-label": a.name, onClick: u, class: f }), [
      c.createVNode(Ue, { class: h, icon: a, primaryColor: v, secondaryColor: y, style: g }, null),
    ]);
  };
  (Ge.props = { spin: Boolean, rotate: Number, icon: Object, twoToneColor: String }),
    (Ge.displayName = "AntdIcon"),
    (Ge.inheritAttrs = !1),
    (Ge.getTwoToneColor = function() {
      var e = Ue.getTwoToneColors();
      return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
    }),
    (Ge.setTwoToneColor = Ke);
  var Xe = Ge,
    et = {
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
  function tt(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
  }
  var ot = function(e, t) {
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
            tt(e, t, o[t]);
          });
      }
      return e;
    })({}, e, t.attrs);
    return c.createVNode(Xe, c.mergeProps(o, { icon: et }), null);
  };
  (ot.displayName = "CloseOutlined"), (ot.inheritAttrs = !1);
  var nt = ot,
    rt = {
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
  function at(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
  }
  var lt = function(e, t) {
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
            at(e, t, o[t]);
          });
      }
      return e;
    })({}, e, t.attrs);
    return c.createVNode(Xe, c.mergeProps(o, { icon: rt }), null);
  };
  (lt.displayName = "CompassOutlined"), (lt.inheritAttrs = !1);
  var it = lt,
    ct = {
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
  function st(e, t, o) {
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
            st(e, t, o[t]);
          });
      }
      return e;
    })({}, e, t.attrs);
    return c.createVNode(Xe, c.mergeProps(o, { icon: ct }), null);
  };
  (dt.displayName = "DesktopOutlined"), (dt.inheritAttrs = !1);
  var ut = dt,
    pt = {
      icon: {
        tag: "svg",
        attrs: { viewBox: "64 64 896 896", focusable: "false" },
        children: [
          {
            tag: "path",
            attrs: {
              d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
            },
          },
          { tag: "path", attrs: { d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } },
        ],
      },
      name: "exclamation-circle",
      theme: "outlined",
    };
  function ft(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
  }
  var ht = function(e, t) {
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
            ft(e, t, o[t]);
          });
      }
      return e;
    })({}, e, t.attrs);
    return c.createVNode(Xe, c.mergeProps(o, { icon: pt }), null);
  };
  (ht.displayName = "ExclamationCircleOutlined"), (ht.inheritAttrs = !1);
  var mt = ht,
    gt = {
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
  function bt(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
  }
  var vt = function(e, t) {
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
            bt(e, t, o[t]);
          });
      }
      return e;
    })({}, e, t.attrs);
    return c.createVNode(Xe, c.mergeProps(o, { icon: gt }), null);
  };
  (vt.displayName = "LogoutOutlined"), (vt.inheritAttrs = !1);
  var yt = vt,
    wt = {
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
    return c.createVNode(Xe, c.mergeProps(o, { icon: wt }), null);
  };
  (kt.displayName = "MenuFoldOutlined"), (kt.inheritAttrs = !1);
  var Ct = kt,
    xt = {
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
  function Pt(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
  }
  var Ot = function(e, t) {
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
            Pt(e, t, o[t]);
          });
      }
      return e;
    })({}, e, t.attrs);
    return c.createVNode(Xe, c.mergeProps(o, { icon: xt }), null);
  };
  (Ot.displayName = "MenuUnfoldOutlined"), (Ot.inheritAttrs = !1);
  var Nt = Ot,
    Bt = {
      icon: {
        tag: "svg",
        attrs: { viewBox: "64 64 896 896", focusable: "false" },
        children: [
          {
            tag: "path",
            attrs: {
              d: "M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z",
            },
          },
        ],
      },
      name: "mobile",
      theme: "outlined",
    };
  function Tt(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
  }
  var Vt = function(e, t) {
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
            Tt(e, t, o[t]);
          });
      }
      return e;
    })({}, e, t.attrs);
    return c.createVNode(Xe, c.mergeProps(o, { icon: Bt }), null);
  };
  (Vt.displayName = "MobileOutlined"), (Vt.inheritAttrs = !1);
  var jt = Vt,
    _t = {
      icon: {
        tag: "svg",
        attrs: { viewBox: "64 64 896 896", focusable: "false" },
        children: [{ tag: "path", attrs: { d: "M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z" } }],
      },
      name: "more",
      theme: "outlined",
    };
  function At(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
  }
  var Mt = function(e, t) {
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
    return c.createVNode(Xe, c.mergeProps(o, { icon: _t }), null);
  };
  (Mt.displayName = "MoreOutlined"), (Mt.inheritAttrs = !1);
  var It = Mt,
    Dt = {
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
  function Et(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
  }
  var Lt = function(e, t) {
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
            Et(e, t, o[t]);
          });
      }
      return e;
    })({}, e, t.attrs);
    return c.createVNode(Xe, c.mergeProps(o, { icon: Dt }), null);
  };
  (Lt.displayName = "ReloadOutlined"), (Lt.inheritAttrs = !1);
  var Ht = Lt,
    Rt = {
      icon: {
        tag: "svg",
        attrs: { viewBox: "64 64 896 896", focusable: "false" },
        children: [
          {
            tag: "path",
            attrs: {
              d: "M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H232V136h560v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z",
            },
          },
        ],
      },
      name: "tablet",
      theme: "outlined",
    };
  function zt(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
  }
  var $t = function(e, t) {
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
            zt(e, t, o[t]);
          });
      }
      return e;
    })({}, e, t.attrs);
    return c.createVNode(Xe, c.mergeProps(o, { icon: Rt }), null);
  };
  ($t.displayName = "TabletOutlined"), ($t.inheritAttrs = !1);
  var Ft = $t,
    Ut = {
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
  function Wt(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = o), e;
  }
  var qt = function(e, t) {
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
            Wt(e, t, o[t]);
          });
      }
      return e;
    })({}, e, t.attrs);
    return c.createVNode(Xe, c.mergeProps(o, { icon: Ut }), null);
  };
  (qt.displayName = "UnlockOutlined"), (qt.inheritAttrs = !1);
  var Kt = qt,
    Yt = t.defineComponent({
      name: d("Header"),
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
      components: { MenuFoldOutlined: Ct, MenuUnfoldOutlined: Nt },
    });
  const Jt = t.withScopeId("data-v-8fd33262");
  t.pushScopeId("data-v-8fd33262");
  const Qt = t.createVNode("div", { class: "flex-1" }, null, -1);
  t.popScopeId();
  const Zt = Jt((e, o, n, r, a, l) => {
    var i, c;
    const s = t.resolveComponent("MenuFoldOutlined"),
      d = t.resolveComponent("MenuUnfoldOutlined"),
      u = t.resolveComponent("a-avatar");
    return (
      t.openBlock(),
      t.createBlock(
        t.Fragment,
        null,
        [
          t.withDirectives(t.createVNode(s, { class: "text-18", onClick: e.colToggle }, null, 8, ["onClick"]), [[t.vShow, !e.collapsed]]),
          t.withDirectives(t.createVNode(d, { class: "text-18", onClick: e.colToggle }, null, 8, ["onClick"]), [[t.vShow, e.collapsed]]),
          Qt,
          t.createVNode("span", { class: "dropdown-trigger px-8 cursor-pointer easi-hover-block", onClick: o[1] || (o[1] = (...t) => e.handleShowSetting && e.handleShowSetting(...t)) }, [
            (null == (i = e.userInfo)
            ? void 0
            : i.avatar)
              ? (t.openBlock(),
                t.createBlock(u, { key: 0, class: "mr-8", shape: "circle", size: "default", src: e.userInfo.avatar, style: { backgroundColor: "#ffbf00", verticalAlign: "middle" } }, null, 8, ["src"]))
              : t.createCommentVNode("", !0),
            t.createVNode("span", null, t.toDisplayString((null == (c = e.userInfo) ? void 0 : c.name) || "用户名"), 1),
          ]),
        ],
        64
      )
    );
  });
  (Yt.render = Zt), (Yt.__scopeId = "data-v-8fd33262");
  var Gt = t.defineComponent({
    name: d("Setting"),
    emits: ["update:visible"],
    props: {
      userInfo: { type: Object, default: () => ({}) },
      showTabSetting: { type: Boolean, default: !0 },
      onLogout: { type: Function, default: void 0 },
      toDashboard: { type: Function, default: void 0 },
      editPassword: { type: Function, default: void 0 },
    },
    setup(e) {
      const o = t.inject("globalProvider", __spreadValues({}, m)),
        r = t.inject("globalEASILocale", { message: {} });
      return {
        globalProvider: o,
        setSetting: (e, n) => {
          (o[e] = n),
            (function(e) {
              const o = t.toRaw(e),
                { cachedPage: n, reloadPage: r } = o,
                a = __objRest(o, ["cachedPage", "reloadPage"]);
              !0 === a.mode || "dark" === a.mode ? h.setAttribute("data-pro-theme", "antdv-pro-theme-dark") : h.removeAttribute("data-pro-theme"), u.exports.setLocal(f, a);
            })(o);
        },
        handleLogout() {
          n.Modal.confirm({
            title: r.message.logoutTitle,
            icon: t.createVNode(mt),
            content: r.message.logoutMessage,
            centered: !0,
            okText: r.message.confirm,
            cancelText: r.message.cancel,
            onOk: async () => !(null == e ? void 0 : e.onLogout) || e.onLogout(),
          });
        },
        handleToDashBoard() {
          (null == e ? void 0 : e.toDashboard) && e.toDashboard();
        },
        handleEditPassword() {
          (null == e ? void 0 : e.editPassword) && e.editPassword();
        },
        transformTime: (e) => s.default(e).format("YYYY-MM-DD HH:mm:ss"),
        globalEASILocale: r,
      };
    },
    components: { LogoutOutlined: yt, ExclamationCircleOutlined: mt, CompassOutlined: it, UnlockOutlined: Kt, MobileOutlined: jt, DesktopOutlined: ut, TabletOutlined: Ft },
  });
  const Xt = t.withScopeId("data-v-1c127e40");
  t.pushScopeId("data-v-1c127e40");
  const eo = { class: "flex items-center" },
    to = { class: "flex items-center" },
    oo = { class: "m-0" },
    no = { class: "flex items-center mb-24" },
    ro = { class: "flex-1" },
    ao = { key: 1, class: "flex items-center mb-24" },
    lo = { class: "flex-1" },
    io = { key: 2, class: "flex items-center mb-24" },
    co = { class: "flex-1" };
  t.popScopeId();
  const so = Xt((e, o, n, r, a, l) => {
    const i = t.resolveComponent("a-avatar"),
      c = t.resolveComponent("a-typography-text"),
      s = t.resolveComponent("DesktopOutlined"),
      d = t.resolveComponent("MobileOutlined"),
      u = t.resolveComponent("TabletOutlined"),
      p = t.resolveComponent("a-divider"),
      f = t.resolveComponent("a-switch"),
      h = t.resolveComponent("CompassOutlined"),
      m = t.resolveComponent("UnlockOutlined"),
      g = t.resolveComponent("LogoutOutlined"),
      b = t.resolveComponent("a-drawer");
    return (
      t.openBlock(),
      t.createBlock(
        b,
        t.mergeProps({ placement: "right", width: "320px" }, e.$attrs, { onClose: o[7] || (o[7] = (t) => e.$emit("update:visible", !1)) }),
        {
          title: Xt(() => {
            var o, n;
            return [
              t.createVNode("header", eo, [
                (null == (o = e.userInfo)
                ? void 0
                : o.avatar)
                  ? (t.openBlock(),
                    t.createBlock(
                      i,
                      { key: 0, shape: "circle", size: "default", src: e.userInfo.avatar, style: { backgroundColor: "#ffbf00", verticalAlign: "middle", marginRight: "8px" } },
                      null,
                      8,
                      ["src"]
                    ))
                  : t.createCommentVNode("", !0),
                t.createTextVNode(" " + t.toDisplayString((null == (n = e.userInfo) ? void 0 : n.name) || "用户名"), 1),
              ]),
            ];
          }),
          default: Xt(() => {
            var n, r;
            return [
              t.renderSlot(e.$slots, "action-render", {}, void 0, !0),
              (null == (r = null == (n = e.userInfo) ? void 0 : n.devices) ? void 0 : r.length) > 0
                ? (t.openBlock(),
                  t.createBlock(
                    t.Fragment,
                    { key: 0 },
                    [
                      t.createVNode(c, { strong: "", class: "block mb-32" }, { default: Xt(() => [t.createTextVNode(t.toDisplayString(e.globalEASILocale.message.deviceTitle), 1)]), _: 1 }),
                      (t.openBlock(!0),
                      t.createBlock(
                        t.Fragment,
                        null,
                        t.renderList(
                          e.userInfo.devices,
                          (o) => (
                            t.openBlock(),
                            t.createBlock("div", { class: "mb-32", key: o.id }, [
                              t.createVNode("p", to, [
                                t.createVNode(
                                  c,
                                  { type: "secondary" },
                                  {
                                    default: Xt(() => [
                                      "Desktop" === o.device_type
                                        ? (t.openBlock(), t.createBlock(s, { key: 0 }))
                                        : "Mobile" === o.device_type
                                        ? (t.openBlock(), t.createBlock(d, { key: 1 }))
                                        : "Tablet" === o.device_type
                                        ? (t.openBlock(), t.createBlock(u, { key: 2 }))
                                        : t.createCommentVNode("", !0),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                                t.createVNode(c, { class: "flex-1 px-8" }, { default: Xt(() => [t.createTextVNode(" IP: " + t.toDisplayString(o.ip), 1)]), _: 2 }, 1024),
                              ]),
                              t.createVNode("p", oo, [
                                t.createVNode(
                                  c,
                                  { type: "secondary" },
                                  {
                                    default: Xt(() => [t.createTextVNode(t.toDisplayString(e.globalEASILocale.message.deviceLoginTime) + " " + t.toDisplayString(e.transformTime(o.active_at)), 1)]),
                                    _: 2,
                                  },
                                  1024
                                ),
                              ]),
                            ])
                          )
                        ),
                        128
                      )),
                      t.createVNode(p),
                    ],
                    64
                  ))
                : t.createCommentVNode("", !0),
              t.createVNode(c, { strong: "", class: "block mb-32" }, { default: Xt(() => [t.createTextVNode(t.toDisplayString(e.globalEASILocale.message.styleSetting), 1)]), _: 1 }),
              t.createVNode("div", no, [
                t.createVNode("span", ro, [t.createVNode(c, null, { default: Xt(() => [t.createTextVNode(t.toDisplayString(e.globalEASILocale.message.darkSetting), 1)]), _: 1 })]),
                t.createVNode("div", null, [t.createVNode(f, { checked: e.globalProvider.mode, onChange: o[1] || (o[1] = (t) => e.setSetting("mode", t)) }, null, 8, ["checked"])]),
              ]),
              e.showTabSetting
                ? (t.openBlock(),
                  t.createBlock("div", ao, [
                    t.createVNode("span", lo, [t.createVNode(c, null, { default: Xt(() => [t.createTextVNode(t.toDisplayString(e.globalEASILocale.message.showTabSetting), 1)]), _: 1 })]),
                    t.createVNode("div", null, [t.createVNode(f, { checked: e.globalProvider.showTab, onChange: o[2] || (o[2] = (t) => e.setSetting("showTab", t)) }, null, 8, ["checked"])]),
                  ]))
                : t.createCommentVNode("", !0),
              e.showTabSetting
                ? (t.openBlock(),
                  t.createBlock("div", io, [
                    t.createVNode("span", co, [t.createVNode(c, null, { default: Xt(() => [t.createTextVNode(t.toDisplayString(e.globalEASILocale.message.fixedTabSetting), 1)]), _: 1 })]),
                    t.createVNode("div", null, [t.createVNode(f, { checked: e.globalProvider.fixedTab, onChange: o[3] || (o[3] = (t) => e.setSetting("fixedTab", t)) }, null, 8, ["checked"])]),
                  ]))
                : t.createCommentVNode("", !0),
              t.createVNode(p),
              e.onLogout || e.toDashboard || e.editPassword
                ? (t.openBlock(),
                  t.createBlock(c, { key: 3, strong: "", class: "block margin-bottom" }, { default: Xt(() => [t.createTextVNode(t.toDisplayString(e.globalEASILocale.message.more), 1)]), _: 1 }))
                : t.createCommentVNode("", !0),
              e.toDashboard
                ? (t.openBlock(),
                  t.createBlock(
                    "div",
                    { key: 4, class: "more-item flex items-center cursor-pointer easi-hover-block", onClick: o[4] || (o[4] = (...t) => e.handleToDashBoard && e.handleToDashBoard(...t)) },
                    [
                      t.createVNode(h, { class: "mr-8 text-14" }),
                      t.createVNode(c, null, { default: Xt(() => [t.createTextVNode(t.toDisplayString(e.globalEASILocale.message.backToDashBoard), 1)]), _: 1 }),
                    ]
                  ))
                : t.createCommentVNode("", !0),
              e.editPassword
                ? (t.openBlock(),
                  t.createBlock(
                    "div",
                    { key: 5, class: "more-item flex items-center cursor-pointer easi-hover-block", onClick: o[5] || (o[5] = (...t) => e.handleEditPassword && e.handleEditPassword(...t)) },
                    [
                      t.createVNode(m, { class: "mr-8 text-14" }),
                      t.createVNode(c, null, { default: Xt(() => [t.createTextVNode(t.toDisplayString(e.globalEASILocale.message.editPassword), 1)]), _: 1 }),
                    ]
                  ))
                : t.createCommentVNode("", !0),
              e.onLogout
                ? (t.openBlock(),
                  t.createBlock(
                    "div",
                    { key: 6, class: "more-item flex items-center cursor-pointer text-red-400 easi-hover-block", onClick: o[6] || (o[6] = (...t) => e.handleLogout && e.handleLogout(...t)) },
                    [
                      t.createVNode(g, { class: "mr-8 text-14" }),
                      t.createVNode(c, { type: "danger" }, { default: Xt(() => [t.createTextVNode(t.toDisplayString(e.globalEASILocale.message.logout), 1)]), _: 1 }),
                    ]
                  ))
                : t.createCommentVNode("", !0),
            ];
          }),
          _: 3,
        },
        16
      )
    );
  });
  (Gt.render = so), (Gt.__scopeId = "data-v-1c127e40");
  var uo = t.defineComponent({
    name: d("Tab"),
    emits: ["reloadPage"],
    setup(e, { emit: n }) {
      const r = o.useRoute(),
        a = o.useRouter(),
        l = t.inject("globalProvider", __spreadValues({}, m)),
        i = t.ref(""),
        c = t.ref([]),
        s = () => {
          if (((i.value = r.fullPath), "Index" !== r.name && (0 === c.value.length || !c.value.some((e) => e.fullPath === r.fullPath)))) {
            const e = r.meta;
            c.value.push({ title: r.query.title || r.meta.title, fullPath: r.fullPath, name: r.name, cached: !0 === e.cached || void 0 === e.cached });
          }
        };
      s(),
        t.watch(
          () => r.fullPath,
          () => {
            s();
          }
        );
      const d = () => {
        n("reloadPage");
      };
      return {
        activeKey: i,
        panes: c,
        toPage: (e) => {
          e !== i.value && a.push(e);
        },
        reloadPage: d,
        removeTab: (e) => {
          const { fullPath: t, name: o, cached: n } = c.value[e];
          c.value.splice(e, 1), n && (l.cachedPage = l.cachedPage.filter((e) => e !== o)), t === i.value && ((i.value = c.value[c.value.length - 1].fullPath), a.push(i.value));
        },
        action({ key: e }) {
          switch (e) {
            case "closeAll":
              (c.value = c.value.filter((e) => e.fullPath === i.value)), (l.cachedPage = c.value[0].cached ? [c.value[0].name] : []);
              break;
            case "refresh":
              d();
          }
        },
        getEASIText: v,
      };
    },
    components: { MoreOutlined: It, ReloadOutlined: Ht, CloseOutlined: nt },
  });
  const po = t.withScopeId("data-v-1b967ae2");
  t.pushScopeId("data-v-1b967ae2");
  const fo = { class: "flex items-center" };
  t.popScopeId();
  const ho = po((e, o, n, r, a, l) => {
    const i = t.resolveComponent("ReloadOutlined"),
      c = t.resolveComponent("CloseOutlined"),
      s = t.resolveComponent("a-tab-pane"),
      d = t.resolveComponent("MoreOutlined"),
      u = t.resolveComponent("a-menu-item"),
      p = t.resolveComponent("a-menu"),
      f = t.resolveComponent("a-dropdown"),
      h = t.resolveComponent("a-tabs");
    return (
      t.openBlock(),
      t.createBlock(
        h,
        { activeKey: e.activeKey, tabBarStyle: { paddingLeft: "16px" }, "hide-add": "", onTabClick: e.toPage, type: "editable-card", class: "page-tab" },
        {
          tabBarExtraContent: po(() => [
            t.createVNode(
              f,
              { onClick: e.action },
              {
                overlay: po(() => [
                  t.createVNode(
                    p,
                    { onClick: e.action },
                    {
                      default: po(() => [
                        t.createVNode(u, { key: "closeAll" }, { default: po(() => [t.createTextVNode(t.toDisplayString(e.getEASIText("closeOther")), 1)]), _: 1 }),
                        t.createVNode(u, { key: "refresh" }, { default: po(() => [t.createTextVNode(t.toDisplayString(e.getEASIText("refreshPage")), 1)]), _: 1 }),
                      ]),
                      _: 1,
                    },
                    8,
                    ["onClick"]
                  ),
                ]),
                default: po(() => [
                  t.createVNode("a", { class: "ant-dropdown-link p-12 mr-8", onClick: o[1] || (o[1] = t.withModifiers(() => {}, ["prevent"])) }, [t.createVNode(d, { class: "text-16 leading-0" })]),
                ]),
                _: 1,
              },
              8,
              ["onClick"]
            ),
          ]),
          default: po(() => [
            (t.openBlock(!0),
            t.createBlock(
              t.Fragment,
              null,
              t.renderList(
                e.panes,
                (o, n) => (
                  t.openBlock(),
                  t.createBlock(
                    s,
                    { key: o.fullPath, closable: !1 },
                    {
                      tab: po(() => [
                        t.createVNode("span", fo, [
                          t.createTextVNode(t.toDisplayString(o.title) + " ", 1),
                          t.withDirectives(t.createVNode(i, { class: "icon-action text-12 leading-0 ml-8", onClick: t.withModifiers(e.reloadPage, ["stop"]) }, null, 8, ["onClick"]), [
                            [t.vShow, o.fullPath === e.activeKey],
                          ]),
                          t.withDirectives(t.createVNode(c, { class: "icon-action text-12 leading-0 ml-8", onClick: t.withModifiers((t) => e.removeTab(n), ["stop"]) }, null, 8, ["onClick"]), [
                            [t.vShow, 1 !== e.panes.length],
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
  (uo.render = ho), (uo.__scopeId = "data-v-1b967ae2");
  var mo = t.defineComponent({
    name: d("Layout"),
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
      const { nav: n } = t.toRefs(e),
        r = o.useRoute(),
        a = o.useRouter(),
        l = t.ref(u.exports.isMobile()),
        i = t.ref(!0),
        c = t.ref(l.value),
        s = t.ref(!1),
        d = t.inject("globalProvider", __spreadValues({}, m));
      let p;
      t.watch(
        () => d.fixedTab,
        () => {
          clearTimeout(p),
            (i.value = !1),
            (p = setTimeout(() => {
              i.value = !0;
            }, 200));
        }
      );
      const f = () => {
        r.meta.cached && !d.cachedPage.includes(r.name) && (d.cachedPage = [...d.cachedPage, r.name]);
      };
      f(),
        t.watch(
          () => r.name,
          (e) => {
            f();
          }
        );
      const h = () => {
        u.exports.debounced(() => {
          c.value && window.innerWidth > 1200 ? (c.value = !1) : !c.value && window.innerWidth <= 1200 && (c.value = !0),
            l.value && window.innerWidth > 750 ? (l.value = !1) : !l.value && window.innerWidth <= 750 && (l.value = !0);
        }, 250)();
      };
      return (
        h(),
        window.addEventListener("resize", h, !1),
        t.onMounted(() => {
          "Index" === r.name && n.value.length > 0 && a.replace(n.value[0].path);
        }),
        t.onBeforeUnmount(() => {
          window.removeEventListener("resize", h, !1);
        }),
        {
          isH5: l,
          showSetting: s,
          collapsed: c,
          addTransition: i,
          setCollapsed() {
            c.value = !c.value;
          },
          collWidth: t.computed(() => (c.value ? "80px" : "200px")),
          globalProvider: d,
          cachedPage: t.computed(() => (d.showTab ? d.cachedPage : [])),
          onReloadPage: async (e = !1) => (
            await (async function(e, o, n = !1) {
              n ? (e.cachedPage = []) : !1 !== o.meta.cached && (e.cachedPage = e.cachedPage.filter((e) => o.name !== e)),
                (e.reloadPage = !1),
                await t.nextTick(),
                !1 !== o.meta.cached && (e.cachedPage = [...e.cachedPage, o.name]),
                (e.reloadPage = !0);
            })(d, r, e),
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
    components: { PageNav: ee, PageHeader: Yt, PageSetting: Gt, PageTab: uo },
  });
  const go = t.withScopeId("data-v-5979bddb");
  t.pushScopeId("data-v-5979bddb");
  const bo = t.createVNode("div", { class: "h-48" }, null, -1),
    vo = { key: 1, class: "h-64" };
  t.popScopeId();
  const yo = go((e, o, n, r, a, l) => {
    const i = t.resolveComponent("PageNav"),
      c = t.resolveComponent("PageHeader"),
      s = t.resolveComponent("a-layout-header"),
      d = t.resolveComponent("PageTab"),
      u = t.resolveComponent("router-view"),
      p = t.resolveComponent("a-layout-content"),
      f = t.resolveComponent("a-layout-footer"),
      h = t.resolveComponent("a-layout"),
      m = t.resolveComponent("PageSetting");
    return (
      t.openBlock(),
      t.createBlock(
        h,
        { class: "min-h-screen" },
        {
          default: go(() => [
            t.createVNode(
              i,
              {
                collapsed: e.collapsed,
                "coll-width": e.collWidth,
                isH5: e.isH5,
                logo: e.logo,
                "sub-title": e.subTitle,
                title: e.title,
                nav: e.nav,
                onHideMenu: o[1] || (o[1] = (t) => (e.collapsed = !0)),
              },
              null,
              8,
              ["collapsed", "coll-width", "isH5", "logo", "sub-title", "title", "nav"]
            ),
            t.createVNode(h, null, {
              default: go(() => [
                bo,
                t.createVNode(
                  s,
                  {
                    class: ["page-header fixed top-0 right-0 bg-white flex items-center h-48 leading-48 pl-16 pr-16 z-10", { "transition-width": !e.isH5 }],
                    style: { width: e.isH5 ? "100%" : `calc(100% - ${e.collWidth})` },
                  },
                  {
                    default: go(() => [
                      t.createVNode(c, { collapsed: e.collapsed, userInfo: e.userInfo, onColToggle: e.setCollapsed, onHandleShowSetting: e.handleShowSetting }, null, 8, [
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
                  ? (t.openBlock(),
                    t.createBlock(
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
                  : t.createCommentVNode("", !0),
                e.globalProvider.showTab && e.globalProvider.fixedTab ? (t.openBlock(), t.createBlock("div", vo)) : t.createCommentVNode("", !0),
                t.createVNode(p, null, {
                  default: go(() => [
                    t.createVNode(u, null, {
                      default: go(({ Component: o }) => [
                        t.createVNode(
                          t.Transition,
                          { name: "slid-up", mode: "out-in" },
                          {
                            default: go(() => [
                              (t.openBlock(),
                              t.createBlock(
                                t.KeepAlive,
                                { include: e.globalProvider.cachedPage },
                                [e.globalProvider.reloadPage ? (t.openBlock(), t.createBlock(t.resolveDynamicComponent(o), { key: (o || {}).name })) : t.createCommentVNode("", !0)],
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
                t.createVNode(f, { class: "px-16 py-12 text-center" }, { default: go(() => [t.createTextVNode(" © " + t.toDisplayString(e.copyRightYear()) + " EASI, Make Life Easier. ", 1)]), _: 1 }),
              ]),
              _: 1,
            }),
            t.createVNode(
              m,
              {
                visible: e.showSetting,
                "onUpdate:visible": o[2] || (o[2] = (t) => (e.showSetting = t)),
                userInfo: e.userInfo,
                showTabSetting: e.showTabSetting,
                onLogout: e.onLogout,
                toDashboard: e.toDashboard,
                editPassword: e.editPassword,
              },
              { "action-render": go(() => [t.renderSlot(e.$slots, "action-render", {}, void 0, !0)]), _: 3 },
              8,
              ["visible", "userInfo", "showTabSetting", "onLogout", "toDashboard", "editPassword"]
            ),
          ]),
          _: 1,
        }
      )
    );
  });
  (mo.render = yo),
    (mo.__scopeId = "data-v-5979bddb"),
    (mo.install = (e) => {
      e.component(mo.name, mo);
    });
  var wo = t.defineComponent({ name: d("Table"), props: { loading: { type: Boolean, default: !1 }, styleClass: { type: String }, scroll: { type: Object, default: () => ({ x: 1620 }) } } });
  (wo.render = function(e, o, n, r, a, l) {
    const i = t.resolveComponent("a-space"),
      c = t.resolveComponent("a-col"),
      s = t.resolveComponent("a-row"),
      d = t.resolveComponent("a-table"),
      u = t.resolveDirective("loading");
    return t.withDirectives(
      (t.openBlock(),
      t.createBlock(
        d,
        t.mergeProps({ scroll: e.scroll }, e.$attrs),
        t.createSlots({ _: 2 }, [
          e.$slots.headerLeft || e.$slots.headerRight
            ? {
                name: "title",
                fn: t.withCtx(() => [
                  t.createVNode(
                    s,
                    { align: "middle", class: ["flex-wrap", e.styleClass] },
                    {
                      default: t.withCtx(() => [
                        t.createVNode(
                          c,
                          { flex: 1, class: "md:min-w-0" },
                          {
                            default: t.withCtx(() => [
                              e.$slots.headerLeft
                                ? (t.openBlock(), t.createBlock(i, { key: 0, class: "flex-wrap" }, { default: t.withCtx(() => [t.renderSlot(e.$slots, "headerLeft")]), _: 3 }))
                                : t.createCommentVNode("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                        t.createVNode(c, null, {
                          default: t.withCtx(() => [
                            e.$slots.headerRight
                              ? (t.openBlock(), t.createBlock(i, { key: 0 }, { default: t.withCtx(() => [t.renderSlot(e.$slots, "headerRight")]), _: 3 }))
                              : t.createCommentVNode("", !0),
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
          t.renderList(e.$slots, (o, n) => ({
            name: n,
            fn: t.withCtx((o) => [
              "title" !== e.$slots.name && "headerLeft" !== e.$slots.name && "headerRight" !== e.$slots.name ? t.renderSlot(e.$slots, n, t.mergeProps({ key: 0 }, o)) : t.createCommentVNode("", !0),
            ]),
          })),
        ]),
        1040,
        ["scroll"]
      )),
      [[u, e.loading]]
    );
  }),
    (wo.install = (e) => {
      e.component(wo.name, wo);
    }),
    (Gt.install = (e) => {
      e.component(Gt.name, Gt);
    });
  var So = {
      install: (e) => {
        (e.config.globalProperties.$usePermissions = (t, o = "in") => {
          var n, r;
          let a = !1;
          const l = (null == (r = null == (n = e.config.globalProperties.$store.state) ? void 0 : n.permission) ? void 0 : r.permissionMap) || {};
          return Array.isArray(t) ? ("in" === o ? (a = t.some((e) => !!l[e])) : "all" === o && (a = t.every((e) => !!l[e]))) : "string" == typeof t && (a = !!l[t]), a;
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
    ko = {
      install: (e) => {
        const o = (e) => {
            e &&
              setTimeout(() => {
                var t, o;
                (e.domInserted = !1), null == (o = null == (t = null == e ? void 0 : e.loadingRoot) ? void 0 : t.parentElement) || o.removeChild(null == e ? void 0 : e.loadingRoot);
              }, 300);
          },
          n = async (n, r) => {
            let a = "",
              l = !0,
              i = "normal";
            if ("object" == typeof r.value) {
              const { title: e, show: t, size: o = "normal" } = r.value;
              (a = e), (l = t), (i = o);
            } else l = r.value;
            l
              ? (await t.nextTick(() => {
                  (n.originalPosition = getComputedStyle(n, null).position),
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
                    })(n, a, i);
                }),
                (n.domInserted = !0))
              : ((n.comp.cShow = !1), n.domInserted && o(n));
          };
        e.directive("loading", {
          async beforeMount(e, o) {
            const r = t.createApp(H);
            (e.loading = e), (e.loadingRoot = document.createElement("div")), (e.comp = r.mount(e.loadingRoot)), await n(e, o);
          },
          async updated(e, t) {
            t.oldValue !== t.value && (await n(e, t));
          },
          async beforeUnmount(e) {
            e.domInserted && ((e.loading = e), o(e)), (e.comp = null);
          },
        });
      },
    };
  const Co = [y, k, x, N, j, mo, H, W, M, wo, Gt],
    xo = [So],
    Po = (e) => {
      xo.forEach((t) => {
        e.use(t);
      }),
        e.use(ko),
        Co.forEach((t) => {
          e.component(t.name, t);
        });
    };
  var Oo = { version: "0.0.23", install: Po };
  (e.EASIButton = x),
    (e.EASIDrawer = N),
    (e.EASIError = j),
    (e.EASILayout = mo),
    (e.EASILoading = H),
    (e.EASIModal = W),
    (e.EASIPage = M),
    (e.EASIProvider = y),
    (e.EASISetting = Gt),
    (e.EASITable = wo),
    (e.EASIText = k),
    (e.default = Oo),
    (e.install = Po),
    (e.useModalVisible = function(e, o) {
      const n = t.reactive(e);
      return [
        n,
        (e, t, ...r) => {
          null == o || o(...r), (n[e] = t);
        },
      ];
    }),
    (e.usePagination = function(e) {
      return t.reactive(__spreadValues({ showQuickJumper: !0, showSizeChanger: !0, showTotal: (e) => v("pageTotal", { total: e || 0 }), showSizeChange: () => null, onShowSizeChange: () => null }, e));
    }),
    (e.vLoading = ko),
    (e.vPermission = So),
    Object.defineProperty(e, "__esModule", { value: !0 }),
    (e[Symbol.toStringTag] = "Module");
});
