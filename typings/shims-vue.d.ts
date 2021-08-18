/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.json' {
  const version: any;
  export default version;
}

declare module '*.md'

declare module '*.css'
declare module '*.scss'