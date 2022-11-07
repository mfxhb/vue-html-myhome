/*
 * @Author: BORING GHOST
 * @Date: 2022-11-07 09:46:31
 * @LastEditTime: 2022-11-07 16:35:14
 * @Description:
 */
import { createApp } from "vue";
import TDesign from "tdesign-vue-next";
import "tdesign-vue-next/es/style/index.css";
import "normalize.css"; // 浏览器兼容
import "./styles/index.less"; // 项目样式
import { useConfig } from "./config/config"; // 全局配置

// 全局组件
import cusButton from "./components/cusbtn/cusbtn.vue";

import App from "./App.vue";

const app = createApp(App);
app.use(TDesign);
app.component("cus-button", cusButton);
app.use(useConfig);
app.mount("#app");
