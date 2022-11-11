/*
 * @Author: mfxhb
 * @Date: 2022-11-11 09:49:19
 * @LastEditTime: 2022-11-11 10:05:12
 * @Description:
 */
import { createPinia } from "pinia";
import { App } from "vue";

const pinia = createPinia();

export default {
  install(app: App) {
    app.use(pinia);
  },
};
