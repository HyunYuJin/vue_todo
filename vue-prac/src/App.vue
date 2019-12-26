<template>
  <div id="app">
    <sibling></sibling>
    <sibling2></sibling2>
    <Axios></Axios>
    <Bind></Bind>
    <Directive></Directive>
    <Computed></Computed>
  </div>
</template>

<script>
import sibling from './components/sibling.vue';
import sibling2 from './components/sibling2.vue';
import Axios from './components/axios.vue';
import Bind from  './components/binding.vue';
import Directive from './components/directive.vue';
import Computed from './components/computed.vue';

export default {
  components : {
    'sibling': sibling,
    'sibling2': sibling2,
    'Axios': Axios,
    'Bind': Bind,
    'Directive': Directive,
    'Computed': Computed
  }
  
}
</script>

<style>

</style>
