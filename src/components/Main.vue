<template>
	<el-col :span="24" class="header">
		<el-col :span="10">1</el-col>
		<el-col :span="10">terrible</el-col>
		<el-col :span="4">
			<el-dropdown trigger="hover">
				<span class="el-dropdown-link userinfo-inner">{{sysUserName}}</span>
 				<!-- <img :src="" /> {{sysUserName}}</span> -->
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>我的消息</el-dropdown-item>
					<el-dropdown-item>设置</el-dropdown-item>
					<!-- <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item> -->
				</el-dropdown-menu>
			</el-dropdown>
		</el-col>
	</el-col>
	
<!-- 	<el-col :span="24" class="main">
		
	</el-col> -->


</template>
<script>
export default {
  data(){
    return {
      sysUserName:"myname"
    }
  }
}
</script>
<style>
	
</style>