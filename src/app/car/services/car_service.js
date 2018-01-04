import { LOAD_CAR, SELL_CAR, BUY_CAR } from '../reducers/actions_type'
import GenericRemoteService from '../../store/generic_service'

let endpoint = 'http://www.mocky.io/v2/5a4bed87300000f51da69786';
let mapping = {
    getAction: LOAD_CAR
}

class CarService extends GenericRemoteService {
    
    constructor(endpoint, mappingActions) {
        super(endpoint, mappingActions);
    }

    loadCarsAction(){
        return super.callGenericAction(LOAD_CAR);
    }

    // get a gat by ID
    getCarAction(){
        return (idx=1) => {
            let suffix = "/"+idx;
            console.log('sufixo', suffix);
            return super.callGenericAction(LOAD_CAR, 'get', suffix)();
        }
    }
    
    sellCarAction(){
        return (idx, val) => {
            return {
                type: SELL_CAR,
                payload: idx,
                val: val
            };
        }
    }

    buyCarAction(){
        return (idx, val) => {
            return {
                type: BUY_CAR,
                payload: idx,
                val: val
            };
        }
    }
}

export default new CarService(endpoint, mapping);