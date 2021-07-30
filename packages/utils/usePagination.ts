import { reactive } from 'vue';
import { Pagination } from '../../typings/antd';
import { getEASIText } from '../locale'
// 公共的table 页码初始化函数，2.2.0 rc.1版本showSizeChanger开启后antd要报错，原因不明，待官方修复
export function usePagination(initValue: Pagination) {
  return reactive({
    // pageSizeOptions: ['15', '20', '25', '30', '35', '40'],
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total: number) => getEASIText('pageTotal', { 'total': total }),
    showSizeChange: () => null,
    onShowSizeChange: () => null,
    ...initValue,
  });
}
