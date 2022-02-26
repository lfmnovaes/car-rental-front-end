import React from 'react';

const PopUp = () => (
  <div className="absolute w-screen h-full bg-black bg-opacity-60">
    <div className="bg-white w-2/3 mt-20 m-auto p-5 rounded">
      <p>are you sure to delete this car ?</p>
      <div>
        <button type="button">yes</button>
        <button type="button">cancel</button>
      </div>
    </div>
  </div>
);

export default PopUp;
