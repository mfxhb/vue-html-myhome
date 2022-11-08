<!--
 * @Author: mfxhb
 * @Date: 2022-11-07 16:32:07
 * @LastEditTime: 2022-11-08 11:24:56
 * @Description: 
-->
<template>
  <div class="Cusbtn">
    <a
      @click="() => false"
      href="#"
      :style="{
        backgroundColor: bg,
        '--cus-hover-bg-color': bg_hover,
        '--cus-active-border-color': bg_active,
      }"
      class="custom-button"
    >
      {{ text }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cusbtn",
  props: {
    text: {
      type: String,
      required: true,
    },
    bg_hover: {
      type: String,
      default: "#008050",
    },
    bg_active: {
      type: String,
      default: "rgba(0, 128, 128,.8)",
    },
    bg: {
      type: String,
      default: "#00965e",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
@btn-border-size: 4px;
.Cusbtn {
  display: inline-block;
  .custom-button {
    --cus-hover-bg-color: rgba(0, 0, 0, 0); // hover时的背景颜色
    --cus-active-border-color: rgba(0, 0, 0, 0); //active时的边框色
    margin: @btn-border-size;
    position: relative;
    padding: 0px 19px 0 17px;
    height: 32px;
    display: inline-block;
    line-height: 33px;
    vertical-align: middle;
    text-align: center;
    border-radius: var(--td-radius-default);
    cursor: default;
    color: white;
    font-size: 14px;
  }
  .custom-button::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--td-radius-default);
    left: (0 - @btn-border-size);
    top: (0 - @btn-border-size);
    border: @btn-border-size solid rgba(0, 0, 0, 0);
  }
  .custom-button:link {
    text-decoration: none;
  }

  .custom-button:hover {
    background-color: var(--cus-hover-bg-color) !important;
  }

  .custom-button:active {
    border-radius: 0;
    &::after {
      border: @btn-border-size solid var(--cus-active-border-color);
    }
  }
}
</style>
