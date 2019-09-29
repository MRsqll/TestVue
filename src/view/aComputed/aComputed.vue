<template>
  <div>
    <!--字符串翻转-->
    <p>{{msg}}</p>
    <el-button @click="reverse">翻转</el-button>
    <hr>

    <!--人民币汇率-->
    <el-col class="money-margin">
      <span>人民币: </span><input type="number" v-model.number="money">
    </el-col>
    <el-col class="money-margin">
      <span>汇&nbsp;&nbsp;&nbsp;率: </span><input type="number" v-model.number="changes">
    </el-col>
    <el-col class="money-margin">
      <span>换&nbsp;&nbsp;&nbsp;算: </span><input type="number" v-model.number="converson">
    </el-col>
    <hr>

    <!--成绩判断-->
    <el-col class="money-margin">
      <span>请输入成绩：</span><input type="number" v-model.number="grades">
    </el-col>
    <el-col class="money-margin">
      <span>成绩评定：</span><input type="text" v-model="ok">
    </el-col>
    <hr>

    <!--分页-->
    <div class="paging" >
      <el-button v-show=" page.currentpage > 1 " @click=" page.currentpage-- ">上一页</el-button>
      <div v-for="(index,item) in page.totalpage" :key="index" class="pag-margin">
        <span :class=" page.currentpage == index ? 'isActive' : ''">{{index}}</span>
      </div>
      <el-button  v-show=" page.currentpage < page.totalpage " @click=" page.currentpage++ ">下一页</el-button>
    </div>
    <hr>

    <!--添加删除表格-->
    <div class="isTable">
      <p>学生信息录入系统</p>
      <div class="money-margin">
        <span>姓名：</span><input type="text" v-model="stuInfo.aName">
      </div>
      <div class="money-margin">
        <span>年龄：</span><input type="number" v-model="stuInfo.aAge">
      </div>
      <div class="money-margin">
        <span>性别：</span>
        <select v-model="stuInfo.sele">
          <option v-for="item in option" :value="item.value">{{item.sex}}</option>
        </select>
      </div>
      <div class="money-margin">
        <span>手机：</span><input type="number" v-model="stuInfo.aTele">
      </div>
      <el-col class="money-margin">
        <el-button size="mini" @click="creatUser">创建新用户</el-button>
      </el-col>
    </div>
    <hr>

    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'aComputed',
  data () {
    return {
      msg: 'Hello world',
      money: '',
      changes: '',
      converson: '',
      grades: '',
      ok: '',
      page: {
        'currentpage': 1,
        'pagesize': 20,
        'totalpage': 5
      },
      isActive: false,

      option: [{
        sex: '男',
        value: '男'
      },{
        sex: '女',
        value: '女'
      }],
      stuInfo: {
        aName: '',
        aAge: '',
        aTele: '',
        sele: '男'
      }
    }
  },
  computed: {

  },
  watch: {
    money (val) {
      this.converson = val / this.changes
    },
    changes (val) {
      this.converson = this.money / val
    },
    grades (val) {
      if (val >= 90) {
        this.ok = '优秀'
      } else if (val >= 60) {
        this.ok = '及格'
      } else {
        this.ok = '不及格'
      }
    }
  },
  methods: {
    reverse () {
      this.msg = this.msg.split('').reverse().join('')
    },
    creatUser () {
      var a = this.stuInfo
      console.log(a)
    }
  }
}
</script>

<style scoped>
  .money-margin {
    margin-bottom: 10px;
  }
  .paging {
    display: flex;
  }
  .pag-margin {
    margin: 10px;
  }
  .isActive {
    color: deepskyblue;
  }
</style>
