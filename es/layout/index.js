import * as _vue from 'vue';
import { defineComponent, toRefs, ref, onMounted, watch, toRaw, pushScopeId, popScopeId, resolveComponent, openBlock, createBlock, Fragment, createVNode, withDirectives, toDisplayString, createCommentVNode, vShow, renderList, withScopeId, withCtx, h, nextTick, inject, mergeProps, createTextVNode, renderSlot, withModifiers, onBeforeUnmount, computed, Transition, KeepAlive, resolveDynamicComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Modal } from 'ant-design-vue';
import { setLocal, isMobile, debounced } from 'easi-web-utils';

function createNamespace(name) {
  return `EASI${name}`;
}

var script$5 = defineComponent({
  name: createNamespace("menu"),
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    logo: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    subTitle: {
      type: String,
      default: null
    },
    nav: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const { collapsed } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const openKeys = ref([]);
    const selectedKeys = ref([]);
    const _changeSelect = () => {
      const matched = [...toRaw(route.meta.breadcrumb || [])];
      if (!collapsed.value) {
        openKeys.value = matched.map((_matched) => _matched.name);
      }
      selectedKeys.value = [route.meta.selected || route.name];
    };
    onMounted(() => {
      _changeSelect();
    });
    watch(() => route.name, _changeSelect);
    watch(() => collapsed.value, (newCollapsed) => {
      if (!newCollapsed) {
        const matched = [...toRaw(route.meta.breadcrumb || [])];
        openKeys.value = matched.map((_matched) => _matched.name);
      } else {
        openKeys.value = [];
      }
    });
    const toPage = (key) => {
      route.name !== key && router.push({ name: key });
    };
    return {
      openKeys,
      selectedKeys,
      toPage
    };
  }
});

