<template>
  <input ref="inputRef"
         type="file"
         :accept="accept"
         :multiple="multiple === true || (typeof multiple === 'number' && multiple > 1)"
         :disabled="disabled"
         @change="handleChange"
         style="display: none;"
  >
  <Empty v-show="localUploadList.length === 0 && localUploadMustCrop.length === 0" :emptyTitle="emptyTitle" :emptySubTitle="emptySubTitle"
         @clickEmpty="inputRef.click()"/>
  <UploaderContainer v-show="!isCropping && localUploadList.length > 0">
    <UploaderItem v-for="(item, index) in localUploadList"
                  :key="index"
                  :item="item"
                  :index="index"
                  :crop="crop"
                  :ratio="ratio"
                  :loading="uploadGlobal.uploadLoading"
                  :activeKey="0"
                  @handleDelete="handleDelete"
                  @handleCrop="handleCrop"
    />
    <div class="easi-packages-uploader-add-btn" v-show="showAddBtn" @click="inputRef.click()">
      <div class="icon-btn-plus text-center">
         <p><PlusOutlined /></p>
         <p style="font-size: 14px">{{localUploadList.length}} / {{multiple}}</p>
      </div>
    </div>
  </UploaderContainer>
  <div class="easi-packages-uploader-cropper" v-show="isCropping">
    <div class="easi-packages-uploader-cropper-wrapper">
      <img ref="cropImageRef">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, toRaw, toRefs, inject, computed, onBeforeUnmount} from "vue"
import Cropper from 'cropperjs';
import UploaderContainer from './PreviewContainer.vue';
import UploaderItem from './PreviewItem.vue';
import Empty from './Empty.vue';
import { PlusOutlined } from '@ant-design/icons-vue';
import {fileToBlob, getImageSize, IPreviewItem} from './methods'
import {rootProps} from './props'

