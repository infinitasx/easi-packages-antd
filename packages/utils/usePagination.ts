import {inject, reactive} from 'vue';
import { Pagination } from '../../typings/antd';
import {getEASIText, IGlobalLocal} from '../locale'

export function usePagination(initValue: Pagination) {
  const globalEASILocale = inject<IGlobalLocal>('globalEASILocale', {message: {}});
  return reactive({
    // pageSizeOptions: ['15', '20', '25', '30', '35', '40'],
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total: number) => getEASIText(globalEASILocale,'pageTotal', { 'total': total || 0 }),
    showSizeChange: () => null,
    onShowSizeChange: () => null,
    ...initValue,
  });
}
