// 基于axios的封装
import axios from 'axios'

const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})
// 请求拦截器
// 所有请求都经过这里，可以设置一些公共业务处理 统一设置token
// request.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     // 请求经过这里
//     config.headers.Authorization = `Token `
//     return config;
//   }, function (error) {
//     // Do something with request error
//     // 请求失败进入
//     return Promise.reject(error);
//   });
// // 响应拦截器
// // Add a response interceptor
// request.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });

export default request