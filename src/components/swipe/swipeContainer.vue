<template>
  <div class="ws-swipe-container" :style="styleRender">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-bind:key="book.id" v-for="book in bookList">
        <img :src="baseurl + book.cover" @click="detail(book.id)" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import UrlConfig from '@/utils/urlConfig'

export default {
  name: 'ws-swipe-container',
  data() {
    //轮播图比例 640 * 236
    var height = window.innerWidth * 236 / 640;
    return {
      baseurl: UrlConfig.SWIPE_BASE_URL,
      styleRender: {
        height: height + 'px'
      }
    }
  },
  props: [
    'bookList'
  ],
  methods: {
    detail(bid) {
      //
    }
  }
}
</script>

<style scoped>
.ws-swipe-container {
  height: 100px;
}

.ws-swipe-container img {
  width: 100%;
}
</style>

