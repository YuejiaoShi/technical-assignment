import React from "react";
import ThankYouSVG from "../images/illustration-thank-you.svg";

function ThankYou({ rating }) {
  return (
    <div className="bg-gradient-to-b from-[#222833] to-[#192027] rounded-2xl shadow-md p-6 w-[calc(100%-32px)] max-w-[385px] mx-auto text-center text-base">
      <div className="flex justify-center mb-5 mt-3">
        <div>
          <img src={ThankYouSVG} alt="Thank You Icon" className="h-20 w-26" />
        </div>
      </div>
      <div className="m-8">
        <span className="text-orangeCustom bg-[#232d42] text-base py-2 px-5 rounded-full">
          You selected {rating} out of 5
        </span>
      </div>
      <h2 className="text-white text-xl font-semibold mt-2">Thank you!</h2>
      <p className="text-lightGrey mb-4 mt-2 text-base">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
