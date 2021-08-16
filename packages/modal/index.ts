import { App } from "vue";
import Modal from "./Index.vue";
import "tailwindcss/tailwind.css";

Modal.install = (app: App): void => {
  app.component(Modal.name, Modal);
};

export default Modal;
