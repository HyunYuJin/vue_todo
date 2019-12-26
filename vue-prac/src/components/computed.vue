<template>
  <div>
      <p>{{message}}</p>
      <button v-on:click="reverseMsg">문자열 역순</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue.js!'
        }
    },

    methods: {
        reverseMsg() {
            this.message = this.message.split('').reverse().join('');
            return this.message;
        }
    }

}
</script>

<style>

</style>