import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchReservations,
  removeReserveAPI,
} from '../redux/reducers/reservationsReducer';
import { getUser } from '../redux/reducers/usersReducer';
import { fetchCities } from '../redux/reducers/citiesReducer';
import { fetchCars } from '../redux/reducers/carReducer';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations);
  const user = useSelector((state) => state.users);
  const cities = useSelector((state) => state.cities);
  const cars = useSelector((state) => state.cars);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
    const storageUserName = localStorage.getItem('userName');
    dispatch(getUser(storageUserName));
    dispatch(fetchCities());
    dispatch(fetchCars());
  }, []);

  let currentReservations;
  const filterReservations = (currentUser) => reservations.filter(
    (reservation) => reservation.user_id === currentUser.id,
  );

  if (user.length > 0) {
    const currentUser = user[0];
    currentReservations = filterReservations(currentUser);
  } else {
    currentReservations = [];
  }
  const deleteReserveFromStore = (reserveId) => {
    dispatch(removeReserveAPI(reserveId));
  };
  const reservedCar = (r) => {
    let c = {};
    cars.map((car) => {
      if (r.car_id === car.id) {
        c = car;
      }
      return 1;
    });
    return c;
  };
  const reservedCity = (r) => {
    let c = {};
    cities.map((city) => {
      if (r.city_id === city.id) {
        c = city;
      }
      return 1;
    });
    return c;
  };
  const isActive = (r) => {
    const endDate = new Date(r.date_end);
    const actualDate = new Date();
    if (endDate.getTime() < actualDate.getTime()) {
      return false;
    }
    return true;
  };
  return (
    <div className="flex flex-col lg:ml-10 lg:mr-0 sm:ml-4 sm:mr-4 lg:w-4/5 md:w-4/5 sm:w-auto sm:self-center md:self-baseline grey-bg">
      <h1 className="text-2xl font-bold text-center uppercase green-text m-7">
        My Reservations
      </h1>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Model
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Start
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      End
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      City
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentReservations.map((r) => (
                    <tr key={r.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{r.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {reservedCar(r).brand}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {reservedCar(r).model}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {r.date_start}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {r.date_end}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {reservedCity(r).name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {isActive(r) === true ? (
                          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-red-800 bg-red-100 rounded-full">
                            Inactive
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="/reservations"
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => deleteReserveFromStore(r.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
