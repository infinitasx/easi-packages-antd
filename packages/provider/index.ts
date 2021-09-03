import {App, Plugin} from "vue";
import ConfigProvider from "./Index.vue";
import "tailwindcss/tailwind.css";

ConfigProvider.install = (app: App): void => {
  app.component(ConfigProvider.name, ConfigProvider);
};

export default ConfigProvider as typeof ConfigProvider & Plugin;
