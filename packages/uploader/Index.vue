<template>
  <slot name="default"></slot>
  <EASIModal :visible="visible === undefined ? symbolVisible : visible"
             :body-style="{ height: 'calc(100vh - 300px)', maxHeight: 'auto', overflow: 'hidden'}"
             :title="title || getText('uploaderTitle')"
             :maskClosable="maskClosable"
             centered
             @show="handleShow"
             @cancel="handleCancel"
  >
    <input ref="inputRef"
           type="file"
           :accept="accept"
           :multiple="multiple === true || (typeof multiple === 'number' && multiple > 1)"
           :disabled="disabled"
           @change="handleChange"
           style="display: none;"
    >
    <a-tabs type="card" v-model:activeKey="activeKey">
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
        <Empty v-show="localUploadList.length === 0" :emptyTitle="emptyTitle" :emptySubTitle="emptySubTitle"
               @clickEmpty="inputRef.click()"/>
        <UploaderContainer>
          <UploaderItem v-for="(item, index) in localUploadList" :key="index" :item="item" :index="index"></UploaderItem>
        </UploaderContainer>
      </a-tab-pane>
      <a-tab-pane class="pane-container" :key="1" :tab="getText('uploaderTab1')">
        图片库
      </a-tab-pane>
      <template #tabBarExtraContent>
        <a-form layout="inline">
          <a-form-item>
            <a-input-search
                v-model:value="search"
                placeholder="请输入要搜索的关键字"
                style="width: 200px"
            />
          </a-form-item>
          <a-form-item>
            <EASIButton type="primary">{{ getText('search') }}</EASIButton>
          </a-form-item>
        </a-form>
      </template>
    </a-tabs>

    <template #footer>
      <a-space>
        <EASIButton @click="handleCancel">{{ getText('cancel') }}</EASIButton>
        <EASIButton type="primary" success>{{ getText('uploaderPrimary') }}</EASIButton>
        <EASIButton type="primary">{{ getText('confirm') }}</EASIButton>
      </a-space>
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
  toRefs
} from "vue";
import {createNamespace} from '../utils/create';
import {getEASIText, IGlobalLocal} from '../locale'
import Empty from './Empty.vue';
import UploaderContainer from './PreviewContainer.vue';
import UploaderItem from './PreviewItem.vue';
import {rootProps} from './props'
import {canvasToFile, IPreviewItem, IValidateError, useActionType} from './methods'

export default defineComponent({
  name: createNamespace("Uploader"),
  emits: ["update:visible", 'show', 'cancel', 'ok', 'change', 'error'],
  props: {
    ...rootProps
  },
  setup(props, {emit, slots}) {
    const {disabled, extType, multiple, maxFilesSize, maxWidth, maxHeight, minCropBoxHeight, minCropBoxWidth} = toRefs(props);

    const globalEASILocale = inject<IGlobalLocal>('globalEASILocale', {message: {}});
    const symbolVisible = ref<boolean>(false);

    const activeKey = ref<number>(0);

    const app = getCurrentInstance() as ComponentInternalInstance;

    const showModal = () => {
      symbolVisible.value = true;
      emit('update:visible', true);
      emit('show');
    }

    const handleCancel = () => {
      symbolVisible.value = false;
      emit('update:visible', false);
      emit('cancel')
    }

    const handleShow = () => {
      activeKey.value = 0;
    }

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

    const inputRef = ref();

    const getText = (key: string, value?: { [props: string]: string | number }) => {
      return getEASIText(globalEASILocale, key, value)
    }

    const localUploadList = ref<IPreviewItem[]>([]);
    const localUploadLoading = ref<boolean>(false);


    return {
      inputRef,
      symbolVisible,
      globalEASILocale,
      activeKey,
      localUploadList,
      localUploadLoading,
      handleCancel,
      handleShow,
      getText,
      search,
      actionType,
      async handleChange(e: DragEvent | Event, fromAction: 'drop' | '' = '') {
        if (disabled.value) return;
        setActionType(fromAction);
        const fileList = Array.from(fromAction === 'drop' ? (((e as DragEvent).dataTransfer as DataTransfer).files as FileList) : ((e.target as HTMLInputElement).files) as FileList);
        // 拖动上传的文件后缀名不合法
        if (fromAction === 'drop' && extType.value && fileList.some((file: File) => {
          const fileNameArray = file.name.split('.');
          return !extType.value.includes(fileNameArray[fileNameArray.length - 1])
        })) {
          return emit('error', {
            code: 'FILE_TYPE_ERROR',
            message: getText('uploaderError0'),
            fileList: fileList,
          } as IValidateError)
        }
        // 批量上传时，文件数量是否超过最大限制
        if((typeof multiple.value === 'number' && fileList.length > multiple.value) || (multiple.value === false && fileList.length > 1)){
          return emit('error', {
            code: 'FILE_MAX_COUNT',
            message: getText('uploaderError1'),
            fileList: fileList,
          } as IValidateError)
        }
        // 单个文件不能超过内存最大限制
        if(fileList.some(file => file.size / 1024 / 1024 > maxFilesSize.value)){
          return emit('error', {
            code: 'FILE_MAX_SIZE',
            message: getText('uploaderError2', {max: maxFilesSize.value}),
            fileList: fileList,
          } as IValidateError)
        }

        const fileArray: IPreviewItem[] = [];
        localUploadLoading.value = true;
        for(const file of fileList){
          try{
            const fileItem = await canvasToFile(file, {
              maxHeight: maxHeight.value,
              maxWidth: maxWidth.value,
              minCropBoxHeight: minCropBoxHeight.value,
              minCropBoxWidth: minCropBoxWidth.value,
            }, getText)
            fileArray.push(fileItem);
          }catch (e) {
            localUploadLoading.value = false;
            return emit('error', e)
          }
        }

        localUploadLoading.value = false;

        localUploadList.value = fileArray;

        emit('change', fileList);
      },
      setActionType,
    };
  },
  components: {
    Empty,
    UploaderContainer,
    UploaderItem,
  },
});
</script>

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
