// import axios from 'axios';
import { GET_RESERVATIONS } from '../actions/actionTypes';
import { getReservations } from '../actions/actionCreator';

const testReservation = {
  id: 23,
  date_start: '05/05/2021',
  date_end: '05/08/2021',
};

const test2 = {
  id: 654,
  date_start: '01/01/2021',
  date_end: '05/03/2021',
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
