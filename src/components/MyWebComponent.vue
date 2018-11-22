<template>
  <section>
    <h1>My Vue Web Component</h1>
    <div>{{ msg }}</div>
  </section>
</template>

<script>
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
}
</style>