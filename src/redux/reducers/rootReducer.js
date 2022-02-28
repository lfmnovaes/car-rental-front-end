import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  cars: carsReducer,
  users: usersReducer,
});

export default rootReducer;
