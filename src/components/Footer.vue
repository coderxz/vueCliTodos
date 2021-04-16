<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="doneAll"/>
    </label>
    <span>
          <span>已完成{{ doneTodo }}</span> / 全部 {{ todos.length }}
        </span>
    <button class="btn btn-danger" v-if="doneTodo" @click="deleteDoneTodo">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    todos: {
      type: Array,
      redirect: true
    },
    upDataStatusAll: {
      type: Function,
      redirect: true
    },
    deleteDoneTodo: {
      type: Function,
      redirect: true
    }
  },
  mounted() {
    console.log(this.todos)
  },
  computed: {
    doneTodo() {
      return this.todos.reduce((prev, item) => {
        if (item.status === true) {
          prev += 1
        }
        return prev
      }, 0)
    },
    doneAll: {
      get() {
        console.log(this.todos.length === this.doneTodo)
        return this.todos.length === this.doneTodo && this.todos.length > 0
      },
      set(newStatus) {
        this.upDataStatusAll(newStatus)
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>