<template>
  <button v-on:click="showLog">show</button>
</template>

<script>
export default {
    methods: {
        showLog: function() {
            this.$emit('show-log');
        }
    }
}
</script>

<style>

</style>