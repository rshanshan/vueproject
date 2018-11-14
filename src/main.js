// 入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueRosource from 'vue-resource'
Vue.use(VueRosource)

import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import router from './router.js'

import './lib/mui/css/mui.min.css'
import '../src/lib/mui/css/icons-extra.css'

import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})