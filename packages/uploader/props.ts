import { PropType } from 'vue';

export const emptyProps = {
  // 本地上传空状态标题
  emptyTitle: {
    type: String,
    default: undefined
  },
  // 本地上传空状态二级标题
  emptySubTitle: {
    type: String,
    default: undefined
  },
}

export const rootProps = {
  ...emptyProps,
  visible: {
    type: Boolean,
    default: undefined
  },
  // 点击蒙层是否可以关闭弹框
  maskClosable: {
    type: Boolean,
    default: false
  },
  // 弹框标题
  title: {
    type: String,
    default: undefined
  },
  // 如果点击确认按钮需要异步关闭弹框，则传入此参数 ():Promise => {}
  handleOk: {
    type: Function,
    default: null,
  },
  // 允许上传的文件后缀，主要是为了防止拖动上传时可以跳过accept校验
  extType: {
    type: Array as PropType<string[]>,
    default: ['.jpg', '.png', '.webp', '.jpeg', '.gif']
  },
  // input输入框的accept参数
  accept: {
    type: Array as PropType<string[]>,
    default: ['image/*']
  },
  // 是否支持多选, 最多支持上传几个文件，如果为true则不限制上传数量，如果为number类型则为最多可上传图片数量，如果为false则只能上传一张图片
  multiple: {
    type: [Boolean, Number],
    default: false
  },
  // 每个文件最大上传限制，单位M
  maxFilesSize: {
    type: Number,
    default: 5
  },
  // 禁用组件
  disabled: {
    type: Boolean,
    default: false
  },
  // 图片是否可裁剪，默认可裁剪， gif图片不可裁剪
  canEdit: {
    type: Boolean,
    default: true,
  },
  // 监听到图片变化，是否自动上传，默认需要用户确认后才会上传，与canEdit互斥
  autoUpload: {
    type: Boolean,
    default: false,
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
}