const _withId$4 = /* @__PURE__ */ withScopeId("data-v-a3884aa0");
pushScopeId("data-v-a3884aa0");
const _hoisted_1$4 = {
  key: 0,
  class: "admin-title text-white ml-16 truncate"
};
const _hoisted_2$2 = {
  key: 1,
  class: "text-12 truncate text-gray-400"
};
const _hoisted_3$2 = { class: "flex-1 overflow-y-auto overflow-x-hidden" };
const _hoisted_4$1 = { class: "flex items-center" };
popScopeId();
const render$5 = /* @__PURE__ */ _withId$4((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_a_menu_item = resolveComponent("a-menu-item");
  const _component_a_sub_menu = resolveComponent("a-sub-menu");
  const _component_a_menu = resolveComponent("a-menu");
  return openBlock(), createBlock(Fragment, null, [
    createVNode("div", {
      class: ["py-6 flex items-center", [_ctx.collapsed ? "px-24" : "px-16"]]
    }, [
      createVNode("img", {
        src: _ctx.logo,
        alt: "",
        class: "logo"
      }, null, 8, ["src"]),
      _ctx.title || _ctx.subTitle ? withDirectives((openBlock(), createBlock("div", _hoisted_1$4, [
        _ctx.title ? (openBlock(), createBlock("p", {
          key: 0,
          class: ["truncate", [_ctx.subTitle ? "text-14" : "text-16"]]
        }, toDisplayString(_ctx.title), 3)) : createCommentVNode("v-if", true),
        _ctx.subTitle ? (openBlock(), createBlock("p", _hoisted_2$2, toDisplayString(_ctx.subTitle), 1)) : createCommentVNode("v-if", true)
      ], 512)), [
        [vShow, !_ctx.collapsed]
      ]) : createCommentVNode("v-if", true)
    ], 2),
    createVNode("div", _hoisted_3$2, [
      createVNode(_component_a_menu, {
        class: "layout-menu",
        mode: "inline",
        inlineCollapsed: false,
        openKeys: _ctx.openKeys,
        "onUpdate:openKeys": _cache[1] || (_cache[1] = ($event) => _ctx.openKeys = $event),
        selectedKeys: _ctx.selectedKeys,
        "onUpdate:selectedKeys": _cache[2] || (_cache[2] = ($event) => _ctx.selectedKeys = $event),
        theme: "dark"
      }, {
        default: _withId$4(() => [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.nav, (item) => {
            return openBlock(), createBlock(Fragment, {
              key: item.name
            }, [
              item.children && item.children.length > 0 && !item.meta.hideMenu ? (openBlock(), createBlock(_component_a_sub_menu, {
                key: item.name
              }, {
                title: _withId$4(() => [
                  createVNode("span", _hoisted_4$1, [
                    !!item.meta.icon ? (openBlock(), createBlock("i", {
                      key: 0,
                      class: [item.meta.icon, "anticon"]
                    }, null, 2)) : createCommentVNode("v-if", true),
                    createVNode("span", null, toDisplayString(item.meta.title), 1)
                  ])
                ]),
                default: _withId$4(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                    return openBlock(), createBlock(Fragment, {
                      key: child.name
                    }, [
                      !child.meta.hideMenu ? (openBlock(), createBlock(_component_a_menu_item, {
                        key: child.name,
                        class: "flex items-center",
                        onClick: ($event) => _ctx.toPage(child.name)
                      }, {
                        default: _withId$4(() => [
                          !!child.meta.icon ? (openBlock(), createBlock("i", {
                            key: 0,
                            class: [child.meta.icon, "anticon"]
                          }, null, 2)) : createCommentVNode("v-if", true),
                          createVNode("span", null, toDisplayString(child.meta.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("v-if", true)
                    ], 64);
                  }), 128))
                ]),
                _: 2
              }, 1024)) : !item.children && !item.meta.hideMenu ? (openBlock(), createBlock(_component_a_menu_item, {
                key: item.name,
                class: "flex items-center",
                onClick: ($event) => _ctx.toPage(item.name)
              }, {
                default: _withId$4(() => [
                  !!item.meta.icon ? (openBlock(), createBlock("i", {
                    key: 0,
                    class: [item.meta.icon, "anticon"]
                  }, null, 2)) : createCommentVNode("v-if", true),
                  createVNode("span", null, toDisplayString(item.meta.title), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("v-if", true)
            ], 64);
          }), 128))
        ]),
        _: 1
      }, 8, ["openKeys", "selectedKeys"])
    ])
  ], 64);
});

script$5.render = render$5;
script$5.__scopeId = "data-v-a3884aa0";
script$5.__file = "packages/layout/Menu.vue";

var script$4 = defineComponent({
  name: createNamespace("Nav"),
  emits: ["hideMenu"],
  props: {
    collapsed: {
      type: Boolean,
      default: true
    },
    collWidth: {
      type: String,
      default: ""
    },
    isH5: {
      type: Boolean,
      default: false
    },
    logo: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    subTitle: {
      type: String,
      default: null
    },
    nav: {
      type: Array,
      default: () => []
    }
  },
  components: {
    NavMenu: script$5
  }
});

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NavMenu = resolveComponent("NavMenu");
  const _component_a_layout_sider = resolveComponent("a-layout-sider");
  const _component_a_drawer = resolveComponent("a-drawer");
  return openBlock(), createBlock(Fragment, null, [
    withDirectives(createVNode("div", {
      class: ["side-placeholder", { "transition-width": !_ctx.isH5 }],
      style: { width: _ctx.collWidth }
    }, null, 6), [
      [vShow, !_ctx.isH5]
    ]),
    withDirectives(createVNode(_component_a_layout_sider, {
      class: "flex fixed top-0 left-0 flex-col h-screen overflow-hidden z-10",
      collapsible: "",
      collapsed: _ctx.collapsed,
      trigger: null
    }, {
      default: withCtx(() => [
        createVNode(_component_NavMenu, {
          logo: _ctx.logo,
          title: _ctx.title,
          "sub-title": _ctx.subTitle,
          nav: _ctx.nav,
          collapsed: _ctx.collapsed
        }, null, 8, ["logo", "title", "sub-title", "nav", "collapsed"])
      ]),
      _: 1
    }, 8, ["collapsed"]), [
      [vShow, !_ctx.isH5]
    ]),
    createVNode(_component_a_drawer, {
      placement: "left",
      width: "200px",
      closable: false,
      visible: !_ctx.collapsed && _ctx.isH5,
      bodyStyle: { padding: 0, height: "100%" },
      onClose: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("hideMenu"))
    }, {
      default: withCtx(() => [
        createVNode(_component_a_layout_sider, {
          class: "flex flex-col h-screen overflow-hidden",
          collapsible: "",
          collapsed: false,
          trigger: null
        }, {
          default: withCtx(() => [
            createVNode(_component_NavMenu, {
              logo: _ctx.logo,
              title: _ctx.title,
              "sub-title": _ctx.subTitle,
              nav: _ctx.nav,
              collapsed: false
            }, null, 8, ["logo", "title", "sub-title", "nav"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["visible"])
  ], 64);
}

script$4.render = render$4;
script$4.__file = "packages/layout/Nav.vue";

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return Number(n) * 100 + "%";
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
        pad2(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var TinyColor = /** @class */ (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    TinyColor.prototype.getBrightness = function () {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    TinyColor.prototype.getLuminance = function () {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns the object as a HSVA object.
     */
    TinyColor.prototype.toHsv = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHsvString = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this.roundA + ")";
    };
    /**
     * Returns the object as a HSLA object.
     */
    TinyColor.prototype.toHsl = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHslString = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this.roundA + ")";
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # appened.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # appened.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(" + r + ", " + g + ", " + b + ")" : "rgba(" + r + ", " + g + ", " + b + ", " + this.roundA + ")";
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return Math.round(bound01(x, 255) * 100) + "%"; };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round(bound01(x, 255) * 100); };
        return this.a === 1
            ? "rgb(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%)"
            : "rgba(" + rnd(this.r) + "%, " + rnd(this.g) + "%, " + rnd(this.b) + "%, " + this.roundA + ")";
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    /**
     * Compute how the color would appear on a background
     */
    TinyColor.prototype.onBackground = function (background) {
        var fg = this.toRgb();
        var bg = new TinyColor(background).toRgb();
        return new TinyColor({
            r: bg.r + (fg.r - bg.r) * fg.a,
            g: bg.g + (fg.g - bg.g) * fg.a,
            b: bg.b + (fg.b - bg.b) * fg.a,
        });
    };
    /**
     * Alias for `polyad(3)`
     */
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    /**
     * Alias for `polyad(4)`
     */
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    /**
     * compare color vs current color
     */
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate$1(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = new TinyColor(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = pColor.toHsv();
    var colorString = new TinyColor({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }).toHexString();
    patterns.push(colorString);
  }

  patterns.push(pColor.toHexString());

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = pColor.toHsv();

    var _colorString = new TinyColor({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }).toHexString();

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref) {
      var index = _ref.index,
          opacity = _ref.opacity;
      var darkColorString = new TinyColor(opts.backgroundColor || '#141414').mix(patterns[index], opacity * 100).toHexString();
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate$1(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
presetPalettes.red;
presetPalettes.volcano;
presetPalettes.gold;
presetPalettes.orange;
presetPalettes.yellow;
presetPalettes.lime;
presetPalettes.green;
presetPalettes.cyan;
presetPalettes.blue;
presetPalettes.geekblue;
presetPalettes.purple;
presetPalettes.magenta;
presetPalettes.grey;

// https://github.com/substack/insert-css
var containers = []; // will store container HTMLElement references

var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function createStyleElement() {
  var styleElement = document.createElement('style');
  styleElement.setAttribute('type', 'text/css');
  return styleElement;
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types


function insertCss(css, options) {
  options = options || {};

  if (css === undefined) {
    throw new Error(usage);
  }

  var position = options.prepend === true ? 'prepend' : 'append';
  var container = options.container !== undefined ? options.container : document.querySelector('head');
  var containerId = containers.indexOf(container); // first time we see this container, create the necessary entries

  if (containerId === -1) {
    containerId = containers.push(container) - 1;
    styleElements[containerId] = {};
  } // try to get the correponding container + position styleElement, create it otherwise


  var styleElement;

  if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
    styleElement = styleElements[containerId][position];
  } else {
    styleElement = styleElements[containerId][position] = createStyleElement();

    if (position === 'prepend') {
      container.insertBefore(styleElement, container.childNodes[0]);
    } else {
      container.appendChild(styleElement);
    }
  } // strip potential UTF-8 BOM if css was read from a file


  if (css.charCodeAt(0) === 0xfeff) {
    css = css.substr(1, css.length);
  } // actually add the stylesheet


  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText += css;
  } else {
    styleElement.textContent += css;
  }

  return styleElement;
}

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$b(target, key, source[key]); }); } return target; }

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function warn(valid, message) {
  // Support uglify
  if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}
function warning(valid, message) {
  warn(valid, "[@ant-design/icons-vue] ".concat(message));
} // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

function isIconDefinition(target) {
  return typeof target === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (typeof target.icon === 'object' || typeof target.icon === 'function');
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return h(node.tag, _objectSpread$b({
      key: key
    }, node.attrs), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return h(node.tag, _objectSpread$b({
    key: key
  }, rootProps, node.attrs), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var cssInjectedFlag = false;
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;
  nextTick(function () {
    if (!cssInjectedFlag) {
      if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
        insertCss(styleStr, {
          prepend: true
        });
      }

      cssInjectedFlag = true;
    }
  });
};

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$a(target, key, source[key]); }); } return target; }

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread$a({}, twoToneColorPalette);
}

var IconBase = function IconBase(props, context) {
  var _props$context$attrs = _objectSpread$a({}, props, context.attrs),
      icon = _props$context$attrs.icon,
      primaryColor = _props$context$attrs.primaryColor,
      secondaryColor = _props$context$attrs.secondaryColor,
      restProps = _objectWithoutProperties$1(_props$context$attrs, ["icon", "primaryColor", "secondaryColor"]);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  useInsertStyles();
  warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread$a({}, target, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return generate(target.icon, "svg-".concat(target.name), _objectSpread$a({}, restProps, {
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  })); // },
};

IconBase.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
IconBase.inheritAttrs = false;
IconBase.displayName = 'IconBase';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$9(target, key, source[key]); }); } return target; }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

setTwoToneColor('#1890ff');

var Icon = function Icon(props, context) {
  var _classObj;

  var _props$context$attrs = _objectSpread$9({}, props, context.attrs),
      cls = _props$context$attrs["class"],
      icon = _props$context$attrs.icon,
      spin = _props$context$attrs.spin,
      rotate = _props$context$attrs.rotate,
      tabindex = _props$context$attrs.tabindex,
      twoToneColor = _props$context$attrs.twoToneColor,
      onClick = _props$context$attrs.onClick,
      restProps = _objectWithoutProperties(_props$context$attrs, ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"]);

  var classObj = (_classObj = {
    anticon: true
  }, _defineProperty$9(_classObj, "anticon-".concat(icon.name), Boolean(icon.name)), _defineProperty$9(_classObj, cls, cls), _classObj);
  var svgClassString = spin === '' || !!spin || icon.name === 'loading' ? 'anticon-spin' : '';
  var iconTabIndex = tabindex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
    restProps.tabindex = iconTabIndex;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return _vue.createVNode("span", _vue.mergeProps(restProps, {
    "role": "img",
    "aria-label": icon.name,
    "onClick": onClick,
    "class": classObj
  }), [_vue.createVNode(IconBase, {
    "class": svgClassString,
    "icon": icon,
    "primaryColor": primaryColor,
    "secondaryColor": secondaryColor,
    "style": svgStyle
  }, null)]);
};

Icon.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String
};
Icon.displayName = 'AntdIcon';
Icon.inheritAttrs = false;
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

// This icon file is generated automatically.
var CloseOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$8(target, key, source[key]); }); } return target; }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CloseOutlined = function CloseOutlined(props, context) {
  var p = _objectSpread$8({}, props, context.attrs);

  return _vue.createVNode(Icon, _vue.mergeProps(p, {
    "icon": CloseOutlined$1
  }), null);
};

