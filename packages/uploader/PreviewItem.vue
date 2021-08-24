<template>
  <div class="easi-uploader-preview-item relative">
    <a-card bordered hoverable :body-style="{padding: 0}">
      <template #cover>
        <div class="easi-uploader-preview relative">
          <a-image
              width="100%"
              :src="item.url"
          />
        </div>
      </template>
      <template class="ant-card-actions" #actions>
        <ScissorOutlined key="scissor"/>
        <DeleteOutlined key="delete" />
      </template>
    </a-card>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import { IPreviewItem } from './methods'
import { ScissorOutlined, DeleteOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: "previewItem",
  props: {
    item: {
      type: Object as PropType<IPreviewItem>,
      default: () => ({})
    },
    index: {
      type: Number,
      default: -1
    }
  },
  setup(){
    return {
      getContainer(){
        return document.querySelector('#app')
      }
    }
  },
  components: {
    ScissorOutlined,
    DeleteOutlined
  }
})
</script>

<style lang="scss">
.easi-uploader-preview-item{
  width: 14.666667%;
  margin-left: 2%;
  margin-bottom: 2%;
}

.easi-uploader-preview{
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: #f9f9f9;
  overflow: hidden;
  .ant-image{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media (max-width: 960px) {
  .easi-uploader-preview-item {
    width: 23%;
  }
}

@media (max-width: 750px) {
  .easi-uploader-preview-item {
    width: 48%;
  }
}
</style>
