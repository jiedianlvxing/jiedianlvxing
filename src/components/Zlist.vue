<!--
 * @Author: your name
 * @Date: 2019-11-10 16:41:42
 * @LastEditTime: 2019-11-15 10:48:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Onav.vue
 -->
<template>
    <div class="box">
        <!-- 出行人信息 -->
		<div class="traveler-information">
			<div class="box-main">
				<div class="ti-top">
					<span>出行人信息</span>
					<router-link to="EChoosetravel">
						<span>选择出行人</span>
					</router-link>
				</div>
				<div class="ti-bot4tom">
					<input type="text" placeholder="已添加0位出行人" />
				</div>
			</div>
		</div>
		<div class="block-line">
		</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
    width:100%;
    height:1.12rem;
}
/* 出行人信息 */
.traveler-information{
	width: 100%;
	height: 1.06rem;
	/* background: #1B989D; */
}

.ti-top{
	width: 100%;
	height: 0.58rem;
	/* background: #FFC0CB; */
	font-size: 0.15rem;
	font-weight: 900;
	line-height: .58rem;
	display: -webkit-flex;
	justify-content: space-between;
}
.ti-top span:nth-child(2){
	color: #1b989d;
}

.ti-bottom{
	width: 100%;
	height: .45rem;
	/* background: #FF0000; */
	display: -webkit-flex;
	align-items: center;
}

.ti-bot4tom input{
	height: .15rem;
	border: none;
	outline: none;
}
.block-line{
	width: 100%;
	height: 0.06rem;
	background: #f7f7f7;
}
</style>

