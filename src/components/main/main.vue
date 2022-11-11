<!--
 * @Author: mfxhb
 * @Date: 2022-11-08 14:47:05
 * @LastEditTime: 2022-11-11 14:09:23
 * @Description: 
-->
<template>
  <div class="main">
    <component :is="currentCommonId"></component>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { useRoutes } from "../../pinia/routes/routes";
import { components } from "../../config/routes";

export default defineComponent({
  name: "Appmain",
  components: components,
  setup() {
    // qk 变量
    const store = useRoutes();
    const { currentCommonId } = storeToRefs(store);
    return { currentCommonId };
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
