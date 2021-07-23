import { App } from "vue";
import Page from "./index.vue";

Page.install = (app: App): void => {
  app.component(Page.name, Page);
};

export default Page;
