import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { Pagination } from '../../typings/antd';

// 公共的table 页码初始化函数，2.2.0 rc.1版本showSizeChanger开启后antd要报错，原因不明，待官方修复
export function usePagination(initValue: Pagination) {
  const { t } = useI18n();
  return reactive({
    // pageSizeOptions: ['15', '20', '25', '30', '35', '40'],
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total: number) => t('common.pageTotal', { total }),
    showSizeChange: () => null,
    onShowSizeChange: () => null,
    ...initValue,
  });
}
