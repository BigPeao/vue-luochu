<template>
  <a class="normal-container" @click="detail">
    <div class="cover">
      <img :src="baseurl + cover">
    </div>
    <div class="book-info">
      <h3 class="title">
        {{title}}
      </h3>
      <p class="book-intro">{{intro}}</p>
      <p class="other">
        <span class="author">
          <i class="icon icon-author"></i>
          {{author}}
        </span>
        <i class="detail">
          <!--<span>{{state==9?'完结':'连载'}}</span>
          <span>{{tclass}}</span>
          <span>{{bookLength>10000?(Math.floor(bookLength/10000) +'万字'):(bookLength+'字')}}</span> -->
        </i>
      </p>
    </div>
  </a>
</template>

<script>

import UrlConfig from '@/utils/urlConfig'

export default {
  name: 'normal-book',
  data() {
    return {
      baseurl: UrlConfig.COVER_BASE_URL
    }
  },
  bridge: undefined,
  props: ['cover', 'author', 'title', 'intro', 'state', 'tclass', 'bookLength', 'bid'],
  methods: {
    detail() {
      Native.WindowOpener(this.bridge).bookDetail(this.$props.bid);
    }
  }
}
</script>

<style scoped>
.normal-container {
  padding: 0;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  display: -webkit-flex;
  display: -webkit-box;
  justify-content: space-between;
  width: 100%;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
}

.cover {
  max-width: 5.3rem;
  margin-right: 1rem;
}

.cover img {
  width: 5.3rem;
  display: block;
  height: 7.17rem;
  border-radius: .2rem;
  border: 1px solid #eee;
}

.book-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: inherit;
  flex-direction: column;
  -webkit-flex: 1;
  -webkit-box-flex: 1;
}

.title {
  font-size: 1rem;
  font-weight: 400;
  color: #000;
}

.book-intro {
  overflow: hidden;
  display: -webkit-flex;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: #666;
  font-size: 0.7rem;
  line-height: 1.2rem;
  height: 2.2rem;
}


.other {
  font-size: 1.2rem;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  align-items: flex-end;
  justify-content: space-between;
}

.author {
  display: flex;
  flex: 1;
  font-size: .7rem;
  color: #b0b0b0;
  max-width: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  width: initial;
  height: initial;
}


.detail {
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-flex: 1;
  font-size: .7rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  display: -webkit-flex;
  display: -webkit-box;
  -webkit-align-items: flex-end;
  -webkit-justify-content: flex-end;
  -webkit-box-align: end;
}

.detail span {
  border: 1px solid #99a9c3;
  color: #99a9c3;
  padding: 1px .2rem 0 .2rem;
  border-radius: 0.2rem;
  -webkit-border-radius: 0.2rem;
  font-size: smaller;
}
</style>