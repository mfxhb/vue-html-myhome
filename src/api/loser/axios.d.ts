/*
 * @Author: mfxhb
 * @Date: 2022-11-12 18:39:34
 * @LastEditTime: 2022-11-12 18:43:01
 * @Description: axios.d.ts
 */
import { AxiosRequestConfig } from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    isToken?: Boolean; // 是否携带token
  }
}
