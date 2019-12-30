<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" placeholder="Type what you have todo" v-on:keyup.enter="addTodo">
      <span class="addContainer" v-on:click="addTodo">
        <i class="addBtn fas fa-plus" aria-hidden="true"></i>
      </span>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  props: ['propsdata'],

  components: {
    Modal: Modal
  },
  
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },

  methods: {
    addTodo() {
      // 없는 내용 localStorage에 저장되지 않게 예외처리
      if(this.newTodoItem !== "") {
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
      }
    },

    clearInput() {
      this.newTodoItem = '';
    }
  }

}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: #FFF;
  vertical-align: middle;
}
</style>