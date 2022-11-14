/*
 * @Author: mfxhb
 * @Date: 2022-11-12 17:25:50
 * @LastEditTime: 2022-11-14 16:51:52
 * @Description:
 */
import { request } from "../../axios/useAxios";

/**
 * todo 获取我的技术栈列表
 */
export const myStacksApi = () => {
  return request({
    url: "/myStacks",
    method: "GET",
    isToken: true,
  });
};
