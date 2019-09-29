<template>
  <div>
    <p>这个是总价:</p>
    <span>{{totalPrice}}</span>
    <div class="cal-bor">
      <cal></cal>
    </div>
  </div>
</template>

<script>
  import cal from './cal'
  import { mapState } from 'vuex'
  export default {
    components: {
      cal
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState([
        'totalPrice'
      ])
      // total() {
      //   if (this.$store.state.totalPrice < 1) {
      //     this.$store.state.totalPrice = 0
      //   } else {
      //     return this.$store.state.totalPrice
      //   }
      // }
    },
    watch: {

    }
  }
</script>

<style scoped>

</style>
