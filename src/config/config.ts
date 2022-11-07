/*
 * @Author: mfxhb
 * @Date: 2022-11-07 14:42:18
 * @LastEditTime: 2022-11-07 15:37:37
 * @Description:
 */
import { App } from "vue";
import type { InjectionKey } from "vue";

interface conf_typer {
  welcomeText: string;
}

export const CONFIG_KEY = Symbol() as InjectionKey<conf_typer>;
const CONFIG_VALUE = {
  welcomeText: "Welcome to mfxhb's home page.", // 欢迎语
};

export const useConfig = {
  install(app: App) {
    app.provide(CONFIG_KEY, CONFIG_VALUE);
  },
};
