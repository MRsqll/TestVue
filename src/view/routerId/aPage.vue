<template>
    <div class="aPage">
      <button @click="sendId">发送id</button>

      <div>
        <!--v-if和v-for一块使用，v-for的优先级会更高-->
        <div v-for="(item,index) in items" :key="index" v-if="index == 1? false: true">
          {{item.name}}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "aPage",
      data() {
          return {
            items: [
              {
                name: '老大'
              },
              {
                name: '老二'
              },
              {
                name: '老三'
              }
            ]
          }
       },
      methods: {
          sendId() {
            // params传参要配合index.js写入参数配合使用
            // 相当于post传参
            // 参数是路由的一部分
            this.$router.push({
              name: 'bPage',
              params: {
                id: 1,
                data: JSON.stringify(this.items)
              }
            })
            // 相当于get传参
            // 参数是拼接在路由后面（？属性：值）
            // this.$router.push({
            //   path: 'bPage',
            //   query: {
            //     id: 2,
            //     data: this.items
            //   }
            // })
          }
      }
    }
</script>

<style scoped>

</style>
