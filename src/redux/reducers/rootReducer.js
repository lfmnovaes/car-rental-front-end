import { combineReducers } from 'redux';
import reservationsReducer from './reservationsReducer';
import usersReducer from './usersReducer';
import citiesReducer from './citiesReducer';

const rootReducer = combineReducers({
  // greetings: greetingsReducer,
  reservations: reservationsReducer,
  users: usersReducer,
  cities: citiesReducer,
});

export default rootReducer;
