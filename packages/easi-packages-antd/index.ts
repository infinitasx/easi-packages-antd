import "../theme/index.scss";

import type { App, Plugin } from "vue";

import EASIProvider from "../provider";
import EASIText from "../text";
import EASIButton from "../button";
import EASIDrawer from "../drawer";
import EASIError from "../error";
import EASIPage from "../page";
import EASILoading from "../loading";
import EASIModal from "../modal";
import EASILayout from "../layout";
import EASITable from "../table";
import EASISetting from "../setting";
import EASIUploader from "../uploader";
import EASIDirectives from '../directives';

import { useModalVisible } from "../utils/useModalVisible";
import { usePagination } from "../utils/usePagination";

import { version as version_ } from "./version";
const version = version_;

const components = [EASIProvider, EASIText, EASIButton, EASIDrawer, EASIError, EASILayout, EASILoading, EASIModal, EASIPage, EASITable, EASISetting, EASIUploader];


const install = (app: App): void => {
  app.use(EASIDirectives);

  components.forEach((component) => {
    app.component(component.name, component);
  });
};



export { EASIProvider, EASIText, EASIButton, EASIDrawer, EASIError, EASILayout, EASILoading, EASIModal, EASIPage, EASITable, EASISetting, EASIUploader, EASIDirectives,install, useModalVisible, usePagination };
export * as EASIUtils from "../utils"

export default {
  version,
  install,
};
