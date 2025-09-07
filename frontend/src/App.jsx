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
import EditProfile from './pages/EditProfile.jsx';

export const serverUrl = "http://localhost:8000";

const App = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api/me`, { withCredentials: true });
        // ✅ dispatch user data to Redux here
        // dispatch(setUser(res.data));
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={!userData ? <SignUp /> : <Navigate to="/" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/forget"
          element={!userData ? <ForgetPassword /> : <Navigate to="/signup" />}
        />
        <Route path="/profileedit" element={<EditProfile />} />
      </Routes>
    </>
  );
};

export default App;
