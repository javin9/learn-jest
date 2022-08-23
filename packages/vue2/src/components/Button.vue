<template>
  <div>
    <el-button>{{msg}}</el-button>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        type: String,
        default: 'Hello Vue!'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>