<template>
  <div class="alert alert-success fade show">
    <span class="close" data-dismiss="alert">x</span>
    <slot/>
    <!-- <button type="button" class="btn btn-primary btn-lg">Close</button> -->
  </div>
</template>

<script>
export default {
  name: "Ceg-alert"
}
</script>

<style>
.alert {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>