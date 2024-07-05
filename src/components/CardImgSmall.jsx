import React from "react";
import armo from "../assets/armo.jpg";
const CardImgSmall = ({ title }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${armo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "170px",
      }}
      className="bg-primary-bg flex flex-col items-center justify-center py-9 rounded-lg shadow-md"
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
          borderWidth: 1,
          borderColor: "white",
          padding: "10px 20px", // Adjusted padding for better spacing
          borderRadius: "10px", // Rounded corners
          display: "inline-block", // Ensure the div wraps tightly around the text
          color: "white", // Text color
          textAlign: "center", // Center align the text
        }}
        className="italic text-primary-txt mx-5 mb-2 font-bold"
      >
        {title}
      </div>
    </div>
  );
};

export default CardImgSmall;
