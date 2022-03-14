import React from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();
  const redirect = () => {
    setTimeout(() => {
      navigate('/cars');
    }, 2000);
  };
  return (
    <>
      <p>Car Deleted successfully, redirecting...</p>
      {(function a() {
        redirect();
      }())}
    </>
  );
};

export default Redirect;
