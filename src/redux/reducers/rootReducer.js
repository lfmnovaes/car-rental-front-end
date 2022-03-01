import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import reservationsReducer from './reservationsReducer';
import usersReducer from './usersReducer';
import citiesReducer from './citiesReducer';

const rootReducer = combineReducers({
  cars: carsReducer,
  users: usersReducer,
  // greetings: greetingsReducer,
  reservations: reservationsReducer,
  cities: citiesReducer,
});

export default rootReducer;
