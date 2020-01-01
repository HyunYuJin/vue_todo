<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem='addOneItem'></todo-input>
    <todo-list v-bind:propsdata='todoItems' v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></todo-list>
    <todo-footer v-on:clearAll='clearAllItems'></todo-footer>
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

  methods: {
    addOneItem(todoItem) {
      var obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },

    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },

    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;

      // localStorage의 데이터를 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },

    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }, 
  },

  created() {
    if(localStorage.length > 0) {
      for(var i=0; i <= localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    } 
  },
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
