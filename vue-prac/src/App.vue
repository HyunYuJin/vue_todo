<template>
  <div id="app">
    <sibling></sibling>
    <sibling2></sibling2>
    <Axios></Axios>
  </div>
</template>

<script>
import sibling from './components/sibling.vue';
import sibling2 from './components/sibling2.vue';
import Axios from './components/axios.vue';

export default {
  components : {
    'sibling': sibling,
    'sibling2': sibling2,
    'Axios': Axios
  }
  
}
</script>

<style>

</style>
