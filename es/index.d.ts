import "./index.css";
import type { App } from "vue";
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
import vPermission from "../directives/vPermissions";
import vLoading from "../directives/vLoading";
import { useModalVisible } from "../utils/useModalVisible";
import { usePagination } from "../utils/usePagination";
declare const install: (app: App) => void;
export { EASIProvider, EASIText, EASIButton, EASIDrawer, EASIError, EASILayout, EASILoading, EASIModal, EASIPage, EASITable, EASISetting, EASIUploader, install, vPermission, vLoading, useModalVisible, usePagination };
declare const _default: {
    version: string;
    install: (app: App<any>) => void;
};
export default _default;
