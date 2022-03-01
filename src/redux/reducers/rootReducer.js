import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import reservationsReducer from './reservationsReducer';
import usersReducer from './usersReducer';
import citiesReducer from './citiesReducer';

const rootReducer = combineReducers({
  cars: carsReducer,
  reservations: reservationsReducer,
  users: usersReducer,
  cities: citiesReducer,
});

export default rootReducer;
