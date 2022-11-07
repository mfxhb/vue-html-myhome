/*
 * @Author: mfxhb
 * @Date: 2022-11-07 09:46:31
 * @LastEditTime: 2022-11-07 15:09:56
 * @Description:
 */
/// <reference types="vite/client" />

//https://cn.vitejs.dev/guide/env-and-mode.html#env-files
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
