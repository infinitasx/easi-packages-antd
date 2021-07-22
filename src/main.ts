import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
// import Easi from "../dist/index.es";
import Easi from "../packages/easi-packages-antd/index";
import "ant-design-vue/dist/antd.css";
// import "../dist/style.css";

createApp(App)
  .use(Antd)
  .use(Easi)
  .mount("#app");
