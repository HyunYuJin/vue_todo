<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      // this.$emit('clearAll')
      this.$store.commit('clearAllItems')
    }
  }

}
</script>

<style>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background: #FFF;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #E20303;
  display: block;
}
</style>