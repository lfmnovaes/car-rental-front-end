import axios from 'axios';
import { GET_RESERVATIONS } from '../actions/actionTypes';
import { getReservations } from '../actions/actionCreator';

const ADD_RESERVE = 'ADD_RESERVE';
const REMOVE_RESERVE = 'REMOVE_RESERVE';
const API_RESERVATIONS_URL = 'https://final-capstone-project-lfmn.herokuapp.com/api/reservations';

export const addReserve = (payload) => ({
  type: ADD_RESERVE,
  payload,
});

export const removeReserve = (payload) => ({
  type: REMOVE_RESERVE,
  payload,
});

export const fetchReservations = () => async (dispatch) => {
  await axios.get(API_RESERVATIONS_URL, {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then((response) => {
    dispatch(getReservations(response.data));
  });
};

export const createReserve = (reserve) => async (dispatch) => {
  await axios.post(API_RESERVATIONS_URL, {
    date_start: reserve.date_start,
    date_end: reserve.date_end,
    user_id: reserve.user_id,
    car_id: reserve.car_id,
    city_id: reserve.city_id,
  }).then((res) => res.status)
    .then((data) => {
      if (data === 201) {
        dispatch(addReserve(reserve));
      }
    });
};

export const removeReserveAPI = (reserveToDelete) => async (dispatch) => {
  await axios.delete(`${API_RESERVATIONS_URL}${reserveToDelete}`)
    .then((res) => res.status)
    .then((data) => {
      if (data === 201) {
        dispatch(removeReserve(reserveToDelete));
      }
    });
};

const reservationsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;
    case ADD_RESERVE: {
      const newReserve = [
        action.payload.id,
        [{
          date_start: action.payload.date_start,
          date_end: action.payload.date_end,
          user_id: action.payload.user_id,
          city_id: action.payload.city_id,
          car_id: action.payload.car_id,
        }],
      ];
      return [...state, newReserve];
    }
    case REMOVE_RESERVE: {
      const newState = state.filter((reserve) => reserve[0] !== action.payload);
      return newState;
    }
    default:
      return state;
  }
};

export default reservationsReducer;
