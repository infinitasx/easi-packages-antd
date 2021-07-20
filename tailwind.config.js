const IS_PROD = process.env.NODE_ENV !== "development";
module.exports = {
  mode: IS_PROD ? "" : "jit",
  purge: {
    content: ["./packages/**/*.{vue,js,ts,tsx}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        base: ["12px", { lineHeight: 0 }],
        12: ["12px", { lineHeight: "16px" }],
        14: ["14px", { lineHeight: "18px" }],
        16: ["16px", { lineHeight: "20px" }],
        18: ["18px", { lineHeight: "22px" }],
        20: ["20px", { lineHeight: "24px" }],
        22: ["22px", { lineHeight: "26px" }],
        24: ["24px", { lineHeight: "28px" }],
        26: ["26px", { lineHeight: "30px" }],
        28: ["28px", { lineHeight: "32px" }],
      },
      width: {
        100: "100px",
      },
      minWidth: {
        "1/5": "20%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      height: {
        40: "40px",
        48: "48px",
        56: "56px",
        64: "64px",
      },
      lineHeight: {
        0: "0px",
        48: "48px",
        56: "56px",
      },
      padding: {
        6: "6px",
        8: "8px",
        12: "12px",
        16: "16px",
        24: "24px",
        32: "32px",
        40: "40px",
        50: "50px",
        100: "100px",
      },
      margin: {
        0: "0px",
        8: "8px",
        12: "12px",
        16: "16px",
        24: "24px",
        32: "32px",
        48: "48px",
      },
      inset: {
        48: "48px",
      },
    },
  },
  variants: {
    extend: {},
  },
  prefix: "",
  plugins: [],
};
