// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './style/index.css'
import './style/icon.css'

Vue.use(Mint);
Vue.use(VueResource);
Vue.use(VueCookie);

Vue.config.productionTip = false
Vue.http.options.emulateJSON = true;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})