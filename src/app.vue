<template>
    <div class="todo-container">
    <div class="todo-wrap">
      <Header></Header>
      <List ></List>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from '@/componets/Header/Header'
import List from '@/componets/List/List'
import Footer from '@/componets/Footer/Footer'

export default {
  components:{
    Header,
    List,
    Footer
  },
  // },
  // methods: {
  //  addItem(msg){
  //    this.todoList.unshift(msg)
  //  },
  //  deleteItem(index){
  //    this.todoList.splice(index,1)
  //  },
  //  delComTodos(){
  //    this.todoList = this.todoList.filter(todo => !todo.complete)
  //  },
  //  selectAll(check){
  //    this.todoList.forEach(todo => todo.complete = check);
  //  }
  // }
}
</script>
<style lang="">
/*app*/
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