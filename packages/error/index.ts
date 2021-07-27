import { App } from "vue";
import Error from "./index.vue";
import "tailwindcss/tailwind.css";

Error.install = (app: App): void => {
  app.component(Error.name, Error);
};

export default Error;
