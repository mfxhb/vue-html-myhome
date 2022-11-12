<!--
 * @Author: mfxhb
 * @Date: 2022-11-11 11:18:21
 * @LastEditTime: 2022-11-12 14:28:25
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

export default defineComponent({
  name: "Resume",
  setup() {
    // qk 变量
    const $ = inject("jQuery") as any;
    // qk 接口
    function testApi() {
      const url =
        "https://www.fastmock.site/mock/46116e0d721209aaafcf49c5a8d8c035/test/test";
      $.get(url, function (res: any) {
        console.log(res);
      });
    }
    return { testApi };
  },
});
</script>

<style scoped></style>
