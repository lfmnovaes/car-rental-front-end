// import axios from 'axios';
import { GET_RESERVATIONS } from '../actions/actionTypes';
import { getReservations } from '../actions/actionCreator';

const testReservation = {
  id: 23,
  date_start: '05-05-2021',
  date_end: '05-08-2021',
  car_id: 1,
};

const test2 = {
  id: 654,
  date_start: '03-01-2022',
  date_end: '08-20-2022',
  car_id: 2,
};

export const fetchReservations = () => async (dispatch) => {
  dispatch(getReservations(testReservation));
};

const reservationsReducer = (state = [testReservation, test2], action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return state;
    default:
      return state;
  }
};

export default reservationsReducer;
