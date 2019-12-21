<template>
  <child2 v-on:show-log='printText'></child2>
</template>

<script>
import child2 from './child2.vue';

export default {
    components: {
        child2
    },

    methods: {
        printText() {
            console.log('received an event');
        }
    }
}
</script>

<style>

</style>