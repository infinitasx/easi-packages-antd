<template>
  <a-button
      :disabled="disabled"
      :ghost="ghost"
      :htmlType="htmlType"
      :icon="icon"
      :loading="loading"
      :shape="shape"
      :size="size"
      :type="customType"
      :block="block"
      :class="className"
  >
    <template #icon>
      <slot name="icon"></slot>
    </template>
    <slot></slot>
  </a-button>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, PropType } from 'vue';
import { createNamespace } from "../utils/create";

export default defineComponent({
  name: createNamespace('Button'),
  props: {
    // 以下参数见文档
    disabled: Boolean,
    ghost: Boolean,
    htmlType: {
      type: String,
      default: 'button',
    },
    icon: Function,
    loading: Boolean,
    shape: String,
    size: {
      default: 'default',
      type: String,
    },
    // 自定义类型
    type: {
      default: 'default',
      type: String as PropType<
          'primary' | 'success' | 'info' | 'warn' | 'danger' | 'default' | 'dashed'
          >,
    },
    link: {
      type: Boolean,
      default: false,
    },
    block: Boolean,
  },
  setup(props) {
    const { type, link } = toRefs(props);
    const customType = computed(() => {
      const typeValue = type.value;
      if (!link.value) {
        if (['default', 'primary', 'danger', 'dashed', 'ghost'].indexOf(typeValue) >= 0) {
          return typeValue;
        } else {
          return 'default';
        }
      } else {
        return 'link';
      }
    });
    const className = computed(() => {
      const typeValue = type.value;
      if (!link.value) {
        if (['default', 'primary', 'danger', 'dashed', 'ghost'].indexOf(typeValue) >= 0) {
          return null;
        } else {
          if (typeValue === 'success') {
            return 'easi-btn-success';
          } else if (typeValue === 'info') {
            return 'easi-btn-info';
          } else if (typeValue === 'warn') {
            return 'easi-btn-warning';
          }
        }
      } else {
        if (typeValue === 'success') {
          return 'easi-btn-link-success px-0';
        } else if (typeValue === 'info') {
          return 'easi-btn-link-info px-0';
        } else if (typeValue === 'warn') {
          return 'easi-btn-link-warning px-0';
        } else if (typeValue === 'danger') {
          return 'easi-btn-link-danger px-0';
        } else {
          return 'px-0';
        }
      }
      return '';
    });
    return {
      className,
      customType,
    };
  },
});
</script>

<style lang="scss" scoped>
$white: #fff;
$primary-color: #1890ff; // 全局主色
$link-color: #1890ff; // 链接色
$success-color: #52c41a; // 成功色
$warning-color: #faad14; // 警告色
$error-color: #f5222d; // 错误色
$info-color: #909399; // 信息色

// 自定义button
@mixin easiButton($color, $isDark) {
  background-color: $color !important;
  color: $white;
  border: none !important;

  &:disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    background-color: if($isDark, darken($color, 10%), lighten($color, 10%)) !important;
    border: none;
  }
}

@mixin easiButtonLink($color, $isDark) {
  color: $color;
  &:disabled {
    color: rgba(0, 0, 0, 0.25);
  }

  &:hover,
  &:focus {
    color: if($isDark, darken($color, 10%), lighten($color, 10%)) !important;
  }
}

.easi-btn-primary {
  @include easiButton($primary-color, false);
}

.easi-btn-success {
  @include easiButton($success-color, false);
}

.easi-btn-info {
  @include easiButton($info-color, false);
}

.easi-btn-warning {
  @include easiButton($warning-color, false);
}

.ant-btn-link {
  &.easi-btn-link-danger {
    @include easiButtonLink($error-color, false);
  }
  &.easi-btn-link-success {
    @include easiButtonLink($success-color, false);
  }
  &.easi-btn-link-info {
    @include easiButtonLink($info-color, false);
  }
  &.easi-btn-link-warning {
    @include easiButtonLink($warning-color, false);
  }
}

[data-pro-theme='antdv-pro-theme-dark'] {
  .easi-btn-primary {
    @include easiButton(darken($primary-color, 10%), true);
  }

  .easi-btn-success {
    @include easiButton(darken($success-color, 10%), true);
  }

  .easi-btn-info {
    @include easiButton(darken($info-color, 10%), true);
  }

  .easi-btn-warning {
    @include easiButton(darken($warning-color, 10%), true);
  }

  .ant-btn-link {
    &.easi-btn-link-danger {
      @include easiButtonLink($error-color, true);
    }
    &.easi-btn-link-success {
      @include easiButtonLink($success-color, true);
    }
    &.easi-btn-link-info {
      @include easiButtonLink($info-color, true);
    }
    &.easi-btn-link-warning {
      @include easiButtonLink($warning-color, true);
    }
  }
}
</style>
