<template>
  <a-button
      v-bind="$attrs"
      :type="type"
      :class="className"
  >
    <template #icon>
      <slot name="icon"></slot>
    </template>
    <slot></slot>
  </a-button>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, toRefs} from 'vue';
import { createNamespace } from "../utils/create";

export default defineComponent({
  name: createNamespace('Button'),
  props: {
    type: {
      type: String as PropType<'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'>,
      default: 'default'
    },
    success: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
    info: {
      type: Boolean,
      default: false,
    }
  },
  setup(props){

    const { type, success, warning, info } = toRefs(props);

    return {
      className: computed(() => {
        let className = type.value === 'link' ? 'px-0 ' : '';
        if(success.value){
          className += 'easi-btn-success'
        }else if(warning.value){
          className += 'easi-btn-warning'
        }else if(info.value){
          className += 'easi-btn-info'
        }
        return className
      })
    }
  },
});
</script>

<style lang="scss">
$success: #67C23A;
$warning: #E6A23C;
$info: #909399;
$disabled: rgba(0,0,0,.25);
$dark-disabled: rgba(255,255,255,.3);
$background-disabled: #f5f5f5;
$dark-background-disabled: rgba(255,255,255,.08);
$border-disabled: #d9d9d9;
$dark-border-disabled: #434343;

@mixin EASIButtonLink($color, $isDark) {
  color: $color;
  &:hover, &:active, &:focus {
    color: if($isDark, darken($color, 10%), lighten($color, 15%))
  }
  &[disabled]{
    color: if($isDark, $dark-disabled, $disabled);
    background-color: transparent;
  }
}

.ant-btn-link.easi-btn-success, .ant-btn-text.easi-btn-success{
  @include EASIButtonLink($success, false)
}
.ant-btn-link.easi-btn-warning, .ant-btn-text.easi-btn-warning{
  @include EASIButtonLink($warning, false)
}
.ant-btn-link.easi-btn-info, .ant-btn-text.easi-btn-info{
  @include EASIButtonLink($info, false)
}

[data-pro-theme=antdv-pro-theme-dark] .ant-btn-link.easi-btn-success,
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-text.easi-btn-success
{
  @include EASIButtonLink(darken($success, 10%), true)
}

[data-pro-theme=antdv-pro-theme-dark] .ant-btn-link.easi-btn-warning,
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-text.easi-btn-warning
{
  @include EASIButtonLink(darken($warning, 10%), true)
}

[data-pro-theme=antdv-pro-theme-dark] .ant-btn-link.easi-btn-info,
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-text.easi-btn-info
{
  @include EASIButtonLink(darken($info, 10%), true)
}


@mixin EASIButtonPrimary($color, $isDark) {
  background-color: $color;
  border-color: $color;
  &:hover, &:active, &:focus {
    background-color: if($isDark, darken($color, 10%), lighten($color, 15%));
    border-color: if($isDark, darken($color, 10%), lighten($color, 15%));
  }
}

@mixin EASIButtonDisabled($isDark){
  &[disabled]{
    background-color: if($isDark, $dark-background-disabled, $background-disabled);
    color: if($isDark, $dark-disabled, $disabled);
    border-color: if($isDark, $dark-border-disabled, $border-disabled);
  }
}

.ant-btn-primary.easi-btn-success{
  @include EASIButtonPrimary($success, false);
  @include EASIButtonDisabled(false);
}
.ant-btn-primary.easi-btn-warning{
  @include EASIButtonPrimary($warning, false);
  @include EASIButtonDisabled(false);
}
.ant-btn-primary.easi-btn-info{
  @include EASIButtonPrimary($info, false);
  @include EASIButtonDisabled(false);
}

[data-pro-theme=antdv-pro-theme-dark] .ant-btn-primary.easi-btn-success{
  @include EASIButtonPrimary(darken($success, 10%), true);
  @include EASIButtonDisabled(true);
}
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-primary.easi-btn-warning{
  @include EASIButtonPrimary(darken($warning, 10%), true);
  @include EASIButtonDisabled(true);
}
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-primary.easi-btn-info{
  @include EASIButtonPrimary(darken($info, 10%), true);
  @include EASIButtonDisabled(true);
}

@mixin EASIButtonGhost($color, $isDark) {
  color: $color;
  border-color: $color;
  &:hover, &:active, &:focus {
    color: if($isDark, darken($color, 10%), lighten($color, 15%));
    border-color: if($isDark, darken($color, 10%), lighten($color, 15%));
  }
}

.ant-btn-ghost.easi-btn-success,
.ant-btn-dashed.easi-btn-success,
.ant-btn-default.easi-btn-success
{
  @include EASIButtonGhost($success, false);
  @include EASIButtonDisabled(false);
}
.ant-btn-ghost.easi-btn-warning,
.ant-btn-dashed.easi-btn-warning,
.ant-btn-default.easi-btn-warning{
  @include EASIButtonGhost($warning, false);
  @include EASIButtonDisabled(false);
}
.ant-btn-ghost.easi-btn-info,
.ant-btn-dashed.easi-btn-info,
.ant-btn-default.easi-btn-info{
  @include EASIButtonGhost($info, false);
  @include EASIButtonDisabled(false);
}

[data-pro-theme=antdv-pro-theme-dark] .ant-btn-ghost.easi-btn-success,
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-dashed.easi-btn-success,
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-default.easi-btn-success
{
  @include EASIButtonGhost($success, true);
  @include EASIButtonDisabled(true);
}
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-ghost.easi-btn-warning,
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-dashed.easi-btn-warning,
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-default.easi-btn-warning
{
  @include EASIButtonGhost($warning, true);
  @include EASIButtonDisabled(true);
}
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-ghost.easi-btn-info,
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-dashed.easi-btn-info,
[data-pro-theme=antdv-pro-theme-dark] .ant-btn-default.easi-btn-info
{
  @include EASIButtonGhost($info, true);
  @include EASIButtonDisabled(true);
}
</style>
