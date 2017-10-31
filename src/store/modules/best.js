/**
 * Created by Administrator on 2017/10/11.
 */
import * as types from '../mutation-types'
const state = {
  index: 0,
  timer: 1,
  length: 0,
  wid:0
}

const mutations = {
  [types.RECEIVE_LENGTH](state,{length,width} ) {
    state.length = length
    state.wid=width
  }
}

// 计时器开始轮播图
const actions = {
  startHeaderTransition({commit, state}, obj) {
    clearInterval(state.timer)
    state.timer = setInterval(() => {
      state.index++
      // console.log(state.index,state.length)
      commit(types.ADD_TRANSITION, {obj})
      let offsetY = -state.index * state.wid+ 'px'
      commit(types.SET_TRANSLATE, {x: offsetY, y: 0, z: 0, obj})
    }, 2500)
  }
}

export default {
  state,
  mutations,
  actions
}
