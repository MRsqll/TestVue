<template>
  <div class="this-table">
    <el-dialog
      center
      :title="tip"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :show-close="false"
      :close-on-click-modal="false">
      <el-table
        :cell-style="thisPosition"
        :header-cell-style	="thisPosition"
        border
        :data="data"
        style="width: 100%;"
        @selection-change="handleSelectionChange">
        <slot></slot>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="3"
        :total="15"
        layout="prev, pager, next"
        >
      </el-pagination>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel" style="margin-right: 20%;">取 消</el-button>
        <el-button type="primary" @click="cancel">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'thisTable',
    props: {
      data: {
        default() {
          return []
        },
        type: Array
      },
      dialogVisible: {
        default: ''
      },
      tip: {
        type: String,
        default: '提示'
      }
    },
    data() {
      return {
        currentPage: 1,
      }
    },
    computed: {
      thisPosition() {
        return {textAlign:'center'}
      }
    },
    methods: {
      handleSizeChange(val) {
        this.$emit('handleSizeChange',val)
      },
      handleCurrentChange(val) {
        this.$emit('handleCurrentChange',val)
      },
      // 选中
      handleSelectionChange(val) {
        this.$emit('selection-change', val)
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      hideData() {
        this.$emit("hideDialog",this.dialogVisible)
      },
      cancel() {
        this.hideData();
      }
    }
  }
</script>

<style>
  /*.has-gutter th {*/
    /*color: #fff;*/
    /*font-weight: bold;*/
    /*font-size: 16px;*/
    /*background: #89ABD3;*/
    /*border: 1px solid #000;*/
    /*border-right: 0;*/
    /*border-bottom: 0;*/
    /*text-align: center;*/
  /*}*/
  /*.has-gutter th:nth-child(1) {*/
    /*border-left: 0;*/
  /*}*/
  /*.el-table__row td {*/
    /*border: 1px solid #000;*/
    /*border-right: 0;*/
    /*border-bottom: 0;*/
    /*text-align: center;*/
  /*}*/
  /*.el-table__row td:nth-child(1) {*/
    /*border-left: 0;*/
  /*}*/
  /*.el-table {*/
    /*border: 1px solid #000;*/
    /*!*border-left: 0;*!*/
    /*border-top: 0;*/
  /*}*/

  .this-table .el-dialog__body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .this-table .el-pagination {
    margin-top: 20px;
  }
</style>
<style scoped>

</style>

