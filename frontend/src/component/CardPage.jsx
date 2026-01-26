import React, { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "../App";
import { useNavigate } from "react-router-dom";
import Card from "../component/Card.jsx"

function CardPage() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllCourses = async () => {
    try {
      const result = await axios.get(
        serverUrl + "/api/course/getpublished"
      );
      setCourses(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center ">
      <h1 className="mt-30 text-center text-3xl  font-semibold  bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
        Our Popular Courses
      </h1>

      <span className="mt-2 text-center text-gray-600 px-4">
        Explore top-rated courses designed to boost your skills, enhance careers,
        and unlock opportunities in tech, AI, business, and beyond.
      </span>

      <div className="w-full min-h-screen flex flex-wrap items-center justify-center gap-10">
        {loading ? (
          <p>Loading courses...</p>
        ) : (
          courses.map((course, index) => (
            <Card
              key={index}
              thumbnail={course.thumbnail}
              title={course.title}
              category={course.category}
             />
          ))
        )}
      </div>
    </div>
  );
}

export default CardPage;
