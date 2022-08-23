<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span class="item">span tag</span>
    <button id="testClick" @click="changeText">{{btnText}}</button>
    <span>{{name}}</span>
    <span id="age" @click="change">{{age}}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    name: String,
    age: String
  },
  data () {
    return {
      btnText: 1,
      myAge: 1,
    }
  },
  methods: {
    changeText () {
      this.btnText++
    },
    change () {
      this.$emit('change-age', this.myAge)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
