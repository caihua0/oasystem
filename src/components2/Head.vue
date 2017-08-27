<template>
<div class="head">
	<a class="logo" v-show="isShow">
	<span><b>Admin</b>LET</span>

	</a>
	<nav>
		<a href="#" class="sidebar-toggle">
		<button @click="showToggle">xx</button>
		</a>
		<div class="navbar-menu">
		<ul class="navbar-nav">
			<li>
				<a href="#">
				<i class="fa fa-envelope-o"></i>
	            <span class="label label-success">4</span>
	            </a>
			</li>

			<li>
				<a href="#">
				<i class="fa fa-bell-o"></i>
              	<span class="label label-warning">10</span>
				</a>
			</li>

			<li>
				name
			</li>
		</ul>
		</div>
	</nav>
	
</div>
</template>
<script>
export default {
  data(){
    return {
      username:"admin",
      isShow:true
    }
  }
  ,
  methods:{
  	showToggle:function(){
  	  this.isShow=!this.isShow;
  	}
  }
}
</script>
<style>
* {
	/*box-sizing: border-box;*/
}
.logo{
	background-color: #367fa9;
	color: #fff;
	/*border-bottom: 0 solid transparent;*/
	transition: width .3s ease-in-out;
	display: block;
	float: left;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    width: 230px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 0 15px;
    font-weight: 300;
    /*overflow: hidden;*/
}

.sidebar-toggle{
	color: #fff;
	float: left;
}

nav{
	background-color: #3c8dbc;
	
	margin-bottom: 0;
    margin-left: 230px;
    border: none;
    min-height: 50px;
    border-radius: 0;

	/*float: left;*/
	transition: margin-left .3s ease-in-out;
	position: relative;
	display: block;

}
.navbar-menu{
	float: right;
}
.navbar-nav{
	padding-left: 0;
    /*margin-bottom: 0;*/
    list-style: none;
}
.navbar-nav>li {
	float: left;
}
</style>