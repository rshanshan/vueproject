import VueRouter from "vue-router";

import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import ShopcarContainer from "./components/tabbar/ShopcarContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";

import Newslist from "./components/news/Newslist.vue";
import Newsinfo from "./components/news/Newsinfo.vue";

import Photolist from "./components/photo/Photolist.vue";

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    //配置路由规则
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeContainer },
    { path: "/member", component: MemberContainer },
    { path: "/shopcar", component: ShopcarContainer },
    { path: "/search", component: SearchContainer },
    { path: "/home/newslist", component: Newslist },
    { path: "/home/newsinfo", component: Newsinfo },
    { path: "/home/photolist", component: Photolist }
  ],
  linkActiveClass: "mui-active"
});

// 把路由对象暴露出去
export default router;
