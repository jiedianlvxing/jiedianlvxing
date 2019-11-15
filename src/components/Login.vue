<!--
 * @Description: 
 * @Author: 冯换菊
 * @Date: 2019-11-09 19:20:22
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-15 10:10:38
 -->
<template>
    <div class="myloge" id="app">
        <div class="topp">
            <router-link to="MyPage">
                <i class="el-icon-close"></i>
            </router-link>
            <h2>节点旅行登录</h2>
        </div>
        <div class="midd">
            <img src="../assets/img/log.png" alt="">
        </div>
        <div class="midds">
            <h2>欢迎使用节点旅行</h2>
            <div class="tts">
                <i class="el-icon-mobile-phone"></i>
                <span>用户名</span><br>
                <el-input class="fot" placeholder="请输入内容" v-model="input" @blur="fun()" clearable></el-input>
                <span class="my_tt">{{msg}}</span><br>
                
                <i class="el-icon-lock"></i>
                <span>密码</span><br>
                <el-input  class="fot" placeholder="请输入密码" v-model="inputt" @blur="funn()" show-password></el-input>
                <span class="my_tt w2">{{msgs}}</span><br>

                <div class="bo">
                    <router-link to="/RegPage">
                        <span>注册</span>
                    </router-link>
                    <span>短信快捷登录</span>
                    <span>忘记密码?</span>
                </div>
                <span id="tts">{{msgp}}</span>
                <el-button @click="loginCheck(input)" class="but" type="primary" round>登录</el-button>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';

export default {
    name:'Login',
    // props:['from'],
    data(){
        return{
            input: '',
            inputt:'',
            msg:'',
            msgs:'',
            msgp:''
        }
    },
    // created(){
    // },
    methods:{

        getBooksByType(data){//根据类型获取数据
         let arr=[];
         for(let i in data){
             if(data[i].username==this.input){
                 arr.push(data[i]);
             }
         }
         return arr;
     },

         fun(){
            let reg=/^[a-zA-Z_]\w{5,14}$/;
            if(reg.test(this.input)){
                this.msg="";

            }else{
                this.msg="格式错误";
            }
        },
        funn(){
            let reg=/^[a-zA-Z1-9_]\w{6,14}$/;
            if(reg.test(this.inputt)){
                //  console.log(reg)
                this.msgs="";

            }else{
                this.msgs="密码格式错误";
            }
        },
        
        loginCheck(input){
            axios.get('/user/login',{
                params: { 
                    "username":this.input,
                    "userpassword":this.inputt
                    }
                // "username":username,
                // "userpassword":userpassword
            })
            .then(res=>{
                console.log(res.data);
                // let temp = res.data;
                // for(let i in temp){
                //     //  temp[i].username = this.input;
                //     if(this.input==temp[i].username){
                //         location.href="MyPage.vue"
                //     }
                //     if(this.inputt==temp[i].userpass){
                //         location.href="MyPage.vue"
                //     }
                // }
                // console.log(this.input);
                // console.log(this.inputt);
                if(this.msgp==0){
                    // this.msgp="登录成功"
                    location.href="MyPage.vue"
                }
                // this.input=res.data;
                // console.log(res.data)
                // console.log(this.input)
            })
            
                .catch(err=>{
                console.log(err);
            })

            localStorage.setItem('username',this.username);
            Toast({
                // message: '登录成功！',
                position: 'center',
                duration: 1000
            });
            setTimeout(()=>{
                let str = "/"+this.from;
                this.$router.push({path:str});
            },1100);          
        }
    }
}
</script>

<style>
#tts{
    display: block;
    width: 45%;
    height: .5rem;
    /* background: pink; */
    margin: 0 auto;
    line-height: .5rem;
    text-align: center;
}
.el-icon-circle-close:before {
    font-size: .3rem;
}
.el-icon-view:before {
    font-size: .3rem;
}
.myloge{
    width: 100%;
}
.topp{
    width: 100%;
    height: .5rem;
    padding-top: .1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
}
.el-icon-close{
    font-size: .3rem;
    margin-right: 1rem;
}
.topp h2{
    width: 60%;
    font-size: .25rem;
}

.midd{
    width: 92%;
    height: .8rem;
    margin: 0 auto;
}
.midd img{
    width: 20%;
}
.midds{
    width: 92%;
    background: white;
    height: 4rem;
    margin: 0 auto;
}
.midds h2{
    margin-top: .2rem;
    font-size: .24rem;
    font-weight: 500;
}
.tts{
    width: 100%;
    height: 4rem;
    margin-top: .25rem;
}
.el-icon-mobile-phone{
    font-size: .25rem;
    padding-top: 5px;
}
.tts span{
    margin-left: 10px;
    font-size: .2rem;
}
.tts .my_tt{
    width: 1.5rem;
    height: .25rem;
    display: block;
    /* background: blue; */
    position: absolute;
    line-height: .25rem;
    text-align: center;
    right: .4rem;
    top: 3.1rem;
    color: red;
    font-size: 14px;
}
.tts .w2{
    top: 4.2rem;
}
.el-input{
    position: relative;
}
.el-input__inner{
    height: .6rem;
    border: 0;
    border-bottom: 2px solid #6666;
    font-size: .18rem;
}
.fot{
    width: 100%;
    height: .8rem;
}
.el-icon-lock{
    font-size: .25rem;
    padding-top: 5px;
}
.bo{
    width: 100%;
    height: .6rem;
    margin-top: .2rem;
    line-height: .6rem;
    display: flex;
    justify-content: space-between;
}
.bo span{
    font-size: .18rem;
}
.bo span:last-child{
    color: #009999;
}
.but{
    width: 100%;
    height: .5rem;
    margin-top: .8rem;
    font-size: .2rem;
}
</style>