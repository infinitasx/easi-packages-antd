import { App } from "vue";
import Uploader from "./Index.vue";
import "tailwindcss/tailwind.css";

Uploader.install = (app: App): void => {
  app.component(Uploader.name, Uploader);
};

export default Uploader;
