import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getCar } from '../../redux/reducers/carsReducer';
import PopUp from './PopUp';
import './Details.css';

const CarDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const show = localStorage.getItem('admin') === 'true' ? 'block' : 'hidden';
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
  const reserved = carSelected.reserved === false ? 'no' : 'yes';
  const button = reserved === 'no' ? (
    <button
      type="button"
      onClick={() => navigate(`/reserve/${carSelected.id}`)}
      className="w-40 p-3 mt-5 text-center text-white capitalize reserve-button rounded-3xl green-bg"
    >
      Reserve
    </button>
  ) : (
    <button
      type="button"
      className="w-40 p-3 mt-5 text-center text-gray-500 bg-gray-200 rounded-3xl "
      disabled
    >
      Reserved
    </button>
  );
  return (
    <>
      <PopUp />
      <div className="flex flex-col w-4/5 mx-auto">
        <div className="car-container">
          <div className="img-container">
            <img src={carSelected.image} alt="car-img" className="w-100" />
          </div>
          <div className="details sm:w-52 sm:mx-auto">
            <div className="flex gap-1 font-bold uppercase title">
              <p>{carSelected.brand}</p>
              <p>{carSelected.model}</p>
            </div>
            <ul className="mt-2 data">
              <li className="flex bg-gray-200">
                <p className="px-2 capitalize">year:</p>
                <p className="capitalize px-7">{carSelected.year}</p>
              </li>
              <li className="flex">
                <p className="px-2 capitalize">price:</p>
                <p className="px-6 capitalize">{carSelected.price}</p>
              </li>
              <li className="flex bg-gray-200">
                <p className="px-2 capitalize">reserved:</p>
                <p className="px-0 capitalize">{reserved}</p>
              </li>
              <li className="flex flex-col items-center btn">
                {button}
                <button
                  type="button"
                  className={`delete-button p-3 w-40 rounded-3xl text-center ${show} mt-5 bg-red-500 hover:bg-red-400 capitalize text-white`}
                  onClick={() => {
                    showPopup();
                  }}
                >
                  delete
                </button>
              </li>
            </ul>
          </div>
        </div>
        <button
          type="button"
          className="w-20 p-3 mt-5 text-center text-white capitalize rounded-l-none green-bg rounded-3xl"
          onClick={() => {
            navigate('/cars');
          }}
        >
          &#10092;
        </button>
      </div>
    </>
  );
};

export default CarDetails;
