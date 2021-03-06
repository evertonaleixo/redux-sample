import { INCREMENT, DECREMENT } from './actions_type'
import { BUY_CAR, SELL_CAR } from '../../car/reducers/actions_type'

export default (state = {money: 20000}, action) => {
  // console.log("home_reducer", state)
  // console.log("home_reducer2", action)
  switch (action.type) {
  case INCREMENT:
    return Object.assign({}, state, {num:  (state.num + 1) });
  case DECREMENT:
    if (state.num > 0) {
    	return Object.assign({}, state, {num:  (state.num - 1) });
    }
    return state
  case BUY_CAR: 
    return Object.assign({}, state, {money:  (state.money - action.val) }); 
  case SELL_CAR:
    return Object.assign({}, state, {money:  (state.money + action.val) }); 
  default:
    return state
  }
}