<!--
 * @Author: mfxhb
 * @Date: 2022-11-08 14:47:05
 * @LastEditTime: 2022-11-10 08:56:03
 * @Description: 
-->
<template>
  <div class="main">
    main
    <button class="cus-button">保存</button>
    <button class="cus-button">保存</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Appmain",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
::-webkit-scrollbar-track-piece {
  border-radius: 0 @cus-round @cus-round 0;
}
::-webkit-scrollbar-thumb:vertical {
  border-radius: 0 @cus-round @cus-round 0;
}
::-webkit-scrollbar-thumb:horizontal {
  border-radius: 0 @cus-round @cus-round 0;
}
.main {
  box-sizing: border-box;
  padding: 20px @cus-round;
  border-radius: @cus-round;
  width: @main-w;
  background-color: @main-bg;
  max-height: calc(100vh - @nav-h - 20px);
  overflow-y: auto;
}
</style>
