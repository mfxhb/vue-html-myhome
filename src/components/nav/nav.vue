<!--
 * @Author: mfxhb
 * @Date: 2022-11-08 14:35:05
 * @LastEditTime: 2022-11-09 15:16:49
 * @Description: 
-->
<template>
  <div class="nav-app">
    <div class="app-title">
      <h3>{{ welcomeText }}</h3>
    </div>
    <ul class="ul-box">
      <!-- 头像 -->
      <li class="touxiang"></li>
      <!-- 标题 -->
      <li class="item">
        <cus-select></cus-select>
      </li>
      <li class="item">
        <cus-select></cus-select>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { CONFIG_KEY } from "../../config/config";

export default defineComponent({
  name: "NavPage",
  setup() {
    const { welcomeText } = inject(CONFIG_KEY, { welcomeText: "" });
    const current = ref(0);
    return { welcomeText, current };
  },
});
</script>

<style scoped lang="less">
.ul-box {
  height: 100%;
  color: @text-light;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .item {
    height: 45%;
    margin-bottom: calc(15px + @border-w);
    margin-top: @border-w;
    margin-left: @border-w;
    margin-right: @border-w;
    border-radius: @cus-round;
  }

  /* 头像 */
  .touxiang {
    height: 100%;
    border-radius: @cus-round;
    overflow: hidden;
    width: calc(@nav-h - 10px);
    background: gray url("../../../assets/images/avatar.jpg") center/100% 100%
      no-repeat;
  }
}
/* 标题 */
.app-title {
  position: absolute;
  bottom: 8px;
  right: 8px;
  color: @title-color;
  h3 {
    margin: 0;
    text-align: center;
    text-shadow: 0px 3px 3px @title-shadow;
  }
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: gray;
}
.nav-app {
  position: relative;
  padding: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
  background-color: @nav-bg;
  width: @nav-w;
  height: @nav-h;
  border-radius: @cus-round;
}
</style>
