<template>
  <button type="button">
    <slot>{{text}}</slot>
    siempre
  </button>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped>
button {
  color: blueviolet;
}
</style>