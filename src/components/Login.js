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
      <div className="w-80 mx-auto">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
                <input
                  id="username"
                  name="username"
                  type="name"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none rounded relative block w-full px-3 py-2 mt-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your Username"
                />
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white green-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Login;
