<template>
  <div id="brother">
    <div  class="bro-tem">
      <div class="sis-color">你好妹妹</div>
      <button @click="sendData">发送数据</button>
      <div>
        <p>{{getThank}}</p>
      </div>
    </div>
    <sister></sister>
  </div>
</template>

<script>
  import event from './event'
  import sister from './sister'
    export default {
      name: "brother",
      components: {
        sister
      },
      data() {
          return {
            sis: '妹妹你也快吃成长快乐',
            getThank: ''
          }
      },
      methods: {
        //发送数据的方法
        sendData: function() {
          event.$emit("eatIce", this.sis);
        },
        getData () {
          event.$on('thankIce',(data) => {
            console.log(data)
            this.getThank = data
          })
        }
      },
      created() {
        this.getData()
      }
    }
</script>

<style scoped>
  #brother {

  }
  .bro-tem {
    width: 300px;
    border: 1px solid blue;
    text-align: center;
    padding: 15px 0;
  }
  .sis-color {
    color: red;
    margin-bottom: 10px;
  }
</style>
