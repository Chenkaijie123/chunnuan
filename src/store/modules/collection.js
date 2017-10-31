/**
 * Created by Administrator on 2017/10/15.
 */
import vue from 'vue'
const state = {
  collection: []
}
const actions = {
  addToMyCollection({state}, {obj}){
    let flag=true
    let arr=state.collection
    arr.forEach(function (item) {
      if(obj.id===item.id){
        flag=false
      }
    })
    if(flag){
      state.collection.push(obj)
    }
  },
  delectSellection({state}, obj){
    console.log(state.collection)
    for (let i = 0; i < state.collection.length; i++) {
      if (state.collection[i].title === obj.title) {
        state.collection.splice(i, 1)
        return
      }
    }
  }
}
const getters = {
  collectionBook(state){
    return state.collection
  }
}



export default {
  state,
  actions,
  getters
}
