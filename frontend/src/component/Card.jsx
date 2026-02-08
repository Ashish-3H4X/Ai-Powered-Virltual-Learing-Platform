import React from "react";
import { FaStar } from "react-icons/fa";

export default function Card({ thumbnail, title, category, price }) {

  return (
    <div
      className="
        w-full
        min-h-[280px]
        bg-white
        rounded-xl
        border
        border-gray-200
        shadow-sm
        hover:shadow-lg
        transition
        overflow-hidden
        flex
        flex-col
      "
    >

      {/* Image */}
      <div className="h-[170px] w-full bg-gray-100 overflow-hidden">

        <img
          src={thumbnail || "/no-image.png"}
          alt={title}
          className="w-full h-full object-cover"
        />

      </div>


      {/* Content */}
      <div className="p-4 flex flex-col flex-1">

        {/* Category */}
        <span className="text-xs text-blue-600 mb-1 font-medium">
          {category || "General"}
        </span>


        {/* Title */}
        <h2 className="text-sm md:text-base font-semibold line-clamp-2 mb-2">
          {title || "Untitled Course"}
        </h2>


        {/* Bottom */}
        <div className="mt-auto flex justify-between items-center">

          <span className="text-green-600 font-bold text-sm">
            {price ? `₹${price}` : "Free"}
          </span>

          <span className="flex items-center gap-1 text-xs text-gray-500">
            <FaStar className="text-yellow-400" />
            4.8
          </span>

        </div>

      </div>

    </div>
  );
}
