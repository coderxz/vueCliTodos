<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteItem="deleteItem" :changeStatus="changeStatus" :updataStatus="updataStatus"/>
      <Footer :todos="todos" :upDataStatusAll="upDataStatusAll" :deleteDoneTodo="deleteDoneTodo"/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";

export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: '222122', title: '事件A', status: false},
        {id: '222212', title: '事件B', status: true},
        {id: '221212', title: '事件C', status: false},
      ]
    }
  },
  components: {
    Header,
    Footer,
    List
  },
  methods: {
    addTodo(todoItem) {
      this.todos.unshift(todoItem)
    },
    deleteItem(index) {
      this.todos.splice(index, 1)
    },
    changeStatus(newStatus, item) {
      item.status = newStatus
    },
    updataStatus(index) {
      this.todos[index].status = !this.todos[index].status
    },
    upDataStatusAll(flag) {
      this.todos.forEach(item => {
        item.status = flag
      })
    },
    deleteDoneTodo() {
      this.todos = this.todos.reduce((prev, item) => {
        if (item.status === false) {
          prev.push(item)
        }
        return prev
      }, [])
    }
  }
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
