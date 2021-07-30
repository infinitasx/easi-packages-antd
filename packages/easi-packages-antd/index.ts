import "../css/index.scss";

import type { App, Plugin } from "vue";

import EASIText from "../text";
import EASIButton from "../button";
import EASIDrawer from "../drawer";
import EASIError from "../error";
import EASIPage from "../page";
import EASILoading from "../loading";
import EASIModal from "../modal";
import EASILayout from "../layout";
import EASITable from "../table";

import vPermission from "../directives/v-permissions";
import vLoading from "../directives/v-loading";

import { useModalVisible } from "../utils/useModalVisible";
import { usePagination } from "../utils/usePagination";

import { setLocale } from "../locale";

import { version as version_ } from "./version";
const version = version_;

const components = [EASIText, EASIButton, EASIDrawer, EASIError, EASILayout, EASILoading, EASIModal, EASIPage, EASITable];

const plugins: Plugin[] = [vPermission];

const install = (app: App): void => {

  plugins.forEach((plugin) => {
    app.use(plugin);
  });
  app.use(vLoading);

  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { EASIText, EASIButton, EASIDrawer, EASIError, EASILayout, EASILoading, EASIModal, EASIPage, EASITable, install, setLocale, vPermission, vLoading, useModalVisible, usePagination };

export default {
  version,
  install,
};
