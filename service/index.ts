import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios";
const baseURL = "http://codercba.com:9060/music-next/api";
const timout = 5000;
export interface IResult<T> {
  code: any;
  data: T;
}
class Hyrequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }
  request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      this.instance<T>(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get<T = any>(url: string, params?: any): Promise<AxiosResponse<T>> {
    return this.request<T>({
      url: url,
      method: "get",
      params: params,
    });
  }
  post<T = any>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return this.request<T>({
      url: url,
      method: "post",
      data: data,
    });
  }
}
export default new Hyrequest({
  baseURL: baseURL,
  timeout: timout,
});
