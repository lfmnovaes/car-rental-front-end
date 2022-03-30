import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/reducers/usersReducer';

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userVerification = () => {
    dispatch(getUser(username));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userVerification();
    setTimeout(() => {
      const key = localStorage.getItem('token');
      if (key !== null) {
        navigate('/cars');
      } else {
        setUsername('');
      }
    }, 500);
  };

  return (
    <div className="mx-auto mt-20">
      <div className="mx-auto w-80">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
                <input
                  id="username"
                  name="username"
                  type="name"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="relative block w-full px-3 py-2 mt-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your Username"
                />
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md group green-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <br />
        <span>For testing purposes, use &apos;Maria&apos; or &apos;John Doe&apos;</span>
      </div>
    </div>
  );
};

export default Login;
