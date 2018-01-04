
class GenericRemoteService {

    constructor(endpoint, mappingActions) {
        this.endpoint = endpoint;

        if(mappingActions && mappingActions.getAction) {
            this.ACTION_GET = mappingActions.getAction;
        }

        if(mappingActions && mappingActions.postAction) {
            this.ACTION_POST = mappingActions.postAction;
        }
    }

    getAction(){
        console.log("etttndpoint", this.endpoint);
        // super.callService(LOAD_CAR);

        return () => {
            let x = {
                type: this.ACTION_GET,
                endpoint: {
                    url: this.endpoint,
                    method: 'get'
                }
            };

            return x;
        };
    }

    callGenericAction(actionType, method='get'){
        return () => {
            let x = {
                type: actionType,
                endpoint: {
                    url: this.endpoint,
                    method: method
                }
            };

            return x;
        };
    }
}

export default GenericRemoteService;