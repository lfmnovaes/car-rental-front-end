import { combineReducers } from 'redux';
import usersReducer from './usersReducers';

const rootReducer = combineReducers({
  // greetings: greetingsReducer,
  users: usersReducer,
});

export default rootReducer;
