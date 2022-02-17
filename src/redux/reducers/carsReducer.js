const initialState = {
  car: {
    brand: 'Toyota',
    model: 'corrolla',
    year: '2015',
    image: 'url',
    reserved: false,
    price: 20000,
  },
};

function carsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default carsReducer;
