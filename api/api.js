// /api/articles
import {request} from '@/plugins/request'  // 注意上面按需加
// 文章列表
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}
// 关注文章列表
export const getFeedArticles = params => {
  return request({
    method: 'GET',
    // header: {
    //   // 注意token 格式
    //   Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93d3cuYm9ndWFuMzYwLmNvbSIsImlhdCI6MTYxNzg3ODExOSwibmJmIjoxNjE3ODc4MTE5LCJleHAiOjE2MTc4ODUzMTksImRhdGEiOnsidHlwZSI6InVzZXIiLCJ1c2VyaWQiOjF9fQ.7wgYUXf5qypTVA8ydYcFXw6ITERHnY0vCrvCXH7RjRY`
    // },
    url: '/api/articles/feed',
    params
  })
}

// 标签接口
export const getTags = params => {
  return request({
    method: 'GET',
    url: '/api/tags',
    // params
  })
}

// 文章点赞
export const onFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`,
  })
}

// 删除点赞  slug 文章名
export const unFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`,
  })
}

//获取文章内容
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`,
  })
}
//获取文章内容
export const CreateArticle = data => {
  return request({
    method: 'POST',
    url: '/api/articles/',
    data
  })
}
//获取文章评论
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`,
  })
}
//发布文章评论
export const addComments = (slug,data) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  })
}