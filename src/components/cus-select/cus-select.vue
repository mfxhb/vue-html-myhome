<!--
 * @Author: mfxhb
 * @Date: 2022-11-09 10:20:32
 * @LastEditTime: 2022-11-09 16:20:29
 * @Description: 
 * 特效边框使用after伪类来实现
 * before 跟 after css一致
 * 当active时显示before
 * active之后通过js显示after(添加一个独立类名)
 * 也就是fouces通过添加独立类名来代替
-->
<template>
  <div class="cus-select">
    <div
      ref="current_ref"
      :class="fouces_class"
      class="label-c border-cus-u"
      @click="toEmit"
      :style="{
        backgroundColor: bg,
        '--cus-select-hover-bg': bg_hover,
      }"
    >
      labelasas
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { clearBorderT } from "../../utils/wrench";

export default defineComponent({
  name: "cusSelect",
  props: {
    bg: {
      type: String,
      default: "#00965e",
    },
    bg_hover: {
      type: String,
      default: "#008050",
    },
  },
  setup(props, { emit }) {
    // qk 通过点击添加边框特效类名
    const fouces_class = ref("");
    const current_ref = ref();
    const toEmit = () => {
      clearBorderT("border-cus-t");
      (current_ref.value as HTMLElement).classList.add("border-cus-t");
      emit("clickc");
    };
    return { fouces_class, current_ref, toEmit };
  },
  methods: {},
});
</script>

<style scoped lang="less">
.cus-select {
  --cus-select-hover-bg: #008050;
  --border-select-color: #92d2ba;
  height: 100%;
  .label-c {
    user-select: none;
    height: 100%;
    border-radius: @cus-round;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: var(--cus-select-hover-bg) !important;
    }
    &:active::before {
      display: block;
    }
  }
  /* 特效样式 */
  .border-cus-t {
    position: relative;
    background-color: var(--cus-select-hover-bg) !important;
    &::after {
      /* 因为内部有圆角,伪类的边框和实际元素就会有一部分空隙,如果边框往内缩小1px就会遮盖住 */
      top: calc(0px - @border-w + 1px);
      left: calc(0px - @border-w + 1px);
      content: "";
      position: absolute;
      border-radius: @cus-round;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      border: @border-w solid var(--border-select-color);
    }
  }
  .border-cus-u {
    position: relative;
    &::before {
      top: calc(0px - @border-w + 1px);
      left: calc(0px - @border-w + 1px);
      content: "";
      position: absolute;
      display: none;
      border-radius: @cus-round;
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      border: @border-w solid var(--border-select-color);
    }
  }
}
</style>
