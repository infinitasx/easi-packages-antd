import { App } from "vue";
import Setting from "./index.vue";
import "tailwindcss/tailwind.css";

Setting.install = (app: App): void => {
  app.component(Setting.name, Setting);
};

export default Setting;
