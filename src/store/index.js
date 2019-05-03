import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 10,
    city: "barcelona"
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
