import express from "express"; 
import isAuth from "../middleware/isAuth.js";
import upload from "../middleware/multer.js";
import { createCourse ,getPublishedCourses , getCreatorCourses , editCourse , getCourseById , removeCourse  } from "../controller/courseController.js";

const courseRouter = express.Router();

courseRouter.post("/create", isAuth, createCourse); 
courseRouter.get("/getpublished", getPublishedCourses);
courseRouter.get("/getcreator", isAuth, getCreatorCourses);
courseRouter.post("/editcourse/:courseId", isAuth, upload.single("thumbnail"), editCourse);
courseRouter.get("/getcourse/:courseId", isAuth, getCourseById);
courseRouter.delete("/remove/:courseId", isAuth, removeCourse);

export default courseRouter;
