import { App } from "vue";
import Loading from "./index.vue";
import "tailwindcss/tailwind.css";

Loading.install = (app: App): void => {
  app.component(Loading.name, Loading);
};

export default Loading;
