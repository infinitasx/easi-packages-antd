import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import EASI from "easi-packages-antd";
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import Demo from "./utils/Demo.vue";
import("highlight.js/styles/atom-one-light.css");
import("./base.scss");
import CodeView from "./utils/CodeView.vue";

const app = createApp(App)
  .use(router)
  .use(antd)
  .use(EASI);

app.component("Demo", Demo);
app.component("CodeView", CodeView);

router.isReady().then(() => {
  app.mount("#app");
});
