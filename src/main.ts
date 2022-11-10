/*
 * @Author: BORING GHOST
 * @Date: 2022-11-07 09:46:31
 * @LastEditTime: 2022-11-10 16:10:40
 * @Description:
 */
import { createApp } from "vue";
import "normalize.css"; // 浏览器兼容
import "./styles/index.less"; // 项目样式
import { useConfig } from "./config/config"; // 全局配置
import $ from "jquery";

// 全局组件
import nav from "./components/nav/nav.vue";
import appMain from "./components/main/main.vue";
import selectc from "./components/cus-select/cus-select.vue";

import App from "./App.vue";
const app = createApp(App);
app.component("cus-nav", nav);
app.component("cus-main", appMain);
app.component("cus-select", selectc);
app.provide("jQuery", $);
app.use(useConfig);
app.mount("#app");
