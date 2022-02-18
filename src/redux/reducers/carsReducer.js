const SAVE_NEW_CAR = 'SAVE_NEW_CAR';

const initialState = [
  {
    id: 1,
    brand: 'toyota',
    model: 'corrolla',
    year: '2015',
    image: 'url-toyota',
    reserved: false,
    price: 10000,
  },
];

export const saveCar = (payload) => ({
  type: SAVE_NEW_CAR,
  car: payload,
});

function carsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_NEW_CAR:
      return [...state, action.car];
    default:
      return state;
  }
}

export default carsReducer;
