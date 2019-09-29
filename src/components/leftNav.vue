<template>
    <div id="leftNav">
      <el-container>
        <el-header>
          <header-nav></header-nav>
        </el-header>
        <el-container class="left-height">
          <el-aside width="300px">
            <el-col>
              <el-menu
                  router
                  default-active="1"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
                <el-menu-item index="useTable">封装的表格</el-menu-item>
                <el-menu-item index="aFilter">筛选</el-menu-item>
                <el-submenu index="">
                  <template slot="title">树形结构</template>
                  <el-menu-item index="createTree">表格创建</el-menu-item>
                  <el-menu-item index="listTree">列表</el-menu-item>
                  <!--<el-menu-item index="editTree">编辑</el-menu-item>-->
                </el-submenu>
                <el-menu-item index="watchComputed">监听&计算</el-menu-item>
                <el-menu-item index="aParent">父子通信</el-menu-item>
                <el-menu-item index="brother">bus通信</el-menu-item>
                <el-menu-item index="aDirecyive">自定义指令</el-menu-item>
                <el-menu-item index="arrChange">$set()刷新</el-menu-item>
                <el-menu-item index="aPage">路由传参</el-menu-item>
                <el-menu-item index="scopeSlot">插槽</el-menu-item>
                <el-menu-item index="aRender">render树</el-menu-item>
                <!--<el-menu-item index="aEcharts">aEcharts</el-menu-item>-->
                <el-menu-item index="total">vuex的加减计算</el-menu-item>
                <el-menu-item index="modifier">修饰符</el-menu-item>
              </el-menu>
            </el-col>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import headerNav from './headerNav'
export default {
  name: 'leftNav',
  components: {
    headerNav
  },
  data () {
    return {

    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  mounted () {
    this.$nextTick(() => {
      var lh = document.querySelector('#leftNav .left-height')
      var hh = document.querySelector('#headerNav')
      lh.style.height = (document.body.clientHeight - hh.clientHeight )+ 'px'
    })
  }
}
</script>

<style>

</style>
