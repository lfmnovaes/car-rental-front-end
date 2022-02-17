import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const car = () => {
  const { id } = useParams();
  const carArray = useSelector((state) => state.cars);
  const carSelected = carArray.filter((c) => c.id === parseInt(id, 10));
  return (
    <div className="car-container flex">
      <div className="img-container">
        <img src={carSelected[0].image} alt="car-img" />
      </div>
      <div className="details">
        <div className="title">
          <p>{ carSelected[0].brand }</p>
          <p>{ carSelected[0].model }</p>
        </div>
        <ul className="data">
          <li>{ carSelected[0].year }</li>
          <li>{ carSelected[0].price }</li>
          <li>{ carSelected[0].reserved }</li>
          <li><button type="button" className="reserve-button">reserve</button></li>
        </ul>

      </div>
    </div>
  );
};

export default car;
