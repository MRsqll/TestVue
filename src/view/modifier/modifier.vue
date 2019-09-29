<template>
    <div>
      <h3>关于修饰符的例子</h3>
      <hr>
      <!--表单修饰符-->
      <!--** 1.lazy 在输入框中，v-model 默认是同步数据，使用 .lazy 会转变为在 change 事件中同步 ，-->
      <!--也就是在失去焦点 或者 按下回车键时才更新**-->
      <p>lazy修饰符</p>
      <input v-model.lazy="lazy" >
      <p>失去焦点触发：{{lazy}}</p>
      <hr>

      <!--** 2.number 修饰符可以将 输入的值转化为Number类型 ，否则虽然你输入的是数字-->
      <!--但它的类型其实是String，在数字输入框中比较有用**-->
      <p>number修饰符</p>
      <input type="number" v-model.number="number">
      <p>我的数据类型是：{{ typeof(number) }}</p>
      <hr>

      <!-- 3.trim 修饰符会自动过滤掉输入的首尾空格-->
      <p>.trim修饰符</p>
      <input type="text" v-model.trim="trim">
      <p>val的长度是：{{ trim.length }}</p>
      <hr>


      <!--系统修饰符-->
      <!-- 1.ctrl修饰符 -->
      <!-- Alt + C -->
      alt+c清空: <input @keyup.alt.67="clear" v-model="altC">
      {{altC}}
      <!-- Ctrl + Click -->
      <div  v-if="disappear">Hello</div>
      <el-button @click.ctrl="clickAppear">ctrl点击消失出现</el-button>
      <hr>

      <!-- .exact修饰符:没有任何系统修饰符被按下的时候才触发 -->
      <button @click.exact="addExact">{{aExact}}</button>
      <hr>


      <!-- 事件修饰符 -->
      <!-- 阻止单击事件继续传播 -->
      <div v-on:click.stop="doThis" style="margin-bottom: 10px;">stop</div>
      <!-- 提交事件不再重载页面 -->
      <form v-on:submit.prevent="onSubmit" style="margin-bottom: 10px;">
        <input type="submit" name="">
      </form>
      <!-- 修饰符可以串联 -->
      <div v-on:click.stop.prevent="doThat" style="margin-bottom: 10px;">串联</div>
      <!-- 添加事件监听器时使用事件捕获模式 -->
      <!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
      <div v-on:click.capture="doCap" style="margin-bottom: 10px;">捕获</div>
      <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
      <!-- 即事件不是从内部元素触发的 -->
      <div v-on:click.self="doSelf" style="margin-bottom: 10px;">target</div>
      <!-- 点击事件将只会触发一次 -->
      <div v-on:click.once="doOnce" style="margin-bottom: 10px;">doOnce</div>
    </div>
</template>

<script>
    export default {
        name: "modifier",
      data() {
          return {
            lazy: '',
            number: '',
            trim: '',
            altC: '',
            disappear: true,
            aExact: 0
          }
      },
      methods: {
        clear() {
          this.altC = ''
        },
        clickAppear () {
          this.disappear = !this.disappear
        },
        addExact() {
          this.aExact ++
        },
        doThis() {
          console.log('111111')
        },
        onSubmit() {
          console.log('22222222')
        },
        doThat() {
          console.log('333333')
        },
        doCap() {
          console.log('444444444')
        },
        doSelf() {
          console.log('55555555')
        },
        doOnce() {
          console.log('666666')
        }
      }
    }
</script>

<style scoped>

</style>
