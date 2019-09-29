<template>
    <div id="headerNav">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">处理中心</el-menu-item>
        <div class="user-login">用户登录</div>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'headerNav',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-header {
    padding: 0;
}
.el-menu {
    padding: 0 20px;
}
</style>

<style scoped>
.user-login {
    line-height: 60px;
    color: #fff;
    font-size: 16px;
    float: right;
    outline: none;
}
</style>
