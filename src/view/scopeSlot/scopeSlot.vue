<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="scopeSlot">
      <s-child :items="books">
        <template v-slot:default="scope">
          <p><span>{{scope.index+1}}、</span><b>《{{scope.title}}》</b><i>{{scope.author}}</i></p>
        </template>
      </s-child>
    </div>
</template>

<script>
  import sChild from './sChild'
    export default {
        name: "scopeSlot",
      components: {
          sChild
      },
      data() {
          return {
            aaa: {
              name: 'sdasd'
            },
            books: [
              {
                name: '三体',
                author: '刘慈欣'
              },
              {
                name: '解忧杂货店',
                author: '东野圭吾'
              },
              {
                name: '爱与寂寞',
                author: '吉杜·克里希那穆提'
              }
            ]
          }
      },
      methods: {

      }
    }
</script>

<style scoped>

</style>
