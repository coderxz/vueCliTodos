<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" ref="addInput"/>
  </div>
</template>

<script>
export default {
  name: "Header",
  props:{
    addTodo:{
      type:Function,
      redirect:true
    }
  },
  data(){
    return{
      title:''
    }
  },
  methods:{
    add(){
      if (!this.$refs.addInput.value.trim()) {
        alert('请正确输入')
        this.title = ''
      }else{
        this.addTodo({title:this.title,status:false,id:Math.random()})
        this.title = ''
      }

    }
  }
}
</script>

<style scoped>
.todo-header input {
  width: 578px;
  height: 30px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  margin-bottom: 5px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>