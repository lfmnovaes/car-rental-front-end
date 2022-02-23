import axios from 'axios';
import { GET_RESERVATIONS } from '../actions/actionTypes';
import { getReservations } from '../actions/actionCreator';

export const fetchReservations = () => async (dispatch) => {
  await axios.get('http://127.0.0.1:3000/api/reservations', {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then((response) => {
    dispatch(getReservations(response.data));
  });
};

const reservationsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reservationsReducer;
