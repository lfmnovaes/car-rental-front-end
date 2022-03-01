const GET_CARS = 'cars/GET';
const API_URL = 'http://127.0.0.1:3000/api/cars';

const initialState = [];

const getCars = (data) => ({
  type: GET_CARS,
  payload: data,
});

export const fetchCars = () => async (dispatch) => {
  fetch(API_URL)
    .then(async (response) => response.json())
    .then((data) => {
      dispatch(getCars(data));
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
