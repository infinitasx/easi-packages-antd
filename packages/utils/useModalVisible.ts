import { reactive } from 'vue';

interface ModalVisible {
  [props: string]: boolean;
}

export function useModalVisible(initValue: ModalVisible, preAction?: (...arg: any[]) => void) {
  const modalVisible = reactive(initValue);

  const setModalVisible = (key: string, value: boolean, ...arg: any[]) => {
    preAction?.(...arg);
    modalVisible[key] = value;
  };

  return [modalVisible, setModalVisible];
}
