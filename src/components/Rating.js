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
    <div className="bg-gradient-to-b from-[#222833] to-[#192027] rounded-2xl shadow-md p-6 w-[336px]">
      <div className="text-orange-500 text-2xl bg-[#272d38] w-10 h-10 flex justify-center items-center mb-6 rounded-full">
        <div>
          <img src={RatingSVG} alt="Thank You Icon" className="h-4 w-4" />
        </div>
      </div>
      <h2 className="text-white text-xl font-semibold mb-2">How did we do?</h2>
      <p className="text-gray-400 text-[12px] mt-4 mb-6">
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
                ? "bg-white"
                : "bg-[#2a2d34] text-gray-400"
            } hover:bg-orange-500 hover:text-white`}
          >
            {rating}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className={`text-transform: uppercase m-1 h-full w-full text-[13px] py-2 rounded-full font-semibold text-black hover:bg-white bg-orange-500 cursor-not-allowed"
        `}
        disabled={!selectedRating}
      >
        Submit
      </button>
    </div>
  );
}

export default Rating;
