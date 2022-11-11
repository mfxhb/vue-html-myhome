/*
 * @Author: mfxhb
 * @Date: 2022-11-11 10:08:40
 * @LastEditTime: 2022-11-11 14:13:14
 * @Description:
 */
import { defineStore } from "pinia";
import { IState, IActions } from "./routes-typer";
import { defaultPage } from "../../config/routes";

const state: IState = {
  currentCommonId: defaultPage || "",
};

const actions: IActions = {
  setCommonId(this: IState, newId: string) {
    this.currentCommonId = newId;
    return newId;
  },
};

const useRoutes = defineStore("routes", {
  state: () => state,
  actions,
});

export { useRoutes };
