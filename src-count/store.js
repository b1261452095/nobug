/* 
  vuex的核心对象管理模块
*/
import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)
//状态对象
const state = {
  count:0
}
//包含多个更新stata函数的对象
const mutations = {
  //增加的mutation
  INCREMENT(state){
    state.count++
  },
  //减少的mutation
  DECREMENT(state){
    state.count--
  }
}
//包含多个对应时间回调函数对象
const actions = {
  increment({commit}){
    //提交增加的mutation
    commit('INCREMENT')
  },
  decrement({commit}){
    commit('DECREMENT')
  },
  incrementOdd({commit,state}){
    if(state.count%2 !== 0)
    commit('INCREMENT')
  },
  incrementSync({commit}){
    setTimeout(() =>{
      commit('INCREMENT')
    },1000)
  }
}
//包含多个getter计算属性函数的对象
const getters = {
  eveOrOrd(state) {// 不需要调用
    return state.count%2 === 0 ? '偶数' : '奇数'
  }
}

export default new vuex.Store({
  state,//状态对象
  mutations,//包含多个更新stata函数的对象
  actions,//包含多个对应时间回调函数对象
  getters//包含多个getter计算属性函数的对象
})
