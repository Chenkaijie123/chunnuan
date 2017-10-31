/**
 * Created by Administrator on 2017/10/12.
 */
import * as types from './mutation-types'
export const linstenTranstionEnd = (context, {obj, callback}) => {
  if (typeof obj === 'object') {
    obj.addEventListener('webkitTransitionEnd', () => {
      callback && callback()
    })
    obj.addEventListener('transitionEnd', () => {
      callback && callback()
    })
  }
}
export const transitionAgain = ({state, commit}, {obj, modules}) => {
  // console.log(state[modules].index )
  if (state[modules].index >= state[modules].length) {
    commit(types.REMOVE_TRANSITION, {obj})
    commit(types.SET_TRANSLATE, {x: 0, y: 0, z: 0, obj})
    state[modules].index = 0
  }
}
export const historyMes=({state },str)=>{
  let bool=true
  for(let i=0;i<state.historyArray.length;i++){
    if(state.historyArray[i]==str&&state.historyArray[i]!=''){
      bool=false
    }
  }
  if(bool){
    state.historyArray.push(str)
  }
}






