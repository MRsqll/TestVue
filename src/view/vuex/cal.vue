<template>
  <div>
    <p>一个苹果 <span>{{price}}</span>块钱</p>
    <el-button @click="addApple">加一个</el-button>
    <el-button @click="reduceApple">减一个</el-button>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    data() {
      return {
        price: 6
      }
    },
    computed: {
      ...mapState([
        'totalPrice'
      ])
    },
    methods: {
      ...mapMutations([
        'increment',
        'decrement'
      ]),
      addApple() {
        this.increment(this.price)
        // this.$store.commit('increment',this.price)
      },
      reduceApple() {
        if(this.totalPrice > 0) {
          this.decrement(this.price)
          // this.$store.commit('decrement',this.price)
        }
      }
    }
  }
</script>

<style scoped>

</style>
