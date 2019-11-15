<!--
 * @Author: your name
 * @Date: 2019-11-10 16:41:42
 * @LastEditTime: 2019-11-11 16:11:24
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
					<input type="text" placeholder="请输入姓名" />
				</div>
				<div class="small-block-line">
					
				</div>
				<div class="contact-information-children">
					电话
					<input type="text" placeholder="请输入手机号">
				</div>
				<div class="small-block-line">
					
				</div>
				<div class="contact-information-children">
					微信
					<input type="text" placeholder="请输入微信号">
				</div>
				<div class="small-block-line">
					
				</div> 
			</div>
		</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
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