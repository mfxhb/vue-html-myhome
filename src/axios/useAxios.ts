/*
 * @Author: mfxhb
 * @Date: 2022-11-12 17:18:28
 * @LastEditTime: 2022-11-12 18:43:45
 * @Description:
 */
import Axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

import { axiosBaseURL } from "../config/https";

const request = Axios.create({
  baseURL: axiosBaseURL,
  timeout: 30000,
});

request.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.isToken) {
    (config.headers as AxiosRequestHeaders)["Authorization"] = "!!!!AUTH_TOKEN";
  }
  console.log(config);
  return config;
});

request.interceptors.response.use((response: AxiosResponse) => {
  const { status, data } = response;
  if (status !== 200) {
    return data;
  } else {
    return Promise.reject("error");
  }
});

export { request };
