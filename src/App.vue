<!--
 * @Author: mfxhb
 * @Date: 2022-11-07 09:46:31
 * @LastEditTime: 2022-11-09 15:48:30
 * @Description: 
-->
<template>
  <div class="app">
    <!-- 导航栏 -->
    <cus-nav></cus-nav>
    <div class="content">
      <!-- 主内容 -->
      <cus-main></cus-main>
    </div>
    <div class="sakana-box"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sakana from "./sakala.js";
import { windowClick } from "./utils/wrench";

export default defineComponent({
  name: "App",
  mounted() {
    Sakana.init({
      el: ".sakana-box", // 启动元素 node 或 选择器
      scale: 0.3, // 缩放倍数
      canSwitchCharacter: true, // 允许换角色
    });
    // qk 监听鼠标点击事件
    window.addEventListener("click", windowClick);
  },
  unmounted() {
    // qk 销毁鼠标事件
    window.removeEventListener("click", windowClick);
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less">
.app {
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
