import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveCar } from '../../redux/reducers/carsReducer';

const CarNew = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cars);
  const sendData = () => {
    const newCar = {
      id: state.length + 1,
      brand: document.querySelector('#brand').value,
      model: document.querySelector('#model').value,
      year: document.querySelector('#year').value,
      image: document.querySelector('#image').value,
      reserved: document.querySelector('#reserved').value,
      price: document.querySelector('#price').value,
    };
    const elements = Object.values(newCar);
    const validate = elements.filter((e) => e === '');
    if (validate.length < 1) dispatch(saveCar(newCar));
  };

  return (
    <form>
      <input type="text" className="form-input" id="brand" name="brand" placeholder="brand" required />
      <input type="text" className="form-input" id="model" name="model" placeholder="model" required />
      <input type="text" className="form-input" id="year" name="year" placeholder="year" required />
      <input type="text" className="form-input" id="image" name="image" placeholder="image" required />
      <input type="text" className="form-input" id="reserved" name="reserved" defaultValue="false" hidden />
      <input type="number" className="form-input" id="price" name="price" placeholder="price" required />
      <button type="submit" onClick={() => { sendData(); }}>send</button>
    </form>
  );
};

export default CarNew;
