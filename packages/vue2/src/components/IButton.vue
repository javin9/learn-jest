<template>
  <div>
    <span @click="handleClick">+1</span>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        this.$emit('click');
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>