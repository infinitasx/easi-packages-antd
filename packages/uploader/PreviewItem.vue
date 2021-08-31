<template>
  <div class="easi-uploader-preview-item relative">
    <a-card bordered hoverable :body-style="{padding: 0}">
      <template #cover>
        <div class="easi-uploader-preview relative">
          <a-image
              width="100%"
              :src="item.url"
              :class="{'easi-uploader-disabled-checked': ((disabled && !item.checked) || invalidAspectRatio) && activeKey === 1}"
          />
          <div class="absolute">
            <CheckCircleFilled style="color: #67c23a;font-size: 18px" v-if="item.uploadSuccess && activeKey === 0"/>
            <CloseCircleFilled style="color: #ff4949;font-size: 18px" v-if="item.uploadFail && activeKey === 0"/>
            <a-checkbox v-if="activeKey === 1" :checked="item.checked" :disabled="(disabled && !item.checked) || invalidAspectRatio" size="large" @change="$emit('handleCheckChange', $event, item, index)" />
          </div>
          <span class="easi-uploader-loading flex items-center justify-center" v-show="!item.uploadSuccess && loading">
            <LoadingOutlined />
          </span>
        </div>
      </template>
      <ul class="ant-card-actions" v-if="activeKey === 0">
        <li v-if="crop && !item.uploadSuccess" style="width: 50%">
          <EASIButton type="link"
                      block
                      :disabled="item.uploadSuccess || !crop || disabled || item.file.type === 'image/gif' || (!item.uploadSuccess && loading)"
                      key="scissor"
                      @click.stop="handleCrop(item, index)"
          >
            <template #icon>
              <ScissorOutlined/>
            </template>
          </EASIButton>
        </li>
        <li :style="{width: crop && !item.uploadSuccess ? '50%' : '100%'}">
          <EASIButton type="link"
                      block
                      :disabled="disabled || (!item.uploadSuccess && loading)"
                      key="delete"
                      danger
                      @click.stop="handleDelete(item, index)"
          >
            <template #icon>
              <DeleteOutlined/>
            </template>
          </EASIButton>
        </li>
      </ul>
    </a-card>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs, computed, PropType} from "vue"
import { IPreviewItem } from './methods'
import { ScissorOutlined, DeleteOutlined, CheckCircleFilled, CloseCircleFilled, LoadingOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: "previewItem",
  emit: ['handleCheckChange', 'handleDelete'],
  props: {
    item: {
      type: Object as PropType<IPreviewItem>,
      default: () => ({})
    },
    index: {
      type: Number,
      default: -1
    },
    activeKey: {
      type: Number as PropType<0 | 1>,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    ratio: {
      type: [Number, String],
      default: 0
    },
    crop: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {emit}){

    const { ratio, item } = toRefs(props);

    const invalidAspectRatio = computed(() => {
      const width = item.value.width;
      const height = item.value.height;
      const imgRatio = width >0 && height > 0 ? parseFloat((width / height).toString()).toFixed(4) : 0;
      return ratio.value !== 0 && ratio.value !== imgRatio
    })

    return {
      invalidAspectRatio,
      handleDelete(item: IPreviewItem, index: number){
        emit('handleDelete', item, index)
      },
      handleCrop(item: IPreviewItem, index: number){
        emit('handleCrop', item, index)
      }
    }
  },
  components: {
    ScissorOutlined,
    DeleteOutlined,
    CheckCircleFilled,
    CloseCircleFilled,
    LoadingOutlined
  }
})
</script>

<style lang="scss">
.easi-uploader-preview-item {
  .anticon{
    svg{
      margin: auto;
    }
  }
  .ant-card-actions{
    li{
      margin: 0;
    }
  }
}
.easi-uploader-preview {
  .easi-uploader-disabled-checked{
    filter: grayscale(1);
  }
  .ant-image{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:before{
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 0;
      z-index: 0;
      padding-bottom: 100%;
      transform: translate(-50%,-50%);
    }
  }
}
</style>

<style lang="scss" scoped>
.easi-uploader-preview{
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  user-select: none;
  .absolute{
    top: 4px;
    right: 4px;
  }
  .easi-uploader-loading{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 24px;
    background: rgba(0,0,0,.2);
    z-index: 3;
  }
}

.easi-uploader-preview-item{
  float: left;
  width: 14.666667%;
  margin-left: 2%;
  margin-bottom: 2%;
}


@media (max-width: 960px) {
  .easi-uploader-preview-item {
    width: 23%;
  }
}

@media (max-width: 540px) {
  .easi-uploader-preview-item {
    width: 48%;
  }
}
</style>
