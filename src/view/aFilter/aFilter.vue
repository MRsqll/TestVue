<template>
<div  id="aFilter">
  <span>筛选值：</span>
  <!--使用了toLocalString筛选，只能筛选数字-->
  <!--<input type="number" v-model.number="message"><br>-->

  <!--字符串数组的操作可输入数字字符串-->
  <input type="text" v-model="getMoney" disabled><br>
  {{getMoney | moneys}}
</div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "aFilter",
      data() {
          return {
            message: '',
          }
      },
      computed: {
          ...mapState([
            'getMoney'
          ])
      }

    }
</script>

<style scoped>

</style>
