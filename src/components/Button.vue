<template>
  <button type="button">
    <slot>{{text}}</slot>
  </button>
</template>

<script>
export default {
  name: "Ceg-button",
  props: ['text']
}
</script>

<style scoped>
button {
  color: blueviolet;
}
</style>