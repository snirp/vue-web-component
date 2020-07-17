<template>
  <div v-if="show" class="ceg-main-menu">
    <div class="ceg-main-menu__close">
      <button @click="$emit('close')">X</button>
    </div>
    <nav>
      <ul>
        <li><a href="#">{{name}}</a></li>
      </ul>
      <slot></slot>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Main-menu",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: 'home'
    }
  }
}
</script>

<style scoped>
  .ceg-main-menu {
    background-color: var(--color-primary);
  }
  .ceg-main-menu__close {
    text-align: right;
  }
  nav {
    color: var(--color-primary);
  }
</style>