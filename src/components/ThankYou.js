import React from "react";
import ThankYouSVG from "../images/illustration-thank-you.svg";

function ThankYou({ rating }) {
  return (
    <div className="bg-[#1f2127] p-8 rounded-2xl shadow-md w-80 text-center">
      <div className="flex justify-center mb-3">
        <div className="p-4">
          <img src={ThankYouSVG} alt="Thank You Icon" className="h-28 w-30" />
        </div>
      </div>
      <div className="mb-2">
        <span className="text-gray-400 text-sm bg-gray-800 py-1 px-3 rounded-full">
          You selected {rating} out of 5
        </span>
      </div>
      <h2 className="text-white text-lg font-semibold mt-4">Thank you!</h2>
      <p className="text-gray-400 text-sm mt-2">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
