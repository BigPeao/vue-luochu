<template>
  <a class="simple-container" @click="detail">
    <img class="cover" :src="baseurl+cover" />
    <span class="title ">{{title}}</span>
    <span class="author ">{{author}}</span>
  </a>
</template>

<script>
import UrlConfig from '@/utils/urlConfig'

export default {
  name: 'simple-book',
  data() {
    return {
      baseurl: UrlConfig.COVER_BASE_URL
    }
  },
  bridge: undefined,
  props: ['cover', 'title', 'author', 'bid'],
  methods: {
    detail() {
      
    }
  }

}
</script>

<style scoped>
.cover {
  width: 5.3rem;
  height: 7.17rem;
  display: block;
  border-radius: .2rem;
  border: 1px solid #eee;
}

.title {
  overflow: hidden;
  font-size: .8rem;
  margin-top: 0.3rem;
  max-width: 5.3rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.author {
  color: #919191;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 1.25rem;
  margin-top: 0.3rem;
}

.simple-container {
  max-width: 9rem;
  position:relative;
}
</style>
