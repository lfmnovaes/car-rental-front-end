import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const mssg = (mssg, color) => {
  const e = document.querySelector('.mssg');
  e.innerText = mssg;
  e.style.color = color;
  setTimeout(() => {
    e.innerText = '';
  }, 3000);
};
const clearFields = () => {
  document.querySelector('#brand').value = '';
  document.querySelector('#model').value = '';
  document.querySelector('#year').value = '';
  document.querySelector('#image').value = '';
  document.querySelector('#price').value = '';
};
const CarNew = () => {
  const state = useSelector((state) => state.cars);
  const sendData = () => {
    const brand = document.querySelector('#brand');
    const model = document.querySelector('#model');
    const year = document.querySelector('#year');
    const image = document.querySelector('#image');
    const reserved = document.querySelector('#reserved');
    const price = document.querySelector('#price');
    const newCar = {
      id: state.length + 1,
      brand: brand.value,
      model: model.value,
      year: year.value,
      image: image.value,
      reserved: reserved.value,
      price: price.value,
    };

    const elements = Object.values(newCar);
    const validate = elements.filter((e) => e === '');
    if (validate.length < 1) {
      axios.post('https://final-capstone-project-lfmn.herokuapp.com/api/cars', {
        id: newCar.id,
        brand: newCar.brand,
        model: newCar.model,
        year: newCar.year,
        image: newCar.image,
        reserved: newCar.reserved,
        price: newCar.price,
      });
      clearFields();
      mssg('Car saved', 'green');
    } else {
      mssg('Wrong data or empty input detected, try again !', 'red');
    }
  };

  return (
    <>
      <div className="mt-10 sm:mt-0 md:ml-20 lg:mx-auto">
        <div className="mt-5 md:mt-0 md:col-span-2 w-96">
          <div className="mt-10 text-xl font-bold text-center w-100">
            <h2 className="green-text">ADD NEW CAR</h2>
          </div>
          <form>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Brand
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      autoComplete="brand"
                      className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </label>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="model"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Model
                    <input
                      type="text"
                      name="model"
                      id="model"
                      autoComplete="model"
                      className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </label>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="year"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Year
                    <input
                      type="text"
                      name="year"
                      id="year"
                      autoComplete="year"
                      className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </label>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Image url
                    <input
                      type="text"
                      name="image"
                      id="image"
                      autoComplete="image"
                      className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </label>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price
                    <input
                      type="number"
                      name="price"
                      id="price"
                      autoComplete="price"
                      className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </label>
                </div>
              </div>
              <input id="reserved" defaultValue="false" hidden />
              <div className="grid items-center grid-cols-3">
                <p className="col-span-2 text-center mssg text-m xs:col-span-3" />
                <div className="px-4 py-3 text-right bg-gray-50 sm:px-6 xs:col-span-3">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm green-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => {
                      sendData();
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
};

export default CarNew;
