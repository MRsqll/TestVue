<template>
    <div id="listIndex">
      <p>{{obj}}</p>
      <p>{{arr}}</p>
      <button @click="addData">修改</button>
    </div>
</template>

<script>
    export default {
        name: "listIndex",
      data() {
          return {
            obj: {
              id: '1',
              name: '大米',
            },
            arr: [
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
        addData() {
          // this.arr[0].sex = 'sdasd'   // 数组,对象,添加属性不会更新
          // this.obj.sex = '女'
          this.arr.push('sdsd') // 监测数组更新变异的方法也可以改变数组
          this.$set(this.arr[0],'sex','女')    // 使用set()强制更新
          this.$set(this.obj,'hobby','游泳')
          console.log(this.arr)
        }
      }
    }
</script>

<style scoped>

</style>
