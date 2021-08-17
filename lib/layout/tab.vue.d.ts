import { MenuInfo } from '../../typings/antd';
import { getEASIText } from '../locale';
export interface TabPane {
    title: string;
    fullPath: string;
    name: string;
    cached: boolean;
}
declare const _default: import("vue").DefineComponent<{}, {
    activeKey: import("vue").Ref<string>;
    panes: import("vue").Ref<{
        title: string;
        fullPath: string;
        name: string;
        cached: boolean;
    }[]>;
    toPage: (key: string) => void;
    reloadPage: () => void;
    removeTab: (index: number) => void;
    action({ key }: MenuInfo): void;
    getEASIText: typeof getEASIText;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "reloadPage"[], "reloadPage", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}> & {
    onReloadPage?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
