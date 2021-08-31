import { App, Plugin } from "vue";
import Button from "./Index.vue";
import "tailwindcss/tailwind.css";

Button.install = (app: App): void => {
  app.component(Button.name, Button);
};

export default Button as typeof Button & Plugin;
