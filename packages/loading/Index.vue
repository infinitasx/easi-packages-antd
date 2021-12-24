<template>
  <transition name="fade" mode="out-in">
    <div class="easi-packages-loading-container" id="cus-loading" v-if="cShow">
      <div class="easi-packages-loading" :class="cSize">
        <div class="easi-packages-loading-wrap">
          <div class="easi-packages-ball">
            <i class="easi-packages-bg easi-packages-spoon"></i>
            <i class="easi-packages-bg easi-packages-fork"></i>
          </div>
          <div class="easi-packages-loading-shadow">
            <div></div>
          </div>
        </div>
        <p class="easi-packages-tips" v-if="title || cTitle">{{ title || cTitle }}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, toRefs, watch, getCurrentInstance, ComponentInternalInstance, ComponentPublicInstance} from 'vue';
import { createNamespace } from "../utils/create";
import {langMap, initI18n, ILocale} from '../locale'

export default defineComponent({
  name: createNamespace('Loading'),
  emits: ['update:show'],
  props: {
    title: {
      type: String,
      default: undefined
    },

    show: {
      default: false,
      type: Boolean,
    },
    size: {
      default: 'normal',
      type: String as PropType<'normal' | 'small'>,
    },
  },

  setup(props, {emit}) {
    const {show, size} = toRefs(props);

    const app = getCurrentInstance() as ComponentInternalInstance;

    const defaultProxy: any = app?.root?.proxy || {localeMessage: { locale: 'zh-cn' } };

    const root = ref<{ localeMessage: ILocale }>(defaultProxy);

    const locale = initI18n((app?.root?.proxy as unknown as any)?.localeMessage?.locale || 'zh-cn')

    const defaultTitle = locale?.message?.loading;

    const cShow = ref<boolean>(props.show);
    const cTitle = ref<string>(defaultTitle);
    const cSize = ref<'normal' | 'small'>('normal');

    watch(
        () => show.value,
        newVal => {
          cShow.value = newVal;
        },
    );

    watch(
        () => size.value,
        newVal => {
          cSize.value = newVal;
        },
    );

    watch(() => root.value?.localeMessage, newVal => {
      if(newVal){
        locale.message = langMap[newVal?.locale || 'zh-cn'];
        cTitle.value = locale.message.loading;
      }
    })

    watch(
        () => cShow.value,
        newVal => {
          emit('update:show', newVal);
        },
    );

    return {
      cShow,
      cTitle,
      cSize,
      root
    };
  },
})
</script>

<style lang="scss">
[data-pro-theme='antdv-pro-theme-dark'] .easi-packages-loading-container {
  background: rgba(20, 20, 20, 0.8);

  .easi-packages-loading {
    background-color: #000;
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.6);
  }

  .easi-packages-loading-shadow div {
    background-color: #898989;
  }

  .easi-packages-tips {
    color: #eaeaea;
  }
}

.easi-packages-loading-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 100;
}

.easi-packages-loading {
  position: absolute;
  top: 45%;
  left: 50%;
  border-radius: 8px;
  background-color: #fff;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 1px 1px 10px 2px rgba(190, 190, 190, 0.4);

  &.small {
    transform: translate(-50%, -50%) scale(0.8);
  }
}

.easi-packages-loading-wrap {
  padding-top: 14px;
  padding-bottom: 10px;
  width: 94px;
}

.easi-packages-ball {
  position: relative;
  margin: auto;
  width: 40px;
  height: 40px;
  animation: easi-packages-jump 1s linear infinite;
  z-index: 10;
  background-color: #ffda00;
  border-radius: 50%;
  backface-visibility: hidden;
}

.easi-packages-loading-shadow {
  position: relative;
  margin-top: 4px;
  width: 100%;
  z-index: 5;
  backface-visibility: hidden;
}

.easi-packages-loading-shadow div {
  margin: auto;
  width: 35%;
  height: 6px;
  animation: easi-packages-scale 1s linear infinite;
  transform-origin: top center;
  background: #e1e1e1;
  border-radius: 50%;
  backface-visibility: hidden;
}

.easi-packages-bg {
  position: absolute;
  top: 8px;
  left: 8px;
  display: block;
  width: 24px;
  height: 24px;
  background-image: url('./Easi.png');
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 68px 24px;
  z-index: 10;
  backface-visibility: hidden;
}

.easi-packages-spoon {
  margin-top: 1px;
  margin-left: -3px;
  background-position: 0 0;
  animation: easi-packages-spoon 1s linear infinite;
}

.easi-packages-fork {
  margin-top: 1px;
  margin-left: 3px;
  background-position: -44px 0;
  animation: easi-packages-fork 1s linear infinite;
}

.easi-packages-tips {
  margin-bottom: 7px;
  font-size: 12px;
  color: #ccc;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.easi-packages-fade-enter-active,
.easi-packages-fade-leave-active {
  transition: opacity 0.3s;
}

.easi-packages-fade-enter-from,
.easi-packages-fade-leave-to {
  opacity: 0;
}

@keyframes easi-packages-jump {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
  }
  50% {
    transform: translate3d(0, 10px, 0) scale(0.8);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
  }
}

@keyframes easi-packages-scale {
  0%,
  100% {
    animation-timing-function: cubic-bezier(0.45, 0, 0.9, 0.55);
    opacity: 1;
  }
  50% {
    transform: scale(0.5);
    animation-timing-function: cubic-bezier(0, 0.45, 0.55, 0.9);
    opacity: 0.4;
  }
}

@keyframes easi-packages-fork {
  0%,
  100% {
    transform: translateX(0) rotate(0);
  }

  50% {
    transform: translateX(-6px) rotate(-90deg);
  }
}

@keyframes easi-packages-spoon {
  0%,
  100% {
    transform: translateX(0) rotate(0);
  }

  50% {
    transform: translateX(6px) rotate(90deg);
  }
}
</style>
