import antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import EASIError from '../../../packages/error/index';
import EASIButton from '../../../packages/button/index';
import EASIDrawer from '../../../packages/drawer/index';
import EASILoading from '../../../packages/loading/index';
import EASIModal from '../../../packages/modal/index';
import EASITable from '../../../packages/table/index';
import VLoading from '../../../packages/directives/vLoading';
// import EASIUploader from '../../../packages/uploader/index';

export default app => {
  app && app.use(antd);
  app.use(VLoading);
  app.component('EASIError', EASIError);
  app.component('EASIButton', EASIButton);
  app.component('EASIDrawer', EASIDrawer);
  app.component('EASILoading', EASILoading);
  app.component('EASIModal', EASIModal);
  app.component('EASITable', EASITable);
  // app.component('EASIUploader', EASIUploader);
};
