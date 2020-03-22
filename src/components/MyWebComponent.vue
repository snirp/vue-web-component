<template>
  <section>
    <h1>My Vue Web Component</h1>
    <div>{{ msg }}</div>
  </section>
</template>

<script>
export default {
  name: "Ceg-my-web-component",
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