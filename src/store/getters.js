/*包含基于state的getter计算属性的对象*/

export default {
  totalCount(state) {
    return state.cartFoods.reduce((prevTotal, food) => prevTotal + food.count ,0)
  },
  totalPrice(state) {
    return state.cartFoods.reduce((prevTotal, food) => prevTotal + food.count*food.price ,0)
  },
  positiveSize(state) {
    return state.ratings.reduce((prevTotal, rating) => prevTotal + (rating.rateType===0 ? 1:0) ,0)
  }
}
