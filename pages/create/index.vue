<template>
  <div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form @submit.prevent="CreateArticle">
          <fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="Article Title" v-model="article.title">
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="What's this article about?"  v-model="article.description">
            </fieldset>
            <fieldset class="form-group">
                <textarea class="form-control" rows="8" placeholder="Write your article (in markdown)" v-model="article.body"></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { CreateArticle } from '@/api/api'
export default {
  middleware: 'authenticated', // 也可以是[]
  name: 'EditerIndex',
  data(){
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
  },
  methods: {
    async CreateArticle() {
      const { data } = await CreateArticle({article: this.article})
      console.log(data)
      if (data.article){
        // this.$router.push({
        //   })
          alert('创建成功！')
          this.article =  {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
      }
    },
  },
}
</script>

<style>

</style>