<!--
 * @Description: 
 * @Author: 冯换菊
 * @Date: 2019-11-09 19:20:22
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-15 15:24:18
 -->
<template>
    <div class="myloge">
        <div class="topp">
            <router-link to="/LoginPage">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            <h2>节点旅行注册</h2>
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
                

                <i class="el-icon-discount"></i>
                <span>密码</span><br>
                <el-input class="fot" placeholder="请输入密码" v-model="inputt" @blur="funn()" show-password></el-input>
                <span class="my_tt w2">{{msgs}}</span><br>

                <i class="el-icon-message"></i>
                <span>邮箱</span><br>
                <el-input class="fot" placeholder="请输入邮箱" v-model="inputts" @blur="funtt()" clearable></el-input><br>
                <span class="my_tt w2 w3">{{msgtt}}</span><br>
                
                <!-- <i class="el-icon-message"></i> -->
                <span>验证码</span><br>
                <el-input class="fot" id="yanz" placeholder="请输入验证码" v-model="inputj"></el-input>
                <input @click="changeBt()" class="yaz" type="button" value="获取邮箱验证码">
                
                <div class="bo">
                    <el-checkbox v-model="checked"></el-checkbox>
                    <p>我以阅读并同意<span>《用户协议》</span></p> 
                </div>
                 <span id="tts">{{msgp}}</span>
                <el-button @click="loginCheck()" class="but" type="primary" :disabled='checked' round>注册</el-button>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';

export default {
    name:'login',
    data(){
        return {
            input: '',
            inputt:'',
            inputts:'',
            inputj:'',
            checked: false,
            msg:'',
            msgs:'',
            msgtt:'',
            msgp:''
        }
    },
    methods:{

        fun(){
            let reg=/^[a-zA-Z_]\w{6,14}$/;
            if(reg.test(this.input)){
                this.msg="";

            }else{
                this.msg="格式错误";
            }
        },
        funn(){
            let reg=/^[a-zA-Z1-9_]\w{6,14}$/;
            if(reg.test(this.inputt)){
                 console.log(reg)
                this.msgs="";

            }else{
                this.msgs="密码格式错误";
            }
        },
        funtt(){
            let reg=/^[1-9a-zA-Z_]\w{5,17}@\w{2,10}\.(com|cn|net|com.cn)$/;
            if(reg.test(this.inputts)){ 
                // console.log(reg);
                this.msgtt="";
            }else{
                this.msgtt="邮箱格式错误";
            }
        },

        // loginCheck(){
        //     axios.post('/user/addUser?username='+this.input+'&userpassword='+this.inputt+'&useremil='+this.inputts

        //         // 192.168.43.46:8080/user/addUser post
        //         // params: { 
        //         //     "username":this.input,
        //         //     "userpassword":this.inputt,
        //         //     "useremil":this.inputts
        //         //     }
                    
        //     )
        //     .then(res=>{
        //         console.log(res.data);
        //         if(data==0){
        //             this.msgp="注册成功";
        //             location.href="MyPage.vue";
        //         }
        //         if(data==1){
        //             this.msgp="该用户已经注册,请登录";
        //         }

        //     })
        //     .catch(err=>{
        //     console.log(err);
        //     })
            
        //     localStorage.setItem('username',this.username);
        //     Toast({
        //         // message: '注册成功！',
        //         // position: 'center',
        //         duration: 1000
        //     });
        //     setTimeout(()=>{
        //         let str = "/"+this.from;
        //         this.$router.push({path:str});
        //     },1100);          
        //     },
        changeBt(){
                axios.get('/user/getemil?useremil='+this.inputts

                // 192.168.43.46:8080/user/addUser post
                // params: { 
                //     "useremil":this.inputts
                //     }
                    
        )
            .then(res=>{
            console.log(res.data);
                // if(data==0){
                //     this.msgp="注册成功";
                //     location.href="MyPage.vue";
                // }
                // if(data==1){
                //     this.msgp="该用户已经注册,请先登录";
                // }

            })
            .catch(err=>{
            console.log(err);
            })
            
        }
    }
}
</script>

<style>
#tts{
    display: block;
    width: 45%;
    height: .5rem;
    background: pink;
    margin: 0 auto;
    line-height: .5rem;
    text-align: center;
}
.tts .my_tt{
    width: 1.2rem;
    height: .25rem;
    display: block;
    /* background: blue; */
    position: absolute;
    line-height: .25rem;
    text-align: center;
    right: .4rem;
    top: 2.8rem;
    color: red;
    font-size: 14px;
}
.tts .w2{
    top: 4rem;
}
.tts .w3{
    top: 5rem;
}
#iscolor{
    background-color:red;
}
.tts #yanz{
     width: 60%;
}
.yaz{
    width: 35%;
    height: .6rem;
    background: #009999;
    color: white;
    float: right;
    margin-top: -.8rem;
    font-size: .15rem;
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
.el-checkbox__inner{
    border-radius: 50%;
    width: .2rem;
    height: .2rem;
    position: relative;
    border:1px solid rgb(86, 224, 248);
}
.el-checkbox__input{
    cursor: none;
}
.el-checkbox{
    cursor: none;
}
.el-checkbox__inner::after {
    height: 8px;
    top: 4px;
    width: 4px;
    left: 6px;
}
.topp{
    width: 100%;
    height: .4rem;
    padding-top: .1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: .5rem;
}
.topp h2{
    width: 60%;
    font-size: .25rem;
}
.el-icon-arrow-left{
    font-size: .3rem;
    margin-right: 1rem;
}
.midd{
    width: 92%;
    height: .5rem;
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
.el-icon-message{
    font-size: .25rem;
    padding-top: 5px;
}
.el-input__inner{
    height: .6rem;
    border: 0;
    border-bottom: 1.5px solid #6666;
    font-size: .18rem;
}
.fot{
    width: 100%;
    height: .8rem;
}
.el-icon-discount{
    font-size: .25rem;
    padding-top: 5px;
}
.bo{
    width: 100%;
    height: .6rem;
    /* background: green; */
    margin-top: .2rem;
    display: flex; 
    align-items: center;
}
.bo p{
    font-size: .2rem;
    margin-left: 10px;
}
.bo p span{
    font-size: .2rem;
    color: #009999;
}
.but{
    width: 100%;
    height: .5rem;
    margin-top: .8rem;
    font-size: .2rem;
    background: #cccccc;
    border: 0;
}
</style>