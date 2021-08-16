import { App } from "vue";
import Drawer from "./Index.vue";
import "tailwindcss/tailwind.css";

Drawer.install = (app: App): void => {
  app.component(Drawer.name, Drawer);
};

export default Drawer;
