<template>
    <div id="tablePre">
      <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 492px;"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="70"
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
          <template slot-scope="scope">
            <button class="but-size" @click="addNum(scope.$index, scope.row)">+</button>
            <span>{{scope.row.buyNum}}</span>
            <button class="but-size" @click="delNum(scope.$index, scope.row)">-</button>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="80">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, scope.row, tableData)"
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <p>总价：￥<span>{{calCotal}}</span></p>
    </div>
</template>

<script>
export default {
  name: 'tablePre',
  data () {
    return {
      tableData: [{
        shopName: '王大虎',
        shopPrice: '234',
        buyNum: 1
      }, {
        shopName: '王二虎',
        shopPrice: '234',
        buyNum: 1
      }, {
        shopName: '王三虎',
        shopPrice: '234',
        buyNum: 1
      }, {
        shopName: '王四虎',
        shopPrice: '234',
        buyNum: 1
      }],
      multipleSelection: []
    }
  },
  methods: {
    // 选中
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // 删除操作
    deleteRow (index, row, tab) {
      tab.splice(index, 1)
    },
    // 假发操作
    addNum (index, item) {
      item.buyNum++
    },
    // 减法操作
    delNum (index, item) {
      if (item.buyNum > 0) {
        item.buyNum--
      }
    },
  },
  computed: {
    // 计算总价
    calCotal () {
      var all = []
      this.multipleSelection.map((item, index) => {
        var a = item.buyNum * item.shopPrice
        all.push(a)
      })
      var b = eval(all.join('+'))
      if (this.multipleSelection.length === 0) {
        b = 0
      }
      return b
    }
  },
  mounted () {
  // 添加‘全部’两字
    this.$nextTick(() => {
      var a = document.querySelector('#tablePre .has-gutter th:nth-child(1)')
      var b = document.querySelector('#tablePre .has-gutter th:nth-child(1) .cell')
      var newItem = document.createElement('SPAN')
      b.style.margin = '-3px 0 0 -20px'
      newItem.style.marginLeft = '10px'
      newItem.style.fontSize = '12px'
      var textnode = document.createTextNode('全部')
      newItem.appendChild(textnode)
      a.insertBefore(newItem, b)
    })
  }
}
</script>

<style>
  .has-gutter th {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    background: #89ABD3;
    border: 1px solid #000;
    border-right: 0;
    border-bottom: 0;
    text-align: center;
  }
  .has-gutter th:nth-child(1) {
    border-left: 0;
  }
  .el-table__row td {
    border: 1px solid #000;
    border-right: 0;
    border-bottom: 0;
    text-align: center;
  }
  .el-table__row td:nth-child(1) {
    border-left: 0;
  }
  .el-table {
    border: 1px solid #000;
    /*border-left: 0;*/
    border-top: 0;
  }
</style>
<style scoped>
  .but-size {
    width: 25px;
    height: 25px;
  }
</style>
