<template>
<div>
  <router-view></router-view>
  <ws-tabbar>
      <ws-tab-item label="精选" icon='wellchosen' link="/wellchosen" ></ws-tab-item>
      <ws-tab-item label="书城" icon='bookstorage' link="/bookstorage" ></ws-tab-item>
      <ws-tab-item label="书架" icon='bookcase' link="/bookcase" selected='true' ></ws-tab-item>
      <ws-tab-item label="我的" icon='user' link="/mine" ></ws-tab-item>
  </ws-tabbar>
</div>
</template>

<script>
import WsTabbar from './../../components/tab/tabbar.vue'
import WsTabItem from './../../components/tab/tabitem.vue'
export default {
  name:"bookcase-container",
  components:{
      WsTabbar,
      WsTabItem
  }
}
</script>
