<template>
<div class="left">
	<div>
		<div class="search">
			<input type="text" placeholder="Search...">
			<!-- <button>搜索</button> -->
			<i class="fa hand-o-left"></i>
			
		</div>
		<ul class="list">
			<li>MAIN NAVIGATION</li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
		</ul>
	</div>
</div>
</template>
<script>

</script>
<style>
.left{
	position: absolute;
	/*min-height: 100%;*/
    width: 230px;
	/*background-color: #222d32;*/
	/*padding-top: 50px;*/
	transition: transform .3s ease-in-out,width .3s ease-in-out;
}
.search{
	border-radius: 3px;
	border: 1px solid #374850;
	margin: 10px 10px;
	/*background-color: #374850;*/
}
.search>input{
	box-shadow: none;
    background-color: #374850;
    border: 1px solid transparent;
    height: 35px;
    width: 100%;
    position: relative;
	float: left;
	
	/*padding: 6px 12px;*/
    font-size: 14px;
    line-height: 1.42857143;

    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px;
}
.search>button{
	color: #999;
	box-shadow: none;
    background-color: #374850;
    border: 1px solid transparent;
    height: 35px;
}
.list{
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>