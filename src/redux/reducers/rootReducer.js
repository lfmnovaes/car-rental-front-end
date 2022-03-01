import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import reservationsReducer from './reservationsReducer';
import usersReducer from './usersReducer';
import citiesReducer from './citiesReducer';
import carsHomeReducer from './carReducer';

const rootReducer = combineReducers({
  car: carsReducer,
  cars: carsHomeReducer,
  // greetings: greetingsReducer,
  reservations: reservationsReducer,
  users: usersReducer,
  cities: citiesReducer,
});

export default rootReducer;
