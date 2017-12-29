import { INCREMENT, DECREMENT } from '../actions/home_counter_actions'

export default (state = {num: 0}, action) => {
  console.log(state)
  switch (action.type) {
  case INCREMENT:
    console.log("2");
    return Object.assign({}, state, {num:  (state.num + 1) });
  case DECREMENT:
    console.log("3");
    if (state.num > 0) {
    	return Object.assign({}, state, {num:  (state.num - 1) });	
    }
    return state
  default:
    return state
  }
}