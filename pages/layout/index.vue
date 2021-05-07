<template>
  <div>
    <!-- 顶部导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <!-- <a class="navbar-brand" href="index.html">conduit</a> -->
        <nuxt-link class="navbar-brand" to="/" exact>Home</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <template v-if="user">
            <li class="nav-item">
              <!-- Add "active" class when you're on that page" -->
              <!-- <a class="nav-link active" href="">Home</a> -->
              <nuxt-link to="/" exact>Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/editor">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/settings">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item" style="background:red">
              <nuxt-link class="nav-link" :to="{name:'profile',params:{username:user.username}}">
              <img :src="user.image">
                {{user.username}}
                </img>
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link to="/register">Sign up
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/login">Sign in
              </nuxt-link>
            </li>
          </template>

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
import { mapState } from 'vuex'
export default {
  name: "LayoutIndex",
  computed: {
    ...mapState(['user'])
  }
};
</script>

<style>
</style>