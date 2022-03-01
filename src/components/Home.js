import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/reducers/carReducer';
import Carousel from './Carousel/Carousel';

const Home = () => {
  const dispatch = useDispatch();
  const carsData = useSelector((store) => store.cars);
  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <div className="flex-1">
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Cars available</h1>
        <p>Please select a model of a car</p>
      </div>
      <Carousel show={3}>
        {carsData.map((e) => (
          <div key={e.id} className="max-w bg-white h-full">
            <a href="#asd">
              <img
                className="p-8 rounded-t-lg"
                src={e.image}
                alt="product"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#asd">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {e.brand}
                  {' - '}
                  {e.model}
                </h5>
              </a>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $
                  {e.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
