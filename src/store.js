import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Config:typeof myConfig=='undefined'?{}:myConfig,
    loadData:false,
  },
  mutations: {
      updateUser:function(state,data){
          state.loadData=data;
      },
  },
  actions: {

  }
})
