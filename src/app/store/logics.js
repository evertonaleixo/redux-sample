import { createLogic } from 'redux-logic';

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
  		action.type = action.type.substr(6) + '_SUCCESS';
  		let url = action.endpoint.url;
  		let method = action.endpoint.method;

  		delete action.endpoint;

  		let dataFromServer = {model: 'fusca', val: 3000};
  		action = Object.assign(action, {payload:  dataFromServer} );

  		console.log(method, url, action);

  		dispatch(action);
  		done();
  	}
    // axios.get('https://survey.codewinds.com/polls')
      // .then(resp => resp.data.polls)
      // .then(polls => dispatch({ type: 'AAAAAAAA',
      //                           payload: polls }))
      // .catch(err => {
      //        console.error(err); // log since could be render err
      //        dispatch({ type: 'AAAAAAAA', payload: err,
      //                   error: true })
      // })
      // .then(() => done());
  }
});

// pollsLogic
export default [
  // validationLogic,
  addUniqueId,
  fetchPollsLogic
];
