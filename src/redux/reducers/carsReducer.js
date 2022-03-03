const SAVE_NEW_CAR = 'SAVE_NEW_CAR';

export const saveCar = (payload) => ({
  type: SAVE_NEW_CAR,
  car: payload,
});
export function getCar(id) {
  return (dispatch) => {
    fetch(`https://final-capstone-project-lfmn.herokuapp.com/api/cars/${id}`)
      .then((response) => response.json())
      .then((json) => dispatch(saveCar(json)));
  };
}

function carsReducer(state = [], action) {
  switch (action.type) {
    case SAVE_NEW_CAR:
      return { ...action.car };
    default:
      return state;
  }
}

export default carsReducer;
