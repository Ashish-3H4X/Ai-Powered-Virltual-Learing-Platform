import React, { useEffect } from 'react';
import Home from './pages/Home.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './pages/signUp.jsx';
import Login from './pages/login.jsx';
import { ToastContainer } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import Profile from './pages/Profile.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';
import axios from 'axios';

export const serverUrl = "http://localhost:8000";

const App = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/me`, { withCredentials: true });
        // dispatch to Redux here, e.g.
        // dispatch(setUser(res.data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={!userData ? <SignUp /> : <Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={userData ? <Profile /> : <Navigate to="/signup" />} />
        <Route path="/forget" element={!userData ? <ForgetPassword /> : <Navigate to="/signup" />} />
      </Routes>
    </>
  );
};

export default App;
