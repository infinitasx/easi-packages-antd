<template>
  <MenuFoldOutlined v-show="!collapsed" class="text-18" @click="colToggle" />
  <MenuUnfoldOutlined v-show="collapsed" class="text-18" @click="colToggle" />
  <div class="flex-1"></div>
  <a-popover placement="bottomRight" overlayClassName="easi-system-option" v-if="otherSystem?.length > 0">
    <template #content>
      <a-row>
        <a-col :xs="24"
               :sm="24"
               :md="12"
               class="system-item pb-32"
               v-for="item in otherSystem"
               :key="item.application_id"
        >
          <div class="flex items-center overflow-hidden pb-16">
            <a-image class="system-logo mr-8" :src="item.icons" :preview="false"></a-image>
            <a-typography-text class="flex-1 truncate text-16" strong>{{item.name}}</a-typography-text>
          </div>
          <div class="scope-id-list flex items-center flex-wrap">
            <a-typography-text type="secondary" class="cursor-pointer" @click.stop="toSystem(item.link, scopeItem.id)" v-for="scopeItem in item.scopes" :key="scopeItem.id">{{ scopeItem.name }}</a-typography-text>
          </div>
        </a-col>
      </a-row>
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
      toSystem(link: string, scopeId: number){
        if(link.indexOf('?') > -1){
          link += `&scope_id=${scopeId}`
        }else{
          link += `?scope_id=${scopeId}`
        }
        window?.open(link, '_blank');
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
    min-width: 500px;
    max-height: 460px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .system-item{
    max-width: 400px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 36px;
  }
  .system-logo{
    width: 32px;
    height: 32px
  }
  .scope-id-list{
    margin-left: -32px;
  }
  .cursor-pointer{
    margin-top: 16px;
    margin-left: 32px;
    display: block;
    &:hover{
      color: #3c9be8;
    }
  }
}
</style>
