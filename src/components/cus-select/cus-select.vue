<!--
 * @Author: mfxhb
 * @Date: 2022-11-09 10:20:32
 * @LastEditTime: 2022-11-12 14:45:41
 * @Description: dsa
 * bg: 背景色
 * bg_hover: hover状态下的背景色
 * border_color: 边框色
 * selectList: 选项框列表
 * isOpenRoundMargin: 是否开启外边距和圆角,默认开启
 * nameLabel: 按钮标签名称
 * @selected: 获得当前选中的项
-->
<template>
  <div class="cus-select" :class="shadowSelect">
    <div
      ref="current_ref"
      :class="[fouces_class, roundMarginClass]"
      class="label-c border-cus-u"
      @click="toEmit"
      :style="{
        backgroundColor: bg,
        '--cus-select-hover-bg': bg_hover,
        '--border-select-color': border_color,
      }"
    >
      {{ nameLabel || "!UNDIFINED" }}
    </div>
    <div
      ref="current_selectBDRef"
      :style="{ height: selectBoxHeight }"
      class="select-bd siyuan_"
    >
      <template v-for="item in selectList" :key="item.value">
        <!-- select-clear-id:用来清除选项框的时候用的识别id -->
        <div
          :class="{ 'bd-selected': item.value === current_select }"
          class="bd-item select-clear-id"
          @click="selectedEvent(item.value)"
        >
          {{ item.label || "!UNDIFINED" }}
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { clearBorderT } from "../../utils/wrench";

import { NavSelectItem } from "../../config/config-typer";

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
    border_color: {
      type: String,
      default: "#92d2ba",
    },
    nameLabel: {
      type: String,
      required: true,
    },
    selectList: {
      type: Array as PropType<NavSelectItem[]>,
      required: true,
    },
    isOpenRoundMargin: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    // select容器自适应高度计算
    selectBoxHeight(): string {
      return this.selectList.length > 0
        ? this.selectList.length * 33 + "px"
        : "31px";
    },
    // 是否开启圆角跟外边距
    roundMarginClass(): string {
      return this.isOpenRoundMargin ? "roundMargin" : "";
    },
    shadowSelect(): string {
      return this.isOpenRoundMargin ? "" : "shadow-select";
    },
  },
  setup(props, { emit }) {
    // qk 变量
    const current_select = ref(""); // 当前选中的项
    // qk 通过点击添加边框特效类名
    const fouces_class = ref("");
    const current_ref = ref(); // 按钮
    const current_selectBDRef = ref(); // 选项框

    const toEmit = () => {
      clearBorderT("border-cus-t");
      (current_ref.value as HTMLElement).classList.add("border-cus-t");
      // 开启选项框
      (current_selectBDRef.value as HTMLElement).classList.add(
        "select-bd-showflag"
      );
    };
    const selectedEvent = (currentvalue: string) => {
      // 当前选中的单项
      current_select.value = currentvalue;
      emit("selected", currentvalue);
      clearBorderT("border-cus-t"); // 传递后隐藏这些东西
    };
    return {
      fouces_class,
      current_selectBDRef,
      current_ref,
      toEmit,
      current_select,
      selectedEvent,
    };
  },

  methods: {},
});
</script>

<style scoped lang="less">
.shadow-select {
  box-shadow: 5px 5px rgb(0 0 0 / 30%);
}
.cus-select {
  --cus-select-hover-bg: #008050;
  --border-select-color: #92d2ba;
  height: 100%;
  position: relative;
  /* 选项框 */
  .select-bd-showflag {
    display: block !important;
  }
  .select-bd {
    position: absolute;
    bottom: 0;
    display: none;
    border-radius: 9px;
    top: 100%;
    transform: translate(0px, 10px);
    z-index: 99;
    padding: 5px;
    min-width: 88px;
    color: @select-font-color;
    background-color: @select-bd-bg;
    border: 5px solid @select-border-color;

    .bd-item {
      margin-bottom: 5px;
      padding: 5px;
      text-align: center;
      user-select: none;
      border-radius: @cus-round;
      font-weight: 700;
      &:hover {
        background-color: @select-bd-hover-bg;
        color: @select-hover-color;
      }
      &.bd-selected {
        color: @text-light;
        background-color: @select-bd-selected-bg;
      }
    }
  }
  /* 特效样式 */
  .roundMargin {
    margin: @border-w;
    border-radius: @cus-round;
  }
  .label-c {
    user-select: none;
    height: 100%;
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
  .border-cus-t {
    position: relative;
    background-color: var(--cus-select-hover-bg) !important;
    &::after {
      /* 因为内部有圆角,伪类的边框和实际元素就会有一部分空隙,如果边框往内缩小1px就会遮盖住 */
      top: calc(0px - @border-w + 1px);
      left: calc(0px - @border-w + 1px);
      content: "";
      position: absolute;
      z-index: 9;
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
