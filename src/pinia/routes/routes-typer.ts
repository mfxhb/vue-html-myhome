/*
 * @Author: mfxhb
 * @Date: 2022-11-11 09:55:09
 * @LastEditTime: 2022-11-11 10:45:57
 * @Description:
 */
interface IState {
  currentCommonId: string; // 当前组件id
}

interface IActions {
  // 修改当前组件的id
  setCommonId: (this: IState, newId: string) => void;
}

export type { IState, IActions };
