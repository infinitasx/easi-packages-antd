interface ModalVisible {
    [props: string]: boolean;
}
export declare function useModalVisible(initValue: ModalVisible, preAction?: (...arg: any[]) => void): ({
    [x: string]: boolean;
} | ((key: string, value: boolean, ...arg: any[]) => void))[];
export {};