export default defineComponent({
  name: "localStore",
  emits: ['inputChange', 'handleDelete', 'handleCrop', 'handleConfirmCrop'],
  props: {
    ...rootProps,
    localUploadList: {
      type: Array as PropType<IPreviewItem[]>,
      default: () => [],
    },
    localUploadMustCrop: {
      type: Array as PropType<IPreviewItem[]>,
      default: () => [],
    },
    ratio: {
      type: [Number, String],
      default: 0,
    },
    isCropping: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, {emit}){
    const { minCropBoxWidth, minCropBoxHeight, ratio, localUploadMustCrop, localUploadList, multiple } = toRefs(props);

    const uploadGlobal = inject('uploadGlobal', { cropLoading: false, uploadLoading: false });

    const inputRef = ref();

    const cropImageRef = ref();
    const cropperIndex = ref<number>(-1);
    const cropperItem = ref<IPreviewItem>();

    let cropInstance: Cropper;
    const handleImageReady = () => {
      if(!cropInstance) return;
      const {naturalWidth, naturalHeight, width, height} = cropInstance.getCanvasData();
      const wRate = width / naturalWidth;
      const hRate = height / naturalHeight;
      const _minCropBoxHeight = minCropBoxHeight.value * hRate;
      const _minCropBoxWidth = minCropBoxWidth.value * wRate;
      (cropInstance as any).options.minCropBoxHeight = (cropInstance as any).cropBoxData.minHeight = (cropInstance as any).initialCropBoxData.minHeight = _minCropBoxHeight;
      (cropInstance as any).options.minCropBoxWidth = (cropInstance as any).cropBoxData.minWidth = (cropInstance as any).initialCropBoxData.minWidth = _minCropBoxWidth;
    }

    const initCrop = () => {
      // 如果已存在裁剪实例
      if(cropInstance){
        cropInstance.reset();
        cropInstance.replace(cropperItem.value?.originUrl as string)
      }else{
        cropImageRef.value.src = cropperItem.value?.originUrl;
        cropImageRef.value.addEventListener('ready', handleImageReady, false);
        cropInstance = new Cropper(cropImageRef.value, {
          viewMode: 0,
          movable: true,
          autoCropArea: 1,
          aspectRatio: Number(ratio.value),
          minCropBoxHeight: minCropBoxHeight.value,
          minCropBoxWidth: minCropBoxWidth.value,
          zoomable: true,
          scalable: true
        });
      }
    }

    const setCurrent = (item: IPreviewItem, index: number) => {
      cropperIndex.value = index;
      cropperItem.value = item;
    }

    onBeforeUnmount(() => {
      cropInstance?.destroy();
      cropImageRef.value?.removeEventListener('ready', handleImageReady, false);
    })

    // 跳转到下一张裁剪
    const toNext = async () => {
      const array = localUploadMustCrop.value.length > 0 ? localUploadMustCrop.value : localUploadList.value;
      let len = array.length - 1;
      // 必须要裁剪
      let index = 0;
      if(localUploadMustCrop.value.length > 0){
        await confirmCrop(true);
      }else{
        if(cropperIndex.value < len){
          index = cropperIndex.value + 1;
        }
      }
      setCurrent({
        ...toRaw(array[index])
      }, index);
      initCrop();
    }

    // 跳转到上一张裁剪
    const toPrev = () => {
      let len = localUploadList.value.length - 1;
      let index = 0;
      if(cropperIndex.value < len){
        index = cropperIndex.value + 1;
      }
      setCurrent({
        ...toRaw(localUploadList.value[index])
      }, index)
      initCrop();
    }

    // 确认裁剪
    // mustCrop: 是否为强制裁剪
    const confirmCrop = (mustCrop: boolean = false) => {
      return new Promise((resolve) => {
        uploadGlobal.cropLoading = true;
        cropInstance.getCroppedCanvas().toBlob(async (blob: any) => {
          const { name, originUrl } = toRaw(cropperItem.value) as IPreviewItem;
          const fileNameArray = name.split('.');
          const newFileName = `${fileNameArray.slice(0, fileNameArray.length - 1).join('.')}.webp`;
          const newFile = new File([blob], newFileName, {type: 'image/webp'});
          const url = await fileToBlob(newFile);
          const { width, height } = await getImageSize(url);
          const newPreviewItem: IPreviewItem = {
            url,
            originUrl,
            file: newFile,
            name: newFileName,
            width,
            height,
            size: newFile.size,
            uploadSuccess: false,
            uploadFail: false,
            uploadLoading: false,
          }
          emit('handleConfirmCrop', newPreviewItem, cropperIndex.value, mustCrop);
          uploadGlobal.cropLoading = false;
          resolve(newPreviewItem);
        }, 'image/webp')
      })
    }

    return {
      inputRef,
      cropImageRef,
      cropperItem,
      cropperIndex,
      uploadGlobal,
      confirmCrop,
      toNext,
      toPrev,
      setCurrent,
      initCrop,
      showAddBtn: computed(() => {
        if(localUploadList.value.length > 0){
          if(typeof multiple.value === 'number' && multiple.value > localUploadList.value.length){
            return true;
          } else if(multiple.value === true){
            return true;
          }
        }
        return false;
      }),
      handleChange(e: InputEvent){
        emit('inputChange', e)
      },
      handleDelete(item: IPreviewItem, index: number){
        emit('handleDelete', {...toRaw(item)}, index)
      },
      handleCrop(item: IPreviewItem, index: number){
        const pureItem = {...toRaw(item)};
        emit('handleCrop', pureItem, index);
        setCurrent(pureItem, index)
        initCrop();
      },
    }
  },
  components: {
    UploaderContainer,
    UploaderItem,
    Empty,
    PlusOutlined
  }
})
</script>

<style lang="scss">
.easi-packages-uploader-cropper{
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;
  .easi-packages-uploader-cropper-wrapper{
    position: relative;
    top: 4px;
    left: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
  }
}
.easi-packages-uploader-add-btn{
  float: left;
  position: relative;
  width: 14.666667%;
  height: 0;
  padding-bottom: 14.666667%;
  margin-left: 2%;
  margin-bottom: 2%;
  background-color: #fafafa;
  border: 1px dashed #d9d9d9;
  cursor: pointer;
  &:hover{
    border: 1px dashed #1890ff;
    .icon-btn-plus{
      color: #1890ff;
    }
  }
  .icon-btn-plus{
    font-size: 24px;
    position: absolute;
    color: rgba(0,0,0,.45);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@media (max-width: 960px) {
  .easi-packages-uploader-add-btn {
    width: 23%;
    padding-bottom: 23%;
  }
}

@media (max-width: 540px) {
  .easi-packages-uploader-add-btn {
    width: 48%;
    padding-bottom: 48%;
  }
}
</style>
