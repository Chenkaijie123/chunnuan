/**
 * Created by Administrator on 2017/10/11.
 */
import * as types from './mutation-types'
import vue from 'vue'
export default {
  [types.ADD_TRANSITION](state, {obj}) {
    obj.style.transition = 'all 0.5s'
    obj.style.webkitTransition = 'all 0.5s'
  },
  [types.REMOVE_TRANSITION](state, {obj}) {
    obj.style.transition = 'none'
    obj.style.webkitTransition = 'none'
  },
  [types.SET_TRANSLATE](state, {x, y, z, obj}) {
    obj.style.transform = `translate3d(${x},${y},${z})`
    obj.style.webkitTransform = `translate3d(${x},${y},${z})`
  },
  creatBookWindowData(state, {json}){
    vue.set(state.bookwindow, 0, json)
  },
  adddataToFind(state, {data}){
    state.finddata = data.datas

  },
  edu(state){
    state.isEducate=!state.isEducate
  },
  cleanHistory(state){
      // for(let i=0;i<state.historyArray.length;i++){
      //   state.historyArray.pop()
      //   i++
      // }
    state.historyArray=[]
  }
}
