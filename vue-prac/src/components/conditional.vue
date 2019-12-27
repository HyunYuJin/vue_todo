<template>
  <div>
      <p v-if="show">Can you see me?</p>
      <p v-else>You can see me right?</p>
      <button v-on:click="show!=show">Switch</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>

<style>

</style>