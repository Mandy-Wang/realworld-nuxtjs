import {request} from '@/plugins/request'
// 注意上面按需加载

// 用户登录
export const login = data => {
    return request({
        method: 'POST',
        url: '/api/users/login',
        data
    })
}
// 用户注册
export const register = data => {
    return request({
        method: 'POST',
        url: '/api/users',
        data
    })
}
// 用户信息
export const user = () => {
    return request({
        method: 'GET',
        url: '/api/user',
    })
}
// 更新用户信息
export const userUpdate = data => {
    return request({
        method: 'PUT',
        url: '/api/user',
        data
    })
}
// follow
export const follow = username => {
    return request({
        method: 'PUT',
        url: `/api/profiles/${username}/follow`,
        data
    })
}