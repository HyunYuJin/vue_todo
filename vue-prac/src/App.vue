<template>
  <div id="app">
    <sibling></sibling>
    <sibling2></sibling2>
  </div>
</template>

<script>
import sibling from './components/sibling.vue';
import sibling2 from './components/sibling2.vue';

export default {
  components : {
    'sibling': sibling,
    'sibling2': sibling2
  }
  
}
</script>

<style>

</style>
