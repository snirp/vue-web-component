<template>
  <section>
    <h1 class="h1">My Vue Web Component</h1>
    <h3 class="h3">Otro</h3>
    <div>{{ msg }}</div>
  </section>
</template>

<script>
export default {
  name: "my-web-component",
  props: ['msg']
}
</script>

<style scoped>
h1 {
  color: green;
  background-color: var(--main-bg-color);
}
section {
  background-color: oldlace;
  margin-bottom: 4rem;
}
</style>