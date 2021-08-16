import { App } from "vue";
import Page from "./Index.vue";
import "tailwindcss/tailwind.css";

Page.install = (app: App): void => {
  app.component(Page.name, Page);
};

export default Page;
