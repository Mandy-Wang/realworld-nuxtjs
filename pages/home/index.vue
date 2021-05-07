<template>
  <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{
                  name: 'home',
                  query: {
                    tab: 'your_feed'
                  }
                }"
                exact
                :class="{active: tab==='your_feed'}"
                >Your Feed</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{
                name: 'home',
                query: {
                  tab: 'global_feed'
                }
                }"
                exact
                :class="{active: tab==='global_feed'}"
                >Global Feed</nuxt-link>
            </li>
            <li class="nav-item" v-if="tag">
              <nuxt-link class="nav-link" :to="{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: tag
                  }
                }"
                exact
                :class="{active: tab==='tag'}"
                >#{{tag}}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="article-preview" v-for="article in articles" :key="article.slug">
          <div class="article-meta">
            <nuxt-link :to="{
              name: 'profile',
              params: {
                username: article.author.username
              }
              }"
            >
              <img :src="article.author.image" />
            </nuxt-link>
            <div class="info">
              <nuxt-link class="author"
                  :to="{
                  name: 'profile',
                  params: {
                    username: article.author.username
                  }
                }"
              >
              {{article.author.username}}</nuxt-link>
              <span class="date">{{article.createdAt | date("MMM DD, YYYY")}}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right"
              :class="{active: article.favorited}"
              @click="onFavorite(article)"
              :disabled="article.favoriteDisabled"
            >
              <i class="ion-heart"></i> {{article.favoritesCount}}
            </button>
          </div>
          <nuxt-link class="preview-link"
          :to="{
                  name: 'article',
                  params: {
                    slug: article.slug
                  }
                }"
          >
            <h1>{{article.title}}</h1>
            <p>{{article.description}}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>
      </div>
 <!-- 分页列表 -->
      <nav>
        <ul class="pagination">
          <li class="page-item" 
            v-for="item in totalPage"
            :key="item"
            :class="{
              active: item===page
              }"
          >
          <nuxt-link :to="{
            name: 'home',
            query: {
              page: item,
              tag:$route.query.tag,
              tab: tab
              }
          }" class="page-link">{{item}}</nuxt-link>
          </li>
        </ul>
      </nav>
<!-- tag -->
      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <nuxt-link 
            v-for="item in tags"
            :key="item"
            :to="{
              name: 'home',
              query: { 
                tab: 'tag',
                tag: item,
                }
              }" class="tag-pill tag-default"
              >{{item}}</nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import {getArticles,getTags,getFeedArticles,onFavorite,unFavorite} from '@/api/api'
import {mapState}  from 'Vuex'
export default {
  name: 'home',
  async asyncData ({query,store}){
    const page = Number.parseInt(query.page || 1)
    const limit = 2
    const {tag} = query
    const tab = query.tab || 'global_feed'
    const loadArticles = store.state.user && tab  === 'your_feed'? getFeedArticles: getArticles
    // const {data} = await getArticles({
    //   limit,
    //   offset: (page-1)*limit
    // })
    // const {data:tagData} = await getTags()
    // return {
    //   articles: data.articles,
    //   articlesCount: data.articlesCount,
    //   limit,
    //   page,
    //   tags: tagData.tags
    // }
    const [articleRes,tagsRes]= await Promise.all([
      loadArticles({
        limit,
        offset: (page-1)*limit,
        tag
      }),
      getTags()
    ])
    const {articles,articlesCount} = articleRes.data
    articles.forEach(article => {
      article.favoriteDisabled = false
    });
    const {tags} = tagsRes.data
    return {
      articles,
      articlesCount,
      page,
      limit,
      tags,
      tag,
      tab: query.tab || 'global_feed'
    }
  },
  watchQuery: ['page','tag','tab'], // 动态检测数据变化  更新数据
  computed: { 
    totalPage (){
      return Math.ceil(this.articlesCount/this.limit)
    }
  },
  methods: {
    async onFavorite(article){
      article.favoriteDisabled = true
      if (article.favorited){
        // 已点赞 取消
        await unFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        // 添加
        await onFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    }
  }
}
</script>

<style>

</style>