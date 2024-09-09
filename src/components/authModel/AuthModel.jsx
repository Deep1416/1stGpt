import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCoins } from '../../redux/addSlice';

axios.defaults.withCredentials = true;

const AuthModal = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    username: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isRobotChecked, setIsRobotChecked] = useState(false); // State for the checkbox

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = () => {
    const newErrors = {};
    if (isRegister) {
      if (!formData.firstname) newErrors.firstname = 'Please enter firstname';
      if (!formData.lastname) newErrors.lastname = 'Please enter lastname';
      if (!formData.username) newErrors.username = 'Please enter username';
      if (!isRobotChecked) newErrors.robot = 'Please confirm you are not a robot';
    }
    if (!formData.email) newErrors.email = 'Please enter email';
    if (!formData.password) newErrors.password = 'Please enter password';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setIsRobotChecked(!isRobotChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const token = await grecaptcha.enterprise.execute('6LevEikqAAAAAMA1Fss-QONO_4q0lJTBIa3gAGnE', { action: 'LOGIN' });

      const url = isRegister ? 'https://free.1stgpt.ai/v1/user/register' : 'https://free.1stgpt.ai/v1/user/login';
      const response = await axios.post(url, {
        ...formData,
        recaptchaToken: token,
      });

      if (!isRegister && response?.data) {
        dispatch(addCoins(response?.data?.data?.user?.credit));
        localStorage.setItem('token', response?.data?.data?.accessToken);
        localStorage.setItem('userInfo', JSON.stringify(response?.data?.data?.user));
        setTimeout(() => {
          navigate('/get');
        }, 300);
      }

      if (isRegister) {
        setIsRegister(false);
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        setErrors({ general: error.response.data.message });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://free.1stgpt.ai/auth/google';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
      <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">{isRegister ? 'Register' : 'Login'}</h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          {isRegister && (
            <>
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                  Firstname
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required={isRegister}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
              </div>
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                  Lastname
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required={isRegister}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
              </div>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  required={isRegister}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
              </div>
             
              
            </>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={loading}
            >
              {loading ? (
                <span>Loading...</span>
              ) : (
                <span>{isRegister ? 'Register' : 'Login'}</span>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              disabled={loading}
            >
              Cancel
            </button>
          </div>
          {errors.general && <p className="text-red-500 text-sm mt-1">{errors.general}</p>}
        </form>
        <div className="mt-4 text-center">
          {isRegister ? (
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                className="text-indigo-600 hover:text-indigo-900"
                onClick={() => setIsRegister(false)}
                disabled={loading}
              >
                Click here to login
              </button>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="robotCheck"
                  checked={isRobotChecked}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="robotCheck" className="ml-2 block text-sm text-gray-900">
                  I'm not a robot
                </label>
              </div>
              {errors.robot && <p className="text-red-500 text-sm mt-1">{errors.robot}</p>}
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                className="text-indigo-600 hover:text-indigo-900"
                onClick={() => setIsRegister(true)}
                disabled={loading}
              >
                Click here to register
              </button>
              
            </p>
          )}
        </div>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
