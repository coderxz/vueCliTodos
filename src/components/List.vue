<template>
  <div>
    <h1 v-show="!todos.length">
      怎无任务！！
    </h1>
    <ul class="todo-main">
      <Item v-for="(item,index) in todos"
            :key="item.id"
            :index="index"
            :item="item"
            :deleteItem="deleteItem"
            :changeStatus="changeStatus"
            :updataStatus="updataStatus"
      />
    </ul>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "List",
  props: {
    todos: {
      type: Array,
      redirect: true
    },
    deleteItem: {
      type: Function,
      redirect: true
    },
    changeStatus: {
      type: Function,
      redirect: true
    },
    updataStatus:{
      type:Function,
      redirect:true
    }
  },
  components: {
    Item
  },
  methods: {}
}
</script>

<style scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>