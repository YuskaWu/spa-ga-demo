<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },

  computed: {
    newsId () {
      return this.$route.params.id
    }
  },

  watch: {
    newsId (value) {
      this.fetchNews(value)
    }
  },

  mounted () {
    this.fetchNews(this.newsId)
  },

  methods: {
    async fetchNews (id) {
      const json = await fetch(`https://gcs-static-json-lb.nownews.com/api/v1/client/news/${id}.json`).then(res => res.json())
      const { postTitle, postContent } = json.data.news
      this.title = postTitle
      this.content = postContent
      document.querySelector('title').innerText = postTitle
      await this.$nextTick()
      gtag('config', 'UA-17681458-7', { page_path: this.$route.path })
    }
  }
}
</script>

<style>
</style>
