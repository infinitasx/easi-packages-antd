import { App } from "vue";
import Text from "./Index.vue";
import "tailwindcss/tailwind.css";

Text.install = (app: App): void => {
  app.component(Text.name, Text);
};

export default Text;