CloseOutlined.displayName = 'CloseOutlined';
CloseOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var CompassOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm198.4-588.1a32 32 0 00-24.5.5L414.9 415 296.4 686c-3.6 8.2-3.6 17.5 0 25.7 3.4 7.8 9.7 13.9 17.7 17 3.8 1.5 7.7 2.2 11.7 2.2 4.4 0 8.7-.9 12.8-2.7l271-118.6 118.5-271a32.06 32.06 0 00-17.7-42.7zM576.8 534.4l26.2 26.2-42.4 42.4-26.2-26.2L380 644.4 447.5 490 422 464.4l42.4-42.4 25.5 25.5L644.4 380l-67.6 154.4zM464.4 422L422 464.4l25.5 25.6 86.9 86.8 26.2 26.2 42.4-42.4-26.2-26.2-86.8-86.9z" } }] }, "name": "compass", "theme": "outlined" };

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } return target; }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CompassOutlined = function CompassOutlined(props, context) {
  var p = _objectSpread$7({}, props, context.attrs);

  return _vue.createVNode(Icon, _vue.mergeProps(p, {
    "icon": CompassOutlined$1
  }), null);
};

CompassOutlined.displayName = 'CompassOutlined';
CompassOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var ExclamationCircleOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" } }] }, "name": "exclamation-circle", "theme": "outlined" };

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } return target; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ExclamationCircleOutlined = function ExclamationCircleOutlined(props, context) {
  var p = _objectSpread$6({}, props, context.attrs);

  return _vue.createVNode(Icon, _vue.mergeProps(p, {
    "icon": ExclamationCircleOutlined$1
  }), null);
};

ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';
ExclamationCircleOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var LogoutOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" } }] }, "name": "logout", "theme": "outlined" };

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LogoutOutlined = function LogoutOutlined(props, context) {
  var p = _objectSpread$5({}, props, context.attrs);

  return _vue.createVNode(Icon, _vue.mergeProps(p, {
    "icon": LogoutOutlined$1
  }), null);
};

