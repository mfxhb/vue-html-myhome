<!--
 * @Author: mfxhb
 * @Date: 2022-11-11 11:18:21
 * @LastEditTime: 2022-11-14 16:54:34
 * @Description: 简历
-->
<template>
  <div class="Resume__">
    <!-- 技术栈展示 -->
    <div class="stack">
      <div class="title siyuan_">前端</div>
      <div class="tags">
        <template v-for="item in stacks_q" :key="item.id">
          <div class="tag-item">{{ item.value || "!!UNDIFINED" }}</div>
        </template>
      </div>
    </div>
    <!--  -->
    <div class="stack">
      <div class="title siyuan_">后端</div>
      <div class="tags">
        <template v-for="item in stacks_h" :key="item.id">
          <div class="tag-item">{{ item.value || "!!UNDIFINED" }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { myStacksApi } from "../../../api/loser/loser-api";

export default defineComponent({
  name: "Resume",
  setup() {
    // qk 变量
    const $ = inject("jQuery") as any;
    const stacks_q = [
      {
        value: "Vue",
        id: "vue",
      },
    ];
    const stacks_h = [
      {
        value: "Node",
        id: "node",
      },
      {
        value: "Unicloud",
        id: "unicloud",
      },
    ];
    // qk 生命周期

    // qk 方法
    async function dataListApis() {
      try {
        const result = await myStacksApi();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    return { dataListApis, stacks_q, stacks_h };
  },
});
</script>

<style scoped lang="less">
.Resume__ {
  /* 技术栈 */
  .stack {
    .title {
      font-size: 20px;
    }
    .tags {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      .tag-item {
        padding: 5px;
        margin: 5px;
        border-radius: 3px;
        background-color: rgba(234, 234, 234, 0.5);
        border: 1px solid #cacdd1;
      }
    }
  }
}
</style>
