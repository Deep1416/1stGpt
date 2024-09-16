import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCoins } from '../../redux/addSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleSubmitold = async (e) => {
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

      if (response.data && !isRegister) {
        dispatch(addCoins(response?.data?.data?.user?.credit));
        localStorage.setItem('token', response?.data?.data?.accessToken);
        localStorage.setItem('userInfo', JSON.stringify(response?.data?.data?.user));
        toast.success('Login successful!');
        setTimeout(() => {
          navigate('/get');
        }, 300);
      }

      if (isRegister) {
        toast.success('Registration successful! Please log in.');
        setIsRegister(false);
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        const errorMsg = error.response.data.message;
        if (errorMsg.includes('Username already exists')) {
          toast.error('Username already exists. Please choose another.');
        } else {
          toast.error(errorMsg);
        }
        setErrors({ general: errorMsg });
      }
    } finally {
      setLoading(false);
    }
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
     
  
      const url = isRegister ? 'https://free.1stgpt.ai/v1/user/register' : 'https://free.1stgpt.ai/v1/user/login';
      const response = await axios.post(url, formData);
  
      if (response.data && !isRegister) {
        dispatch(addCoins(response?.data?.data?.user?.credit));
        localStorage.setItem('token', response?.data?.data?.accessToken);
        localStorage.setItem('userInfo', JSON.stringify(response?.data?.data?.user));
        toast.success('Login successful!');
        setTimeout(() => {
          navigate('/get');
        }, 300);
      }
  
      if (isRegister) {
        toast.success('Registration successful! Please log in.');
        setIsRegister(false);
      }
    } catch (error) {
      console.error(error);
  
      // Check for duplicate key error from MongoDB (E11000)
      if (error.response && error.response.data) {
        const errorMsg = error.response.data.error;
        if (errorMsg.includes('E11000') && errorMsg.includes('username')) {
          toast.error('Username already exists. Please choose another username.');
        } else {
          toast.error(errorMsg);
        }
        setErrors({ general: errorMsg });
      }
    } finally {
      setLoading(false);
    }
  };
  

  const handleGoogleLogin = async () => {
    try {
      const res = await fetch('https://free.1stgpt.ai/auth/google');
      const result = res.json();
      console.log('google auth ----------------', result);
    } catch (error) {
      console.log('google auth error--------------', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
      <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-auto">
        <ToastContainer /> {/* Toast container for notifications */}
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
            {errors.robot && <p className="text-red-500 text-sm mt-1">{errors.robot}</p>}
          </div>
          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              {loading ? 'Processing...' : isRegister ? 'Register' : 'Login'}
            </button>
          </div>
          <div className="text-sm text-center mt-4">
            {isRegister ? 'Already have an account?' : "Don't have an account?"}
            <button
              type="button"
              className="text-indigo-600 hover:text-indigo-500 ml-1"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? 'Login' : 'Register'}
            </button>
          </div>
        </form>
        <div className="mt-4">
          <button
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
