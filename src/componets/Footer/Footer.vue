<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllSelect"/>
    </label>
    <span>
      <span>已完成{{completCount}}</span> / 全部{{totalCount}}
    </span>
    <button class="btn btn-danger" v-show="completeSize" @click="delComTodos">清除已完成任务</button>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    computed: {
      ...mapGetters(['totalCount','completCount','completeSize']),
      // completeSize(){
      //   return this.todoList.reduce((preTotal,todo) => preTotal + (todo.complete?1:0),0)
      // },
      isAllSelect:{
        get(){
          return this.$store.getters.isAllSelect
        },
        set(value){
          this.$store.dispatch('selectAll',value)
        }
      }
    },
    methods: {
      ...mapActions(['delComTodos'])
    },
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