import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import carReducer from './reducers/carReducer';

const reducers = combineReducers({
  cars: carReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
