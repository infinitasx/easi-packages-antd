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
    component: () => import("../packages/drawer/index.md"),
  },
  {
    path: "/error",
    component: () => import("../packages/error/index.md"),
  },
  {
    path: "/layout",
    component: () => import("../packages/layout/index.md"),
  },
  {
    path: "/loading",
    component: () => import("../packages/loading/index.md"),
  },
  {
    path: "/modal",
    component: () => import("../packages/modal/index.md"),
  },
  {
    path: "/page",
    component: () => import("../packages/page/index.md"),
  },
  {
    path: "/table",
    component: () => import("../packages/table/index.md"),
  },
];
const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

export default router;
