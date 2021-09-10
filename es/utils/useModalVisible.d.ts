interface ModalVisible {
    [props: string]: boolean;
}
export declare function useModalVisible(initValue: ModalVisible, preAction?: (...arg: any[]) => void): any;
export default useModalVisible;
