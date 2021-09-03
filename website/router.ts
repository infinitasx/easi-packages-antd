import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/text",
    component: () => import("../packages/text/docs/index.md"),
  },
  {
    path: "/button",
    component: () => import("../packages/button/docs/index.md"),
  },
  {
    path: "/drawer",
    component: () => import("../packages/drawer/docs/index.md"),
  },
  {
    path: "/error",
    component: () => import("../packages/error/docs/index.md"),
  },
  {
    path: "/layout",
    component: () => import("../packages/layout/docs/index.md"),
  },
  {
    path: "/loading",
    component: () => import("../packages/loading/docs/index.md"),
  },
  {
    path: "/modal",
    component: () => import("../packages/modal/docs/index.md"),
  },
  {
    path: "/page",
    component: () => import("../packages/page/index.md"),
  },
  {
    path: "/table",
    component: () => import("../packages/table/docs/index.md"),
  },
  {
    path: "/uploader",
    component: () => import("../packages/uploader/docs/index.md"),
  },
  {
    path: "/provider",
    component: () => import("../packages/provider/docs/index.md"),
  },
  {
    path: "/setting",
    component: () => import("../packages/setting/docs/index.md"),
  },
];
const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

export default router;
