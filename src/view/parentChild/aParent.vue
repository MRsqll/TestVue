<template>
  <div>
    <div class="parent-left">
      <a-child :table="tableData"></a-child>
    </div>
  </div>
</template>

<script>
  import  aChild from './aChild'
  export default {
    components: {
      aChild
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
.parent-left {
  display: inline-block;
}
</style>
