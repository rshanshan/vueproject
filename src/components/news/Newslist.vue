<template>
    <div>
        <ul class="mui-table-view">
            <!--<li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
                <router-link :to="'/home/newsinfo'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.src">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.date}}</span>
                            <span>点击次数：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>-->
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2018-11-15 13:44</span>
                            <span>点击次数：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2018-11-15 13:44</span>
                            <span>点击次数：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2018-11-15 13:44</span>
                            <span>点击次数：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2018-11-15 13:44</span>
                            <span>点击次数：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo">
                    <img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：2018-11-15 13:44</span>
                            <span>点击次数：0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";
   
    export default {
        data(){
            return{
                newList:[]
            }
        },
        created(){
            this.getNewslist()
        },
        methods:{
            getNewslist(){
                this.$http.get('http:111').then(result =>{
                    if(result.body.status == 0){
                       this.newLists = result.body.message
                    }else{
                        Toast('加载失败')
                    }
                })
            }
        },

    }
</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{font-size: 14px;}
            p{display: flex;justify-content: space-between;font-size: 12px;}
        }
    }
</style>