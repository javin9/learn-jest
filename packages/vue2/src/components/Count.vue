<template>
  <div class="ml-4">
    <div class="mt-2">
      <button @click="increment" class="mr-2">-</button>
      <button @click="decrement" class="ml-2">+</button>
      <p class="sum">{{ count }}</p>
    </div>
     <span class="counter">{{ counter }}</span>
    <i-button @click="update" class="button">+1</i-button>
  </div>
</template>

<script>
import IButton from './IButton'
export default {
  components: {
    IButton
  },
  props: {
    counter: {
      type: Number,
      default: 10
    }
  },
  data: () => ({
    count: 0,
  }),
  methods: {
    increment() {
      this.count = this.count + 1;
    },

    decrement() {
      this.count = this.count - 1;
    },
    update(){
      this.$emit('update',this.counter+1);
    }
  },
};
</script>