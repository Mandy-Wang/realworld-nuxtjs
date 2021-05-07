<template>
  <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <form @submit.prevent="updateUser">
          <fieldset>
              <fieldset class="form-group">
                <input class="form-control" type="text" placeholder="URL of profile picture"  v-model="data.image">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Your Name"  v-model="data.username">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you"  v-model="data.bio"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="data.email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="data.password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>

          </fieldset>
        </form>
      </div>
      <!-- <button class="btn btn-outline-danger col-md-2 offset-md-6"  ng-click="$ctrl.logout()"> -->
      <button class="btn btn-outline-danger col-md-2 offset-md-6"  @click="logout" style="margin-top:50px">
          Or click here to logout.
        </button>
    </div>
  </div>
</div>
</template>

<script>
import { user,userUpdate } from '@/api/user'
const Cookie = process.client ? require('js-cookie'):undefined
export default {
  middleware: 'authenticated', // 也可以是[]
  name: 'SettingsIndex',
  data(){
    return {
      data: {
        email: '',
        bio: '',
        image: '',
        username: '',
        password: ''
      },
    }
  },
  methods: {
    async getUser(){
      const { data } = await user()
      // console.log(data)
      this.data = data.user
    },
    async updateUser(){
      const {data} = await userUpdate(this.data)
      console.log(data)
      if (data.user){
        this.$router.push({
          name: 'profile',
          params: {username:data.user.username}
        })
      }
      
    },
    logout() {
      console.log('user')
      Cookie.remove('user', { path: '' })
      // this.$router.push('/')
    }
  },
  mounted () {
    this.getUser()
  }
}
</script>

<style scoped>
</style>