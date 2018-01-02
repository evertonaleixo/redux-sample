import { createLogic } from 'redux-logic';
import axios from 'axios';

// const validationLogic = createLogic({
//   type: ADD_USER,
//   validate({ getState, action }, allow, reject) {
//     const user = action.payload;
//     if (!getState().users[user.id]) { // can also hit server to check
//       allow(action);
//     } else {
//       reject({ type: USER_EXISTS_ERROR, payload: user, error: true })
//     }
//   }
// });

const addUniqueId = createLogic({
  type: '*',
  transform({ getState, action }, next) {
    // add unique tid to action.meta of every action
    console.log("getState", getState());
    console.log("action", action);
    console.log("next", next);

    const existingMeta = action.meta || {};
    const meta = {
      ...existingMeta,
      tid: 1111
    };
    next({
      ...action,
      meta
    });
  }
});

const fetchPollsLogic = createLogic({
  type: '*', // only apply this logic to this type
  // cancelType: CANCEL_FETCH_POLLS, // cancel on this type
  latest: true, // only take latest
  process({ getState, action }, dispatch, done) {
  	if(!action.type.startsWith("ASYNC_")) {
  		done();
  	} else {
  		action.type = action.type.substr(6);
  		let url = action.endpoint.url;
  		let method = action.endpoint.method;
  		let body = action.endpoint.body | {};

  		delete action.endpoint;

  		axios({
  			method: method,
  			url: url,
  			data: body
  		})
  		.then(resp => {
  			action.type = action.type + '_SUCCESS';
  			action = Object.assign(action, {payload:  resp.data} );
  			dispatch(action);
  		})
  		.catch(err => {
  			action.type = action.type + '_ERR';
  			action = Object.assign(action, {error:  true, payload: err} );
  			dispatch(action);
  		})
  		.then(() => done());
  		
  	}
  }
});

// pollsLogic
export default [
  // validationLogic,
  addUniqueId,
  fetchPollsLogic
];
