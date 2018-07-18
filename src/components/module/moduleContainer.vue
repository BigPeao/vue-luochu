<template>
  <div class="module">
    <div v-if="title" class="bar">
      <div class="title">
        <i v-if="icon" :class="'icon-title icon-title-'+ icon"></i>
        {{title}}
      </div>
      <div v-if="!hideMore" class="more" @click="more">
        <img src='./../img/icon-more.png'  />
      </div>
    </div>
    <div class="container">
      <div v-if="bookType==='simple'" :class="direction=='row'?'content flex-row':'content flex-column'">
        <simple-book v-for="(book,$index) in bookList" v-bind:key="book.id" v-if="$index < 3" :bid='book.id' :cover='book.cover' :title="book.booktitle" :author='book.author'></simple-book>
      </div>
      <div v-if="bookType==='special'" :class="direction=='row'?'content flex-row':'content flex-column'">
        <special-book v-for="(book,$index) in bookList" v-bind:key="book.bid" v-if="$index < 3" :bid='book.bid' :cover='book.cover' :title="book.booktitle" :author='book.author' :specialPrice='book.specialPrice' :show='book.visible' :enabled='book.enabled' ></special-book>
      </div>
      <div v-else-if="bookType==='normal'" class="content flex-column" :style="{'display':direction=='column'?'block':'flex'}">
        <normal-book v-for="(book,$index) in bookList" v-bind:key="book.id" v-if="$index < (complex?1:4)" :bid='book.id' :cover='book.cover' :title="book.booktitle" :author='book.author' :state='book.state' :bookLength='book.booklength' :intro='book.Introduction' :tclass="book.tclass" :style="{'margin-bottom':(bookList.length>1&&!complex) ?'0.5rem':'0','padding-bottom':(bookList.length>1&&!complex)?'.5rem':'0'}"></normal-book>
      </div>

      <div v-else-if="bookType==='charts'" class="content flex-column" :style="{'display':direction=='column'?'block':'flex'}">
        <normal-book v-for="(book,$index) in bookList" v-bind:key="book.id" v-if="$index < 1" :bid='book.id' :cover='book.cover' :title="book.booktitle" :author='book.author' :state='book.state' :bookLength='book.booklength' :intro='book.Introduction' :tclass="book.tclass" :style="{'margin-bottom':bookList.length >1?'0.5rem':'0','padding-bottom':bookList.length >1?'.5rem':'0'}"></normal-book>
        <li-book v-for="(book,$index) in bookList" v-bind:key="book.id" v-if="$index < 8 && $index>0" :bid='book.id' :title="book.booktitle" :author='book.author' :tclass="book.tclass" :style="{'margin-bottom':bookList.length >1?'0.5rem':'0','padding-bottom':bookList.length >1?'.5rem':'0'}"></li-book>
      </div>
      <slot v-if="bookType==='null'"></slot>
    </div>
  </div>
</template>

<script>
import SimpleBook from '@/components/book/simpleBook'
import SpecialBook from '@/components/book/SpecialOfferBook'
import NormalBook from '@/components/book/NormalBook'
import UrlConfig from '@/utils/urlConfig'

export default {
  name: 'module-container',
  data() {
    return {
      baseurl: UrlConfig.COVER_BASE_URL
    }
  },
  props:
  [
    'title',
    'direction',
    'bookType',
    'bookList',
    'mid',
    'webView',
    'nativePath',
    'hideMore',
    'icon',
    'complex',
    'bar'
  ],
  methods: {
    more() {
      //更多
    }
  },
  components: {
    SimpleBook,
    SpecialBook,
    NormalBook,
    LiBook
  }
}
</script>

<style>
.module {
  min-height: 100px;
  background: #fff;
  margin-bottom: .5rem;
}

.module .bar {
  display: -webkit-box;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  -webkit-box-pack: justify;
  align-items: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  padding: .8rem;
}

.module .container {
  padding: 0 .8rem 0;
}

.bar .title {
  color: #333;
  line-height: 1.1rem;
  font-weight: 500;
  font-size: 1.1rem;
}

.bar .more {
}

.bar .more img{
  height:1rem;
  width:2.588rem;
}
.module .content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem 0 .8rem 0;
}

.module .content.flex-column a:first-child {
  padding-top: 0;
}

.module .content.flex-column a:last-child {
  border: none;
}
</style>
