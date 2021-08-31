import { App, Plugin } from "vue";
import Uploader from "./Index.vue";
import "tailwindcss/tailwind.css";
import 'cropperjs/dist/cropper.min.css';

Uploader.install = (app: App): void => {
  app.component(Uploader.name, Uploader);
};

export default Uploader as typeof Uploader & Plugin;
