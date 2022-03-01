import axios from 'axios';

const GET_CITIES = 'GET_CITIES';

export const getCities = (payload) => ({ type: GET_CITIES, payload });

export const fetchCities = () => async (dispatch) => {
  await axios.get('http://127.0.0.1:3000/api/cities', {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then((response) => {
    dispatch(getCities(response.data));
  });
};

const citiesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CITIES:
      return action.payload;
    default:
      return state;
  }
};

export default citiesReducer;
