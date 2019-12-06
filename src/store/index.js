import { createStore, combineReducers } from 'redux';

import appReducer from './app-reducers.js';
import numberReducer from './num-reducers';

let reducers = combineReducers({
  app: appReducer,
  number: numberReducer
});

export default () => createStore(reducers);
