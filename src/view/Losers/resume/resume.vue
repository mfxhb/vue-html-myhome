<!--
 * @Author: mfxhb
 * @Date: 2022-11-11 11:18:21
 * @LastEditTime: 2022-11-13 14:59:15
 * @Description: 简历
-->
<template>
  <div class="Resume__">
    <!-- 标题 -->
    <div class="title siyuan_">
      <span class="text-1">简历计划</span>
      求职前端
    </div>
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

<style scoped lang="less">
.Resume__ {
  .title {
    .text-1 {
      color: #33cccc;
      font-size: 30px;
      margin-right: 25px;
    }
  }
}
</style>
