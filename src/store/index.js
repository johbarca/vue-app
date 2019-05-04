import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    name:""
  },
  mutations: {
    change(state) {
        if(state.count<20){
            return state.count++
        }
    }
  }
});

export default store;
