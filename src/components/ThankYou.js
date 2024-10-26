import React from "react";
import ThankYouSVG from "../images/illustration-thank-you.svg";

function ThankYou({ rating }) {
  return (
    <div className="bg-gradient-to-b from-[#222833] to-[#192027] rounded-2xl shadow-md p-6 w-[336px] text-center text-[13px]">
      <div className="flex justify-center mb-5 mt-3">
        <div>
          <img src={ThankYouSVG} alt="Thank You Icon" className="h-20 w-26" />
        </div>
      </div>
      <div className="m-8">
        <span className="text-orange-500 bg-[#232d42] text-[12px] py-2 px-5 rounded-full">
          You selected {rating} out of 5
        </span>
      </div>
      <h2 className="text-white text-lg font-semibold mt-2">Thank you!</h2>
      <p className="text-gray-400 mb-4 mt-2 text-[12px]">
        We appreciate you taking the time to give a rating. If you ever needmore
        support, don’t hesitate to get in touch!.
      </p>
    </div>
  );
}

export default ThankYou;
