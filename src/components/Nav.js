import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const show = (localStorage.getItem('admin') === 'true') ? 'flex' : 'hidden';
  const clearClick = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };
  const showPopup = () => {
    const menu = document.querySelector('.pop-up');
    const value = menu.style.display;
    if (value === '') {
      menu.style.display = 'flex';
    } else { menu.style.display = ''; }
  };
  return (
    <>
      <div className="md:inline-flex flex-col w-64 h-screen hidden px-4 py-8 overflow-y-auto border-r">
        <h2 className="text-3xl font-semibold text-center green-text">Logo</h2>
        <div className="flex flex-col justify-between mt-6">
          <aside>
            <ul>
              <li>
                <a
                  className={`flex items-center px-4 py-2 text-gray-700 rounded-md" ${
                    location.pathname === '/cars'
                      ? 'green-bg rounded-md'
                      : 'hover:bg-gray-200 rounded-md'
                  }`}
                  href="/cars"
                >
                  <span className="mx-4 font-medium">Cars</span>
                </a>
              </li>
              <li>
                <a
                  className={`add-car flex items-center ${show} px-4 py-2 mt-5 text-gray-700" ${
                    location.pathname === '/car/new'
                      ? 'green-bg rounded-md'
                      : 'hover:bg-gray-200 rounded-md'
                  }`}
                  href="/car/new"
                >
                  <span className="mx-4 font-medium">Add Car</span>
                </a>
              </li>
              <li>
                <a
                  className={`flex items-center px-4 py-2 mt-5 text-gray-700" ${
                    location.pathname === '/reserve'
                      ? 'green-bg rounded-md'
                      : 'hover:bg-gray-200 rounded-md'
                  }`}
                  href="/reserve"
                >
                  <span className="mx-4 font-medium">Reserve</span>
                </a>
              </li>
              <li>
                <a
                  className={`flex items-center px-4 py-2 mt-5 text-gray-700" ${
                    location.pathname === '/reservations'
                      ? 'green-bg rounded-md'
                      : 'hover:bg-gray-200 rounded-md'
                  }`}
                  href="/reservations"
                >
                  <span className="mx-4 font-medium">My Reservations</span>
                </a>
              </li>
            </ul>
            <div className="mt-10">
              <button
                type="button"
                onClick={clearClick}
                href="/"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log Out
              </button>
            </div>
          </aside>
        </div>
      </div>
      <div className="lg:hidden bg-white w-100 py-5 px-2 shadow-md">
        <div className="w-5">
          <button type="button" className="text-lg green-text" onClick={showPopup}>&#9776;</button>
        </div>
      </div>
      <div className="pop-up hidden flex flex-col items-start absolute z-10 py-5 px-5 bg-transparent backdrop-blur-lg shadow-md h-full w-full">
        <a href="/cars" className="pb-3 text-lg text-gray-600">Cars</a>
        <a href="/car/new" className={`add-car-pop ${show} pb-3 text-lg text-gray-600`}>Add Car</a>
        <a href="/reserve" className="pb-3 text-lg text-gray-600">Reserve</a>
        <a href="/reservations" className="pb-3 text-lg text-gray-600">Reservations</a>
        <button
          type="button"
          onClick={clearClick}
          href="/"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent
          text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-auto"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Nav;