LogoutOutlined.displayName = 'LogoutOutlined';
LogoutOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var MenuFoldOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" } }] }, "name": "menu-fold", "theme": "outlined" };

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MenuFoldOutlined = function MenuFoldOutlined(props, context) {
  var p = _objectSpread$4({}, props, context.attrs);

  return _vue.createVNode(Icon, _vue.mergeProps(p, {
    "icon": MenuFoldOutlined$1
  }), null);
};

MenuFoldOutlined.displayName = 'MenuFoldOutlined';
MenuFoldOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var MenuUnfoldOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" } }] }, "name": "menu-unfold", "theme": "outlined" };

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MenuUnfoldOutlined = function MenuUnfoldOutlined(props, context) {
  var p = _objectSpread$3({}, props, context.attrs);

  return _vue.createVNode(Icon, _vue.mergeProps(p, {
    "icon": MenuUnfoldOutlined$1
  }), null);
};

MenuUnfoldOutlined.displayName = 'MenuUnfoldOutlined';
MenuUnfoldOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var MoreOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "more", "theme": "outlined" };

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MoreOutlined = function MoreOutlined(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);

  return _vue.createVNode(Icon, _vue.mergeProps(p, {
    "icon": MoreOutlined$1
  }), null);
};

MoreOutlined.displayName = 'MoreOutlined';
MoreOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var ReloadOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, "name": "reload", "theme": "outlined" };

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReloadOutlined = function ReloadOutlined(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);

  return _vue.createVNode(Icon, _vue.mergeProps(p, {
    "icon": ReloadOutlined$1
  }), null);
};

ReloadOutlined.displayName = 'ReloadOutlined';
ReloadOutlined.inheritAttrs = false;

// This icon file is generated automatically.
var UnlockOutlined$1 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z" } }] }, "name": "unlock", "theme": "outlined" };

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UnlockOutlined = function UnlockOutlined(props, context) {
  var p = _objectSpread({}, props, context.attrs);

  return _vue.createVNode(Icon, _vue.mergeProps(p, {
    "icon": UnlockOutlined$1
  }), null);
};

UnlockOutlined.displayName = 'UnlockOutlined';
UnlockOutlined.inheritAttrs = false;

var script$3 = defineComponent({
  name: createNamespace("Header"),
  emits: ["colToggle", "handleShowSetting"],
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    userInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, { emit }) {
    return {
      colToggle() {
        emit("colToggle");
      },
      handleShowSetting() {
        emit("handleShowSetting");
      }
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  }
});

const _withId$3 = /* @__PURE__ */ withScopeId("data-v-45ec92c4");
pushScopeId("data-v-45ec92c4");
const _hoisted_1$3 = /* @__PURE__ */ createVNode("div", { class: "flex-1" }, null, -1);
popScopeId();
const render$3 = /* @__PURE__ */ _withId$3((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_MenuFoldOutlined = resolveComponent("MenuFoldOutlined");
  const _component_MenuUnfoldOutlined = resolveComponent("MenuUnfoldOutlined");
  const _component_a_avatar = resolveComponent("a-avatar");
  return openBlock(), createBlock(Fragment, null, [
    withDirectives(createVNode(_component_MenuFoldOutlined, {
      class: "text-18",
      onClick: _ctx.colToggle
    }, null, 8, ["onClick"]), [
      [vShow, !_ctx.collapsed]
    ]),
    withDirectives(createVNode(_component_MenuUnfoldOutlined, {
      class: "text-18",
      onClick: _ctx.colToggle
    }, null, 8, ["onClick"]), [
      [vShow, _ctx.collapsed]
    ]),
    _hoisted_1$3,
    createVNode("span", {
      class: "dropdown-trigger px-8 cursor-pointer easi-hover-block",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleShowSetting && _ctx.handleShowSetting(...args))
    }, [
      _ctx.userInfo?.avatar ? (openBlock(), createBlock(_component_a_avatar, {
        key: 0,
        class: "mr-8",
        shape: "circle",
        size: "default",
        src: _ctx.userInfo.avatar,
        style: { backgroundColor: "#ffbf00", verticalAlign: "middle" }
      }, null, 8, ["src"])) : createCommentVNode("v-if", true),
      createVNode("span", null, toDisplayString(_ctx.userInfo?.name || "\u7528\u6237\u540D"), 1)
    ])
  ], 64);
});

script$3.render = render$3;
script$3.__scopeId = "data-v-45ec92c4";
script$3.__file = "packages/layout/Header.vue";

