<!--
 * @Author: mfxhb
 * @Date: 2022-11-07 16:32:07
 * @LastEditTime: 2022-11-07 16:52:18
 * @Description: 
-->
<template>
  <div class="Cusbtn">
    <div class="custom-button">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cusbtn",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.Cusbtn {
  .custom-button {
    padding: 5px 10px;
    display: inline-block;
    border-radius: var(--td-radius-default);
    border: 3px solid transparent;
  }
}
</style>
