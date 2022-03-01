import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getCar } from '../../redux/reducers/carsReducer';
import PopUp from './PopUp';

const CarDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const getCarRemote = (id) => {
      dispatch(getCar(id));
    };
    getCarRemote(id);
  }, []);
  const showPopup = () => {
    document.querySelector('.shadow').style.display = 'block';
    setTimeout(() => {
      document.querySelector('.box').style.marginTop = '70px';
    }, 500);
  };

  const carSelected = useSelector((state) => state.car);
  const reserved = (carSelected.reserved === false) ? 'no' : 'yes';
  const button = (reserved === 'no') ? <button type="button" onClick={() => navigate('/reserve')} className="reserve-button p-3 w-40 rounded-3xl text-center mt-5 bg-blue-600 hover:bg-blue-500 capitalize text-white">reserve</button> : <button type="button" className="p-3 w-40 rounded-3xl text-center mt-5 bg-gray-200 text-gray-500 " disabled>Reserved</button>;
  return (
    <>
      <PopUp carId={id} />
      <div className="car-container sm:flex sm:gap-5 md:justify-center">
        <div className="img-container sm:items-center sm:w-1/2 justify-center">
          <img src={carSelected.image} alt="car-img" className="w-100" />
        </div>
        <div className="details flex flex-col items-center sm:w-1/3 lg:mt-10">
          <div className="title flex gap-1 uppercase font-bold">
            <p>{ carSelected.brand }</p>
            <p>{ carSelected.model }</p>
          </div>
          <ul className="data mt-2">
            <li className="flex bg-gray-200">
              <p className="capitalize px-2">year:</p>
              <p className="capitalize px-7">{ carSelected.year }</p>
            </li>
            <li className="flex">
              <p className="capitalize px-2">price:</p>
              <p className="capitalize px-6">{ carSelected.price }</p>
            </li>
            <li className="flex bg-gray-200">
              <p className="capitalize px-2">reserved:</p>
              <p className="capitalize px-0">{ reserved }</p>
            </li>
            <li className="btn flex flex-col">
              { button }
              <button type="button" className="reserve-button p-3 w-40 rounded-3xl text-center mt-5 bg-red-500 hover:bg-red-400 capitalize text-white" onClick={() => { showPopup(); }}>delete</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
