<template>
  <div class="ws-card">
    <router-link :to="link">
      <h3 class="ws-card-title">{{title}}</h3>
      <h4 class="ws-card-subtitle">{{subTitle}}</h4>
      <img  v-lazy="baseUrl+cover" :alt="title">
      <p class="ws-card-description">{{description}}</p>
    </router-link>
  </div>
</template>

<script>
import Router from "vue-router";
import UrlConfig from '@/utils/urlConfig'

export default {
  name: "ws-card",
  data(){
return {
  baseUrl:UrlConfig.COVER_BASE_URL
}
  },
  props: {
    title: String,
    subTitle: String,
    cover: String,
    link:String,
    description:String
  }
};
</script>


<style scoped>
.ws-card{
  background: #fff;
  border-radius: 6px;
  -webkit-border-radius:10px;
  padding: 10px;
  text-align: left;
}
.ws-card-title{
  font-size: 1rem;
}
.ws-card-subtitle{
  font-size: 0.8rem;
  color: #999;
  font-weight:300;
}
.ws-card-description{
  font-size: 0.8rem;
  color: #7c7c8c;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>