<!--
 * @Author: mfxhb
 * @Date: 2022-11-11 11:18:21
 * @LastEditTime: 2022-11-12 18:44:05
 * @Description: 简历
-->
<template>
  <div class="Resume__">
    <div class="siyuan_">撒旦发我是对方' 爱上对方公司</div>
    爱上对方公司
    <button @click="testApi" class="siyuan_">测试</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { test } from "../../../api/loser/loser-api";

export default defineComponent({
  name: "Resume",
  setup() {
    // qk 变量
    const $ = inject("jQuery") as any;
    // qk 接口
    async function testApi() {
      try {
        const result = await test();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    return { testApi };
  },
});
</script>

<style scoped></style>
