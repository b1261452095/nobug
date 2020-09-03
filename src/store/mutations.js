/* 
  包含多个有action触发直接更新状态的方法的对象
*/
export default {
  //添加列表
  ADDTODO(state,{todoItem}){
    state.todoList.unshift(todoItem)
  },
  //删除列表
  DELETEITEM(state,{index}){
    state.todoList.splice(index,1)
  },
  //
  SELECTALL(state,{value}){
    state.todoList.forEach(todo => {
      todo.complete = value
    });
  },
  //删除所有
  DELCOMTODOS(state){
    state.todoList = state.todoList.filter(todo => !todo.complete)
  }
}