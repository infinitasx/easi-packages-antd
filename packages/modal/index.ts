import { App } from "vue";
import Modal from "./index.vue";

Modal.install = (app: App): void => {
  app.component(Modal.name, Modal);
};

export default Modal;
