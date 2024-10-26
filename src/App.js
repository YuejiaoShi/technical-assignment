import React, { useState } from "react";
import Rating from "./components/Rating.js";
import ThankYou from "./components/ThankYou.js";

function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingSubmit = (rating) => {
    setSelectedRating(rating);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#141519] min-h-screen flex items-center justify-center">
      {!submitted ? (
        <Rating onSubmit={handleRatingSubmit} />
      ) : (
        <ThankYou rating={selectedRating} />
      )}
    </div>
  );
}

export default App;
