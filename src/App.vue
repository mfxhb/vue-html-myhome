<!--
 * @Author: mfxhb
 * @Date: 2022-11-07 09:46:31
 * @LastEditTime: 2022-11-10 16:28:00
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
    <!-- 提示 -->
    <div class="tiptext">
      JieShi:许多地方用的是英文或者拼音,因为我用的字体在这两个环境下显示的特别的舒服!
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted } from "vue";
import Sakana from "./sakala.js";
import { windowClick, openClickCur } from "./utils/wrench";

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
    //
  },
  unmounted() {
    // qk 销毁鼠标事件
    window.removeEventListener("click", windowClick);
  },
  setup() {
    const $ = inject("jQuery") as any;
    onMounted(() => {
      openClickCur($);
    });
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
  .tiptext {
    position: fixed;
    bottom: 0;
    left: 10px;
    font-size: 14px;
    color: #d1d8e0;
    user-select: none;
  }
}
</style>
