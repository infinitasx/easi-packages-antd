import { PropType } from 'vue';

// 空状态相关属性
export const emptyProps = {
  // 本地上传空状态标题
  emptyTitle: {
    type: String,
    default: undefined,
  },
  // 本地上传空状态二级标题
  emptySubTitle: {
    type: String,
    default: undefined,
  },
};

// 裁剪相关属性
export const cropProps = {
  // 裁剪的宽高比
  aspectRatio: {
    type: Number,
    default: 0,
  },
  // 可裁剪到的最小宽度
  minCropBoxWidth: {
    type: Number,
    default: 0,
  },
  // 可裁剪到的最小高度
  minCropBoxHeight: {
    type: Number,
    default: 0,
  },
};

export const uploadProps = {
  // 系统名称标示
  system: {
    type: String,
    default: undefined,
  },
  // IAM下发的token
  authorization: {
    type: [String, Function],
    default: undefined,
  },
  authorizationKey: {
    type: String,
    default: 'authorization',
  },
  // 接口超时时间
  timeout: {
    type: Number,
    default: 20000,
  },
  env: {
    type: String as PropType<'development' | 'production'>,
    default: window?.$EASI_BUILD_ENV,
  },
};

export const rootProps = {
  ...emptyProps,
  ...cropProps,
  ...uploadProps,
  visible: {
    type: Boolean,
    default: undefined,
  },
  // 点击蒙层是否可以关闭弹框
  maskClosable: {
    type: Boolean,
    default: false,
  },
  // 关闭弹框是否初始化内部状态
  destroyOnClose: {
    type: Boolean,
    default: true,
  },
  // 弹框标题
  title: {
    type: String,
    default: undefined,
  },
  // 允许上传的文件后缀，主要是为了防止拖动上传时可以跳过accept校验
  extType: {
    type: Array as PropType<string[]>,
    default: () => ['jpg', 'png', 'webp', 'jpeg', 'gif', 'tif', 'tiff'],
  },
  // input输入框的accept参数
  accept: {
    type: Array as PropType<string[]>,
    default: () => ['image/gif', 'image/jpeg', 'image/png', 'image/tiff', 'image/webp'],
  },
  // 是否支持多选, 最多支持上传几个文件，如果为true则不限制上传数量，如果为number类型则为最多可上传图片数量，如果为false则只能上传一张图片
  multiple: {
    type: [Boolean, Number],
    default: false,
  },
  // 每个文件最大上传限制，单位M
  maxFilesSize: {
    type: Number,
    default: 5,
  },
  // 禁用组件
  disabled: {
    type: Boolean,
    default: false,
  },
  // 图片是否可裁剪，默认可裁剪， gif图片不可裁剪
  crop: {
    type: Boolean,
    default: true,
  },
  // 图片最大宽度
  maxWidth: {
    type: Number,
    default: 2000,
  },
  // 图片最大高度
  maxHeight: {
    type: Number,
    default: 2000,
  },
};
