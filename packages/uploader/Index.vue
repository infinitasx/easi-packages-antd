<template>
  <slot name="default"></slot>
  <EASIModal :visible="visible === undefined ? symbolVisible : visible"
             :body-style="{ height: 'calc(100vh - 300px)', maxHeight: 'auto', overflow: 'hidden'}"
             :title="title || getText('uploaderTitle')"
             :maskClosable="maskClosable"
             :destroyOnClose="destroyOnClose"
             centered
             @show="handleShow"
             @cancel="handleCancel"
  >
    <a-tabs type="card"
            v-model:activeKey="activeKey"
    >
      <a-tab-pane class="pane-container"
                  :class="actionType"
                  :key="0"
                  :tab="getText('uploaderTab0')"
                  v-loading="localUploadLoading"
                  @dragover.prevent="setActionType('dragover')"
                  @dragleave.prevent="setActionType('')"
                  @dragend.prevent
                  @drop.prevent="handleChange($event, 'drop')"
      >
        <Upload ref="uploadRef"
                :localUploadList="localUploadList"
                :localUploadMustCrop="localUploadMustCrop"
                :empty-title="emptyTitle"
                :empty-sub-title="emptySubTitle"
                :accept="accept"
                :multiple="multiple"
                :disabled="disabled"
                :minCropBoxHeight="minCropBoxHeight"
                :minCropBoxWidth="minCropBoxWidth"
                :aspectRatio="aspectRatio"
                :crop="crop"
                :isCropping="isCropping"
                @inputChange="handleChange"
                @handleDelete="handleDelete"
                @handleCrop="handleCrop"
                @handleConfirmCrop="handleConfirmCrop"
        />
      </a-tab-pane>
      <a-tab-pane class="pane-container"
                  :class="actionType"
                  :key="1"
                  :tab="getText('uploaderTab1')"
                  @dragover.prevent="setActionType('dragover')"
                  @dragleave.prevent="setActionType('')"
                  @dragend.prevent
                  @drop.prevent="handleChange($event, 'drop')"
      >
        <ImageStore ref="imageStoreRef"
                    :authorization="authorization"
                    :domain="domain"
                    :timeout="timeout"
                    :checkedList="checkedList"
                    :multiple="multiple"
                    :getText="getText"
                    @error="$emit('error', $event)"
                    @handleCheckedChange="handleCheckedChange"
        />
      </a-tab-pane>
      <template #tabBarExtraContent>
        <a-form layout="inline" v-show="activeKey === 1">
          <a-form-item>
            <a-input-search
                v-model:value="search"
                :placeholder="getText('searchPlaceholder')"
                style="width: 184px"
            />
          </a-form-item>
          <a-form-item>
            <EASIButton type="primary" :loading="uploadGlobal.listLoading" @click.stop="handleSearch">{{ getText('search') }}</EASIButton>
          </a-form-item>
        </a-form>
      </template>
    </a-tabs>

    <template #footer>
      <div class="flex items-center justify-end">
        <a-typography-text type="secondary" class="flex-1 text-left" v-show="activeKey === 1"> {{getText('selected')}} {{checkedList.length}} / {{typeof multiple === 'number' ? multiple : 1}}</a-typography-text>
        <a-typography-text type="secondary" class="flex-1 text-left" v-if="localUploadList.length === 0 && localUploadMustCrop.length === 0 && multiple !== true && activeKey === 0">{{getText('uploaderError1', {max: typeof multiple === 'number' ? multiple.toString() : 1})}}</a-typography-text>
        <a-typography-text type="danger" class="flex-1 text-left" v-if="localUploadMustCrop.length > 0">{{ getText('uploaderMustCropTips', {number: localUploadMustCrop.length}) }}</a-typography-text>
        <a-space>
          <!-- 关闭弹框按钮 -->
          <EASIButton v-if="!isCropping" :disabled="disabled" @click="handleCancel">{{ getText('cancel') }}</EASIButton>
          <!-- 开始上传按钮 -->
          <EASIButton type="primary" v-if="activeKey === 0 && !isCropping && waitToUpload.length > 0" :disabled="disabled" :loading="uploadGlobal.uploadLoading" success @click.stop="handleUpload">
            {{ getText('uploaderPrimary') }}
          </EASIButton>
          <!-- 确认选择按钮 -->
          <EASIButton type="primary" v-if="activeKey === 1 || (activeKey === 0 && !isCropping && alreadyUpload.length > 0)" :disabled="disabled" @click.stop="handleOK">{{ getText('confirm') }}</EASIButton>
          <!-- 裁剪过程中返回图片列表界面 -->
          <EASIButton v-if="isCropping" :disabled="disabled" @click.stop="handleCropBack">{{ getText('uploadBack') }}</EASIButton>
          <!-- 裁剪过程中删除某张图片 -->
          <EASIButton type="primary" v-if="activeKey === 0 && isCropping" danger :disabled="disabled" @click.stop="handleDelete(null, cropIndex)">{{ getText('uploaderRemove') }}</EASIButton>
          <!-- 上一张 -->
          <EASIButton type="primary" v-if="activeKey === 0 && isCropping && localUploadMustCrop.length === 0 && localUploadList.length > 1" :disabled="disabled" @click.stop="handleToPrev">{{ getText('uploaderPrev') }}</EASIButton>
          <!-- 下一张 -->
          <EASIButton type="primary" v-if="activeKey === 0 && isCropping && (localUploadMustCrop.length > 1 || (localUploadMustCrop.length === 0 && localUploadList.length > 1))" :disabled="disabled" @click.stop="handleToNext" :loading="uploadGlobal.cropLoading" :success="localUploadMustCrop.length > 1">{{ localUploadMustCrop.length > 0 ? getText('uploaderConfirmNext') : getText('uploaderNext') }}</EASIButton>
          <!-- 确认裁剪按钮 -->
          <EASIButton type="primary" v-if="activeKey === 0 && isCropping && localUploadMustCrop.length <= 1" success :loading="uploadGlobal.cropLoading" :disabled="disabled" @click.stop="handleToCrop">{{getText('uploaderConfirmCrop')}}</EASIButton>
        </a-space>
      </div>
    </template>
  </EASIModal>
