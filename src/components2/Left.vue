<template>
<div class="left">
	<div>
		<div class="search">
			<input type="text" class="inputsearch" placeholder="Search...">
			<!-- <button>搜索</button> -->
			<span class="spansearch"><button class="btsearch"><i class="fa fa-search"></i></button></span>
		</div>
		<ul class="list">
			<li class="liheader">MAIN NAVIGATION</li>
			<li class="tree"><a href="#">
			<i class="fa fa-dashboard"></i>
			<span>Dashboard</span>
			<span><i class="fa fa-angle-left pull-right"></i></span>
			</a>
			<ul class="listchild">
				<li class="treechild"><a href="#"><i class="fa fa-circle-o"></i> dashboard 1</a></li>
				<li class="treechild"><a href="#"><i class="fa fa-circle-o"></i> dashboard 2</a></li>
			</ul>

			</li>
		</ul>
	</div>
</div>
</template>
<script>

</script>
<style>
*{
	font-size: 14px;
    line-height: 1.42857143;
}
.left{
	float: left;
	background-color: #222d32;
	border: 1px solid #374850;
	
	min-height: 100%;
    width: 230px;
	transition: transform .3s ease-in-out,width .3s ease-in-out;
}
.search{
	/*position: relative;*/
    /*display: table;*/
    /*border-collapse: separate;*/

    box-sizing: border-box;
	border-radius: 3px;
	border: 1px solid #374850;
	margin: 10px 10px;

	/*background-color: #374850;*/
}
.inputsearch{
	/*position: relative;*/
    width: 79%;
    
	float: left;

    /*background-color: #374850;*/
	box-shadow: none;
	color: #666;
    border: 1px solid transparent;
    height: 35px;
	
	padding: 6px 12px;
	margin: 0;
	box-sizing: border-box;
    font-size: 14px;
    line-height: 1.42857143;

    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px;
}
.btsearch{
	color: #999;
	box-shadow: none;
    /*background-color: #374850;*/
    border: 1px solid transparent;
    height: 35px;
    border-top-left-radius: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 0;

    /*margin-left: -1px;*/

	display: inline-block;
    position: relative;
    padding: 6px 12px;
    margin-bottom: 0;
    text-align: center;

}
.spansearch{
	/*display: table-cell;
	border-collapse: separate;
	box-sizing: border-box;*/
}
.list{
	list-style: none;
	margin: 0;
	padding: 0;
}
.liheader{
	color: #4b646f;
    background: #1a2226;
    padding: 10px 25px 10px 15px;
    font-size: 12px;
    line-height: 1.42857143;
    /*position: relative;*/
    /*margin: 0;*/
    /*overflow: hidden;*/
    /*text-overflow: clip;*/
}
.tree{
	position: relative;
    margin: 0;
    padding: 0;
    background: #1e282c;
}
.tree a{
	position: relative;
	padding: 12px 5px 12px 15px;
    display: block;
	text-decoration: none;
	background-color: transparent;
}
/*.tree a:active{
	border-left-color: #3c8dbc;
}*/
.tree span,.tree i{
	color: #b8c7ce;
}
.listchild {
	background: #2c3b41;
	list-style: none;
    padding: 0;
    padding-left: 5px;
    
}
.treechild a{
	color: #8aa4af;
	padding: 5px 5px 5px 15px;
}


</style>