<!--
 * @Author: zhangjie
 * @Date: 2021-12-28 17:04:16
 * @LastEditors: zhangjie
 * @LastEditTime: 2021-12-29 20:48:03
 * @FilePath: \vue2_cli4_init\src\views\Home.vue
-->

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    a () {
      console.log('111')
      console.log(11)
    }
  }
}
</script>
