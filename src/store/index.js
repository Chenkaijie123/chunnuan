/**
 * Created by Administrator on 2017/10/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import best from './modules/best'
import mutations from './mutation'
import * as actions from './actions'
import collection from './modules/collection'

Vue.use(Vuex)
const state={
  bookwindow:[],
  finddata:{},
  isEducate:false,
  historyArray:[]
}
const getters={
  book(state){
    return state.bookwindow
  },
  rankData(state){
    return state.rankData
  },
  findD(state){
    return state.finddata
  },
  edu(state){
    return state.isEducate
  },
  history(state){
    return state.historyArray
  }
}

export default new Vuex.Store({
mutations,
  actions,
  state,
  getters,
  modules:{
    best,
    collection
  }
})
