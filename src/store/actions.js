/* 
 包含多个 接收组件通知触发mutation调用间接状态的方法的对象
*/
export default {
  //添加列表
  addItem({commit},todoItem){
    //提交mutation的请求
    commit('ADDTODO',{todoItem})
  },
  //删除列表
  deleteItem({commit},index){
    commit('DELETEITEM',{index})
  },

  selectAll({commit},value){
    commit('SELECTALL',{value})
  },
  //删除所有
  delComTodos({commit}){
    commit('DELCOMTODOS')
  }
}