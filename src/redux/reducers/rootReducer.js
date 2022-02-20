import { combineReducers } from 'redux';
import reservationsReducer from './reservationsReducer';

const rootReducer = combineReducers({
  // greetings: greetingsReducer,
  reservations: reservationsReducer,
});

export default rootReducer;
