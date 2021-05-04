import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "menuList": ['首页']
  },
  mutations: {
    menuListItemAdd(state,menuItem){
      state.menuList.push(menuItem);
    },
    menuListItemDel(state,id){
      state.menuList.splice(id,1);
    }
  },
  actions: {
  },
  modules: {
  }
})
