<!--
 * @Author: zhangjie
 * @Date: 2021-12-28 17:04:16
 * @LastEditors: zhangjie
 * @LastEditTime: 2021-12-28 18:22:33
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
const b = () => {

}

/**
 * @description:
 * @param {*} a
 * @return {*}
 * @author: zhangjie
 */
function test (a) {
  console.log(a)
}

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    a () {
      console.log(11)
    }
  }
}
</script>
