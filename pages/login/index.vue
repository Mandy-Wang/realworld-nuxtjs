<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{isLogin? 'Sign in': 'Sign up'}}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to='/register'>Have an account?</nuxt-link>
            <nuxt-link v-else to='/login'>need an account?</nuxt-link>
          </p>

          <ul class="error-messages">
            <template v-for="(mes,key) in errs">
              <li v-for="(m,index) in mes" :key="index">
                {{key}} {{m}}
              </li>
            </template>
            <!-- <li>That email is already taken</li> -->
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input
                class="form-control form-control-lg"
                type="text" required
                placeholder="Your Name"
                v-model="user.username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                v-model="user.email" required
                type="email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                v-model="user.password" required
                type="password"
                placeholder="Password"
                minlength="8"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{isLogin? 'Sign in': 'Sign up'}}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {login, register} from '@/api/user'
// 仅在客户端加载js-cookie包
const Cookie = process.client ? require('js-cookie'):undefined
export default {
  middleware: 'notAuthenticaticated', // 也可以是[]
  name: 'LoginIndex',
  computed: {
    isLogin(){
      return this.$route.name === 'login'
    }
  },
  data(){
    return {
      user: {
        username: '',
        email: '',
        password: ''
      },
      errs: {}
      // email: ['a','v'],username: ['a','d']
    }
  },
  methods: {
    async onSubmit() {
      // {"user":{"id":158361,"email":"45678@45678.com","createdAt":"2021-04-07T11:51:42.846Z","updatedAt":"2021-04-07T11:51:42.851Z","username":"45678","bio":null,"image":null,"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU4MzYxLCJ1c2VybmFtZSI6IjQ1Njc4IiwiZXhwIjoxNjIyOTgwMzAyfQ.2y-CSRz4Rvjfj3LgNkUNVejgmng4slROoQgwlRVNIqo"}}
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
    },
  },
};
</script>

<style>
</style>