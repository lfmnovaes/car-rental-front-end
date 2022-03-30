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
  const carSelectedFromDetails = parseInt(carId, 10);
  const a = () => {
    let c;
    if (selectedCar === undefined && carId !== undefined) {
      c = carSelectedFromDetails;
      return c;
    }
    c = selectedCar;
    return c;
  };
  const filteredCars = previousCar();
  const submitReserveToStore = () => {
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    const carToReserve = a();
    if (user.length > 0) {
      const currentUser = user[0];
      const reserve = {
        id: 1,
        date_start: sDate.toISOString().split('T')[0],
        date_end: eDate.toISOString().split('T')[0],
        user_id: currentUser.id,
        car_id: carToReserve,
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
      <h1 className="text-2xl font-bold text-center uppercase green-text m-7">
        create a new reservation
      </h1>
      <div className="mt-10 sm:mt-1">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form className="reserveForm" onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-12">
                      <h2
                        htmlFor="start_date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Start Date of the Reserve
                        <DatePicker
                          id="start_date"
                          name="start_date"
                          placeholder="Enter the start date (MM/DD/YYYY)"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </h2>
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                      <h2
                        htmlFor="end_date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        End Date of the Reserve
                        <DatePicker
                          id="end_date"
                          name="end_date"
                          placeholder="Enter the End date (MM/DD/YYYY)"
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </h2>
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                      <label
                        htmlFor="car"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Select the car you want to reserve
                        {filteredCars.length === 1 ? (
                          <select
                            id="car"
                            name="car"
                            autoComplete="car-name"
                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={carSelectedFromDetails}
                          >
                            <option value={filteredCars[0].id}>
                              {filteredCars[0].brand}
                              {' - '}
                              {filteredCars[0].model}
                            </option>
                          </select>
                        ) : (
                          <select
                            id="car"
                            name="car"
                            autoComplete="car-name"
                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={selectedCar}
                            onChange={(event) => setSelectedCar(event.target.value)}
                          >
                            <option value="default" hidden>
                              Select Car
                            </option>

                            {filteredCars.map((car) => (
                              <option key={car.id} value={car.id}>
                                {car.brand}
                                {' - '}
                                {car.model}
                              </option>
                            ))}
                          </select>
                        )}
                      </label>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-12">
                      <label
                        htmlFor="car"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Select the city
                        <select
                          id="city"
                          name="city"
                          autoComplete="city-name"
                          className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={selectedCity}
                          onChange={(event) => setSelectedCity(event.target.value)}
                        >
                          <option value="default" hidden>
                            Select City
                          </option>
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
                <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
