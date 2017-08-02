<template>
	<el-col :span="24" class="header">
		<el-col :span="10" >1</el-col>
		<el-col :span="10">2</el-col>
		<el-col :span="4">
			<el-dropdown trigger="hover"></el-dropdown>
			<el-dropdown trigger="hover">
				<span class="el-dropdown-link userinfo-inner">
 				<!-- <img :src="" /> {{sysUserName}}</span> -->
				<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>我的消息</el-dropdown-item>
						<el-dropdown-item>设置</el-dropdown-item>
						<!-- <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item> -->
				</el-dropdown-menu>
			</el-dropdown> 
		</el-col>
	</el-col>
</template>
<script>
export default {
  data(){
    return {
      // sysUserName:"username"
    }
  }
}
</script>
<style>
	
</style>