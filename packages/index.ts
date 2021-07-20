import type { App } from "vue";
import pkg from "../package.json"

import EASIText from "./text";

import "./tailwindcss/index.css"

const version = pkg.version;
const components = [EASIText];

const install = (app: App):void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { EASIText, install };

export default {
  install,
  version,
};
