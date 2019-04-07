<template>
  <div class="hello-world">
    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    message: {
      type: String,
      default: 'Hello World',
    },
  },
};
</script>
<style>
  .hello-world {
    font-size: 24px;
  }
</style>
