<!--
 * @Author: your name
 * @Date: 2019-11-10 16:41:42
 * @LastEditTime: 2019-11-16 02:31:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Onav.vue
 -->
<template>
	<div class="contact-information">
			<div class="box-main">
				<div class="contact-information-children">
					联系人信息
				</div>
				<div class="small-block-line">
					
				</div>
				<div class="contact-information-children">
					姓名
					<input @focus="fun()" v-model="input" type="text" placeholder="请输入姓名" />
					<span class="tts">{{msg}}</span>
				</div>
				<div class="small-block-line">
					
				</div>
				<div class="contact-information-children">
					电话
					<input @focus="funt()" v-model="inputt" type="text" placeholder="请输入手机号">
					<span class="tts">{{msg}}</span>
				</div>
				<div class="small-block-line">
					
				</div>
				<div class="contact-information-children">
					微信
					<input @focus="funs()" v-model="inputs" type="text" placeholder="请输入微信号">
					<span class="tts">{{msg}}</span>
				</div>
				<div class="small-block-line">
					
				</div> 
			</div>
		</div>
</template>
<script>
export default {
    data(){
		return{
			msg:'',
			input:'',
			inputt:'',
			inputts:''
		}
	}
	// methods:{
	// 	fun(){
	// 		if(this.input==''){
	// 			this.msg="用户名不能为空";
	// 			return;
	// 		}else{
	// 			let r = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;
	// 			if(r.test(this.input)){
	// 				this.msg="";
	// 			}else{
	// 				this.msg="格式错误"
	// 			}
	// 		}

	// 	},
	// 	funt(){
	// 		if(this.inputt==''){
	// 			this.msg="用户名不能为空";
	// 			return;
	// 		}else{
	// 			let r = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;
	// 			if(r.test(this.inputt)){
	// 				this.msg="";
	// 			}else{
	// 				this.msg="格式错误"
	// 			}
	// 		}

	// 	},
	// 	funs(){
	// 		if(this.inputs==''){
	// 			this.msg="用户名不能为空";
	// 			return;
	// 		}else{
	// 			let r = /^([a-zA-Z0-9\u4e00-\u9fa5\·]{1,10})$/;
	// 			if(r.test(this.inputs)){
	// 				this.msg="";
	// 			}else{
	// 				this.msg="格式错误"
	// 			}
	// 		}

	// 	},
	// }
}
</script>
<style scoped>
.tts{
	display: block;
	width: 30%;
	height: .32rem;
	/* background: pink; */
	position: absolute;
	right: 0;
	top: 0rem;
}
.contact-information{
	width: 100%;
	height: 1.97rem;
	/* background: #6D6D6D; */
}
.contact-information-children{
	width: 100%;
	height: 0.465rem;
	font-size: .14rem;
	line-height: .465rem;
	color: #454545;
	position: relative;
}
.contact-information-children:nth-child(1){
	font-size: .15rem;
	color: #262626;
	
}
.contact-information input{
	margin-left: .4rem;
	border: none;
	outline: none;
}
</style>