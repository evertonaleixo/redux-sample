import { LOAD_CAR } from '../reducers/actions_type'

let loadCarsAction = () => {
	return {
		type: LOAD_CAR,
		endpoint: {
			url: 'https://survey.codewinds.com/polls',
			method: 'post'
		}
	};
}

export default loadCarsAction;