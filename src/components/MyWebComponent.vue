<template>
  <section>
    <h1>My Vue Web Component</h1>
    <div>{{ msg }}</div>
  </section>
</template>

<script>
import webpackConfig from '@vue/cli-service/webpack.config';
console.log(webpackConfig)

export default {
  props: ['msg'] 
}
</script>

<style scoped>
h1 {
  color: green;
}
section {
  background-color: oldlace;
  margin-bottom: 4rem;
}
</style>