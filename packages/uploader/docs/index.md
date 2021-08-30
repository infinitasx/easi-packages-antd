<p><strong id="EASIDrawer" style="font-size: 18px">EASIUploader - 图片选择器</strong></p>

```demo
base
```

#### Props

|    props    |         type         |         default         | required | remark                           |
| :---------: | :------------------: | :---------------------: | :------: | -------------------------------- |
|    system   |        string        |                         |    是    | 系统在IAM内的标示，例如IAM系统标示为iam，可咨询后端系统具体标示     |
|authorization|        string        |                         |    是    | IAM下发的token，格式为Bearer ******                         |
|     env     |development or production |                     |    是    | 默认取window.$EASI_BUILD_ENV的值 |
|  multiple   |   boolean or number  |         false           |    否    | 可以上传/选择的图片数量，为true时，不限制数量，为false或1时只能上传/选择一张图片，为0时不可上传/选择图片 |
| maxFilesSize|   number             |         5               |    否    | 单张图片上传内存大小限制，单位M，默认不超过5M |
| disabled    |   boolean            |         false           |    否    |  禁用图片选择器 |
|    crop     |   boolean            |         true            |    否    |  图片是否可裁剪，默认可裁剪，gif图片不能使用裁剪功能 |
|   maxWidth  |   number             |         2000            |    否    |  图片最大宽度，如果选择的图片超过此值，会按比例压缩宽度到此值，gif不受此约束，默认最大2000px |
|   maxHeight |   number             |         2000            |    否    |  图片最大高度，如果选择的图片超过此值，会按比例压缩高度到此值，gif不受此约束，默认最大2000px |
| aspectRatio |   string             |                         |    否    |  裁剪图片的宽高比，如果不限制宽高比则不传入此值，或传入0\*0，如果想要正方形图片可传入1\*1，如果想要长方形可传入2*1 |
|minCropBoxWidth|   number           |           0             |    否    |  可裁剪到的最小宽度，传0不限制 |
|minCropBoxHeight|   number           |           0             |    否    |  可裁剪到的最小高度，传0不限制 |
|   timeout   |      number          |        20000            |    否    | 上传超时时间，默认20秒，单位毫秒         |
|  emptyTitle |       string         |  点击或将图片拖拽到这里上传  |    否    | 本地上传无图片的时候空状态的标题                       |
|emptySubTitle|       string         |支持扩展名：.jpg、.jpeg、.png、.webp、.gif等 |    否    | 本地上传无图片的时候空状态的二级标题  |
|v-model:visible | boolean           |                         |    否    | 如果写入了slot#default插槽，则由插槽内的dom自动触发显示             |
| maskClosable |    boolean          |         false           |    否    | 点击蒙层是否可以关闭文件选择器，默认不可以          |
|destroyOnClose|    boolean          |         true            |    否    | 关闭文件选择器是否清除内部状态，默认要清除          |
|    title     |    string           |         上传图片          |    否    | 文件选择器弹框的标题          |
|    extType   |    string[]         |['jpg', 'png', 'webp', 'jpeg', 'gif', 'tif', 'tiff']|    否    | 允许上传的文件后缀，主要是为了防止拖动上传时可以跳过accept校验          |
|    accept    |    string[]         |['image/gif','image/jpeg','image/png','image/tiff','image/webp']|    否    | input输入框的accept参数,限制文件类型         |

#### Types

```ts
type FileList = File[]; // 文件数组

// FILE_TYPE_ERROR: 文件类型或后缀校验失败
// FILE_MAX_COUNT: 选择的文件超过数量限制
// FILE_MIN_WITH_HEIGHT：待上传的文件宽高小于最小宽高
// FILE_UPLOAD_ERROR: 上传文件失败，可能原因是接口超时，token失效
// FILE_LIST_ERROR： 获取图片库数据失败，可能原因是接口超时，token失效
// fileList有可能为空数组
interface IValidateError{
  code: 'FILE_TYPE_ERROR' | 'FILE_MAX_COUNT' | 'FILE_MAX_SIZE' | 'FILE_MIN_WITH_HEIGHT' | 'FILE_UPLOAD_ERROR' | 'FILE_LIST_ERROR';
  message: string;
  fileList: FileList;
}

interface ISelect {
  url: string; // 已选择的图片链接
  name: string; // 已选择的图片文件名
  size: number; // 已选择的图片内存大小，单位字节
  width: number; // 已选择图片的真实宽度
  height: number; // 已选择图片的真实高度
}
```

#### Events

|  event name |         params         |    return value       | remark                           |
| :---------: | :------------------: | :---------------------: | -------------------------------- |
|    show   |                        |       void              |    显示文件选择器弹框事件  |
|    cancel |                        |       void              |    关闭文件选择器弹框事件  |
|    change |                        |       FileList          |    本地上传选择文件事件  |
|    error  |                        |       IValidateError    |    包含接口调用失败，文件校验失败事件  |
|    ok     |                        |       ISelect[]         |    用户确认选择事件，调用方应监听此事件获取用户选择的图片  |

#### Slots

|  name   | remark                                 |
| :-----: | -------------------------------------- |
| default | 触发文件选择器弹框的插槽，插槽内容必须要有root dom。不写此插槽，也可以通过v-model:visible控制弹框显示隐藏  |