const SETTING_KEY = "setting";
const HTML = document.querySelector("html");
const defaultProvider = {
  reloadPage: true,
  mode: false,
  showTab: true,
  fixedTab: true,
  cachedPage: []
};
function setProvider(provide) {
  const { cachedPage, reloadPage, ...other } = toRaw(provide);
  if (other.mode === true || other.mode === "dark") {
    HTML.setAttribute("data-pro-theme", "antdv-pro-theme-dark");
  } else {
    HTML.removeAttribute("data-pro-theme");
  }
  setLocal(SETTING_KEY, other);
}
async function useReload(provide, route, refreshAll = false) {
  if (refreshAll) {
    provide.cachedPage = [];
  } else {
    if (route.meta.cached !== false) {
      provide.cachedPage = provide.cachedPage.filter((name) => route.name !== name);
    }
  }
  provide.reloadPage = false;
  await nextTick();
  if (route.meta.cached !== false) {
    provide.cachedPage = [...provide.cachedPage, route.name];
  }
  provide.reloadPage = true;
}

var script$2 = defineComponent({
  name: createNamespace("Setting"),
  emits: ["update:visible"],
  props: {
    userInfo: {
      type: Object,
      default: () => ({})
    },
    showTabSetting: {
      type: Boolean,
      default: true
    },
    onLogout: {
      type: Function,
      default: void 0
    },
    toDashboard: {
      type: Function,
      default: void 0
    },
    editPassword: {
      type: Function,
      default: void 0
    }
  },
  setup(props) {
    const globalProvider = inject("globalProvider", { ...defaultProvider });
    const globalEASILocale = inject("globalEASILocale", { message: {} });
    const setSetting = (key, value) => {
      globalProvider[key] = value;
      setProvider(globalProvider);
    };
    return {
      globalProvider,
      setSetting,
      handleLogout() {
        Modal.confirm({
          title: globalEASILocale.message.logoutTitle,
          icon: createVNode(ExclamationCircleOutlined),
          content: globalEASILocale.message.logoutMessage,
          centered: true,
          okText: globalEASILocale.message.confirm,
          cancelText: globalEASILocale.message.cancel,
          async onOk() {
            return props?.onLogout ? props.onLogout() : true;
          }
        });
      },
      handleToDashBoard() {
        props?.toDashboard && props.toDashboard();
      },
      handleEditPassword() {
        props?.editPassword && props.editPassword();
      },
      globalEASILocale
    };
  },
  components: {
    LogoutOutlined,
    ExclamationCircleOutlined,
    CompassOutlined,
    UnlockOutlined
  }
});

