<!--
 * @Author: your name
 * @Date: 2019-11-15 19:58:54
 * @LastEditTime: 2019-11-15 20:02:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Slxjinxuan.vue
 -->
 <template>
    <div id="box" >

    </div>
</template>

<script>
export default {
     name:"lxjx",
  data(){
    return{
      jingxuans:[]
    }
  },
   created:function() { 
       fetch('/api/Handpick/selectHandpick' )

        .then((res)=>{ 
            return res.text();
            }) 
            .then((res)=>{ 
        this.jingxuans =  JSON.parse(res).handpicks;  
        }) 
        .catch((err)=>{
            console.log(err);
        })
        },

  methods:{

  }
}
</script>

<style scoped>
#box{
    width:100%;
}

</style>