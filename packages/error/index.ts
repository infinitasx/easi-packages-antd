import { App } from "vue";
import Error from "./index.vue";

Error.install = (app: App): void => {
  app.component(Error.name, Error);
};

export default Error;
