<template>
  <input v-model='message'>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue.js!'
        }
    },
    
    watch: {
        message(data) {
            console.log('message의 값이 바뀝니다.' + data);
        }
    }
}
</script>

<style>

</style>