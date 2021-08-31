import { App, Plugin } from "vue";
import Layout from "./Index.vue";
import "tailwindcss/tailwind.css";

Layout.install = (app: App): void => {
  app.component(Layout.name, Layout);
};

export default Layout as typeof Layout & Plugin;
