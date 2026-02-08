import { createSlice } from "@reduxjs/toolkit";


const courseSlice = createSlice({
  name:"course",
  initialState:{
    courseData:[],
    creatorCourseData:null
  },
  reducers:{
   setCourseData:(state, action )=>{
    state.courseData = action.payload
   },
   setCreatorCourseData:(state, action )=>{
    state.creatorCourseData = action.payload
   }
  }
})

export const {setCourseData, setCreatorCourseData} = courseSlice.actions
export default courseSlice.reducer; 
