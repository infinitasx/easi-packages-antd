<template>
  <UploaderContainer v-loading="uploadGlobal.listLoading">
    <div class="overflow-auto easi-uploader-image-list">
      <UploaderItem v-for="(item, index) in imageList"
                    :key="index"
                    :item="item"
                    :index="index"
                    :disabled="disabled"
                    :ratio="ratio"
                    :activeKey="1"
                    @handleCheckChange="handleCheckChange"
      />
      <a-empty v-show="imageList.length === 0" :image="simpleImage" />
    </div>
    <div class="flex items-center justify-end absolute left-0 bottom-0 w-full" v-show="total > 0 && imageList.length > 0">
      <a-pagination show-quick-jumper
                    show-size-changer
                    :show-total="showTotal"
                    showLessItems
                    v-model:current="current"
                    v-model:page-size="pageSize"
                    :total="total"
                    @change="onChange"
                    @showSizeChange="onChange"
      />
    </div>
  </UploaderContainer>
</template>

<script lang="ts">
import {defineComponent, inject, PropType, ref, toRefs, computed} from 'vue'
import {Empty, message} from 'ant-design-vue';
import UploaderContainer from './PreviewContainer.vue';
import UploaderItem from './PreviewItem.vue';
import {getPicsList, IPreviewItem} from './methods'

export default defineComponent({
  name: 'imageStore',
  emits: ['error', 'handleCheckedChange'],
  props: {
    checkedList: {
      type: Array as PropType<IPreviewItem[]>,
      default: []
    },
    authorization: {
      type: [String, Function],
      default: undefined
    },
    authorizationKey: {
      type: String,
      default: 'authorization'
    },
    timeout: {
      type: Number,
      default: 20000
    },
    domain: {
      type: String,
      default: '',
    },
    multiple: {
      type: [Boolean, Number],
      default: false
    },
    ratio: {
      type: [Number, String],
      default: 0
    },
    getText: {
      type: Function,
      default: () => ''
    }
  },
  setup(props, {emit}) {
    const {authorization, authorizationKey, timeout, domain, getText, multiple, checkedList} = toRefs(props);

    const uploadGlobal = inject('uploadGlobal', { listLoading: false })

    const imageList = ref<IPreviewItem[]>([]);
    const current = ref<number>(1);
    const total = ref<number>(0);
    let pageSize = ref<number>(20);
    let filename = '';

    const getImageList = async (_filename?: string) => {
      uploadGlobal.listLoading = true;
      try{
        if(_filename != null){
          filename = _filename;
          current.value = 1;
        }
        const data = await getPicsList({
          page: current.value,
          size: pageSize.value,
          filename
        }, {
          authorization: authorization.value as string,
          authorizationKey: authorizationKey.value,
          timeout: timeout.value,
          domain: domain.value,
        });
        total.value = data.total || 0;
        imageList.value = data.data || [];
      }catch (e) {
        message.error(getText.value('uploadListError'))
        emit('error', e)
      }
      uploadGlobal.listLoading = false;
    }

    getImageList();

    const onChange = (_page: number, _size: number) => {
      current.value = _page ? _page : current.value;
      pageSize.value = _size ? _size : pageSize.value;
      getImageList();
    }

    const disabled = computed(() => {
      if(typeof multiple.value === 'number' && checkedList.value.length >= multiple.value){
        return true
      }else if(multiple.value === false && checkedList.value.length >= 1){
        return true
      }
      return false;
    })

    return {
      imageList,
      current,
      uploadGlobal,
      total,
      pageSize,
      disabled,
      simpleImage: Empty.PRESENTED_IMAGE_SIMPLE as any,
      onChange,
      getImageList,
      handleCheckChange(e: any, item: IPreviewItem, index: number) {
        const { checked } = e.target;
        imageList.value[index].checked = checked
        emit('handleCheckedChange', checked, imageList.value[index], index)
      },
      showTotal(total: number) {
        return getText.value('pageTotal', { 'total': total || 0 })
      }
    }
  },
  components: {
    UploaderContainer,
    UploaderItem,
  }
})
</script>

<style lang="scss" scoped>
.easi-uploader-image-list{
  height: calc(100% - 38px);
}
</style>
