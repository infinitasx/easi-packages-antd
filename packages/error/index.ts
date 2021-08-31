import { App, Plugin } from "vue";
import Error from "./Index.vue";
import "tailwindcss/tailwind.css";

Error.install = (app: App): void => {
  app.component(Error.name, Error);
};

export default Error as typeof Error & Plugin;
