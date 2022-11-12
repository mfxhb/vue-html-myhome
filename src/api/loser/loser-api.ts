/*
 * @Author: mfxhb
 * @Date: 2022-11-12 17:25:50
 * @LastEditTime: 2022-11-12 18:44:27
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
