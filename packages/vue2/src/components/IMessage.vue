<template>
  <div>
    <button id="success" @click="handleSuccessClick">成功</button>
    <button id="warning" @click="handleWarningClick">警告</button>
    <button id="error" @click="handleErrorClick">错误</button>
    <button id="info" @click="handleInfoClick">消息</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleSuccessClick () {
      this.$message.success('成功')
    },
    handleWarningClick () {
      this.$message.warning('警告')
    },
    handleErrorClick () {
      this.$message.error('错误')
    },
    handleInfoClick () {
      this.$message.info('消息')
    }
  }
}
</script>