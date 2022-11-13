/*
 * @Author: mfxhb
 * @Date: 2022-11-12 17:25:50
 * @LastEditTime: 2022-11-13 11:07:46
 * @Description:
 */
import { request } from "../../axios/useAxios";

export const test = () => {
  return request({
    url: "/test",
    method: "GET",
    isToken: true,
  });
};
