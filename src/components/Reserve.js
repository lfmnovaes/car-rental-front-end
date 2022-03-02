import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import { createReserve } from '../redux/reducers/reservationsReducer';
import { getUser } from '../redux/reducers/usersReducer';
import { fetchCities } from '../redux/reducers/citiesReducer';
import { fetchCars } from '../redux/reducers/carReducer';
import './Reserve.css';
import 'react-datepicker/dist/react-datepicker.css';

const Reserve = () => {
  const { carId } = useParams();
  const cars = useSelector((state) => state.cars);
  const user = useSelector((state) => state.users);
  const cities = useSelector((state) => state.cities);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedCar, setSelectedCar] = useState();
  const [selectedCity, setSelectedCity] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storageUserName = localStorage.getItem('userName');
    dispatch(getUser(storageUserName));
    dispatch(fetchCities());
    dispatch(fetchCars());
  }, []);

  let optionCars = [];
  const previousCar = () => {
    if (carId !== undefined) {
      optionCars = cars.filter((car) => car.id === parseInt(carId, 10));
      return optionCars;
    }
    optionCars = cars.filter((car) => car.reserved === false);
    return optionCars;
  };
  const filteredCars = previousCar();
  const submitReserveToStore = () => {
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    if (user.length > 0) {
      const currentUser = user[0];
      const reserve = {
        id: 1,
        date_start: sDate.toISOString().split('T')[0],
        date_end: eDate.toISOString().split('T')[0],
        user_id: currentUser.id,
        car_id: selectedCar,
        city_id: selectedCity,
      };
      dispatch(createReserve(reserve));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitReserveToStore();
    navigate('/reservations');
  };
  return (
    <div className="flex flex-col form-container lg:w-4/5">
      <h1 className="text-2xl font-bold green-text m-7 text-center uppercase">create a new reservation</h1>
      <div className="mt-10 sm:mt-1">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form className="reserveForm" onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-12">
                      <h2 htmlFor="start_date" className="block text-sm font-medium text-gray-700">
                        Start Date of the Reserve
                        <DatePicker id="start_date" name="start_date" placeholder="Enter the start date (MM/DD/YYYY)" selected={startDate} onChange={(date) => setStartDate(date)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </h2>
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                      <h2 htmlFor="end_date" className="block text-sm font-medium text-gray-700">
                        End Date of the Reserve
                        <DatePicker id="end_date" name="end_date" placeholder="Enter the End date (MM/DD/YYYY)" selected={endDate} onChange={(date) => setEndDate(date)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </h2>
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                      <label htmlFor="car" className="block text-sm font-medium text-gray-700">
                        Select the car you want to reserve
                        <select
                          id="car"
                          name="car"
                          autoComplete="car-name"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={selectedCar}
                          onChange={(event) => setSelectedCar(event.target.value)}
                        >
                          <option value="default" hidden>Select Car</option>
                          {filteredCars.map((car) => (
                            <option key={car.id} value={car.id}>
                              {car.brand}
                              {' '}
                              -
                              {' '}
                              {car.model}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-12">
                      <label htmlFor="car" className="block text-sm font-medium text-gray-700">
                        Select the city
                        <select
                          id="city"
                          name="city"
                          autoComplete="city-name"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={selectedCity}
                          onChange={(event) => setSelectedCity(event.target.value)}
                        >
                          <option value="default" hidden>Select City</option>
                          {cities.map((city) => (
                            <option key={city.id} value={city.id}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
