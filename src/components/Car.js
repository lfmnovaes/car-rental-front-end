import React from 'react';
import { useSelector } from 'react-redux';

const car = () => {
  const element = useSelector((state) => state.cars);
  return (
    <div className="car-container flex">
      <div className="img-container">
        <img src={element.car.image} alt="car-img" />
      </div>
      <div className="details">
        <div className="title">
          <p>{ element.car.brand }</p>
          <p>{ element.car.model }</p>
        </div>
        <ul className="data">
          <li>{ element.car.year }</li>
          <li>{ element.car.price }</li>
          <li>{ element.car.reserved }</li>
          <li><button type="button" className="reserve-button">reserve</button></li>
        </ul>

      </div>
    </div>
  );
};

export default car;
