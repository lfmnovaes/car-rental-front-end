const initialState = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'corrolla',
    year: '2015',
    image: 'url',
    reserved: false,
    price: 20000,
  },
  {
    id: 2,
    brand: 'honda',
    model: 'civic',
    year: '2017',
    image: 'url-civic',
    reserved: true,
    price: 30000,
  },
];

function carsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default carsReducer;
