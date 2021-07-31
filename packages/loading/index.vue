<template>
  <transition name="fade" mode="out-in">
    <div class="loading-container" id="cus-loading" v-if="show">
      <div class="loading" :class="size">
        <div class="loading-wrap">
          <div class="ball">
            <i class="bg spoon"></i>
            <i class="bg fork"></i>
          </div>
          <div class="loading-shadow">
            <div></div>
          </div>
        </div>
        <p class="tips" v-if="title">{{ title }}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent, PropType, ref, toRefs, watch} from 'vue';
import { createNamespace } from "../utils/create";
import { getEASIText } from '../locale'

export default defineComponent({
  name: createNamespace('Loading'),
  emits: ['update:pShow'],
  props: {
    pTitle: {
      default: 'loading',
      type: String,
    },

    pShow: {
      default: true,
      type: Boolean,
    },
    pSize: {
      default: 'normal',
      type: String as PropType<'normal' | 'small'>,
    },
  },

  setup(props, {emit}) {
    const {pTitle, pShow, pSize} = toRefs(props);
    const defaultTitle = getEASIText('loading');

    const show = ref<boolean>(true);
    const title = ref(props.pTitle || defaultTitle);
    const size = ref<'normal' | 'small'>('normal');

    watch(
        () => pTitle.value,
        newVal => {
          title.value = newVal;
        },
    );

    watch(
        () => pShow.value,
        newVal => {
          show.value = newVal;
        },
    );

    watch(
        () => pSize.value,
        newVal => {
          size.value = newVal;
        },
    );

    watch(
        () => show.value,
        newVal => {
          emit('update:pShow', newVal);
        },
    );

    return {
      show,
      title,
      size,
    };
  },
})
</script>

<style lang="scss" scoped>
[data-pro-theme='antdv-pro-theme-dark'] .loading-container {
  background: rgba(50, 50, 50, 0.8);

  .loading {
    background-color: #000;
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.6);
  }

  .loading-shadow div {
    background-color: #898989;
  }

  .tips {
    color: #eaeaea;
  }
}

.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 20;
}

.loading {
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

.loading-wrap {
  padding-top: 14px;
  padding-bottom: 10px;
  width: 94px;
}

.ball {
  position: relative;
  margin: auto;
  width: 40px;
  height: 40px;
  animation: jump 1s linear infinite;
  z-index: 10;
  background-color: #ffda00;
  border-radius: 50%;
  backface-visibility: hidden;
}

.loading-shadow {
  position: relative;
  margin-top: 4px;
  width: 100%;
  z-index: 5;
  backface-visibility: hidden;
}

.loading-shadow div {
  margin: auto;
  width: 35%;
  height: 6px;
  animation: scale 1s linear infinite;
  transform-origin: top center;
  background: #e1e1e1;
  border-radius: 50%;
  backface-visibility: hidden;
}

.bg {
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

.spoon {
  margin-top: 1px;
  margin-left: -3px;
  background-position: 0 0;
  animation: spoon 1s linear infinite;
}

.fork {
  margin-top: 1px;
  margin-left: 3px;
  background-position: -44px 0;
  animation: fork 1s linear infinite;
}

.tips {
  margin-bottom: 7px;
  font-size: 12px;
  color: #ccc;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes jump {
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

@keyframes scale {
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

@keyframes fork {
  0%,
  100% {
    transform: translateX(0) rotate(0);
  }

  50% {
    transform: translateX(-6px) rotate(-90deg);
  }
}

@keyframes spoon {
  0%,
  100% {
    transform: translateX(0) rotate(0);
  }

  50% {
    transform: translateX(6px) rotate(90deg);
  }
}
</style>
