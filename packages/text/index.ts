import { App } from "vue";
import Text from "./index.vue";

Text.install = (app: App) => {
  app.component(Text.name, Text);
  return app;
};

export default Text;
