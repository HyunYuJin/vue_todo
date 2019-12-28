<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoo='addTodo'></todo-input>
    <todo-list v-bind:propsdata='todoItems' @removeTodoo="removeTodo"></todo-list>
    <todo-footer v-on:removeAll='clearAll'></todo-footer>
  </div>
</template>

<script>
import TodoHeaderVue from './components/TodoHeader.vue';
import TodoInputVue from './components/TodoInput.vue';
import TodoListVue from './components/TodoList.vue';
import TodoFooterVue from './components/TodoFooter.vue';

export default {
  components: {
    'TodoHeader': TodoHeaderVue,
    'TodoInput': TodoInputVue,
    'TodoList': TodoListVue,
    'TodoFooter': TodoFooterVue
  },

  data() {
    return {
      todoItems: []
    }
  },

  created() {
    if(localStorage.length > 0) {
      for(var i=0; i <= localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(localStorage.key(i));
        }
      }
    } 
  },

  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },

    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },

    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shoadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
