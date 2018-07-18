<template>
  <div>
    <div class="header flex">
      <ws-avatar avatar='http://tvax3.sinaimg.cn/crop.0.0.300.300.50/006YpZ0rly8fl0cabwaz4j308c08c74q.jpg' />
      <div class="user-info flex flex-box">
        <div v-if="!isLogined">
          <p>请登陆</p>
        </div>
        <div v-if="isLogined">
        <p>李容许</p>
        <p>余额：<span>300</span>落初币+<span>300</span>阅读币</p>
        </div>
      </div>
    </div>
    <ws-cell-module>
      <ws-cell title="充值" titleColor="#F25449" label="充值有礼" icon="money" iconColor="#F25449"></ws-cell>
    </ws-cell-module>
    <ws-cutoff-rull />
    <ws-cell-module hasBorder='true'>
      <ws-cell title="阅读记录" icon='record' iconColor='#F49F00'></ws-cell>
      <ws-cell title="充值记录" icon='pay-record' iconColor='#F49F00'></ws-cell>
      <ws-cell title="消费记录" icon='paper' iconColor='#F49F00'></ws-cell>
      <ws-cell title="个人资料" icon='personage' iconColor='#F02134'></ws-cell>
      <ws-cell title="绑定手机号" icon='phone' iconColor='#9ED40C' label="赠100币"></ws-cell>
      <ws-cell title="下载APP" icon='download' iconColor='#F02639' label="每天领书币"></ws-cell>
    </ws-cell-module>
    <ws-cutoff-rull />

  </div>
</template>

<script>
import WsCellModule from '@/components/cell/cellModule'
import WsCell from '@/components/cell/cell'
import WsCutoffRull from '@/components/cell/cutoffRull'
import WsAvatar from '@/components/avatar/avatar'
export default {
  name:"mine-index",
  data(){
    return{
      isLogined:true
    }
  },
  components:{
    WsCellModule,
    WsCell,
    WsCutoffRull,
    WsAvatar
  }
}
</script>

<style scoped>
.header{
  height: 5.4375rem;
  background: #1DB7AC;
}
.header .ws-avatar{margin:0.9375rem 0.625rem;}
.header .user-info{text-align: left;color:#fff;font-size: 0.97rem;margin:0.9375rem 0rem;}
</style>

