/**
 * Created by griga on 11/17/16.
 */

import {createStore, combineReducers,  applyMiddleware} from 'redux'
import { createLogicMiddleware } from 'redux-logic';
import arrLogic from './logics'

// import thunk from 'redux-thunk'
import {routerReducer} from 'react-router-redux'

import {config} from '../config/config'

// import {handleBodyClasses, dumpLayoutToStorage, layoutReducer} from '../components/layout'

// import navigationReducer from '../components/navigation/navigationReducer'
// import {userReducer, requestUserInfo} from '../components/user'
// import {chatReducer, chatInit} from '../components/chat'
// import {eventsReducer} from '../components/calendar'
// import outlookReducer from '../routes/outlook/outlookReducer'


// import {voiceReducer, VoiceMiddleware} from '../components/voice-control'
// import {voiceControlOn} from "../components/voice-control/VoiceActions";

const home_counter = require("../home/reducers/home_counter_reducer").default;
const carReducer = require("../car/reducers/car_reducer").default;

export const rootReducer = combineReducers(
  {
    home_counter: home_counter,
    carReducer: carReducer,
    routing: routerReducer,
    // layout: layoutReducer,
    // navigation: navigationReducer,
    // outlook: outlookReducer,
    // user: userReducer,
    // chat: chatReducer,
    // events: eventsReducer,
    // voice: voiceReducer,
  }
);

const logicMiddleware = createLogicMiddleware(arrLogic, {});

const store =  createStore(rootReducer,// {}
  applyMiddleware(
    logicMiddleware
  //   thunk//,
  //   handleBodyClasses,
  //   dumpLayoutToStorage,
  //   VoiceMiddleware
  )
);

// store.dispatch(requestUserInfo());
// store.dispatch(chatInit());

// if(config.voice_command_auto){
//   store.dispatch(voiceControlOn());
// }


export default store;