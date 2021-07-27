import { App } from "vue";
import Drawer from "./index.vue";
import "tailwindcss/tailwind.css";

Drawer.install = (app: App): void => {
  app.component(Drawer.name, Drawer);
};

export default Drawer;