</template>

<script lang="ts">
import {
  ComponentInternalInstance,
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  ref,
  toRefs,
  provide,
  reactive,
  toRaw,
  computed,
  createVNode
} from "vue";
import {createNamespace} from '../utils/create';
import {getEASIText, IGlobalLocal} from '../locale'
import Upload from './Upload.vue';
import ImageStore from "./ImageStore.vue";
import {rootProps} from './props'
import {canvasToFile, uploadPic, IPreviewItem, IValidateError, IUploadOptions, useActionType} from './methods'
import {message, Modal} from "ant-design-vue";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: createNamespace("Uploader"),
  emits: ["update:visible", 'show', 'cancel', 'ok', 'change', 'error'],
  props: {
    ...rootProps
  },
  setup(props, {emit, slots}) {
    const {disabled, extType, multiple, maxFilesSize, maxWidth, maxHeight, minCropBoxHeight, minCropBoxWidth, destroyOnClose, aspectRatio, system, authorization, timeout, env} = toRefs(props);

    const globalEASILocale = inject<IGlobalLocal>('globalEASILocale', {message: {}});
    const symbolVisible = ref<boolean>(false);

    const domain = computed(() => {
      return env.value === 'production' ? '' : 'https://oss.melbdelivery.com'
    })

    const activeKey = ref<number>(0);

    const app = getCurrentInstance() as ComponentInternalInstance;

    const uploadGlobal = reactive({
      cropLoading: false, // 裁剪中
      uploadLoading: false, // 上传中
      listLoading: false, // 列表加载中
    })

    const cropIndex = ref<number>(0);

    provide('uploadGlobal', uploadGlobal)

    let trigger: HTMLElement;
    onMounted(() => {
      if (slots.default && app.subTree?.el?.nextElementSibling) {
        trigger = app.subTree?.el?.nextElementSibling;
        trigger.addEventListener('click', showModal, false);
      }
    })

    onBeforeUnmount(() => {
      if (slots.default && trigger) {
        trigger.removeEventListener('click', showModal, false)
      }
    })

    const search = ref<string>();

    const [actionType, setActionType] = useActionType('');

    const getText = (key: string, value?: { [props: string]: string | number }) => {
      return getEASIText(globalEASILocale, key, value)
    }

    const uploadRef = ref();
    const imageStoreRef = ref();

    const localUploadList = ref<IPreviewItem[]>([]);
    const localUploadLoading = ref<boolean>(false);
    // 不符合尺寸比例必须要裁剪的图片
    const localUploadMustCrop = ref<IPreviewItem[]>([]);

    const waitToUpload = computed(() => {
      return localUploadList.value.filter(item => !item.uploadSuccess);
    })

    const alreadyUpload = computed(() => {
      return localUploadList.value.filter(item => item.uploadSuccess);
    })

    // 图库已选择的图片
    const checkedList = ref<IPreviewItem[]>([]);

    // 是否正在裁剪中
    const isCropping = ref<boolean>(false);

    const showModal = () => {
      symbolVisible.value = true;
      emit('update:visible', true);
      emit('show');
    }

    const handleCancel = () => {
      symbolVisible.value = false;
      emit('update:visible', false);
      emit('cancel')
      if(destroyOnClose.value){
        activeKey.value = 0;
        localUploadList.value = [];
        localUploadLoading.value = false;
        localUploadMustCrop.value = [];
        isCropping.value = false;
        uploadGlobal.cropLoading = false;
        uploadGlobal.listLoading = false;
        uploadGlobal.uploadLoading = false;
        checkedList.value = [];
      }
    }

    const handleShow = () => {
      activeKey.value = 0;
    }

    const handleDelete = (item: IPreviewItem, index: number) => {
      if(localUploadMustCrop.value.length > 0){
        localUploadMustCrop.value.splice(index, 1);
        if(isCropping.value){
          if(localUploadMustCrop.value.length === 0){
            isCropping.value = false;
          } else {
            let len = localUploadMustCrop.value.length - 1;
            let realIndex = index > len ? len : index;
            cropIndex.value = realIndex;
            uploadRef.value.setCurrent({...toRaw(localUploadMustCrop.value[realIndex])}, realIndex);
            uploadRef.value.initCrop();
          }
        }
      }else{
        localUploadList.value.splice(index, 1);
        if(isCropping.value){
          if(localUploadList.value.length === 0){
            isCropping.value = false;
          } else {
            let len = localUploadList.value.length - 1;
            let realIndex = index > len ? len : index;
            cropIndex.value = realIndex;
            uploadRef.value.setCurrent({...toRaw(localUploadList.value[realIndex])}, realIndex);
            uploadRef.value.initCrop();
          }
        }
      }
    }

    const handleCrop = (item: IPreviewItem, index: number) => {
      isCropping.value = true;
      cropIndex.value = index;
    }

    const handleConfirmCrop = (item: IPreviewItem, index: number, isMustCrop: boolean = false) => {
      if(isMustCrop) {
        localUploadMustCrop.value.splice(index, 1);
        localUploadList.value.push(item);
        if (localUploadMustCrop.value.length === 0) {
          isCropping.value = false;
          cropIndex.value = -1;
        }
      } else {
        localUploadList.value.splice(index, 1, item);
        isCropping.value = false;
        cropIndex.value = -1;
      }
    }

    const handleCropBack = () => {
      if(localUploadMustCrop.value.length > 0){
        Modal.confirm({
          title: getText('uploaderBackTitle'),
          icon: createVNode(ExclamationCircleOutlined),
          content: getText('uploaderBackMsg'),
          async onOk(){
            isCropping.value = false;
            cropIndex.value = 0;
            localUploadMustCrop.value = [];
            uploadGlobal.cropLoading = false;
            return true;
          }
        })
      }else{
        isCropping.value = false;
        uploadGlobal.cropLoading = false;
        cropIndex.value = 0;
      }
    }

    const handleToCrop = () => {
      uploadRef.value.confirmCrop(localUploadMustCrop.value.length > 0)
    }

    const handleToNext = () => {
      uploadRef.value.toNext()
    }

    const handleToPrev = () => {
      uploadRef.value.toPrev()
    }

    const handleUpload = async () => {
      uploadGlobal.uploadLoading = true;
      const options: IUploadOptions = {
        system: system.value as string,
        authorization: authorization.value as string,
        timeout: timeout.value,
        domain: domain.value,
      }
      for(let i = 0; i < localUploadList.value.length; i++){
        if(localUploadList.value[i].uploadSuccess){
          continue;
        }
        try{
          localUploadList.value[i].uploadLoading = true;
          const newItem = await uploadPic({
            ...toRaw(localUploadList.value[i])
          }, options);
          localUploadList.value.splice(i ,1, newItem);
        }catch (e) {
          message.error(getText('uploadError'))
          localUploadList.value[i].uploadLoading = false;
          localUploadList.value[i].uploadFail = true;
          emit('error', e)
        }
      }
      uploadGlobal.uploadLoading = false;
    }

    const handleOK = () => {
      if(activeKey.value === 0){
        const array = alreadyUpload.value.map((item: IPreviewItem) => {
          const {url, name, size, width, height } = item;
          return {
            url,
            name,
            size,
            width,
            height,
          }
        })
        if(waitToUpload.value.length > 0){
          return Modal.confirm({
            title: getText('uploadWaitTitle'),
            icon: createVNode(ExclamationCircleOutlined),
            content: getText('uploadWaitMsg', {number: waitToUpload.value.length}),
            async onOk(){
              handleCancel()
              emit('ok', array);
              return true;
            }
          })
        }
        handleCancel()
        emit('ok', array)
      }else{
        const array = checkedList.value.map((item: IPreviewItem) => {
          const {url, name, size, width, height } = item;
          return {
            url,
            name,
            size,
            width,
            height,
          }
        });
        handleCancel();
        emit('ok', array)
      }
    }

    const handleSearch = () => {
      imageStoreRef.value?.getImageList(search.value)
    }

    const handleCheckedChange = (checked: boolean, item: IPreviewItem, index: number) => {
      if(checked){
        checkedList.value.push({...toRaw(item)})
      }else{
        checkedList.value = checkedList.value.filter(_item => _item.url !== item.url);
      }
    }

    return {
      symbolVisible,
      globalEASILocale,
      uploadGlobal,
      activeKey,
      imageStoreRef,
      handleCancel,
      handleShow,
      getText,
      handleSearch,
      search,
      actionType,
      setActionType,
      uploadRef,
      localUploadList,
      localUploadLoading,
      localUploadMustCrop,
      checkedList,
      alreadyUpload,
      waitToUpload,
      isCropping,
      cropIndex,
      domain,
      handleCropBack,
      handleDelete,
      handleCrop,
      handleConfirmCrop,
      handleToCrop,
      handleToNext,
      handleToPrev,
      handleUpload,
      handleOK,
      handleCheckedChange,
      async handleChange(e: DragEvent, fromAction: 'drop' | '' = '') {
        const fileList = Array.from(fromAction === 'drop' ? (((e as DragEvent).dataTransfer as DataTransfer).files as FileList) : ((e.target as HTMLInputElement).files) as FileList);
        (e.target as HTMLInputElement).value = '';
        (e.target as HTMLInputElement).files = null;
        if (disabled.value || isCropping.value) return;
        setActionType(fromAction);
        // 拖动上传的文件后缀名不合法
        if (fromAction === 'drop' && extType.value && fileList.some((file: File) => {
          const fileNameArray = file.name.split('.');
          return !extType.value.includes(fileNameArray[fileNameArray.length - 1])
        })) {
          const errorMsg = getText('uploaderError0');
          message.error(errorMsg);
          return emit('error', {
            code: 'FILE_TYPE_ERROR',
            message: errorMsg,
            fileList: fileList,
          } as IValidateError)
        }
        // 批量上传时，文件数量是否超过最大限制
        if ((typeof multiple.value === 'number' && (fileList.length + localUploadList.value.length) > multiple.value) || (multiple.value === false && (localUploadList.value.length > 0 || (localUploadList.value.length === 0 && fileList.length > 1)))) {
          let number = 0;
          if (multiple.value === false && (localUploadList.value.length === 0 && fileList.length > 1)) {
            number = 1;
          }
          if (typeof multiple.value === 'number' && (fileList.length + localUploadList.value.length) > multiple.value) {
            number = multiple.value - localUploadList.value.length > 0 ? multiple.value - localUploadList.value.length : 0;
          }
          const errorMsg = getText('uploaderError1', {max: number});
          message.error(errorMsg)
          return emit('error', {
            code: 'FILE_MAX_COUNT',
            message: errorMsg,
            fileList: fileList,
          } as IValidateError)
        }
        // 单个文件不能超过内存最大限制
        if (fileList.some(file => file.size / 1024 / 1024 > maxFilesSize.value)) {
          const errorMsg = getText('uploaderError2', {max: maxFilesSize.value});
          message.error(errorMsg);
          return emit('error', {
            code: 'FILE_MAX_SIZE',
            message: errorMsg,
            fileList: fileList,
          } as IValidateError)
        }

        const fileArray: IPreviewItem[] = [];
        const mustCropArray: IPreviewItem[] = [];
        localUploadLoading.value = true;
        const _aspectRatio = aspectRatio.value ? aspectRatio.value.split('*').map(str => Number(str)) : [0, 0];
        const _ratio = _aspectRatio[0] === 0 || _aspectRatio[1] === 0 ? null : parseFloat((_aspectRatio[0] / _aspectRatio[1]).toString()).toFixed(4);
        for(const file of fileList){
          try{
            const fileItem = await canvasToFile(file, {
              maxHeight: maxHeight.value,
              maxWidth: maxWidth.value,
              minCropBoxHeight: minCropBoxHeight.value,
              minCropBoxWidth: minCropBoxWidth.value,
            }, getText);
            if(_ratio && fileItem.file.type !== 'image/gif' && _ratio !== fileItem.aspectRatio){
              mustCropArray.push(fileItem);
            }else{
              fileArray.push(fileItem);
            }
          }catch (e) {
            localUploadLoading.value = false;
            message.error(e.message);
            return emit('error', e)
          }
        }

        localUploadLoading.value = false;

        localUploadList.value = [...toRaw(localUploadList.value), ...fileArray];
        localUploadMustCrop.value = [...toRaw(localUploadMustCrop.value), ...mustCropArray];

        if(localUploadMustCrop.value.length > 0) {
          isCropping.value = true;
          cropIndex.value = 0;
          uploadRef.value.setCurrent({
            ...toRaw(localUploadMustCrop.value[0])
          }, 0);
          uploadRef.value.initCrop();
        }

        if (activeKey.value !== 0) {
          activeKey.value = 0;
        }

        emit('change', fileList);
      },
    };
  },
  components: {
    Upload,
    ImageStore,
  },
});
</script>

<style lang="scss">
img.ant-image-preview-img{
  display: inline-block !important;
}
</style>

<style lang="scss" scoped>
.pane-container {
  position: relative;
  height: calc(100vh - 400px);
  overflow: auto;

  &.dragover {
    background: #fafafa;
  }
}

[data-pro-theme=antdv-pro-theme-dark] .pane-container.dragover {
  background: hsla(0, 0%, 100%, .04)
}
</style>