const _withId$2 = /* @__PURE__ */ withScopeId("data-v-ac52a5c2");
pushScopeId("data-v-ac52a5c2");
const _hoisted_1$2 = { class: "flex items-center" };
const _hoisted_2$1 = { class: "flex items-center mb-24" };
const _hoisted_3$1 = { class: "flex-1" };
const _hoisted_4 = {
  key: 0,
  class: "flex items-center mb-24"
};
const _hoisted_5 = { class: "flex-1" };
const _hoisted_6 = {
  key: 1,
  class: "flex items-center mb-24"
};
const _hoisted_7 = { class: "flex-1" };
popScopeId();
const render$2 = /* @__PURE__ */ _withId$2((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_a_avatar = resolveComponent("a-avatar");
  const _component_a_typography_text = resolveComponent("a-typography-text");
  const _component_a_switch = resolveComponent("a-switch");
  const _component_a_divider = resolveComponent("a-divider");
  const _component_CompassOutlined = resolveComponent("CompassOutlined");
  const _component_UnlockOutlined = resolveComponent("UnlockOutlined");
  const _component_LogoutOutlined = resolveComponent("LogoutOutlined");
  const _component_a_drawer = resolveComponent("a-drawer");
  return openBlock(), createBlock(_component_a_drawer, mergeProps({
    placement: "right",
    width: "320px"
  }, _ctx.$attrs, {
    onClose: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("update:visible", false))
  }), {
    title: _withId$2(() => [
      createVNode("header", _hoisted_1$2, [
        _ctx.userInfo?.avatar ? (openBlock(), createBlock(_component_a_avatar, {
          key: 0,
          shape: "circle",
          size: "default",
          src: _ctx.userInfo.avatar,
          style: { backgroundColor: "#ffbf00", verticalAlign: "middle", marginRight: "8px" }
        }, null, 8, ["src"])) : createCommentVNode("v-if", true),
        createTextVNode(" " + toDisplayString(_ctx.userInfo?.name || "\u7528\u6237\u540D"), 1)
      ])
    ]),
    default: _withId$2(() => [
      renderSlot(_ctx.$slots, "action-render"),
      createVNode(_component_a_typography_text, {
        strong: "",
        class: "block mb-32"
      }, {
        default: _withId$2(() => [
          createTextVNode(toDisplayString(_ctx.globalEASILocale.message.styleSetting), 1)
        ]),
        _: 1
      }),
      createVNode("div", _hoisted_2$1, [
        createVNode("span", _hoisted_3$1, [
          createVNode(_component_a_typography_text, null, {
            default: _withId$2(() => [
              createTextVNode(toDisplayString(_ctx.globalEASILocale.message.darkSetting), 1)
            ]),
            _: 1
          })
        ]),
        createVNode("div", null, [
          createVNode(_component_a_switch, {
            checked: _ctx.globalProvider.mode,
            onChange: _cache[1] || (_cache[1] = ($event) => _ctx.setSetting("mode", $event))
          }, null, 8, ["checked"])
        ])
      ]),
      _ctx.showTabSetting ? (openBlock(), createBlock("div", _hoisted_4, [
        createVNode("span", _hoisted_5, [
          createVNode(_component_a_typography_text, null, {
            default: _withId$2(() => [
              createTextVNode(toDisplayString(_ctx.globalEASILocale.message.showTabSetting), 1)
            ]),
            _: 1
          })
        ]),
        createVNode("div", null, [
          createVNode(_component_a_switch, {
            checked: _ctx.globalProvider.showTab,
            onChange: _cache[2] || (_cache[2] = ($event) => _ctx.setSetting("showTab", $event))
          }, null, 8, ["checked"])
        ])
      ])) : createCommentVNode("v-if", true),
      _ctx.showTabSetting ? (openBlock(), createBlock("div", _hoisted_6, [
        createVNode("span", _hoisted_7, [
          createVNode(_component_a_typography_text, null, {
            default: _withId$2(() => [
              createTextVNode(toDisplayString(_ctx.globalEASILocale.message.fixedTabSetting), 1)
            ]),
            _: 1
          })
        ]),
        createVNode("div", null, [
          createVNode(_component_a_switch, {
            checked: _ctx.globalProvider.fixedTab,
            onChange: _cache[3] || (_cache[3] = ($event) => _ctx.setSetting("fixedTab", $event))
          }, null, 8, ["checked"])
        ])
      ])) : createCommentVNode("v-if", true),
      createVNode(_component_a_divider),
      !!_ctx.onLogout || !!_ctx.toDashboard || !!_ctx.editPassword ? (openBlock(), createBlock(_component_a_typography_text, {
        key: 2,
        strong: "",
        class: "block margin-bottom"
      }, {
        default: _withId$2(() => [
          createTextVNode(toDisplayString(_ctx.globalEASILocale.message.more), 1)
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      !!_ctx.toDashboard ? (openBlock(), createBlock("div", {
        key: 3,
        class: "more-item flex items-center cursor-pointer easi-hover-block",
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleToDashBoard && _ctx.handleToDashBoard(...args))
      }, [
        createVNode(_component_CompassOutlined, { class: "mr-8 text-14" }),
        createVNode(_component_a_typography_text, null, {
          default: _withId$2(() => [
            createTextVNode(toDisplayString(_ctx.globalEASILocale.message.backToDashBoard), 1)
          ]),
          _: 1
        })
      ])) : createCommentVNode("v-if", true),
      !!_ctx.editPassword ? (openBlock(), createBlock("div", {
        key: 4,
        class: "more-item flex items-center cursor-pointer easi-hover-block",
        onClick: _cache[5] || (_cache[5] = (...args) => _ctx.handleEditPassword && _ctx.handleEditPassword(...args))
      }, [
        createVNode(_component_UnlockOutlined, { class: "mr-8 text-14" }),
        createVNode(_component_a_typography_text, null, {
          default: _withId$2(() => [
            createTextVNode(toDisplayString(_ctx.globalEASILocale.message.editPassword), 1)
          ]),
          _: 1
        })
      ])) : createCommentVNode("v-if", true),
      !!_ctx.onLogout ? (openBlock(), createBlock("div", {
        key: 5,
        class: "more-item flex items-center cursor-pointer text-red-400 easi-hover-block",
        onClick: _cache[6] || (_cache[6] = (...args) => _ctx.handleLogout && _ctx.handleLogout(...args))
      }, [
        createVNode(_component_LogoutOutlined, { class: "mr-8 text-14" }),
        createVNode(_component_a_typography_text, { type: "danger" }, {
          default: _withId$2(() => [
            createTextVNode(toDisplayString(_ctx.globalEASILocale.message.logout), 1)
          ]),
          _: 1
        })
      ])) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 16);
});

script$2.render = render$2;
script$2.__scopeId = "data-v-ac52a5c2";
script$2.__file = "packages/setting/Index.vue";

function getEASIText(key, value) {
  const globalEASILocale = inject("globalEASILocale", { message: {} });
  let message = globalEASILocale?.message[key];
  if (message) {
    if (value) {
      const reg = /(\{).*?(\})/g;
      const keyArray = message.match(reg);
      keyArray.forEach((key2) => {
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

var script$1 = defineComponent({
  name: createNamespace("Tab"),
  emits: ["reloadPage"],
  setup(props, { emit }) {
    const route = useRoute();
    const router = useRouter();
    const globalProvider = inject("globalProvider", { ...defaultProvider });
    const activeKey = ref("");
    const panes = ref([]);
    const handleRouteFullPath = () => {
      activeKey.value = route.fullPath;
      if (route.name === "Index")
        return;
      if (panes.value.length === 0 || !panes.value.some((pane) => pane.fullPath === route.fullPath)) {
        const meta = route.meta;
        panes.value.push({
          title: route.query.title || route.meta.title,
          fullPath: route.fullPath,
          name: route.name,
          cached: meta.cached === true || meta.cached === void 0
        });
      }
    };
    handleRouteFullPath();
    watch(() => route.fullPath, () => {
      handleRouteFullPath();
    });
    const toPage = (key) => {
      key !== activeKey.value && router.push(key);
    };
    const reloadPage = () => {
      emit("reloadPage");
    };
    const removeTab = (index) => {
      const { fullPath, name, cached } = panes.value[index];
      panes.value.splice(index, 1);
      if (cached) {
        globalProvider.cachedPage = globalProvider.cachedPage.filter((key) => key !== name);
      }
      if (fullPath === activeKey.value) {
        activeKey.value = panes.value[panes.value.length - 1].fullPath;
        router.push(activeKey.value);
      }
    };
    const removeOtherTab = () => {
      panes.value = panes.value.filter((pane) => pane.fullPath === activeKey.value);
      globalProvider.cachedPage = panes.value[0].cached ? [panes.value[0].name] : [];
    };
    return {
      activeKey,
      panes,
      toPage,
      reloadPage,
      removeTab,
      action({ key }) {
        switch (key) {
          case "closeAll":
            removeOtherTab();
            break;
          case "refresh":
            reloadPage();
            break;
        }
      },
      getEASIText
    };
  },
  components: {
    MoreOutlined,
    ReloadOutlined,
    CloseOutlined
  }
});

const _withId$1 = /* @__PURE__ */ withScopeId("data-v-1dba1a54");
pushScopeId("data-v-1dba1a54");
const _hoisted_1$1 = { class: "flex items-center" };
popScopeId();
const render$1 = /* @__PURE__ */ _withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_ReloadOutlined = resolveComponent("ReloadOutlined");
  const _component_CloseOutlined = resolveComponent("CloseOutlined");
  const _component_a_tab_pane = resolveComponent("a-tab-pane");
  const _component_MoreOutlined = resolveComponent("MoreOutlined");
  const _component_a_menu_item = resolveComponent("a-menu-item");
  const _component_a_menu = resolveComponent("a-menu");
  const _component_a_dropdown = resolveComponent("a-dropdown");
  const _component_a_tabs = resolveComponent("a-tabs");
  return openBlock(), createBlock(_component_a_tabs, {
    activeKey: _ctx.activeKey,
    tabBarStyle: { paddingLeft: "16px" },
    "hide-add": "",
    onTabClick: _ctx.toPage,
    type: "editable-card",
    class: "page-tab"
  }, {
    tabBarExtraContent: _withId$1(() => [
      createVNode(_component_a_dropdown, { onClick: _ctx.action }, {
        overlay: _withId$1(() => [
          createVNode(_component_a_menu, { onClick: _ctx.action }, {
            default: _withId$1(() => [
              createVNode(_component_a_menu_item, { key: "closeAll" }, {
                default: _withId$1(() => [
                  createTextVNode(toDisplayString(_ctx.getEASIText("closeOther")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_a_menu_item, { key: "refresh" }, {
                default: _withId$1(() => [
                  createTextVNode(toDisplayString(_ctx.getEASIText("refreshPage")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onClick"])
        ]),
        default: _withId$1(() => [
          createVNode("a", {
            class: "ant-dropdown-link p-12 mr-8",
            onClick: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["prevent"]))
          }, [
            createVNode(_component_MoreOutlined, { class: "text-16 leading-0" })
          ])
        ]),
        _: 1
      }, 8, ["onClick"])
    ]),
    default: _withId$1(() => [
      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.panes, (pane, index) => {
        return openBlock(), createBlock(_component_a_tab_pane, {
          key: pane.fullPath,
          closable: false
        }, {
          tab: _withId$1(() => [
            createVNode("span", _hoisted_1$1, [
              createTextVNode(toDisplayString(pane.title) + " ", 1),
              withDirectives(createVNode(_component_ReloadOutlined, {
                class: "icon-action text-12 leading-0 ml-8",
                onClick: withModifiers(_ctx.reloadPage, ["stop"])
              }, null, 8, ["onClick"]), [
                [vShow, pane.fullPath === _ctx.activeKey]
              ]),
              withDirectives(createVNode(_component_CloseOutlined, {
                class: "icon-action text-12 leading-0 ml-8",
                onClick: withModifiers(($event) => _ctx.removeTab(index), ["stop"])
              }, null, 8, ["onClick"]), [
                [vShow, _ctx.panes.length !== 1]
              ])
            ])
          ]),
          _: 2
        }, 1024);
      }), 128))
    ]),
    _: 1
  }, 8, ["activeKey", "onTabClick"]);
});

script$1.render = render$1;
script$1.__scopeId = "data-v-1dba1a54";
script$1.__file = "packages/layout/Tab.vue";

var script = defineComponent({
  name: createNamespace("Layout"),
  props: {
    logo: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    subTitle: {
      type: String,
      default: null
    },
    nav: {
      type: Array,
      default: () => []
    },
    userInfo: {
      type: Object,
      default: () => ({})
    },
    showTabSetting: {
      type: Boolean,
      default: true
    },
    onLogout: {
      type: Function,
      default: void 0
    },
    toDashboard: {
      type: Function,
      default: void 0
    },
    editPassword: {
      type: Function,
      default: void 0
    }
  },
  setup(props) {
    const { nav } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const isH5 = ref(isMobile());
    const addTransition = ref(true);
    const collapsed = ref(isH5.value);
    const showSetting = ref(false);
    const globalProvider = inject("globalProvider", { ...defaultProvider });
    let timeout;
    watch(() => globalProvider.fixedTab, () => {
      clearTimeout(timeout);
      addTransition.value = false;
      timeout = setTimeout(() => {
        addTransition.value = true;
      }, 200);
    });
    const handleCachedPage = () => {
      if (route.meta.cached && !globalProvider.cachedPage.includes(route.name)) {
        globalProvider.cachedPage = [...globalProvider.cachedPage, route.name];
      }
    };
    handleCachedPage();
    watch(() => route.name, (name) => {
      handleCachedPage();
    });
    const handleResize = () => {
      debounced(() => {
        if (collapsed.value && window.innerWidth > 1200) {
          collapsed.value = false;
        } else if (!collapsed.value && window.innerWidth <= 1200) {
          collapsed.value = true;
        }
        if (isH5.value && window.innerWidth > 750) {
          isH5.value = false;
        } else if (!isH5.value && window.innerWidth <= 750) {
          isH5.value = true;
        }
      }, 250)();
    };
    handleResize();
    window.addEventListener("resize", handleResize, false);
    onMounted(() => {
      if (route.name === "Index" && nav.value.length > 0) {
        router.replace(nav.value[0].path);
      }
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize, false);
    });
    return {
      isH5,
      showSetting,
      collapsed,
      addTransition,
      setCollapsed() {
        collapsed.value = !collapsed.value;
      },
      collWidth: computed(() => {
        return collapsed.value ? "80px" : "200px";
      }),
      globalProvider,
      cachedPage: computed(() => globalProvider.showTab ? globalProvider.cachedPage : []),
      async onReloadPage(refresh = false) {
        await useReload(globalProvider, route, refresh);
        return true;
      },
      handleShowSetting() {
        showSetting.value = true;
      }
    };
  },
  components: {
    PageNav: script$4,
    PageHeader: script$3,
    PageSetting: script$2,
    PageTab: script$1
  }
});

const _withId = /* @__PURE__ */ withScopeId("data-v-46be8f51");
pushScopeId("data-v-46be8f51");
const _hoisted_1 = /* @__PURE__ */ createVNode("div", { class: "h-48" }, null, -1);
const _hoisted_2 = {
  key: 1,
  class: "h-64"
};
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" \xA9Copyright EASI, Make Life Easier. ");
popScopeId();
const render = /* @__PURE__ */ _withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_PageNav = resolveComponent("PageNav");
  const _component_PageHeader = resolveComponent("PageHeader");
  const _component_a_layout_header = resolveComponent("a-layout-header");
  const _component_PageTab = resolveComponent("PageTab");
  const _component_router_view = resolveComponent("router-view");
  const _component_a_layout_content = resolveComponent("a-layout-content");
  const _component_a_layout_footer = resolveComponent("a-layout-footer");
  const _component_a_layout = resolveComponent("a-layout");
  const _component_PageSetting = resolveComponent("PageSetting");
  return openBlock(), createBlock(_component_a_layout, { class: "min-h-screen" }, {
    default: _withId(() => [
      createCommentVNode(" \u4FA7\u8FB9\u680F\u5BFC\u822A  "),
      createVNode(_component_PageNav, {
        collapsed: _ctx.collapsed,
        "coll-width": _ctx.collWidth,
        isH5: _ctx.isH5,
        logo: _ctx.logo,
        "sub-title": _ctx.subTitle,
        title: _ctx.title,
        nav: _ctx.nav,
        onHideMenu: _cache[1] || (_cache[1] = ($event) => _ctx.collapsed = true)
      }, null, 8, ["collapsed", "coll-width", "isH5", "logo", "sub-title", "title", "nav"]),
      createCommentVNode(" \u5185\u5BB9\u5E03\u5C40 "),
      createVNode(_component_a_layout, null, {
        default: _withId(() => [
          _hoisted_1,
          createVNode(_component_a_layout_header, {
            class: ["page-header fixed top-0 right-0 bg-white flex items-center h-48 leading-48 pl-16 pr-16 z-10", { "transition-width": !_ctx.isH5 }],
            style: { width: _ctx.isH5 ? "100%" : `calc(100% - ${_ctx.collWidth})` }
          }, {
            default: _withId(() => [
              createVNode(_component_PageHeader, {
                collapsed: _ctx.collapsed,
                userInfo: _ctx.userInfo,
                onColToggle: _ctx.setCollapsed,
                onHandleShowSetting: _ctx.handleShowSetting
              }, null, 8, ["collapsed", "userInfo", "onColToggle", "onHandleShowSetting"])
            ]),
            _: 1
          }, 8, ["class", "style"]),
          _ctx.globalProvider.showTab ? (openBlock(), createBlock(_component_PageTab, {
            key: 0,
            class: ["page-tab pt-6 bg-white", [_ctx.globalProvider.fixedTab ? "fixed top-48 right-0 z-10" : "", !_ctx.isH5 && _ctx.addTransition ? "transition-width" : ""]],
            style: { width: _ctx.globalProvider.fixedTab && !_ctx.isH5 ? `calc(100% - ${_ctx.collWidth})` : `100%` },
            onReloadPage: _ctx.onReloadPage
          }, null, 8, ["class", "style", "onReloadPage"])) : createCommentVNode("v-if", true),
          _ctx.globalProvider.showTab && _ctx.globalProvider.fixedTab ? (openBlock(), createBlock("div", _hoisted_2)) : createCommentVNode("v-if", true),
          createVNode(_component_a_layout_content, null, {
            default: _withId(() => [
              createVNode(_component_router_view, null, {
                default: _withId(({ Component }) => [
                  createVNode(Transition, {
                    name: "slid-up",
                    mode: "out-in"
                  }, {
                    default: _withId(() => [
                      (openBlock(), createBlock(KeepAlive, {
                        include: _ctx.globalProvider.cachedPage
                      }, [
                        _ctx.globalProvider.reloadPage ? (openBlock(), createBlock(resolveDynamicComponent(Component), {
                          key: (Component || {}).name
                        })) : createCommentVNode("v-if", true)
                      ], 1032, ["include"]))
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_a_layout_footer, { class: "px-16 py-12 text-center" }, {
            default: _withId(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_PageSetting, {
        visible: _ctx.showSetting,
        "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => _ctx.showSetting = $event),
        userInfo: _ctx.userInfo,
        showTabSetting: _ctx.showTabSetting,
        onLogout: _ctx.onLogout,
        toDashboard: _ctx.toDashboard,
        editPassword: _ctx.editPassword
      }, {
        "action-render": _withId(() => [
          renderSlot(_ctx.$slots, "action-render")
        ]),
        _: 3
      }, 8, ["visible", "userInfo", "showTabSetting", "onLogout", "toDashboard", "editPassword"])
    ]),
    _: 1
  });
});

script.render = render;
script.__scopeId = "data-v-46be8f51";
script.__file = "packages/layout/Index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

export default script;
