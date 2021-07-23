import { App } from "vue";
import Drawer from "./index.vue";

Drawer.install = (app: App): void => {
  app.component(Drawer.name, Drawer);
};

export default Drawer;
