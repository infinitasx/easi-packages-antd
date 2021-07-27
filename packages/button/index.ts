import { App } from "vue";
import Button from "./index.vue";
import "tailwindcss/tailwind.css";

Button.install = (app: App): void => {
  app.component(Button.name, Button);
};

export default Button;
