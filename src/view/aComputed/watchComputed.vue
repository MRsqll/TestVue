<template>
    <div class="watchComputed">
      <div style="display: flex;flex-direction: column ">
        <el-col :span="6" style="margin-bottom: 20px;">
          <!--<p>{{firstName}}</p>-->
          <p>请输入姓氏：</p>
          <el-input  type="text" v-model="firstName" maxlength="1"></el-input>
        </el-col>
        <el-col :span="6">
          <!--<p>{{lastName}}</p>-->
          <!--<el-input v-model="lastName"></el-input>-->
          <p>{{fullName}}</p>
          <el-button @click="getName">点击生成名字</el-button>
        </el-col>
      </div>
    </div>
</template>

<script>
export default {
  name: 'watchComputed',
  data () {
    return {
      firstName: '',
      lastName: '',
      // fullName: '',
      oldName: ''
    }
  },
  computed: {
    fullName () {
      return this.firstName + '  ' + this.lastName
    }
  },
  watch: {
    // firstName(val,oldName) {
    //   console.log(this.oldName = oldName)
    //   return this.fullName = val + '  ' + this.lastName
    // },
    // lastName(val) {
    //   return this.fullName = this.firstName + '  ' + val
    // }
  },
  methods: {
    async getName () {
      const a = await this.$http.get('getName')
      this.lastName = a.data.lastName
    }
  }
}
</script>

<style scoped>

</style>
