<template>
  <div>
      <p>{{ counter }}</p>
      <p>{{ result() }}</p>
      <button v-on:click="increase">Counter Click</button>
      <p v-on:mouseover="coordinate">Coordinates: {{x}} / {{y}}</p>

      <button v-on:click="counter++">Increase</button>
      <button v-on:click="counter--">Decrease</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
            x: 0,
            y: 0
        }
    },

    methods: {
        increase() {
            this.counter++;
        },

        coordinate(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },

        result() {
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
        }
    }
}
</script>

<style>

</style>