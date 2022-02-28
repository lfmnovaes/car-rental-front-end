import { combineReducers } from 'redux';
import reservationsReducer from './reservationsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  // greetings: greetingsReducer,
  reservations: reservationsReducer,
  users: usersReducer,
});

export default rootReducer;
