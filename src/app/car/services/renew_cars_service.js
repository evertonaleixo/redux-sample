import { LOAD_CAR } from '../reducers/actions_type'

let loadCarsAction = () => {
	return {
		type: LOAD_CAR,
		endpoint: {
			url: 'http://www.mocky.io/v2/5a4bed87300000f51da69786',
			method: 'get'
		}
	};
}

export default loadCarsAction;