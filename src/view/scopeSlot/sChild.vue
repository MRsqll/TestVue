<template>
    <div class="sChild">
        <slot v-for="(item,index) in items" :index="index" :title="item.name" :author="item.author">
          结合各个空间规划空间环境
        </slot>
    </div>
</template>

<script>
    export default {
        name: "sChild",
      props: {
        items:{
          type: Array,
          default: []
        }
      }
    }
</script>

<style scoped>
  ul {
    list-style: none;
  }
</style>
