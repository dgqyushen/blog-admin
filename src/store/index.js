import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        "menuList": [
            {
              name:'首页',
              link:'/'
            }
        ]
    },
    mutations: {
        menuListItemAdd(state, menuItem) {
            // if (state.menuList.length>8){
            //
            // }
            state.menuList.push(menuItem);
        },
        menuListItemDel(state, id) {
            if (state.menuList.length == 1) {
                return;
            }
            state.menuList.splice(id, 1);
        },
        // menuListGetLastOne(state){
        //     let length = state.menuList.length;
        //     return state.menuList[length];
        // }
    },
    actions: {},
    modules: {}
})
