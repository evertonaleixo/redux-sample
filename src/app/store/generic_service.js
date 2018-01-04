
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
        return (params={}) => {
            let endpoint = this.getFinalEndpoint(params, suffix);

            let actionCreator = {
                type: this.ACTION_GET,
                endpoint: {
                    url: endpoint,
                    method: 'get',
                    body: payload,
                }
            };

            return actionCreator;
        };
    }

    callGenericAction(actionType, method='get', suffix='', params={size:1, page:0} ,payload={}){
        let endpoint = this.getFinalEndpoint(params, suffix);

        return () => {
            let actionCreator = {
                type: actionType,
                endpoint: {
                    url: endpoint,
                    method: method,
                    body: payload,
                }
            };

            return actionCreator;
        };
    }

    getFinalEndpoint(params, suffix?) {
        let final_endpoint = this.endpoint;

        if (suffix) {
            final_endpoint = final_endpoint + suffix
        }

        if (params) {
            let params_list = '';
            let i = 0;

            for(var attr in params) {
                if (i++ != 0)
                    params_list += "&";
                params_list +=  attr + "=" + params[attr];
            }

            final_endpoint += "?" + params_list;
        }

        return final_endpoint;
    }
}

export default GenericRemoteService;