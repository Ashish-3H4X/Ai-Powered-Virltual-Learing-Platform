import uploadOnCloudinary from "../config/cloudinary"
import Course from "../model/courseModel"



export const createCourse = async (req , res) => {

  try {
    const {title, category} =req.body
     if(!title || !category){
      return res.status(400).json({message:"Titlecor Category is required "})
     }
     const course  = await Course.create({
      title,
      description,
      creator:req.userID
     })
     return res.status(201).json(course)
  } catch (error) {
     return res.status(500).json({message:`CreateCourse error ${error}`})
  }  
}
export const getPublishedCourses = async (req , res) => {
    try {
        const  courses = await Course.find({isPublished:true})
        if(!courses){
           return res.status(400).json({message:"Course not found "})
        }
        return res.status(201).json(courses)
    } catch (error) {
       return res.status(500).json({message:`Failed to find  is  Published course ${error}`})
    }
}


export const getCreatorCourses = async (req, res) => {
   try {
     const  userId = req.userId
     const courses = await Course.find({creator:userId})
      if(!courses){
           return res.status(400).json({message:"Course not found "})
        }
        return res.status(201).json(courses)
   } catch (error) {
     return res.status(500).json({message:`Failed to find  is   get creator course ${error}`})
   }
}

export const editCourse = async (req,res) => {
    try {
        const {courseId} = req.params;
        const {title , subTitle , description , category , level , price , isPublished } = req.body;
        let thumbnail
         if(req.file){
            thumbnail =await uploadOnCloudinary(req.file.path)
                }
        let course = await Course.findById(courseId)
        if(!course){
            return res.status(404).json({message:"Course not found"})
        }
        const updateData = {title , subTitle , description , category , level , price , isPublished ,thumbnail}

        course = await Course.findByIdAndUpdate(courseId , updateData , {new:true})
        return res.status(201).json(course)
    } catch (error) {
        return res.status(500).json({message:`Failed to update course ${error}`})
    }
  }

  export const getCourseById = async (req,res) => {
    try {
        const {courseId} = req.params
        let course = await Course.findById(courseId)
        if(!course){
            return res.status(404).json({message:"Course not found"})
        }
         return res.status(200).json(course)
        
    } catch (error) {
        return res.status(500).json({message:`Failed to get course ${error}`})
    }
  }

  
export const removeCourse = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    await course.deleteOne();
    return res.status(200).json({ message: "Course Removed Successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({message:`Failed to remove course ${error}`})
  }
};
