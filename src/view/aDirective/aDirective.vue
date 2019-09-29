<template>
    <div id="aDirective">
      <div v-cc>
        {{message}}
      </div>

        <div v-m="color3">
          {{message}}
        </div>
        <el-button @click="addNum">点我</el-button>
      <el-button @click="desTroy">销毁</el-button>
    </div>
</template>

<script>
import Vue from 'vue'
Vue.directive('m', {
  bind:function(el,binding,vnode,oldVNode){
    el.style.color = binding.value
    console.log("1-bind");
  },
  inserted:function(el,binding,vnode,oldVNode){
    el.innerHTML += '<div>hello</div>'
    console.log(el,binding,vnode,oldVNode);
    console.log("2-insert");
  },
  update:function(el,binding,vnode,oldVNode){
    el.innerHTML += '<div>world</div>'
    console.log("3-update");
  },
  componentUpdated:function(el,binding,vnode,oldVNode){
    console.log('4 - componentUpdated');
  },
  unbind:function(el,binding,vnode,oldVNode){
    console.log('5 - unbind');
  }
})
export default {
  name: "aDirective",
  directives: {
    cc: {
      // 指令的定义
      update: function (el) {
        console.log(el)
      }
    }
  },
  data () {
    return {
      message: '',
      color3: 'red',
      color2: 'green'
    }
  },
  methods: {
    addNum () {
      this.message ++
      console.log(this.message)
    },
    desTroy () {
      this.$destroy()
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
