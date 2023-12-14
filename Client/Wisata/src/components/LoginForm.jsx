// LoginForm.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser,reset } from '../features/authSlice.js';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isError, isSuccess, isLoading, message} = useSelector(
    (state) => state.auth
    );

    useEffect(() => {
      if (user || isSuccess) {
        navigate('/dashboard');
      }
      dispatch(reset());
    }, [user, isSuccess, navigate, dispatch]);

    const Auth = async (e) => {
      e.preventDefault();
      dispatch(LoginUser({username, password}));
    };
  return (
    <div className="flex h-screen items-center justify-center bg-[#F1F1E8] pt-20">
      <div className="bg-bfdcae w-9/12 shadow-md rounded-3xl overflow-hidden flex">
        {/* Form Login */}
        <div className="w-1/2 p-8 ml-10 mr-10 py-20">
          <h2 className="text-2xl font-medium mb-10 text-center font-['Boogaloo'] tracking-[.1em]">Masuk</h2>
          <form onSubmit={Auth}>
            { isError && <p className="hash-text-centered">{message}</p>}
          {/* Input Username */}
          <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-black dark:text-green-500">Username</label>
          <input type="text" id="username" 
          onChange={(e) => setUsername(e.target.value)}
          value={username}  
          autoComplete="username"
          className="bg-green-50 border border-green-500 text-green-900 placeholder-gray-300  text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
          placeholder="Masukan Username"/>
          </div>
          {/* Input Password */}
          <div className="mb-5">
          <label htmlFor="pass" className="block mb-2 text-sm font-medium text-black dark:text-green-500">Kata Sandi*</label>
          <input type="password" 
          id="pass" 
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-green-50 border border-green-500 text-green-900 placeholder-gray-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" 
          placeholder="Masukan Kata Sandi"
          />
          </div>
          {/* Button Login */}
            <button type="submit" className="text-sm  bg-[#6FA385] font-bold text-[#222D3F] py-2 px-6 rounded-lg ml-40 mt-5">
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>

        {/* Gambar Illustrasi */}
        <div className="w-1/2 bg- flex items-center justify-center">
          {/* <img src={logokanan} alt="Illustration" className="object-cover w-full h-full rounded-l-[200px]"/> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;