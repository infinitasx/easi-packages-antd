// 使用方法,将指令绑定在元素上，如果绑定在组件上，组件一定要有根元素
// createUser即权限点标示，这里只是举例，以实际标示为准
// 单权限点判断：v-permission="'createUser'"
// 多权限点判断
// 1.包含某一个权限点即视为有权限：v-permission:in="['createUser', 'createAccount']" 或者 v-permission="['createUser', 'createAccount']"
// 2.必须拥有全部权限点才视为有权限：v-permission:all="['createUser', 'createAccount']"

// 注册了一个全局方法，$usePermissions,当v-permission无法满足需求时，可以通过v-if='$usePermissions([权限点])'这种方式实现权限判断。

import { App } from 'vue';

export default {
  install: (app: App) => {
    // value 传入权限点或权限点数组
    // arg 表示传入的权限点必须全部存在或部分存在,默认部分存在
    app.config.globalProperties.$usePermissions = (
      value: string | string[],
      arg: 'in' | 'all' = 'in',
    ) => {
      // 为false表示权限未通过，为true表示有权限
      let flag = false;
      // 权限点对象
      const permissions = app.config.globalProperties.$store.state?.permission?.permissionMap || {};
      // 如果值传递的是数组，则需要判断arg是'in'还是'all'，默认为in
      if (Array.isArray(value)) {
        // 如果arg为in则用户的权限点只要包含在value数组中则视为有权限
        if (arg === 'in') {
          flag = value.some((key: string) => !!permissions[key]);
        } else if (arg === 'all') {
          // 否则必须拥有value数组中所有的权限点才视为有权限
          flag = value.every((key: string) => !!permissions[key]);
        }
      } else if (typeof value === 'string') {
        // 如果为字符串则直接判断是否有权限
        flag = !!permissions[value];
      }
      return flag;
    };

    app.directive('permission', {
      mounted(el, binding) {
        const { value, arg = 'in' } = binding;

        // 如果无权限，直接移除元素
        if (!app.config.globalProperties.$usePermissions(value, arg)) {
          el?.parentNode?.removeChild(el);
        }
      },
    });
  },
};
