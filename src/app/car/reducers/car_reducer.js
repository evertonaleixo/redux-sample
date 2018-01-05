import { BUY_CAR,
		 SELL_CAR,
		 LOAD_CAR_SUCCESS,
     CHANGE_VALUES_CAR,
		 LOAD_CAR_ERR } from './actions_type'

export default (state = {cars_dealership: [{model:'HB20', val: 7000}, {model:'Civic', val: 10000}], cars_garage: [{model:'Prisma', val: 6000, key: 1}]}, action) => {
  // console.log("car_reducer", state)

  switch (action.type) {
  case BUY_CAR:
    let buyedCar = state.cars_dealership[action.payload];
    delete state.cars_dealership[action.payload];

    state.cars_garage.push(buyedCar);

    return Object.assign({}, state, {});
  case SELL_CAR:
    delete state.cars_garage[action.payload];

    return Object.assign({}, state, {});
  case LOAD_CAR_SUCCESS:
    state.cars_dealership.push(action.payload);

    return Object.assign({}, state, {});
  case CHANGE_VALUES_CAR:
    state.cars_garage.map( (x, idx) => {
      x.val += action.payload[idx];
    });

    return Object.assign({}, state, {});
  default:
    return state
  }
}