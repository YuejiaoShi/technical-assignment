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
    <div className="bg-gradient-to-b from-[#222833] to-[#192027] rounded-2xl shadow-md p-6 w-[calc(100%-32px)] max-w-[385px] mx-auto">
      <div className="text-orangeCustom text-2xl bg-[#2b313d] w-10 h-10 flex justify-center items-center mb-6 rounded-full">
        <div>
          <img src={RatingSVG} alt="Rating Icon" className="h-4 w-4" />
        </div>
      </div>
      <h2 className="text-white text-xl font-semibold mb-2">How did we do?</h2>
      <p className="text-lightGrey text-base mt-4 mb-6">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mb-6 text-sm">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => handleRatingSelect(rating)}
            className={`w-10 h-10 rounded-full ${
              selectedRating === rating
                ? "bg-white"
                : "bg-[#2b313d] text-lightGrey"
            } hover:bg-orangeCustom hover:text-white font-bold text-center`}
          >
            {rating}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className={`text-transform: uppercase m-1 h-full w-full text-base text-center py-2 rounded-full font-semibold text-black bg-orangeCustom hover:bg-white cursor-${
          selectedRating ? "pointer" : "not-allowed"
        }`}
        disabled={!selectedRating}
      >
        Submit
      </button>
    </div>
  );
}

export default Rating;
