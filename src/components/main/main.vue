<!--
 * @Author: mfxhb
 * @Date: 2022-11-08 14:47:05
 * @LastEditTime: 2022-11-08 16:58:19
 * @Description: 
-->
<template>
  <div class="main">main</div>
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
  border-radius: 0 5px 5px 0;
}
::-webkit-scrollbar-thumb:vertical {
  border-radius: 0 5px 5px 0;
}
::-webkit-scrollbar-thumb:horizontal {
  border-radius: 0 5px 5px 0;
}
.main {
  box-sizing: border-box;
  padding: 20px 5px;
  border-radius: 0 5px 5px 0;
  width: @main-w;
  background-color: @main-bg;
  max-height: calc(100vh - @app-title-h - 20px);
  overflow-y: auto;
}
</style>
