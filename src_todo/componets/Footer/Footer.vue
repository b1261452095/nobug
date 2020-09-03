<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allChecked"/>
    </label>
    <span>
      <span>已完成{{completeSize}}</span> / 全部{{todoList.length}}
    </span>
    <button class="btn btn-danger" v-show="completeSize" @click="delComTodos">清除已完成任务</button>
  </div>
</template>
<script>
export default {
    props:{
      todoList:Array,
      delComTodos:Function,
      selectAll:Function
    },
    data() {
      return {
        
      }
    },
    computed: {
      completeSize(){
        return this.todoList.reduce((preTotal,todo) => preTotal + (todo.complete?1:0),0)
      },

      allChecked:{
        get(){
          return this.completeSize === this.todoList.length && this.completeSize>0
        },
        set(value){
          this.selectAll(value)
        }
      }
    }
}
</script>
<style lang="">
    /*footer*/
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