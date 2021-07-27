import { App } from "vue";
import Table from "./index.vue";
import "tailwindcss/tailwind.css";

Table.install = (app: App): void => {
  app.component(Table.name, Table);
};

export default Table;
