<!--
 * @Description: 
 * @Author: 冯换菊
 * @Date: 2019-11-11 17:27:29
 * @LastEditors: 冯换菊
 * @LastEditTime: 2019-11-15 10:25:59
 -->
<template>
    <div class="myfile">
        <div class="topp">
            <router-link to="/MyPage">
                <i class="el-icon-arrow-left"></i>
            </router-link>
            <h2>个人资料</h2>
        </div>
        <div class="midd">
            <div class="imgs">
                <img src="../assets/img/travel_normal.png" alt="">
            </div>
            <i class="el-icon-edit-outline"></i>
        </div>
        <ul>
            <li  v-for="(val,index) in vals" :key="index">
                <span >{{vals[index]}}</span>
                <input  type="text" placeholder="" ><hr>
            </li>
            <li>
                <span>性别</span>
                <el-radio v-model="radio" label="1">男</el-radio>
                <el-radio v-model="radio" label="2">女</el-radio>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Pfile',
    data(){
        return{
            vals:[
                '用户名',
                '昵称',
                '签名',
                '标签',
                '领域成就'
            ],
             radio: '1'
        }
    },
    methods:{
        
    }
}
</script>

<style>
.myfile ul li{
    width: 96%;
    height: .6rem;
    /* background: green; */
    margin: .18rem auto;
}
li input{
    width: 75%;
    height: 100%;
    font-size: .2rem;
    float: right;
    border: 0;
    outline: 0;
}
.el-radio__inner{
    width: .18rem;
    height: .18rem;
    border: 1px solid blue;
}
.el-radio__label{
    font-size: .2rem;
}
.el-radio__inner::after{
    width: 8px;
    height: 8px;
}
li span{
    display: inline-block;
    width: 25%;
    height: 100%;
    /* background: red; */
    line-height: .65rem;
    text-align: center;
    font-size: .2rem;
}
.myfile{
    width: 100%;
    height: 8rem;
    /* background: pink */
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
.topp h2{
    width: 60%;
    font-size: .25rem;
    font-weight: 400;
}
.el-icon-arrow-left{
    font-size: .3rem;
    margin-right: 1rem;
}
.midd{
    width: 92%;
    height: 1rem;
    margin: 0 auto;
    /* background: yellow; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imgs{
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    background: #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: .15rem;
    float: left;
}
.imgs img{
    width: 65%;
}
.el-icon-edit-outline{
    font-size: .35rem;
    position: absolute;
    top:.55rem;
    left: 1.9rem;
}
</style>