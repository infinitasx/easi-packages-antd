import { App } from "vue";
import Layout from "./index.vue";

Layout.install = (app: App): void => {
  app.component(Layout.name, Layout);
};

export default Layout;
