import React, { useState } from "react";
import RatingSVG from "../images/icon-star.svg";

function Rating({ onSubmit }) {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating) {
      onSubmit(selectedRating);
    }
  };

  return (
    <div className="bg-[#1f2127] rounded-2xl shadow-md p-8 w-80 text-center">
      <div className="text-orange-500 text-2xl bg-white w-10 h-10 flex justify-center items-center mb-4 rounded-full">
        <div className="">
          <img src={RatingSVG} alt="Thank You Icon" className="h-4 w-4" />
        </div>
      </div>
      <h2 className="text-white text-lg font-semibold mb-2">How did we do?</h2>
      <p className="text-gray-400 text-sm mb-6">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mb-6">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => handleRatingSelect(rating)}
            className={`w-10 h-10 rounded-full ${
              selectedRating === rating
                ? "bg-orange-500 text-white"
                : "bg-[#2a2d34] text-gray-400"
            } hover:bg-gray-700 hover:text-white`}
          >
            {rating}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className={`w-full py-2 rounded-full font-semibold ${
          selectedRating
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-gray-600 text-gray-400 cursor-not-allowed"
        }`}
        disabled={!selectedRating}
      >
        Submit
      </button>
    </div>
  );
}

export default Rating;
