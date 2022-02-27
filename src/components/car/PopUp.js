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
    axios.delete(`http://localhost:3001/api/cars/${id}`).then((response) => {
      console.log(response);
      navigate('/redirect');
    }, (error) => {
      console.log(error);
    });
  };
  return (
    <div className="shadow hidden absolute w-screen h-full bg-black bg-opacity-60">
      <div className="box flex gap-5 -mt-60 mx-auto ease-linear duration-500 items-center bg-white w-72 p-5 rounded">
        <div className="flex gap-5 items-center">
          <p className="text-2xl">&#9888;</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="normal-case text-gray-500">Are you sure to delete this car ?</p>
          <div className="flex gap-20">
            <button type="button" className="capitalize text-sm text-gray-400" onClick={() => { deleteCar(id); }}>yes</button>
            <button type="button" className="capitalize bg-blue-500 text-white text-sm py-1 px-2 rounded" onClick={() => { hidePopup(); }}>cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
