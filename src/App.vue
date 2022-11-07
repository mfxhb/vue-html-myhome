<!--
 * @Author: mfxhb
 * @Date: 2022-11-07 09:46:31
 * @LastEditTime: 2022-11-07 16:53:10
 * @Description: 
-->
<template>
  <div>
    <t-divider class="app-title">
      <h3>{{ welcomeText }}</h3>
    </t-divider>
    <t-button class="test-color" theme="primary"> 新建 </t-button>
    <cus-button class="ac" text="sdfa"></cus-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { CONFIG_KEY } from "./config/config";

export default defineComponent({
  name: "App",
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
}

h3 {
  text-align: center;
}
</style>
