import { BUY_CAR } from '../reducers/actions_type'

let buyCarAction = (idx, val) => {
	console.log(idx);
	return {
		type: BUY_CAR,
		payload: idx,
		val: val
	};
}

export default buyCarAction;