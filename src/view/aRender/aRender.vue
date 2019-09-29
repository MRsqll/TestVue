<template>
    <div id="aRender">
      <!-- ol>li的简单遍历-->
      <this-render :items="items"></this-render>

      <!-- 父子组件的一个小通信 -->
      <input type="text" v-model="title">
      <p>{{title}}</p>
      <!-- 使用v-bind和v-on:input方法替代v-model进行的双向绑定 -->
     <title-bar :title="title" @input="asd($event)"></title-bar>

      <!-- 一个简单的渲染盒子模型，添加类，ref等属性 -->
      <div-contain></div-contain>
    </div>
</template>

<script>
  import Vue from 'vue'

  Vue.component('div-contain',{
    render(createElement) {
      return createElement('div',{
        style: {
          width: '200px',
          height: '200px',
          background: 'yellow',
          margin: '20px'
        },
        attrs:{
          id:'rendId',
          title: '我是渲染函数'
        },
        'class': {
          renderClass: true
        },
        ref: 'renderRef'
      },[
        createElement('span',{
          style: {
            fontSize: '14px',
            color: 'red',
          },
        },
        '我是渲染函数')
      ])
    }
  })
  //--------------------------------
  Vue.component('title-bar',{
    props:['title'],
    // template: `
    //   <input type="text" :value="title" @input="onChange">
    // `,

    render: function(createElement) {
      var self = this
      return createElement('input',{
        domProps: {
          value: self.title
        },
        on:{
          input(e) {
            self.$emit('input',e.target.value)
          }
        }
      })
    },

    methods:{
      onChange(event) {
        const value = event.target.value
        this.$emit('input',value)
      }
    }
  })
  Vue.component('this-render',{
      props: ['items'],
    // template: `
    //   <ul>
    //     <li v-for="(item,i) in items" :key="i">{{item.name}}</li>
    //   </ul>
    // `,
      render: function(createElement) {
        if(this.items.length) {
          return createElement('ol',this.items.map((item)=>{
            return createElement('li',item.name)
          }))
        }else {
          return createElement('p','No items Found!')
        }
      }
    }
  )
    export default {
        name: "aRender",
      data() {
          return {
            value: '',
            title: '',
            items: [
              {
                name: '大虎'
              },
              {
                name: '二虎'
              },
              {
                name: '三虎'
              }
            ]
          }
      },
      methods: {
        asd(e) {
          this.title = e
          console.log(e)
        },
      },
      mounted() {
        // console.log(this.$refs.renderRef)
      }
    }
</script>

<style scoped>
  .renderClass {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
