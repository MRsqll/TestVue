<template>
    <div class="bPage">
      {{data}}
    </div>
</template>

<script>
    export default {
        name: "bPage",
      data() {
          return {
            data: ''
          }
      },
      mounted() {
        this.data = JSON.parse(this.$route.params.data)
      }
    }
</script>

<style scoped>

</style>
