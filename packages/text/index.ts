import { App } from "vue";
import Text from "./index.vue";

Text.install = (app: App): void => {
  app.component(Text.name, Text);
};

export default Text;
