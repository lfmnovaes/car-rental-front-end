import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PopUp = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hidePopup = () => {
    document.querySelector('.shadow').style.display = '';
    document.querySelector('.box').style.marginTop = '-500px';
  };
  const deleteCar = (id) => {
    axios
      .delete(
        `https://final-capstone-project-lfmn.herokuapp.com/api/cars/${id}`,
      )
      .then(() => {
        navigate('/redirect');
      });
  };
  return (
    <div className="absolute hidden w-screen h-full bg-black shadow bg-opacity-60">
      <div className="flex items-center gap-5 p-5 mx-auto duration-500 ease-linear bg-white rounded box -mt-60 w-72">
        <div className="flex items-center gap-5">
          <p className="text-2xl">&#9888;</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 normal-case">
            Are you sure to delete this car ?
          </p>
          <div className="flex gap-20">
            <button
              type="button"
              className="text-sm text-gray-400 capitalize"
              onClick={() => {
                deleteCar(id);
              }}
            >
              Yes
            </button>
            <button
              type="button"
              className="px-2 py-1 text-sm text-white capitalize bg-blue-500 rounded"
              onClick={() => {
                hidePopup();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
