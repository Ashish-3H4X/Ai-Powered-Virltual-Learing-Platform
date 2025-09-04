import React, { useEffect } from 'react';
import { serverUrl } from '../App';
import axios from "axios"
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
const GetCurrentUser = () => {
useEffect(()=>{
  const fetchUser = async ()=>{
    const dispatch = useDispatch()

    try {
       const result = await axios.get(serverUrl + "/api/auth/getcurrentuser" ,{withCredentials:true})
       dispatch(setUserData(result.data))
    } catch (error) {
       console.log(error);
       dispatch(setUserData(null))
    }
  }
  fetchUser()
},[])
}

export default GetCurrentUser;
