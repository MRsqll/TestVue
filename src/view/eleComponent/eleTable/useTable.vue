<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="use-table">
      <div class="table-center">
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <this-table
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
          :tip="tips"
          :dialogVisible="dialogVisible"
          @hideDialog="dialogVisible = false"
          ref="multipleTable"
          :data="tableData"
          @selection-change = "handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="80"
          >
          </el-table-column>
          <el-table-column
            label="商品名称"
            width="90"
            prop="shopName">
          </el-table-column>
          <el-table-column
            prop="shopPrice"
            label="商品单价"
            width="150">
          </el-table-column>
          <el-table-column
            prop="buyNum"
            label="购买数量"
            width="100"
          >
            <template v-slot:default="scope">
              <button class="but-size" @click="addNum(scope.$index, scope.row)">+</button>
              <span>{{scope.row.buyNum}}</span>
              <button class="but-size" @click="delNum(scope.$index, scope.row)">-</button>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="80">
            <template v-slot:default="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, scope.row, tableData)"
                type="text"
                size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </this-table>
      </div>
      <p>总价：￥<span>{{calCotal}}</span></p>
    </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
    export default {
        name: "useTable",
      data() {
          return {
            tips: '这是一个弹框',
            dialogVisible: false,
            tableData: [],
            multipleSelection: []
          }
      },
      methods: {
        handleSizeChange(val) {
          this.getTableData()
        },
        handleCurrentChange(val) {
          this.getTableData()
        },
        // 选中
        handleSelectionChange(val) {
          this.multipleSelection = val
        },
        // 删除操作
        deleteRow(index,row,tab) {
          tab.splice(index,1)
        },
        // 加法操作
        addNum(index,item) {
          item.buyNum++
        },
        // 减法操作
        delNum(index,item) {
          if(item.buyNum > 0) {
            item.buyNum--
          }
        },
        async getTableData() {
          var data = await this.$http.get('getList')
          this.tableData = data.data
        },
        ...mapMutations([
          'getPrice'
        ]),
      },
      computed: {
          ...mapState([
            'getMoney'
          ]),
        // 计算总价
        calCotal() {
          var all = []
          this.multipleSelection.map((item,index) => {
            var a = item.buyNum * item.shopPrice
            all.push(a)
          })
          var b = eval(all.join('+'))
          if(this.multipleSelection.length == 0) {
            return b = 0
          }
          this.getPrice(b.toString())
          return b
        }
      },
      created () {
        this.getTableData()
      }
    }
</script>

<style scoped>
  .use-table {

  }
  .table-center {
    width: 500px;
  }
  .but-size {
    width: 25px;
    height: 25px;
  }
</style>
