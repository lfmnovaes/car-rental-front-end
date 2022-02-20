import React from 'react';

const Nav = () => (
  <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
    <h2 className="text-3xl font-semibold text-center text-blue-800">Logo</h2>
    <div className="flex flex-col justify-between mt-6">
      <aside>
        <ul>
          <li>
            <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md " href="/">
              <span className="mx-4 font-medium">Cars</span>
            </a>
          </li>
          <li>
            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="/home">
              <span className="mx-4 font-medium">Reserve</span>
            </a>
          </li>
          <li>
            <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="/reservations">
              <span className="mx-4 font-medium">My Reservations</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </div>
);

export default Nav;
