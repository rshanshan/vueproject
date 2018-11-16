<template>
    <div>
       <div class="mint-newsinfo">
           <h1>新闻标题</h1>
           <p>
               <span>发表时间：2018-11-16</span>
               <span>点击次数：0次</span>
           </p>
       </div> 
       <comment-box></comment-box>
    </div>
</template>

<script>
   import comment from '../subcomponent/Comment.vue'
   export default{
       data(){},
       methods:{},
       components:{
           'comment-box':comment
       }
   } 
</script>

<style lang="scss" scoped>
    .mint-newsinfo{
        h1{
            text-align:center;
            font-size:14px;
        }
        p{
            display:flex;
            justify-content:space-between;
            span{
                font-size:12px;
            }
        }
    }
</style>