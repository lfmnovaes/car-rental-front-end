import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations, removeReserveAPI } from '../redux/reducers/reservationsReducer';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations);
  const currentReservations = reservations.filter((reservation) => (reservation.user_id === 1));
  //   const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, []);
  const RentedCar1 = {
    id: 2,
    brand: 'Nissan',
    model: 'GTR',
    year: 2012,
    image: 'dsads',
    reserved: true,
    price: '100',
  };
  const deleteReserveFromStore = (reserveId) => {
    dispatch(removeReserveAPI(reserveId));
  };
  const reservedCar = (r) => {
    const cars = [RentedCar1];
    let c = {};
    cars.map((car) => {
      if (r.car_id === car.id) {
        c = car;
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
    <div className="flex flex-col ml-10 mr-10 lg:w-full md:w-4/5 sm:w-4/5 sm:self-center md:self-baseline">
      <h1 className="text-center uppercase text-2xl font-bold text-blue-800 m-7">My Reservations</h1>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Model
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Start
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      End
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                            <div className="text-sm font-medium text-gray-900">{reservedCar(r).brand}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{reservedCar(r).model}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{r.date_start}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{r.date_end}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {isActive(r) === true
                          ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                          : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/reservations" className="text-indigo-600 hover:text-indigo-900" onClick={() => deleteReserveFromStore(r.id)}>
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
