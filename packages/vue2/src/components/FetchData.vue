<!-- FetchData.vue -->
<template>
  <div class="fetch">{{ msg }}</div>
</template>

<script>
 export default {
    data() {
      return {
        msg: 'Hello'
      }
    },
    created() {
      this.getUser()
    },
    methods: {
      getUser() {
        console.log('fetch data')
      }
    },
 }
</script>
