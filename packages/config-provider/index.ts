import { App } from "vue";
import ConfigProvider from "./index.vue";
import "tailwindcss/tailwind.css";

ConfigProvider.install = (app: App): void => {
  app.component(ConfigProvider.name, ConfigProvider);
};

export default ConfigProvider;
