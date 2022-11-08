<!--
 * @Author: mfxhb
 * @Date: 2022-11-07 09:46:31
 * @LastEditTime: 2022-11-08 16:57:37
 * @Description: 
-->
<template>
  <div>
    <!-- 标题 -->
    <t-divider class="app-title">
      <h3>{{ welcomeText }}</h3>
    </t-divider>
    <div class="content">
      <!-- 侧边栏 -->
      <cus-sider></cus-sider>
      <!-- 主内容 -->
      <cus-main></cus-main>
    </div>
    <div class="sakana-box"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { CONFIG_KEY } from "./config/config";
import Sakana from "./sakala.js";

export default defineComponent({
  name: "App",
  mounted() {
    Sakana.init({
      el: ".sakana-box", // 启动元素 node 或 选择器
      scale: 0.3, // 缩放倍数
      canSwitchCharacter: true, // 允许换角色
    });
  },
  setup() {
    const { welcomeText } = inject(CONFIG_KEY, { welcomeText: "" });
    return {
      welcomeText,
    };
  },
});
</script>

<style lang="less">
.app-title {
  --td-border-level-1-color: @text-color;
  margin: 0;
  height: @app-title-h;
}

h3 {
  text-align: center;
  text-shadow: 0px 6px 5px #4b6584;
}

.content {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
</style>
