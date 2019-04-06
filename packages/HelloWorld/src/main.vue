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
      required: true,
    },
  },
};
</script>
<style>
  .hello-world {
    font-size: 24px;
  }
</style>
