<template>
  <div>
      <p v-bind:id="idA">아이디 바인딩</p>
      <p v-bind:class="classA">클래스 바인딩</p>
      <p v-bind:style="styleA">스타일 바인딩</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            idA: 'asd',
            classA: 'container',
            styleA: 'color: blue'
        }
    }
}
</script>

<style>
.container {
    color: red;
}

#asd {
    color: purple;
}
</style>