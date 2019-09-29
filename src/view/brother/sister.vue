<template>
  <div class="sis-tem">
    <div class="bro-color">你好哥哥</div>
    <p>{{bro}}</p>
    <button @click="sendData">回谢</button>
  </div>
</template>

<script>
  import event from './event'
    export default {
        name: "sister",
      data() {
          return {
            bro: '哥哥你快吃成长快乐',
            thank: '谢谢你呀'
          }
      },
      methods: {
          getData () {
            event.$on('eatIce',(data) => {
              console.log(data)
              this.bro = data
            })
          },
        //发送数据的方法
        sendData: function() {
          event.$emit("thankIce", this.thank);
        }
      },
      created() {
          this.getData()
      }
    }
</script>

<style scoped>
  .sis-tem {
    width: 300px;
    border: 1px solid orange;
    text-align: center;
    padding: 15px 0;
    margin-top: 10px;
  }
  .bro-color {
    color: yellowgreen;
  }
</style>
