import { CHANGE_VALUES_CAR } from '../reducers/actions_type'

let marketVariationAction = (idx, val) => {
	let valVariation = [];
	for (var i = 0; i < 50 ; i++) {
		let x = Math.floor((Math.random() * 500) + 1);
		if(Math.random() > 0.3) {
			x = -x;
		}
		valVariation.push(x);	
	}
	 

	return {
		type: CHANGE_VALUES_CAR,
		payload: valVariation
	};
}

export default marketVariationAction;