<!--
 * @Author: mfxhb
 * @Date: 2022-11-08 14:35:05
 * @LastEditTime: 2022-11-11 14:03:12
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
      <template v-for="item in navList" :key="item.name">
        <li class="item">
          <cus-select
            :nameLabel="item.name"
            :isOpenRoundMargin="false"
            :selectList="item.list"
            @selected="selected"
          ></cus-select>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { CONFIG_KEY } from "../../config/config";
import { useRoutes } from "../../pinia/routes/routes";
import { navListConf } from "../../config/routes";

export default defineComponent({
  name: "NavPage",
  setup() {
    // qk 变量
    const store = useRoutes();
    const { welcomeText } = inject(CONFIG_KEY, { welcomeText: "" });
    // nav列表
    const navList = navListConf;
    // qk 方法
    const selected = (value: string) => {
      store.setCommonId(value);
    };
    return { welcomeText, navList, selected };
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
  li {
    &:first-child {
      margin-right: 20px;
    }
  }
  .item {
    height: 45%;
    margin-bottom: 15px;
    margin-right: 0;
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
