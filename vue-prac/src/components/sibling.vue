<template>
  <child :propsdata="message"></child>
</template>

<script>
import child from './child.vue';

export default {
  components: {
    child
  },

  data() {
    return {
      message: 'child 컴포넌트로 값 전달'
    }
  }
}
</script>

<style>

</style>