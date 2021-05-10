线上浏览地址：http://117.50.94.220:3000/	

学习收获：

- 掌握使用Nuxt.js开发同构渲染应用

- 增强vue.js实践能力

- 掌握同构渲染应用中常见的功能处理

  - 用户状态管理
  - 页面访问权限处理
  - SEO优化

- 掌握通过渲染应用的发布与部署

- #### DEMO地址  https://demo.realworld.io/#/

## 一、创建项目

- mkidr realworld-nuxt.js
- npm init -y
- npm i nuxt
- 配置启动脚本： script---dev--> nuxt
- 创建pages目录，配置初始页面
- 启动页面： npm  run dev 可以看到home内容

## 二、导入页面模板

### 导入样式资源：

- 创建app.html

   [模板地址](https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md)

  [cdn网址，输入搜索 ](https://www.jsdelivr.com/)

  [ionicons相应版本的css地址](https://cdn.jsdelivr.net/npm/ionicons@2.0.1/css/ionicons.min.css)

  根目录创建static文件夹：新建index.css并复制[内容](http://demo.productionready.io/main.css)

  ```html
  <!DOCTYPE html>
  <html {{ HTML_ATTRS }}>
    <head {{ HEAD_ATTRS }}>
      {{ HEAD }}
      <link href="https://cdn.jsdelivr.net/npm/ionicons@2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">
      <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">
      <!-- Import the custom Bootstrap 4 theme from our hosted CDN -->
      <link rel="stylesheet" href="/index.css">
    </head>
    <body {{ BODY_ATTRS }}>
      {{ APP }}
    </body>
  </html>
  ```

### 配置布局组件

在pages中创建layout/index.vue  

修改layout中a标签为nuxt-link，并添加to 另外添加点击高亮

```vue
<template>
  <div>
    <!-- 顶部导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <a class="nav-link active" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-compose"></i>&nbsp;New Post
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- /顶部导航栏 -->
    <!-- 子路由 -->
    <nuxt-child />
    <!-- /子路由 -->
    <!-- 底部 -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>

    <!-- /底部 -->
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",
};
</script>

<style>
</style>
```

### 配置路由组件

1. 根目录创建nuxt.config.js
2. 修改导航中`a标签` 为 `nuxt-link`
3. 路由高亮：添加 `linkActiveClass: 'active', // 路由高亮`

```js
// nuxt.js的配置
module.exports = {
    router: {
        linkActiveClass: 'active', // 路由高亮
        extendRoutes(routes, resolve) {
            routes.splice(0) // 清空默认路由
            routes.push(...[
                {
                    path: '/',
                    component: resolve(__dirname, 'pages/layout/'),
                    children:[
                        {
                            path: '',  // 默认子路由
                            name: 'home',
                            component: resolve(__dirname,'pages/home/')
                        }
                    ]
                }
            ])
        }
    }
}
```

- 创建home文件夹复制下面home页内容到index.vue
- 分别创建Login/Register，Profile，Settings，Create/Edit Article，Article页面,以及路由添加

## 三、创建utils封装axios.js

```js
// 基于axios的封装
import axios from 'axios'

const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})
// 请求拦截器

// 响应拦截器
export default request
```

## 四、创建api文件夹 封装接口

[api接口地址](https://github.com/gothinkster/realworld/tree/master/api)

### user.js

```js
import axios from '@/utils/request'

// 用户登录
export const login = data => {
    return {
        method: 'POST',
        url: '/api/users/login',
        data
    }
}
// 用户注册
export const register = data => {
    return {
        method: 'POST',
        url: '/api/users',
        data
    }
}
```

## 五、登录页面定制

###   isLogin判断是登录还是注册页面 进行路由切换

```js
export default {
  name: 'LoginIndex',
  computed: {
    isLogin(){
      return this.$route.name === 'login'
    }
  }
};
```

```vue
{{isLogin? 'Sign in': 'Sign up'}}
<p class="text-xs-center">
            <nuxt-link v-if="isLogin" to='/register'>Have an account?</nuxt-link>
            <nuxt-link v-else to='/login'>need an account?</nuxt-link>
          </p>

<fieldset v-if="!isLogin" class="form-group">
    <input
           class="form-control form-control-lg"
           type="text"
           placeholder="Your Name"
           />
</fieldset>

<button class="btn btn-lg btn-primary pull-xs-right">
    {{isLogin? 'Sign in': 'Sign up'}}
</button>
```

### 按需调注册还是登录接口

```js
//对接口返回错误信息的处理： 使用try  catch 并展示错误信息
try {
    // 提交表单请求
    const { data }= this.isLogin?await login({
        user: {email:this.user.email,password:this.user.password}
    }):await register({user: this.user})
    this.$store.commit('setUser',data.user)
    // 为了防止刷新页面数据丢失 我们需要把数据持久化
    Cookie.set('user',data.user)
    // 保存用户登录状态 并跳转到首页
    this.$router.push('/')
}catch(err){
    console.dir(err)
    this.errs = err.response.data.errors
}
```

### 将登录状态存储到vuex中 

`this.$store.commit('setUser',data.user)`

### 登录状态持久化

- 安装：  `npm i js-cookie `
- 使用： `Cookie.set('user',data.user)`

### 添加认证中间件-处理访问权限

如果有登录信息就重定向到'/'路由

```js
middleware: 'notAuthenticaticated', // 也可以是[]
```

notAuthenticaticated.js

```js
// 验证是否登录的中间件
export default function ({ store, redirect }) {
    if (store.state.user) {
        return redirect('/')
    }
}
```

## 六、vuex的使用

- 新建store/index.vue
- 服务端数据持久化
  - 安装：npm i cookieparser
  - 添加相应代码到store/index.vue

```js
const cookieparser = process.server ? require('cookieparser'):undefined
// 在服务端渲染期间运行都是同一个实例
// 为了防止数据冲突，务必要把state定义成一个函数 返回数据对象
export const state = () => {
    return {
        // 当前登录用户的登录状态
        user: null
    }
}
export const mutations = {
    setUser(state,data){
        // console.log(data)
        state.user = data
    }
}
export const actions = {
    // nuxtServerInit是一个特殊的action方法
    // 这个action会在服务端渲染期间自动调用
    // 作用：初始化容器数据， 传递数据给客户端使用
    nuxtServerInit ({ commit },{ req }) {
        let user = null
        // 如果请求头中有Cookie
        if (req.headers.cookie){
            // 使用cookieparser把cookie字符串转换为js对象
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err){

            }
            // 提交mutation修改state状态
            commit('setUser',user)
        }
    }
}
```

## 七、layout中导航栏权限的设置

```js
computed: {
    ...mapState(['user'])
  }
```

当user存在时，显示home new post setting profile 否则只显示 登录和注册按钮

```html
<template v-if="user"></template>
<template v-else></template>
```

## 八、首页公共文章列表

### 异步获取数据并填充页面

```js
import {getArticles} from '@/api/api'
export default {
  name: 'home',
  async asyncData (){
    const {data} = await getArticles()
    return {
      articles: data.articles,
      articlesCount: data.articlesCount
    }
  }
}
```

```html
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
              <span class="date">{{article.createdAt}}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right"
              :class="{active: article.favorited}"
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
```

### 首页分页内容

- 分页数据
- 标签数据

```js
async asyncData ({query}){
    const page = Number.parseInt(query.page || 1)
    const limit = 2
    const {data} = await getArticles({
      limit,
      offset: (page-1)*limit
    })
    const {data:tagData} = await getTags()
    return {
      articles: data.articles,
      articlesCount: data.articlesCount,
      limit,
      page,
      tags: tagData.tags
    }
  },  
```

- 生成分页块

```js
computed: {
    totalPage (){
      return Math.ceil(this.articlesCount/this.limit)
    }
  }
```

- 分页页面激活

```html
:class="{
	active: item===page
}"
```

- 分页点击页面时监听页面刷新数据

```js
watchQuery: ['page'],
```

### 多个异步并行优化

```js
async asyncData ({query}){
    const page = Number.parseInt(query.page || 1)
    const limit = 2
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
    const [articleRes,tagsRes]=Promise.all([
      getArticles({
        limit,
        offset: (page-1)*limit
      }),
      getTags()
    ])
    const {articles,articlesCount} = articleRes.data
    const {tags} = tagsRes.data
    return {
      articles,
      articlesCount,
      page,
      limit,
      tags
    }
  },
```

### 标签导航页html

```html
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
```

```js
async asyncData ({query}){
    const page = Number.parseInt(query.page || 1)
    const limit = 2
    const {tag} = query
    const [articleRes,tagsRes]= await Promise.all([
      getArticles({
        limit,
        offset: (page-1)*limit,
        tag
      }),
      getTags()
    ])
    const {articles,articlesCount} = articleRes.data
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
  watchQuery: ['page','tag','tab'],  // 动态检测数据变化  更新数据
```

### 设置用户token

- 设置拦截器： [代码地址](https://github.com/axios/axios)

```js
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
```

- 创建plugins/request.js   放入上面代码
- 在nuxt.config.js中注册插件 

```js
plugins: [
        '~/plugins/request.js'
    ]
```

- 在接口中按需引入

```js
import {request} from '@/plugins/request'
```

### 时间格式处理

[dayjs插件源码地址](https://github.com/iamkun/dayjs)

[dayjs文档地址](https://dayjs.gitee.io/zh-CN/)

- 安装： 

  ```shell
  npm install dayjs --save
  ```

- 使用：

  - 在plugins中创建dayjs.js文件

    ```js
    import Vue from 'vue'
    import dayjs from 'dayjs'
    
    // {{表达式||过滤器}}
    Vue.filter('date',(value,format = 'YYYY-MM-DD HH:mm:ss')=>{
        return dayjs(value).format(format)
    })
    ```

  - 在nuxt.config.js注册插件

    ```js
     // 注册插件
        plugins: [
            '~/plugins/request.js',
            '~/plugins/dayjs.js'
        ]
    ```

  - 使用的地方 `{{ time| date}}` date是格式化的地方

    ```html
    <span class="date">{{article.createdAt | date("MMM DD, YYYY")}}</span>
    ```

### 文章点赞功能

- 方法中写入

  ```js
  async onFavorite(article){
        article.favoriteDisabled = true  //为了防止重复点击 当第一次点击时开始禁用 点击结束 允许下次点击
        if (article.favorited){
          // 已点赞 取消
          await unFavorite(article.slug)  // 删除点赞
          article.favorited = false       // 点赞按钮未点赞显示
          article.favoritesCount += -1    // 点赞数据更新
        } else {
          // 添加
          await onFavorite(article.slug)  // 点赞
          article.favorited = true        // 点赞按钮点赞显示
          article.favoritesCount += 1     // 点赞数据更新
        }
        article.favoriteDisabled = false  //为了防止重复点击
      }
  ```

- 在async asyncData 中 articles中加入favoriteDisabled

  ```js
  articles.forEach(article => {
  	article.favoriteDisabled = false
  });
  ```

- 点赞按钮

  ```html
  <button class="btn btn-outline-primary btn-sm pull-xs-right"
      :class="{active: article.favorited}"
      @click="onFavorite(article)"
      :disabled="article.favoriteDisabled"
  >
  	<i class="ion-heart"></i> {{article.favoritesCount}}
  </button>
  ```

## 九、文章详情

### 1.接口

```js
async asyncData ({params}){
    const {data} = await getArticle(params.slug)
    return {
      article: data.article
    }
  }
```

### 2.内容填充

#### 内容部分使用markdown转换插件

[地址](https://github.com/markdown-it/markdown-it)

- 安装

  ```shell
  npm install markdown-it --save
  ```

- 在article中引入

  ```js
  import MarkdownIt from 'markdown-it'
  // data中
  const md = new MarkdownIt()
  article.body = md.render(article.body)
  ```

  在html中使用

  ```html
  <div class="row article-content">
      <div class="col-md-12" v-html="article.body">
      </div>
  </div>
  ```

  ### 3.作者内容处理

  - 创建子组件

  - 父组件中引入

    ```vue
    <template>
      <div class="article-meta">
            <nuxt-link :to="{
                name: 'profile',
                params: {
                    username: article.author.username
                }
                }"><img :src="article.author.image" /></nuxt-link>
            <div class="info">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                    username: article.author.username
                }
                }">{{article.author.username}}</nuxt-link>
              <span class="date">{{article.createdAt | date('MMM DD, YYYY')}}</span>
            </div>
    
            <button class="btn btn-sm btn-outline-secondary"
                :class="{active:article.author.following}"
            >
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow Eric Simons <span class="counter">(10)</span>
            </button>
            &nbsp;
            <button class="btn btn-sm btn-outline-primary"
             :class="{active:article.author.favorited}"
            >
              <i class="ion-heart"></i>
              &nbsp;
              Favorite Post <span class="counter">(29)</span>
            </button>
          </div>
    </template>
    
    <script>
    export default {
        name: 'ArticleMeta',
        props: {
            article: {
                type: Object,
                required: true
            },
        },
    }
    </script>
    
    <style>
    
    </style>
    ```

### 3.设置页面meta优化SEO

```js
head() {
      return {
        title: `${this.article.title} - RealWorld`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.article.description
          }
        ]
      }
    }
```

### 4.评论区

```js
import {getComments,addComments} from '@/api/api'
export default {
    name: 'ArticleComment',
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    data(){
        return{
            comments:[],
            comment:''
        }
    },
    async mounted(){
        const { data } = await getComments(this.article.slug)
        this.comments = data.comments
    },
    methods: {
        async addComments(article){
            console.log(article)
            const slug = article.slug
            const res = await addComments(slug,{comment: {body: this.comment}})
            console.log(res)
        }   
    }
}
```

## 十、发布部署

[nuxtJs发布地址](https://zh.nuxtjs.org/docs/2.x/get-started/commands/)

### 1.在package.json中放入

```shell
"build": "nuxt build",
"start": "nuxt start",
"generate": "nuxt generate"
```

### 2.生成包

```shell
npm run build
npm run start
```

### 3.部署准备

- 配置需要的host+port 

  在nuxt.config.js中

  ```js
  server: {
      host: '0.0.0.0',
          port: 3000
  },
  ```

- 压缩发布包:需要的内容：.nuxt static nuxt.config.js  package.json package-lock.json

- 把包传到服务端: 

  - 登录服务器：ssh root@ip地址     输入密码 进入服务器

  - 退出服务器执行：scp .\压缩包  ssh root@ip地址：要放置的文件夹路径![image-20210409163904196](Nuxtjs综合案例/image-20210409163904196.png)

  - 再次连接服务器，解压压缩

  - 解压

    - zip解压：unzip 包名

    - tar包：

      ```shell
      #压缩文件 file1 和目录 dir2 到 test.tar.gz
      tar -zcvf test.tar.gz file1 dir2
      #解压 test.tar.gz（将 c 换成 x 即可）
      tar -zxvf test.tar.gz
      #列出压缩文件的内容
      tar -ztvf test.tar.gz 
      #-z : 使用 gzip 来压缩和解压文件
      #-v : --verbose 详细的列出处理的文件
      #-f : --file=ARCHIVE 使用档案文件或设备，这个选项通常是必选的
      #-c : --create 创建一个新的归档（压缩包）
      #-x : 从压缩包中解出文件
      ```

    - ### rar 命令

      ```shell
      # 压缩文件
      rar a -r test.rar file
      # 解压文件
      unrar x test.rar
      # a : 添加到压缩文件
      # -r : 递归处理
      # x : 以绝对路径解压文件
      ```

    - `ls -a`查看目录下文件

- 安装依赖：`npm i`

- 启动服务`nuxt start`

### 使用pm2启动服务

[github地址](https://github.com/Unitech/pm2)

[官方文档](https://pm2.io/)

安装： npm install --global pm2

启动： pm2 start 脚本路径  (pm2 start npm --start) ---start是传参的参数

![image-20210409165040449](Nuxtjs综合案例/image-20210409165040449.png)

![image-20210409165109439](Nuxtjs综合案例/image-20210409165109439.png)

### 现代式部署

上面部署是传统模式部署，比较繁琐

![image-20210409165322623](Nuxtjs综合案例/image-20210409165322623.png)

### CI/CD服务

- jenkins
- gitlab CI
- github actions
- travis CI
- circle CI

#### 准备工作

- linux服务器

- 代码可提交的仓库，如：github等远程仓库

#### 配置github access token

- [生成token](https://github.com/settings/tokens)

  - 点击头像的setting----找到Developer settings---> Personal access tokens--->Generate new token---> note输入名字---->权限位置选择repo就可以----> 点击生成---->复制令牌

- 配置到项目的secrets中：点开github仓库，找到setting---------->左侧栏Secrets---> new secrets--->输入name    value

  ![image-20210409172601491](Nuxtjs综合案例/image-20210409172601491.png)

#### 配置github actions执行脚本

- 在项目根目录创建.github/workflows目录

- 下载main.yml到workflows目录中:[脚本地址](https://gist.github.com/lipengzhou/b92f80142afa37aea397da47366bd872)

- 修改配置

- 配置PM2配置文件:在项目根目录下创建pm2.config.json

  ```json
  {
  	"apps": [
  		"name": "RealWorld",
  		"script": "npm",
  		"args": "start"
  	]
  }
  ```

- 提交更新

- 查看自动部署状态

- 访问网站

- 提交更新

![image-20210409172954897](Nuxtjs综合案例/image-20210409172954897.png)

![image-20210409173042008](Nuxtjs综合案例/image-20210409173042008.png)

github中查看actions

TOKEN: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

腾讯云服务器配置：https://www.yuque.com/docs/share/3bed2f90-8dd0-4eb3-b95d-b10db3a5e374?#%20%E3%80%8A3-3%E4%BD%9C%E4%B8%9A%E6%80%8E%E4%B9%88%E5%86%99-%EF%BC%88From%E6%8B%89%E5%8B%BE%EF%BC%89%E3%80%8B

1、目录拷贝：

scp -r  ./util  root@192.168.1.0:/home/wwwroot/limesurvey_back/scp

2、文件拷贝

scp  ./util  root@192.168.1.0:/home/wwwroot/limesurvey_back/scp 