import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10 ">
      <div className=" bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full relative ">
        <FaArrowCircleLeft
          className="absolute top-[8%] left-[5%] w-[22px] h-[22px] cursor-pointer"
          onClick={() => navigate("/profile")}
        />
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 ">
          {" "}
          Edit Profile
        </h2>
        <form action="" className="space-y-5">
          <div className="flex flex-col items-center text-center ">
            {userData?.photoUrl ? (
              <img
                src={userData.photoUrl}
                className="w-20 h-20 rounded-full object-cover border-4 border-black"
                alt=""
              />
            ) : (
              <div className="w-20 h-20 rounded-full flex items-center text-white justify-center text-[30px] border-2 bg-black border-white">
                {userData?.name ? userData.name.slice(0, 1).toUpperCase() : "?"}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="image"
              className="text-sm  font-medium text-gray-700 "
            >
              Select Avatar :
            </label>
            <input
              type="file"
              id="image"
              name="photoUrl"
              placeholder="PhotoUrl"
              accept="image/*"
              className=" w-full px-4 py-2 border rounded-md text-sm "
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-sm  font-medium text-gray-700 "
            >
              UserName :
            </label>
            <input
              type="text"
              id="name"
              placeholder={userData.name}
              className=" w-full px-4 py-2 border rounded-md text-sm "
            />
          </div>
            <div>
            <label
              
              className="text-sm  font-medium text-gray-700 "
            >
              Email :
            </label>
            <input
              readOnly
              disabled
              placeholder={userData.email}
              className=" w-full px-4 py-2 border rounded-md text-sm "
            />
          </div>
           <div>
            <label
              
              className="text-sm  font-medium text-gray-700 "
            >
              Bio : 
            </label>
            <textarea
             placeholder=" Tell us about yourself"
              className=" w-full mt-1 px-4 py-2 border border-gray-300   rounded-md resize-none focus:ring-0 focus:ring-[black]  "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
