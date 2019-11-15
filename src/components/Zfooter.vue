<!--
 * @Author: your name
 * @Date: 2019-11-10 16:41:42
 * @LastEditTime: 2019-11-11 18:04:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Onav.vue
 -->
<template>
    <div class="footer">
        <div class="footer-left">
			<span class="de">398CNY</span>
            <span class="detail">
                明细
            </span>
            <img src="../assets/imgs/xiala.png" >
        </div>
        <div class="footer-right">
            提交订单
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/* footer */
.footer{
	width: 100%;
	height: .5rem;
	/* background: #00FFFF; */
	display: -webkit-flex;
}
.footer-left{
	width: 2.5rem;
	height: 100%;
	/* background: red; */
	display: -webkit-flex;
	align-items: center;
	justify-content: flex-end;
}
.footer-right{
	width: 1.25rem;
	height: 100%;
	background: #ed7f2e;
	font-size: .14rem;
	font-weight: 900;
	color: white;
	text-align: center;
	line-height: .5rem;
}
.de{
	font-size:0.16rem;
	color:red;
	margin-right:1.2rem;
}
.detail{
	font-size: .14rem;
	margin-right: 0.1rem;
}
.footer-left img{
	width: 0.125rem;
	height: 0.075rem;
	margin-right: 0.1rem;
}
</style>