<template>
  <li @mouseenter="mousemove(true)" @mouseleave="mousemove(false)" ref="moveUl">
    <label>
      <input type="checkbox" style="margin-right: 4px" v-model="status"/>
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger" style="display:none" ref="btn" @click="deleteItem(index)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      redirect: true
    },
    index: {
      type: Number,
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
    updataStatus: {
      type: Function,
      redirect: true
    }
  },
  mounted() {
  },
  methods: {
    mousemove(flag) {
      if (flag) {
        this.$refs.moveUl.style.backgroundColor = '#eee'
        this.$refs.btn.style.display = 'block'
      } else {
        this.$refs.moveUl.style.backgroundColor = '#fff'
        this.$refs.btn.style.display = 'none'
      }
    },
    updataOne(index) {
      this.updataStatus(index)
    }
  },
  computed: {
    status: {
      get() {
        return this.item.status
      },
      set(newStatus) {
        this.changeStatus(newStatus, this.item)
      }
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>