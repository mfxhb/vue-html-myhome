/*
 * @Author: mfxhb
 * @Date: 2022-11-07 14:42:18
 * @LastEditTime: 2022-11-11 10:57:40
 * @Description:
 */
import { App } from "vue";
import type { InjectionKey } from "vue";
import { GlobalConfig } from "./config-typer";

export const CONFIG_KEY = Symbol() as InjectionKey<GlobalConfig>;
const CONFIG_VALUE: GlobalConfig = {
  welcomeText: "Welcome to mfxhb's home page.",
};

export const useConfig = {
  install(app: App) {
    app.provide(CONFIG_KEY, CONFIG_VALUE);
  },
};
