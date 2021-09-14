<template>
  <MenuFoldOutlined v-show="!collapsed" class="text-18" @click="colToggle" />
  <MenuUnfoldOutlined v-show="collapsed" class="text-18" @click="colToggle" />
  <div class="flex-1"></div>
  <a-popover placement="bottomRight" overlayClassName="easi-system-option" v-if="otherSystem?.length > 0">
    <template #content>
      <div class="overflow-hidden">
        <div class="flex items-center justify-center flex-col py-12 float-left cursor-pointer"
             v-for="item in otherSystem"
             :key="item.application_id"
             @click.stop="toSystem(item)"
        >
          <a-image class="system-logo" :src="item.icons" :preview="false"></a-image>
          <a-typography-text class="truncate">{{item.name}}</a-typography-text>
        </div>
      </div>
    </template>
    <span class="relative dropdown-trigger px-12 cursor-pointer easi-hover-block">
      <i class="iconfont icon-application_authority"></i>
    </span>
  </a-popover>
  <span class="dropdown-trigger px-8 cursor-pointer easi-hover-block" @click="handleShowSetting">
    <a-avatar class="mr-8" shape="circle" size="default" v-if="userInfo?.avatar" :src="userInfo.avatar" :style="{ backgroundColor: '#ffbf00', verticalAlign: 'middle' }"> </a-avatar>
    <span>{{ userInfo?.name || "用户名" }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, computed } from "vue";
import { createNamespace } from "../utils/create";
import { MenuFoldOutlined, MenuUnfoldOutlined, AppstoreFilled } from "@ant-design/icons-vue";
import { UserInfo, ISystem } from '../../typings/antd'


export default defineComponent({
  name: createNamespace("Header"),
  emits: ["colToggle", "handleShowSetting"],
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
    userInfo: {
      type: Object as PropType<UserInfo>,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {

    const { userInfo } = toRefs(props);

    const otherSystem = computed(() => {
      return (userInfo.value.apps || []).filter(system => {
        return system.application_id !== userInfo.value.application_id
      })
    })

    return {
      otherSystem,
      colToggle() {
        emit("colToggle");
      },
      handleShowSetting() {
        emit("handleShowSetting");
      },
      toSystem(item: ISystem){
        window.open(item.link, '_blank');
      }
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    AppstoreFilled,
  },
});
</script>

<style lang="scss">
.easi-system-option{
  .ant-popover-inner-content{
    padding: 0;
  }
  .overflow-hidden{
    max-width: 240px;
  }
  .system-logo{
    width: 32px;
    height: 32px
  }
  .cursor-pointer{
    width: 80px;
    .truncate{
      margin-top: 2px;
    }
    &:hover{
      .truncate{
        color: #3c9be8;
      }
    }
  }
}
</style>
