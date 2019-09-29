<template>
  <div>
    <el-table
      :data="table"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="220">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      name: "aChild",
      props: {
        table: {
          type: Array,
          default: []
        }
      },
      data() {
          return {

          }
      },
      methods: {

      }
    }
</script>

<style scoped>

</style>
