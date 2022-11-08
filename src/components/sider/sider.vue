<!--
 * @Author: mfxhb
 * @Date: 2022-11-08 14:35:05
 * @LastEditTime: 2022-11-08 16:59:00
 * @Description: 
-->
<template>
  <div class="sider">sider</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sider",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: gray;
}
.sider {
  box-sizing: border-box;
  padding: 20px 5px;
  max-height: calc(100vh - @app-title-h - 20px);
  overflow-y: auto;
  background-color: @theme-color-1;
  width: @sider-w;
  border-radius: 5px 0 0 5px;
}
</style>
