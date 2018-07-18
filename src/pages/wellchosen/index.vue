<template>
  <div 
  v-infinite-scroll="loadData"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="5"
  class="wrapper">
    <ws-card v-for="(book,$index) in bookList" link='/mine' v-bind:key="book.id" :title="book.booktitle" :subTitle='book.lastupdate' :cover='book.cover' :description='book.Introduction' ></ws-card>
    <ws-footer-line :pager="pager" />
  </div>
</template>

<script>
import WsCard from "@/components/card/card.vue";
import WsFooterLine from "@/components/footer/footerline";
import BookStorageService from "@/domain/bookstorageService";
export default {
  name: "wellchosen-index",
  data() {
    return {
      bookList: [],
      pager:{
        pageIndex:1,
        pageSize:5,
        records:0,
        loadFinished:false,
        isloading:false
      },
      created:false
    };
  },
  created(){
    this.loadData();
    this.$data.created = true;
  },
  methods:{
    loadData(){
      if(!this.$data.created) return;
      BookStorageService.wellchosen(this.$data).then(data => {
        for(var b in data){ 
          this.$data.bookList.push(data[b]);
        }
      });
    }
  },
  components: {
    WsCard,
    WsFooterLine
  }
};
</script>

<style scoped>
.wrapper {
  padding: 15px 15px 0 15px;
}
.ws-card {
  margin-bottom: 15px;
}
</style>
