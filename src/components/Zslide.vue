<!--
 * @Author: your name
 * @Date: 2019-11-10 16:41:42
 * @LastEditTime: 2019-11-11 16:48:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段d:\jiedianlvxing\src\components\Onav.vue
 -->
<template>
<div class="box">
    <div class="collection-information">
        <div class="box-main">
            <div class="ci-top">
                集合信息
            </div>
            <div class="small-block-line">
            </div>
            <div class="collection-information-detail">
                时间:&nbsp;&nbsp;&nbsp;<span class="value">10:00</span> <br>
                地址:  &nbsp;&nbsp;&nbsp;<span class="value">自驾前往太白山美佳温泉酒店</span>
                <input type="radio"  id="ci-button" value="" />
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
	height:1.30rem;
}
/* 集合信息 */
.collection-information{
	width: 100%;
	height: 1.24rem;
	/* background: #00FFFF; */
}

.ci-top{
	width: 100%;
	height: 0.52rem;
	/* background: #FF0000; */
	font-size: .15rem;
	font-weight: 900;
	line-height: .52rem;
}
.small-block-line{
	width: 100%;
	height: 0.01rem;
	background: #f7f7f7;
}
.collection-information-detail{
	width: 100%;
	height: 0.71rem;
	font-size: .13rem;
	font-weight: 900;
	line-height: 0.35rem;
	position: relative;

}
.value{
	color: #6d6d6d;
}
#ci-button{
	width: .18rem;
	height: .18rem;
	position: absolute;
	right: 0;
	top: .28rem;
}
.block-line{
	width: 100%;
	height: 0.06rem;
	background: #f7f7f7;
}
</style>