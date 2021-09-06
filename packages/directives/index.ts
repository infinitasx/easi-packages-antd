import { App } from 'vue';
import loading from './vLoading';
import permissions from './vPermissions';
const directives = [loading, permissions];

const install = (app: App): void => {
  directives.forEach(plugin => {
    app.use(plugin);
  });
};

export default {
  install,
};
