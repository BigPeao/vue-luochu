<template>
  <div class="ws-cell flex flex-justify flex-box">
      <div class="ws-cell-title flex">
          <i :class="'icon icon-'+ icon" :style="{color:iconColor}"></i>
          <span :style="{color:titleColor}">{{title}}</span> 
      </div>
      <div class="ws-cell-label flex">
          <span class="we-cell-label-text">{{label}}</span>
          <i class="icon icon-next"></i>
      </div>
  </div>
</template>

<script>
import UrlConfig from '@/utils/urlConfig';
export default {
  name: "ws-cell",
  props: {
    title: String,
    titleColor:String,
    label:String,
    icon:String,
    iconColor:String,
  }
};
</script>


<style scoped>
.ws-cell{
    height: 3.4375rem;
    background: #fff;
    padding: 0 1.1rem;
}
.ws-cell.flex .icon{
    font-size: 1.25rem;
}
.ws-cell .ws-cell-title .icon{
    margin-right: 0.5rem;
}
.ws-cell.flex .icon,.ws-cell.flex span {
    line-height: 1.25rem;
    display: block;
}
.ws-cell.flex .we-cell-label-text{
    color:#99A9C3;
    font-size: 0.8125rem;
}
.ws-cell-label .icon{
    color: #c6c6c6;
}
</style>