<template>
  <li @mouseenter="mouseEnter(1)" @mouseleave="mouseEnter(0)" :style="{background:bgColor}">
      <label>
        <input type="checkbox" v-model="todoItem.complete"/>
        <span>{{todoItem.name}}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="deleteT">删除</button>
    </li>
</template>
<script>
export default {
    props:{
      todoItem:Object,
      index:Number,
    },
    data () {
      return {
        bgColor:'white',
        isShow:false
      }
    },
    methods: {
      mouseEnter(isEnter){
        if(isEnter){
          this.bgColor = 'grey'
          this.isShow = true
        }else{
          this.bgColor = 'white'
          this.isShow = false
        }
      },
      deleteT(){
        const {todoItem,index,deleteItem} = this
        if(window.confirm(`是否确认删除${todoItem.name}?`)){
          this.$store.dispatch('deleteItem',index)
        }
      }
    },
}
</script>
<style lang="">
   /*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
/*item*/
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
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
} 
</style>