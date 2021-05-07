// 基于axios的封装
import axios from 'axios'
// 创建请求对象
export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})

// 通过插件机制获取到上下文对象 query params req res app store
// 插件导出函数必须作为default成员
export default ({store}) => {
  // 请求拦截器
  // 所有请求都经过这里，可以设置一些公共业务处理 统一设置token
  request.interceptors.request.use(function (config) {
        // Do something before request is sent
        // 请求经过这里
        
        const {user} = store.state
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }
        return config;
      }, function (error) {
        // Do something with request error
        // 请求失败进入
        return Promise.reject(error);
      });
}