import { SELL_CAR } from '../reducers/actions_type'

let sellCarAction = (idx, val) => {
	return {
		type: SELL_CAR,
		payload: idx,
		val: val
	};
}

export default sellCarAction;